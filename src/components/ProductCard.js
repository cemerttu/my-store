import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card product-card h-100 border-0 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="position-relative overflow-hidden">
        <img
          src={product.image}
          className={`card-img-top product-img ${isHovered ? 'zoom' : ''}`}
          alt={product.name}
        />
        <div className={`card-img-overlay d-flex justify-content-end ${isHovered ? 'show' : 'hide'}`}>
          <button className="btn btn-light btn-sm rounded-circle shadow">
            <i className="fas fa-heart text-danger"></i>
          </button>
        </div>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted">{product.category}</p>
        <p className="fw-bold text-primary">Ksh{product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-primary w-100">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;