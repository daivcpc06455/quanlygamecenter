// src/components/Admin/ServiceManagement.js
import React from 'react';

const ServiceManagement = () => {
  return (
    <div>
      <h2>Quản lý dịch vụ</h2>
      <ul>
        <li>Dịch vụ 1 <button>Cập nhật</button> <button>Xóa</button></li>
        <li>Dịch vụ 2 <button>Cập nhật</button> <button>Xóa</button></li>
        {/* Thêm nhiều dịch vụ khác */}
      </ul>
    </div>
  );
};

export default ServiceManagement;
