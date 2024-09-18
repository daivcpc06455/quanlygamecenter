import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/admin.css';
import userAvatar from '../components/Admin/assets/p100000250.png'; // Import hình đại diện

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">
      <nav className="navbar navbar-dark bg-dark flex-column vh-100 p-3">
        <div className="text-center mb-4">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="rounded-circle mb-2"
            style={{ width: '80px', height: '80px' }}
          />
          <h6 className="text-white">Tên người dùng</h6>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tài khoản
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/admin/profile">Chỉnh sửa thông tin</Link></li>
              <li><Link className="dropdown-item" to="/admin/change-password">Đổi mật khẩu</Link></li>
              <li><Link className="dropdown-item" to="/logout">Đăng xuất</Link></li>
            </ul>
          </div>
        </div>

        {/* Danh sách chức năng */}
        <ul className="navbar-nav w-100 mt-3">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/dashboard">
              <i className="bi bi-speedometer2 me-2"></i> Bảng Điều khiển
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/statistics">
              <i className="bi bi-bar-chart-line me-2"></i> Thống kê
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/rooms">
              <i className="bi bi-door-open me-2"></i> Quản lý phòng
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/bookings">
              <i className="bi bi-calendar-check me-2"></i> Quản lý đơn đặt phòng
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/services">
              <i className="bi bi-cart me-2"></i> Quản lý dịch vụ
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/users">
              <i className="bi bi-people me-2"></i> Quản lý người dùng
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin/customers">
              <i className="bi bi-person-lines-fill me-2"></i> Quản lý khách hàng
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/cart">
              <i className="bi bi-cart4 me-2"></i> Quản lý giỏ hàng
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container-fluid mt-3" style={{ marginLeft: '250px' }}>
        <Outlet /> {/* Nơi các route con sẽ được render */}
      </div>
    </div>
  );
};

export default AdminLayout;
