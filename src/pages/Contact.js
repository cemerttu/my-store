import React from "react";

const Contact = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center lead mb-5">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
        <div className="row mb-5">
          <div className="col-md-4 text-center mb-4">
            <div className="p-4 bg-light rounded">
              <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
              <h5>Address</h5>
              <p className="text-muted">123 Store Street<br />City, State 12345</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="p-4 bg-light rounded">
              <i className="fas fa-phone fa-2x text-primary mb-3"></i>
              <h5>Phone</h5>
              <p className="text-muted">+1 (555) 123-4567<br />Mon-Fri 9am-6pm</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="p-4 bg-light rounded">
              <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
              <h5>Email</h5>
              <p className="text-muted">support@mystore.com<br />info@mystore.com</p>
            </div>
          </div>
        </div>

        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="Enter your first name" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Enter your last name" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" placeholder="Enter your phone number" />
          </div>
          <div className="col-12">
            <label className="form-label">Subject</label>
            <input type="text" className="form-control" placeholder="Enter subject" />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="5" placeholder="Type your message" required></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-lg px-4">
              <i className="fas fa-paper-plane me-2"></i>Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;