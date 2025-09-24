import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Headphones",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 59.99,
    image: "https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "https://via.placeholder.com/300x300/dc3545/ffffff?text=Backpack",
    category: "Accessories",
  },
];

const Home = () => (
  <div>
    <section className="why-choose-hero">
      <img
        src="https://via.placeholder.com/220x220?text=MyStore+Hero"
        alt="Why Choose MyStore?"
      />
      <div className="why-choose-hero-title">Why Choose MyStore?</div>
    </section>
    <div className="container my-5">
      <div className="text-center mb-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="p-4">
              <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
              <h5>Free Shipping</h5>
              <p className="text-muted">Free shipping on orders over $50</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4">
              <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
              <h5>Secure Payment</h5>
              <p className="text-muted">100% secure payment processing</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4">
              <i className="fas fa-headset fa-3x text-info mb-3"></i>
              <h5>24/7 Support</h5>
              <p className="text-muted">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center mb-4">Best Sellers</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
