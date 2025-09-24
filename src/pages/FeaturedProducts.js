import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Headphones",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 59.99,
    image: "https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "https://via.placeholder.com/300x300/dc3545/ffffff?text=Backpack",
    rating: 4.7,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">Featured Products</h2>
          <p className="lead text-muted">
            Discover our most popular items loved by customers
          </p>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="position-relative overflow-hidden">
                  <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.name}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-danger">Hot</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="text-warning mb-2">
                    {"★".repeat(Math.floor(product.rating))}☆
                    <small className="text-muted ms-1">
                      ({product.rating})
                    </small>
                  </div>
                  <h4 className="text-primary mb-3">${product.price}</h4>
                  <p className="card-text text-muted small flex-grow-1">
                    High-quality product with excellent features and customer
                    satisfaction.
                  </p>
                  <div className="d-flex gap-2 mt-auto">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-primary flex-fill"
                    >
                      View Details
                    </Link>
                    <button className="btn btn-primary">
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/shop" className="btn btn-outline-primary btn-lg">
            View All Products <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};
