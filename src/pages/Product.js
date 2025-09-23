import React from "react";
import { useParams, Link } from "react-router-dom";

const data = {
  1: { name: "Product 1", price: 49.99, desc: "Nice product", image: "/images/product1.jpg" },
  2: { name: "Product 2", price: 59.99, desc: "Nice product", image: "/images/product2.jpg" },
  3: { name: "Product 3", price: 79.99, desc: "Nice product", image: "/images/product3.jpg" },
};

const Product = () => {
  const { id } = useParams();
  const p = data[id];
  if (!p) return <div className="container my-5"><h2>Not found</h2></div>;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6"><img src={p.image} alt={p.name} className="img-fluid rounded" /></div>
        <div className="col-md-6">
          <h2>{p.name}</h2>
          <p className="text-primary">${p.price}</p>
          <p>{p.desc}</p>
          <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
