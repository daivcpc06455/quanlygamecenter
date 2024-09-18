import React from 'react';
import { Link } from 'react-router-dom';
import './Css/NavbarClient.css';

const NavbarClient = () => {
  return (
    <nav className="navbar-client">
      <div className="navbar-client-brand">
        <h1>Five Star Gaming</h1>
      </div>
      <ul className="navbar-client-menu">
        <li><Link to="/client/">Trang chủ</Link></li>
        <li><Link to="/client/booking">Đặt phòng</Link></li>
        <li><Link to="/client/services">Dịch vụ</Link></li>
        <li><Link to="/client/history">Lịch sử dịch vụ</Link></li>
        <li><Link to="/client/login">Đăng nhập</Link> / <Link to="/client/register">Đăng ký</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarClient;
