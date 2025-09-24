import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Headphones",
    category: "Electronics",
    rating: 4.5,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 59.99,
    image: "https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch",
    category: "Electronics",
    rating: 4.3,
    description: "Advanced smartwatch with fitness tracking features."
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "https://via.placeholder.com/300x300/dc3545/ffffff?text=Backpack",
    category: "Accessories",
    rating: 4.7,
    description: "Durable and stylish backpack for professionals."
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "https://via.placeholder.com/300x300/ffc107/000000?text=Speaker",
    category: "Electronics",
    rating: 4.2,
    description: "Powerful Bluetooth speaker with amazing sound quality."
  },
  {
    id: 5,
    name: "Phone Case",
    price: 29.99,
    image: "https://via.placeholder.com/300x300/6f42c1/ffffff?text=Phone+Case",
    category: "Accessories",
    rating: 4.0,
    description: "Protective phone case with stylish design."
  },
  {
    id: 6,
    name: "USB-C Cable",
    price: 19.99,
    image: "https://via.placeholder.com/300x300/20c997/ffffff?text=USB+Cable",
    category: "Accessories",
    rating: 4.1,
    description: "Fast charging USB-C cable for all your devices."
  }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["All", ...new Set(allProducts.map(product => product.category))];

  const filteredProducts = allProducts
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <h1 className="fw-bold">Shop All Products</h1>
          <p className="text-muted">Found {filteredProducts.length} products</p>
        </div>
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h3 className="text-muted">No products found</h3>
            <p className="text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;