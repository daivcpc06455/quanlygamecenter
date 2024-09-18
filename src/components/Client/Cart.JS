import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} VND
              <button onClick={() => removeFromCart(index)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Tổng: {total} VND</h3>
    </div>
  );
};

export default Cart;
