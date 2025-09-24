import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal, getDiscountedTotal, applyCoupon, removeCoupon } = useApp();
  const [couponCode, setCouponCode] = useState("");

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateShipping = () => {
    const subtotal = getDiscountedTotal();
    if (cart.coupon?.freeShipping) return 0;
    return subtotal > 50 ? 0 : 9.99;
  };

  const calculateTax = () => {
    return getDiscountedTotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return getDiscountedTotal() + calculateShipping() + calculateTax();
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      applyCoupon(couponCode.toUpperCase());
      setCouponCode("");
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card">
              <div className="card-body text-center py-5">
                <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                <h3 className="text-muted">Your cart is empty</h3>
                <p className="text-muted mb-4">Start shopping to add items to your cart</p>
                <Link to="/shop" className="btn btn-primary btn-lg">Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Shopping Cart ({cart.items.length} items)</h1>
            <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          
          {cart.items.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="text-muted">${item.price}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        className="form-control text-center" 
                        value={item.quantity} 
                        readOnly 
                      />
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <h5 className="text-primary">${(item.price * item.quantity).toFixed(2)}</h5>
                  </div>
                  <div className="col-md-1">
                    <button 
                      className="btn btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-lg-4">
          <div className="card sticky-top" style={{top: '100px'}}>
            <div className="card-header bg-light">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              
              {cart.coupon && (
                <>
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount ({cart.coupon.code}):</span>
                    <span>-${(calculateSubtotal() - getDiscountedTotal()).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>After Discount:</span>
                    <span>${getDiscountedTotal().toFixed(2)}</span>
                  </div>
                </>
              )}
              
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>{calculateShipping() === 0 ? 'FREE' : `$${calculateShipping().toFixed(2)}`}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax:</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              
              {/* Coupon Section */}
              <div className="mb-3">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Coupon code" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className="btn btn-outline-primary" onClick={handleApplyCoupon}>
                    Apply
                  </button>
                </div>
                {cart.coupon && (
                  <div className="mt-2">
                    <small className="text-success">
                      Applied: {cart.coupon.code} 
                      <button 
                        className="btn btn-link text-danger p-0 ms-2" 
                        onClick={removeCoupon}
                        style={{fontSize: '0.7rem'}}
                      >
                        Remove
                      </button>
                    </small>
                  </div>
                )}
                <small className="text-muted">Try: WELCOME10, SAVE20, FREESHIP</small>
              </div>
              
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary w-100 btn-lg">
                Proceed to Checkout
              </button>
              <Link to="/shop" className="btn btn-outline-primary w-100 mt-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;