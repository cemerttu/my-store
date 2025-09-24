import React from "react";
import { useParams, Link } from "react-router-dom";

const data = {
  1: { 
    name: "Wireless Bluetooth Headphones", 
    price: 49.99, 
    desc: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals.", 
    image: "https://via.placeholder.com/500x500/007bff/ffffff?text=Headphones",
    features: ["Noise Cancellation", "30hr Battery", "Quick Charge", "Comfort Fit"],
    category: "Electronics",
    rating: 4.5
  },
  2: { 
    name: "Smart Fitness Watch", 
    price: 59.99, 
    desc: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.", 
    image: "https://via.placeholder.com/500x500/28a745/ffffff?text=Smart+Watch",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"],
    category: "Electronics",
    rating: 4.3
  },
  3: { 
    name: "Professional Laptop Backpack", 
    price: 79.99, 
    desc: "Durable and stylish backpack with dedicated laptop compartment and multiple organizational pockets.", 
    image: "https://via.placeholder.com/500x500/dc3545/ffffff?text=Backpack",
    features: ["Laptop Compartment", "Water Resistant", "USB Charging Port", "Ergonomic Design"],
    category: "Accessories",
    rating: 4.7
  },
};

const Product = () => {
  const { id } = useParams();
  const p = data[id];
  if (!p) return <div className="container my-5"><h2>Product Not Found</h2></div>;
  
  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
          <li className="breadcrumb-item active">{p.name}</li>
        </ol>
      </nav>
      
      <div className="row">
        <div className="col-md-6">
          <img src={p.image} alt={p.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{p.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2">
              {"★".repeat(Math.floor(p.rating))}☆
              <span className="text-muted ms-2">({p.rating})</span>
            </div>
            <span className="badge bg-secondary ms-3">{p.category}</span>
          </div>
          <h3 className="text-primary mb-3">${p.price}</h3>
          <p className="lead">{p.desc}</p>
          
          <div className="mb-4">
            <h6>Features:</h6>
            <div className="row">
              {p.features.map((feature, index) => (
                <div key={index} className="col-6">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="d-flex gap-3 mb-4">
            <div className="input-group" style={{width: '140px'}}>
              <button className="btn btn-outline-secondary">-</button>
              <input type="text" className="form-control text-center" value="1" readOnly />
              <button className="btn btn-outline-secondary">+</button>
            </div>
            <Link to="/cart" className="btn btn-primary btn-lg flex-fill">
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </Link>
          </div>
          
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">
              <i className="fas fa-heart me-2"></i>Wishlist
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-share me-2"></i>Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;