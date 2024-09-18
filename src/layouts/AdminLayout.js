import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/admin.css'; // Import tệp admin.css
import userAvatar from '../layouts/assets/p100000250.png'; // Import hình ảnh đại diện (avatar)

const AdminLayout = () => {
  return (
    <div className="admin-layout d-flex">
      {/* Sidebar dọc */}
      <nav className="navbar navbar-dark bg-dark flex-column vh-100 p-3">
        {/* Avatar và các tùy chọn đăng nhập */}
        <div className="text-center mb-4">
          <img src={userAvatar} alt="User Avatar" className="rounded-circle mb-2" style={{ width: '80px', height: '80px' }} />
          <h6 className="text-white">Tên người dùng</h6>
          {/* Dropdown menu cho tùy chọn */}
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

        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">Thống kê</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/rooms">Quản lý phòng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/bookings">Quản lý đơn đặt phòng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/services">Quản lý dịch vụ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Quản lý người dùng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/customers">Quản lý khách hàng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/cart">Quản lý giỏ hàng</Link>
          </li>
        </ul>
      </nav>

      {/* Nội dung chính */}
      <div className="container-fluid mt-3">
        <Outlet /> {/* Nơi các route con sẽ được render */}
      </div>
    </div>
  );
};

export default AdminLayout;
