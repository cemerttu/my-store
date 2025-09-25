import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Men's Casual Blazer",
    price: 89.99,
    image:
      "https://via.placeholder.com/300x400/2c3e50/ffffff?text=Men's+Blazer",
    category: "Men's Fashion",
    gender: "men",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 59.99,
    image:
      "https://via.placeholder.com/300x400/e74c3c/ffffff?text=Women's+Dress",
    category: "Women's Fashion",
    gender: "women",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Unisex Backpack",
    price: 49.99,
    image:
      "https://via.placeholder.com/300x400/27ae60/ffffff?text=Designer+Backpack",
    category: "Accessories",
    gender: "unisex",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    price: 79.99,
    image:
      "https://via.placeholder.com/300x400/3498db/ffffff?text=Running+Shoes",
    category: "Men's Footwear",
    gender: "men",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Women's Handbag",
    price: 69.99,
    image:
      "https://via.placeholder.com/300x400/9b59b6/ffffff?text=Designer+Handbag",
    category: "Women's Accessories",
    gender: "women",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 99.99,
    image: "https://via.placeholder.com/300x400/34495e/ffffff?text=Smart+Watch",
    category: "Electronics",
    gender: "unisex",
    rating: 4.4,
  },
];

const Home = () => (
  <div>
    {/* Hero Section with Product Image */}
    <section
      className="hero-section position-relative"
      style={{ overflow: "hidden" }}
    >
      <video
        className="hero-bg-video position-absolute w-100 h-100"
        style={{ objectFit: "cover", top: 0, left: 0, zIndex: 0 }}
        src={require("../image/Fashion Lookbook Vlog PH Trend YouTube Thumbnail in Grey White Aesthetic Chic Minimal Style.mp4")}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay position-absolute w-100 h-100"></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              Elevate Your Style with StyleHub
            </h1>
            <p className="lead mb-4">
              Discover the latest trends in fashion for men and women. Quality
              meets style in every piece.
            </p>
            <a href="/shop" className="btn btn-light btn-lg px-4 me-3">
              <i className="fas fa-shopping-bag me-2"></i>
              Shop Now
            </a>
            <a
              href="#best-sellers"
              className="btn btn-outline-light btn-lg px-4"
            >
              Explore Collection
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={require("../image/haste-outfit.jpg")}
              alt="Featured Clothing Product"
              className="img-fluid hero-product-image shadow-lg rounded"
              style={{
                maxHeight: "500px",
                objectFit: "cover",
                border: "6px solid #fff",
              }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4">Why Choose StyleHub?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card">
              <i className="fas fa-tshirt fa-3x text-primary mb-3"></i>
              <h5>Trending Styles</h5>
              <p className="text-muted">
                Latest fashion trends for every season
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card">
              <i className="fas fa-tag fa-3x text-success mb-3"></i>
              <h5>Best Prices</h5>
              <p className="text-muted">Quality fashion at affordable prices</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card">
              <i className="fas fa-shipping-fast fa-3x text-info mb-3"></i>
              <h5>Fast Delivery</h5>
              <p className="text-muted">Free shipping on orders over $75</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Categories */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="category-card men-category text-center p-5 rounded">
            <h3 className="text-white mb-3">Men's Collection</h3>
            <p className="text-white mb-4">
              Sophisticated styles for the modern man
            </p>
            <a href="/shop?category=men" className="btn btn-light">
              Shop Men
            </a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="category-card women-category text-center p-5 rounded">
            <h3 className="text-white mb-3">Women's Collection</h3>
            <p className="text-white mb-4">
              Elegant fashion for every occasion
            </p>
            <a href="/shop?category=women" className="btn btn-light">
              Shop Women
            </a>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div id="best-sellers" className="mb-5">
        <h2 className="text-center mb-4">Best Sellers</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section mt-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card review-card h-100">
              <div className="card-body text-center">
                <div className="text-warning mb-3">★★★★★</div>
                <p className="card-text">
                  "The quality is amazing! I get compliments every time I wear
                  my StyleHub blazer."
                </p>
                <h6 className="card-subtitle mb-2 text-muted">- Michael T.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card review-card h-100">
              <div className="card-body text-center">
                <div className="text-warning mb-3">★★★★★</div>
                <p className="card-text">
                  "Fast shipping and perfect fit. This is my new go-to fashion
                  store!"
                </p>
                <h6 className="card-subtitle mb-2 text-muted">- Sarah L.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card review-card h-100">
              <div className="card-body text-center">
                <div className="text-warning mb-3">★★★★★</div>
                <p className="card-text">
                  "Great prices for designer quality. The summer dress is
                  absolutely beautiful!"
                </p>
                <h6 className="card-subtitle mb-2 text-muted">- Jessica M.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
