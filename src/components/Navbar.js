import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCartCount(3);

    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Implement actual search logic here
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top shadow ${
        showNavbar ? "navbar-show" : "navbar-hide"
      }`}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center stylehub-black"
          to="/"
        >
          <i className="fas fa-crown me-2"></i>
          <h2>StyleHub</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/shop") ? "active" : ""}`}
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <div className="input-group" style={{ width: "220px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search products🔍"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          <ul className="navbar-nav">
            {/* Dark Mode Toggle */}
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
              </button>
            </li>

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fas fa-shopping-bag me-1"></i>
                Cart🛒
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="fas fa-user me-1"></i>
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
