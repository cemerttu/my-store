import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="fw-bold mb-3">StyleHub</h6>
          <p>Your premier destination for fashion-forward clothing and accessories. Elevate your style with our curated collections.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-white"><i className="fab fa-pinterest fa-lg"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4">
          <h6 className="fw-bold">Shop</h6>
          <ul className="list-unstyled">
            <li><a href="/shop?category=men" className="text-white-50 text-decoration-none">Men's Collection</a></li>
            <li><a href="/shop?category=women" className="text-white-50 text-decoration-none">Women's Collection</a></li>
            <li><a href="/shop?category=accessories" className="text-white-50 text-decoration-none">Accessories</a></li>
            <li><a href="/shop" className="text-white-50 text-decoration-none">New Arrivals</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h6 className="fw-bold">Customer Service</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Size Guide</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Shipping Info</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Returns & Exchanges</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h6 className="fw-bold">Newsletter</h6>
          <p className="text-white-50">Get 15% off your first order! Subscribe for fashion updates and exclusive offers.</p>
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <p>&copy; 2024 StyleHub. All Rights Reserved. | Designed with ❤️ for fashion lovers</p>
      </div>
    </div>
  </footer>
);

export default Footer;