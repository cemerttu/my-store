import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => (
  <>
    <section className="hero-section">
      <div className="hero-overlay text-white">
        <h1>Welcome to MyStore</h1>
        <p className="lead">Your one-stop shop for amazing products</p>
        <a href="/shop" className="btn btn-light btn-lg">Shop Now</a>
      </div>
    </section>
    <FeaturedProducts />
  </>
);
export default Home;
