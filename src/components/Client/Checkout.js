import React from 'react';

const Checkout = ({ cart, handleCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Xác nhận Đặt Hàng</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price} VND</li>
        ))}
      </ul>
      <h3>Tổng Cộng: {total} VND</h3>
      <button onClick={handleCheckout}>Thanh Toán</button>
    </div>
  );
};

export default Checkout;
