// src/components/Admin/CustomerManagement.js
import React from 'react';

const CustomerManagement = () => {
  return (
    <div>
      <h2>Quản lý khách hàng</h2>
      <ul>
        <li>Khách hàng 1 <button>Chi tiết</button></li>
        <li>Khách hàng 2 <button>Chi tiết</button></li>
        {/* Thêm nhiều khách hàng hơn */}
      </ul>
    </div>
  );
};

export default CustomerManagement;
