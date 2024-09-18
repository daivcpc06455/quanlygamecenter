// src/components/Admin/BookingHistory.js
import React from 'react';
const BookingHistory = () => {
  return (
    <div className="container booking-history">
      <div className="card shadow-lg mt-4">
        <div className="card-header text-white bg-primary">
          <h2 className="text-center">Quản lý đơn đặt phòng</h2>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Tên khách hàng</th>
                <th>Số phòng</th>
                <th>Dịch vụ</th>
                <th>Ngày đặt</th>
                <th>Số lượng dịch vụ</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyễn Văn A</td>
                <td>Phòng 101</td>
                <td>Massage, Bữa sáng</td>
                <td>01/01/2024</td>
                <td>2</td>
                <td><span className="badge badge-success">Đã hoàn thành</span></td>
              </tr>
              <tr>
                <td>Trần Thị B</td>
                <td>Phòng 202</td>
                <td>Giặt ủi, Spa</td>
                <td>02/01/2024</td>
                <td>2</td>
                <td><span className="badge badge-warning">Đang xử lý</span></td>
              </tr>
              <tr>
                <td>Lê Thị C</td>
                <td>Phòng 303</td>
                <td>Bữa sáng, Hồ bơi</td>
                <td>03/01/2024</td>
                <td>2</td>
                <td><span className="badge badge-danger">Hủy bỏ</span></td>
              </tr>
              {/* Thêm các đơn đặt phòng khác */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
