import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

const EnhancedNavbar = () => {
  const { getCartItemsCount, theme, toggleTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: "fa-home" },
    { path: "/shop", label: "Shop", icon: "fa-store" },
    { path: "/about", label: "About", icon: "fa-info-circle" },
    { path: "/contact", label: "Contact", icon: "fa-envelope" }
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <i className="fas fa-bolt me-2"></i>
            <span className="brand-text">TechNest</span>
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {navLinks.map(link => (
                <li key={link.path} className="nav-item">
                  <Link 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`} 
                    to={link.path}
                  >
                    <i className={`fas ${link.icon} me-1`}></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="d-flex align-items-center gap-3">
              {/* Search Button */}
              <button 
                className="btn btn-link text-white"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <i className="fas fa-search"></i>
              </button>
              
              {/* Theme Toggle */}
              <button 
                className="btn btn-link text-white theme-toggle"
                onClick={toggleTheme}
              >
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
              
              {/* Wishlist */}
              <Link className="btn btn-link text-white position-relative" to="/wishlist">
                <i className="fas fa-heart"></i>
              </Link>
              
              {/* Cart */}
              <Link className="btn btn-link text-white position-relative" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {getCartItemsCount() > 0 && (
                  <span className="cart-badge position-absolute top-0 start-100 translate-middle">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>
              
              {/* User Account */}
              <div className="dropdown">
                <button className="btn btn-link text-white dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fas fa-user"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile"><i className="fas fa-user me-2"></i>Profile</Link></li>
                  <li><Link className="dropdown-item" to="/orders"><i className="fas fa-box me-2"></i>Orders</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item"><i className="fas fa-sign-out-alt me-2"></i>Logout</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="search-overlay">
            <div className="container">
              <div className="search-bar">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search products..." 
                  autoFocus
                />
                <button className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
                <button 
                  className="btn btn-link text-white"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '76px' }}></div>
    </>
  );
};

export default EnhancedNavbar;