import React, { useState } from 'react';
import RoomBooking from '../components/Client/RoomBooking';  // Kiểm tra lại đường dẫn đúng
import FoodMenu from '../components/Client/FoodMenu';        // Đảm bảo đường dẫn chính xác
import Cart from '../components/Client/cart';
import Checkout from '../components/Client/Checkout';        // Đảm bảo đường dẫn đúng

const ClientDashboard = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <h1>Trang Người Dùng</h1>
      <RoomBooking />
      <FoodMenu addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Checkout cart={cart} />
    </div>
  );
};

export default ClientDashboard;
