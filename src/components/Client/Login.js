// src/components/Client/Login.js
import React from 'react';

const ClientLogin = () => {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Nhập email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  );
};

export default ClientLogin;
