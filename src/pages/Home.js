import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 49.99, image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: 59.99, image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: 79.99, image: "/images/product3.jpg" },
];

const Home = () => (
  <div className="container my-5">
    <h1 className="text-center mb-4">Featured Products</h1>
    <div className="row g-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Home;
