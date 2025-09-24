import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Headphones",
    category: "Electronics",
    rating: 4.5,
    description: "High-quality wireless headphones with excellent sound quality."
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
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Welcome to TechNest</h1>
            <p className="lead mb-4">Discover amazing tech products at unbeatable prices. Quality and satisfaction guaranteed.</p>
            <Link to="/shop" className="btn btn-light btn-lg">Shop Now</Link>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="https://via.placeholder.com/500x400/ffffff/007bff?text=TechNest" 
              alt="TechNest Hero" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <div className="p-4">
              <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
              <h5>Free Shipping</h5>
              <p className="text-muted">Free shipping on orders over $50</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <div className="p-4">
              <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
              <h5>Secure Payment</h5>
              <p className="text-muted">100% secure payment processing</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <div className="p-4">
              <i className="fas fa-headset fa-3x text-info mb-3"></i>
              <h5>24/7 Support</h5>
              <p className="text-muted">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Featured Products</h2>
          <p className="lead text-muted">Discover our most popular items</p>
        </div>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link to="/shop" className="btn btn-outline-primary btn-lg">
            View All Products <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;