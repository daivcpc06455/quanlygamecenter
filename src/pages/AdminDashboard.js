import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  // Giả lập danh sách phòng net
  const rooms = [
    {
      name: 'Phòng 1',
      timeUsed: '2 giờ 30 phút',
      totalAmount: '150,000 VND',
      status: 'Đang sử dụng',
      capacity: '5 người',
      image: 'https://via.placeholder.com/150', // Ảnh demo
    },
    {
      name: 'Phòng 2',
      timeUsed: '1 giờ 10 phút',
      totalAmount: '70,000 VND',
      status: 'Trống',
      capacity: '6 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 3',
      timeUsed: '4 giờ 15 phút',
      totalAmount: '220,000 VND',
      status: 'Đang sử dụng',
      capacity: '8 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 4',
      timeUsed: '45 phút',
      totalAmount: '35,000 VND',
      status: 'Trống',
      capacity: '4 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 5',
      timeUsed: '3 giờ 5 phút',
      totalAmount: '180,000 VND',
      status: 'Đang sử dụng',
      capacity: '10 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 6',
      timeUsed: '2 giờ',
      totalAmount: '120,000 VND',
      status: 'Trống',
      capacity: '7 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 7',
      timeUsed: '1 giờ 45 phút',
      totalAmount: '90,000 VND',
      status: 'Đang sử dụng',
      capacity: '5 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 8',
      timeUsed: '3 giờ 20 phút',
      totalAmount: '200,000 VND',
      status: 'Đang sử dụng',
      capacity: '6 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 9',
      timeUsed: '50 phút',
      totalAmount: '40,000 VND',
      status: 'Trống',
      capacity: '4 người',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Phòng 10',
      timeUsed: '5 giờ',
      totalAmount: '250,000 VND',
      status: 'Đang sử dụng',
      capacity: '10 người',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">BẢNG ĐIỀU KHIỂN</h2>
      <div className="row">
        {rooms.map((room, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={room.image}
                className="card-img-top"
                alt={`Phòng ${index + 1}`}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{room.name}</h5>
                <p className="card-text">
                  <strong>Thời gian sử dụng:</strong> {room.timeUsed}
                </p>
                <p className="card-text">
                  <strong>Tổng tiền:</strong> {room.totalAmount}
                </p>
                <p className="card-text">
                  <strong>Trạng thái:</strong>{' '}
                  <span
                    className={`badge ${
                      room.status === 'Đang sử dụng' ? 'bg-success' : 'bg-secondary'
                    }`}
                  >
                    {room.status}
                  </span>
                </p>
                <p className="card-text">
                  <strong>Sức chứa:</strong> {room.capacity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
