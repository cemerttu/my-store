import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="col-md-4">
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-dark me-2">View Details</Link>
        <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
      </div>
    </div>
  </div>
);

export default ProductCard;
