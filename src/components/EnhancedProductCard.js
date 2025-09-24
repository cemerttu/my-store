import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const EnhancedProductCard = ({ product, animationDelay = 0 }) => {
  const { addToCart, toggleWishlist, isInWishlist, addToRecentlyViewed } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsWishlisted(isInWishlist(product.id));
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [product.id, isInWishlist, animationDelay]);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    createRipple(e);
    
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    createRipple(e);
    setIsWishlisted(!isWishlisted);
    toggleWishlist(product);
  };

  const handleProductClick = () => {
    addToRecentlyViewed(product);
  };

  const getDiscountBadge = () => {
    if (!product.originalPrice) return null;
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return (
      <span className="badge bg-success discount-badge">-{discount}%</span>
    );
  };

  return (
    <div className={`enhanced-product-card ${isVisible ? 'visible' : ''} ${!imageLoaded ? 'loading' : ''}`}
         style={{ animationDelay: `${animationDelay}ms` }}>
      <Link to={`/product/${product.id}`} onClick={handleProductClick} className="product-card-link">
        <div className="card h-100 border-0 shadow-sm product-card-hover">
          <div className="product-image-container">
            <img
              src={product.image}
              className={`card-img-top product-image ${imageLoaded ? 'loaded' : ''}`}
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
            />
            
            {!imageLoaded && (
              <div className="image-placeholder">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            )}
            
            <div className="product-badges">
              <span className="badge bg-danger hot-badge">🔥 Hot</span>
              {getDiscountBadge()}
              {product.stock < 10 && <span className="badge bg-warning stock-badge">Low Stock</span>}
            </div>
            
            <div className="product-actions">
              <button 
                className={`btn wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={handleWishlistToggle}
              >
                <i className={`fas ${isWishlisted ? 'fa-heart' : 'fa-heart'}`}></i>
              </button>
              
              <button 
                className={`btn quick-view-btn`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Quick view functionality would go here
                }}
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </div>
          
          <div className="card-body d-flex flex-column">
            <h5 className="card-title product-name">{product.name}</h5>
            
            <div className="product-rating mb-2">
              <div className="stars">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-muted">({product.rating})</span>
              </div>
              <span className="reviews-count text-muted">({product.reviews || 124} reviews)</span>
            </div>
            
            <div className="price-section mb-3">
              <h4 className="current-price text-primary">${product.price}</h4>
              {product.originalPrice && (
                <small className="original-price text-muted text-decoration-line-through">
                  ${product.originalPrice}
                </small>
              )}
            </div>
            
            <p className="card-text product-description">
              {product.description || "High-quality product with excellent features and customer satisfaction."}
            </p>
            
            <div className="product-features">
              {product.features?.slice(0, 2).map((feature, index) => (
                <span key={index} className="feature-tag">
                  <i className="fas fa-check-circle me-1"></i>
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="product-meta mt-auto">
              <div className="d-flex justify-content-between align-items-center">
                <span className="category-badge badge bg-secondary">{product.category}</span>
                <span className="stock-info text-muted">
                  {product.stock || 15} in stock
                </span>
              </div>
            </div>
          </div>
          
          <div className="card-footer bg-transparent border-0">
            <div className="d-flex gap-2">
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-primary flex-fill view-details-btn"
              >
                <i className="fas fa-search me-2"></i>
                Details
              </Link>
              <button 
                className={`btn btn-primary add-cart-btn ${isAdding ? 'adding' : ''}`}
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
      </Link>
    </div>
  );
};

export default EnhancedProductCard;