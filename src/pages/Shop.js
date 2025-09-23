import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 4, name: "Product 4", price: 89.99, image: "/images/product4.jpg" },
  { id: 5, name: "Product 5", price: 99.99, image: "/images/product5.jpg" },
  { id: 6, name: "Product 6", price: 109.99, image: "/images/product6.jpg" },
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
