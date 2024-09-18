import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavbarClient from '../components/Client/NavrbarClient';
import FooterClient from '../components/Client/Footerclient';
import RoomList from '../components/Client/RoomList';
import RoomBooking from '../components/Client/RoomBooking';
import ClientDashboard from '../pages/ClientDashboard';
import RoomDetail from '../components/Client/RoomDetail';
import Login from '../components/Client/Login';
import Register from '../components/Client/Register';
import Checkout from '../components/Client/Checkout';
import Cart from '../components/Client/cart';
import Services from '../components/Client/Services';  // Thêm Services
import History from '../components/Client/History';    // Thêm History

const ClientLayout = () => {
  const [cartItems, setCartItems] = useState([]);  // Trạng thái để lưu món ăn đã chọn

  const addToCart = (food) => {
    setCartItems((prevItems) => [...prevItems, food]);
  };

  return (
    <div className="client-layout">
      <NavbarClient />
      <div className="content">
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="booking" element={<RoomBooking />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />

          {/* Route cho Services, truyền cartItems */}
          <Route path="services" element={<Services cartItems={cartItems} addToCart={addToCart} />} />

          {/* Route cho History */}
          <Route path="history" element={<History cartItems={cartItems} />} />

          <Route path="room/:id" element={<RoomDetail />} />
        </Routes>
        <Outlet />
      </div>
      <FooterClient />
    </div>
  );
};

export default ClientLayout;
