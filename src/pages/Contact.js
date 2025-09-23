import React from "react";
const Contact = () => (
  <div className="container my-5">
    <h1>Contact</h1>
    <form className="col-md-6 mx-auto">
      <input className="form-control mb-3" placeholder="Your Name" />
      <input className="form-control mb-3" placeholder="Your Email" />
      <textarea className="form-control mb-3" rows="4" placeholder="Message" />
      <button className="btn btn-primary">Send</button>
    </form>
  </div>
);
export default Contact;
