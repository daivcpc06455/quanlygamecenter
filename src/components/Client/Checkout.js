import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('Thanh toán thành công!');
    // Logic thêm cho thanh toán
  };

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
