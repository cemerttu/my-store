import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 49.99,
    image: "https://picsum.photos/seed/p1/400/300"
  },
  {
    id: 2,
    name: "Product 2",
    price: 59.99,
    image: "https://picsum.photos/seed/p2/400/300"
  },
  {
    id: 3,
    name: "Product 3",
    price: 79.99,
    image: "https://picsum.photos/seed/p3/400/300"
  }
];

const Home = () => (
  <div>
    {/* Hero Section / Front Face */}
    <div className="bg-light text-center py-5">
      <img
        src="https://picsum.photos/seed/banner/1200/400"
        alt="Welcome Banner"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <h1 className="fw-bold">Welcome to MyStore</h1>
      <p className="lead">Shop the best products at affordable prices</p>
      <a href="/shop" className="btn btn-primary btn-lg">Shop Now</a>
    </div>

    {/* Featured Products */}
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row g-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
