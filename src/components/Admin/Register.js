// src/components/Admin/Register.js
import React from 'react';

const AdminRegister = () => {
  return (
    <div>
      <h2>Admin Register</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Nhập email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit" className="btn btn-dark">Đăng ký</button>
      </form>
    </div>
  );
};

export default AdminRegister;
