import React, { useState } from 'react';
import RoomBooking from '../components/Client/RoomBooking';
import FoodMenu from '../components/Client/FoodMenu';
import Cart from '../components/Client/cart';
import Checkout from '../components/Client/Checkout';

const ClientDashboard = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const addRoomToCart = (room) => {
    setCart([...cart, room]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleCheckout = () => {
    alert('Thanh toán thành công!');
    setCart([]); // Xóa giỏ hàng sau khi thanh toán
  };

  return (
    <div>
      <h1>Giao Diện Người Dùng</h1>
      <RoomBooking addRoomToCart={addRoomToCart} />
      <FoodMenu addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Checkout cart={cart} handleCheckout={handleCheckout} />
    </div>
  );
};

export default ClientDashboard;
