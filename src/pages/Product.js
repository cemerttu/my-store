import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const productData = {
  1: { 
    id: 1,
    name: "Wireless Bluetooth Headphones", 
    price: 49.99, 
    originalPrice: 69.99,
    description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals.", 
    image: "https://via.placeholder.com/500x500/007bff/ffffff?text=Headphones",
    features: ["Noise Cancellation", "30hr Battery", "Quick Charge", "Comfort Fit"],
    category: "Electronics",
    rating: 4.5,
    stock: 15,
    reviews: 124
  },
  2: { 
    id: 2,
    name: "Smart Fitness Watch", 
    price: 59.99, 
    originalPrice: 79.99,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.", 
    image: "https://via.placeholder.com/500x500/28a745/ffffff?text=Smart+Watch",
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "Sleep Tracking"],
    category: "Electronics",
    rating: 4.3,
    stock: 8,
    reviews: 89
  },
  3: { 
    id: 3,
    name: "Professional Laptop Backpack", 
    price: 79.99, 
    description: "Durable and stylish backpack with dedicated laptop compartment and multiple organizational pockets.", 
    image: "https://via.placeholder.com/500x500/dc3545/ffffff?text=Backpack",
    features: ["Laptop Compartment", "Water Resistant", "USB Charging Port", "Ergonomic Design"],
    category: "Accessories",
    rating: 4.7,
    stock: 25,
    reviews: 203
  },
};

const Product = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist, addToRecentlyViewed } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = productData[id];
  
  useEffect(() => {
    if (product) {
      setIsWishlisted(isInWishlist(product.id));
      addToRecentlyViewed(product);
    }
  }, [product, isInWishlist, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <h2>Product Not Found</h2>
          <Link to="/shop" className="btn btn-primary mt-3">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1000);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    toggleWishlist(product);
  };

  const productImages = [
    product.image,
    "https://via.placeholder.com/500x500/007bff/ffffff?text=Headphones+Angle",
    "https://via.placeholder.com/500x500/007bff/ffffff?text=Headphones+Case"
  ];

  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </nav>
      
      <div className="row">
        <div className="col-md-6">
          <div className="product-gallery">
            <div className="main-image mb-3">
              <img 
                src={productImages[activeImage]} 
                alt={product.name} 
                className="img-fluid rounded shadow w-100"
                style={{maxHeight: "500px", objectFit: "cover"}}
              />
            </div>
            <div className="image-thumbnails d-flex gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-secondary ${activeImage === index ? 'active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  style={{padding: '2px'}}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} style={{width: '60px', height: '60px', objectFit: 'cover'}} />
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <h1 className="fw-bold">{product.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2">
              {"★".repeat(Math.floor(product.rating))}☆
              <span className="text-muted ms-2">({product.rating})</span>
            </div>
            <span className="badge bg-secondary ms-3">{product.category}</span>
            <span className="badge bg-success ms-2">{product.stock} in stock</span>
          </div>
          
          <div className="price-section mb-3">
            <h3 className="text-primary mb-0">${product.price}</h3>
            {product.originalPrice && (
              <small className="text-muted text-decoration-line-through ms-2">
                ${product.originalPrice}
              </small>
            )}
            {product.originalPrice && (
              <span className="badge bg-danger ms-2">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>
          
          <p className="lead">{product.description}</p>
          
          <div className="mb-4">
            <h6>Key Features:</h6>
            <div className="row">
              {product.features.map((feature, index) => (
                <div key={index} className="col-6 mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="d-flex gap-3 mb-4 align-items-center">
            <div className="d-flex align-items-center">
              <label className="me-2 fw-bold">Quantity:</label>
              <div className="input-group" style={{width: '140px'}}>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input 
                  type="text" 
                  className="form-control text-center" 
                  value={quantity} 
                  readOnly 
                />
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-4">
            <button 
              className={`btn btn-primary btn-lg flex-fill ${isAdding ? 'disabled' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <i className="fas fa-check me-2"></i>
                  Added to Cart!
                </>
              ) : (
                <>
                  <i className="fas fa-shopping-cart me-2"></i>
                  Add to Cart (${(product.price * quantity).toFixed(2)})
                </>
              )}
            </button>
          </div>
          
          <div className="d-flex gap-2">
            <button 
              className={`btn btn-outline-secondary ${isWishlisted ? 'active' : ''}`}
              onClick={handleWishlistToggle}
            >
              <i className={`fas fa-heart me-2 ${isWishlisted ? 'text-danger' : ''}`}></i>
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
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