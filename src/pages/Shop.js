import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 1200, image: "/Assets/collection-men.jpg" },
  { id: 2, name: "Product 2", price: 2000, image: "/images/product5.jpg" },
  { id: 3, name: "Product 3", price: 250, image: "/images/product6.jpg" },
  { id: 4, name: "Product 4", price: 10000, image: "/images/product4.jpg" },
  { id: 5, name: "Product 5", price: 4244, image: "/images/product5.jpg" },
  { id: 6, name: "Product 6", price: 5839, image: "/images/product6.jpg" },
  { id: 7, name: "Product 7", price: 5939, image: "/images/product4.jpg" },
  { id: 8, name: "Product 8", price: 5949, image: "/images/product5.jpg" },
  { id: 9, name: "Product 9", price: 6486, image: "/images/product6.jpg" },
  { id: 10, name: "Product 10", price: 4010, image: "/images/product4.jpg" },
  { id: 11, name: "Product 11", price: 5949, image: "/images/product5.jpg" },
  { id: 12, name: "Product 12", price: 6940, image: "/images/product6.jpg" },
];

const Shop = () => (
  <div className="container my-5">
    <h1 className="text-center mb-4">Shop All Products</h1>
    <div className="row g-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Shop;
