import React from "react";

const Contact = () => (
  <div className="container my-5">
    <h1>Contact Us</h1>
    <form className="col-md-6 mx-auto">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
      </div>
      <button type="submit" className="btn btn-dark">Send</button>
    </form>
  </div>
);

export default Contact;
