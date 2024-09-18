// src/components/Client/Register.js
import React from 'react';
import './Css/Register.css';

const ClientRegister = () => {
  return (
    <div>
      <h2>Đăng ký</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Nhập email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit" className="btn btn-primary">Đăng ký</button>
      </form>
    </div>
  );
};

export default ClientRegister;
