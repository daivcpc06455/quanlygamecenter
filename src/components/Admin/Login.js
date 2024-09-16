// src/components/Admin/Login.js
import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Nhập email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit" className="btn btn-dark">Đăng nhập</button>
      </form>
    </div>
  );
};

export default AdminLogin;
