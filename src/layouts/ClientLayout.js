import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomBooking from '../components/Client/RoomBooking';
import FoodMenu from '../components/Client/FoodMenu';
import { CartContext } from '../contexts/CartContext'; // Import CartContext
import './ClientLayout.css'; // Import file CSS cho ClientLayout

const ClientLayout = () => {
  const { cart, addToCart } = useContext(CartContext); // Sử dụng context
  const navigate = useNavigate(); // Dùng để điều hướng đến trang giỏ hàng

  const goToCartPage = () => {
    navigate('/cart'); // Điều hướng đến trang giỏ hàng
  };

  return (
    <div className="layout-container">
      <h1 className="layout-title">Giao Diện Người Dùng</h1>

      {/* Biểu tượng giỏ hàng ở góc trên bên phải */}
      <div className="cart-icon-container" onClick={goToCartPage}>
        <span className="cart-icon">
          🛒 Giỏ Hàng ({cart.length}) {/* Hiển thị số lượng sản phẩm trong giỏ */}
        </span>
      </div>

      <div className="layout-section">
        <RoomBooking addRoomToCart={addToCart} />
      </div>

      <div className="layout-section">
        <FoodMenu addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ClientLayout;
