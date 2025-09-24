import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useApp();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="card product-card h-100 border-0 shadow-sm hover-shadow">
      <div className="position-relative overflow-hidden">
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
          style={{ height: "250px", objectFit: "cover", transition: "transform 0.3s" }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        />
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-danger">Hot</span>
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <div className="text-warning mb-2">
          {"★".repeat(Math.floor(product.rating || 4))}☆
          <small className="text-muted ms-1">({product.rating || 4})</small>
        </div>
        <h4 className="text-primary mb-3">${product.price}</h4>
        <p className="card-text text-muted small flex-grow-1">
          {product.description || "High-quality product with excellent features."}
        </p>
        <div className="d-flex gap-2 mt-auto">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-primary flex-fill"
          >
            View Details
          </Link>
          <button 
            className={`btn btn-primary ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-cart-plus"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;