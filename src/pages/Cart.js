import React from "react";

const Cart = () => (
  <div className="container my-5">
    <div className="row">
      <div className="col-lg-8">
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="card">
          <div className="card-body text-center py-5">
            <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
            <h3 className="text-muted">Your cart is empty</h3>
            <p className="text-muted mb-4">Start shopping to add items to your cart</p>
            <a href="/shop" className="btn btn-primary btn-lg">Continue Shopping</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header bg-light">
            <h5 className="mb-0">Order Summary</h5>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>$0.00</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Tax:</span>
              <span>$0.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <strong>Total:</strong>
              <strong>$0.00</strong>
            </div>
            <button className="btn btn-primary w-100" disabled>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;