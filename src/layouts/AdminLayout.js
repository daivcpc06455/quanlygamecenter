import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/admin.css';  // Import tệp admin.css

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/rooms">Quản lý phòng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/customers">Quản lý khách hàng</Link>
          </li>
        </ul>
      </nav>
      <div className="container mt-3">
        <Outlet /> {/* Render các route con */}
      </div>
    </div>
  );
};

export default AdminLayout;
