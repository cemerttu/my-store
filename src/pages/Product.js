import React from "react";
import { useParams, Link } from "react-router-dom";

const productData = {
  1: { name: "Product 1", price: 49.99, description: "High-quality product 1", image: "/images/product1.jpg" },
  2: { name: "Product 2", price: 59.99, description: "Durable and stylish product 2", image: "/images/product2.jpg" },
  3: { name: "Product 3", price: 79.99, description: "Premium quality product 3", image: "/images/product3.jpg" },
};

const Product = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <h2 className="text-center my-5">Product not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>
          <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
