// src/components/Client/Cart.js
import React from 'react';

const Cart = () => {
  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        <li>Phòng 1 - VIP - 01/01/2024</li>
        {/* Thêm các mục khác */}
      </ul>
      <button className="btn btn-success">Thanh toán</button>
    </div>
  );
};

export default Cart;
