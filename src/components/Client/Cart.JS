import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import './Cart.css'; // Import CSS cho Cart
import { CartContext } from '../../contexts/CartContext'; // Import CartContext
import Checkout from './Checkout'; // Import Checkout

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Lấy giỏ hàng từ context
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleCheckout = () => {
    // Bạn có thể thêm logic thanh toán tại đây
    alert('Thanh toán thành công!');
    // Xóa giỏ hàng sau khi thanh toán thành công, ví dụ:
    // setCart([]);
    navigate('/');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Giỏ hàng trống.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">{item.price} VND</span>
              <button className="remove-button" onClick={() => removeFromCart(index)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="cart-total">Tổng: {total} VND</h3>

      {/* Tích hợp phần thanh toán */}
      {cart.length > 0 && (
        <Checkout cart={cart} handleCheckout={handleCheckout} />
      )}
      {/* Nút quay lại */}
      <button className="back-button" onClick={() => navigate(-1)}>
        Quay Lại
      </button>
    </div>
  );
};

export default Cart;
