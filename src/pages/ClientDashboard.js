import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/client.css';  // Import tệp client.css

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <nav className="navbar navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/client/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/client/rooms">Xem phòng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/client/cart">Giỏ hàng</Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-3">
        <Outlet /> {/* Render các route con */}
      </div>
    </div>
  );
};

export default ClientLayout;
