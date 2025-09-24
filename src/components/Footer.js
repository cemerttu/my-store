import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <h5 className="fw-bold mb-3">MyStore</h5>
          <p>Your one-stop destination for quality products at affordable prices. We're committed to excellence.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4">
          <h6 className="fw-bold">Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
            <li><a href="/shop" className="text-white-50 text-decoration-none">Shop</a></li>
            <li><a href="/about" className="text-white-50 text-decoration-none">About</a></li>
            <li><a href="/contact" className="text-white-50 text-decoration-none">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h6 className="fw-bold">Customer Service</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Shipping Info</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Returns</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h6 className="fw-bold">Newsletter</h6>
          <p className="text-white-50">Subscribe for updates and offers</p>
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <p>&copy; 2025 MyStore. All Rights Reserved. | Designed with ❤️</p>
      </div>
    </div>
  </footer>
);

export default Footer;