import React from "react";

const About = () => (
  <div className="container my-5">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-4">About MyStore</h1>
        <p className="lead mb-4">
          Welcome to MyStore! We are dedicated to providing top-quality products at
          affordable prices. Our mission is to deliver value and satisfaction to
          every customer.
        </p>
        <p className="mb-4">
          Founded in 2020, we've grown from a small startup to a trusted e-commerce 
          platform serving thousands of satisfied customers worldwide. Our commitment 
          to quality, customer service, and innovation drives everything we do.
        </p>
        <div className="row">
          <div className="col-6">
            <h3 className="text-primary">10K+</h3>
            <p className="text-muted">Happy Customers</p>
          </div>
          <div className="col-6">
            <h3 className="text-primary">5000+</h3>
            <p className="text-muted">Products</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
      </div>
    </div>
  </div>
);

export default About;