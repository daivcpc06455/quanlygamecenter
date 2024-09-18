import React from 'react';
import './Checkout.css'; // Import file CSS cho Checkout

const Checkout = ({ cart, handleCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Xác nhận Đặt Hàng</h2>
      <ul className="checkout-list">
        {cart.map((item, index) => (
          <li key={index} className="checkout-item">
            {item.name} - {item.price} VND
          </li>
        ))}
      </ul>
      <h3 className="checkout-total">Tổng Cộng: {total} VND</h3>
      <button className="checkout-button" onClick={handleCheckout}>Thanh Toán</button>
    </div>
  );
};

export default Checkout;
