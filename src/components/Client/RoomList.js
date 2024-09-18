import React from 'react';
import ClientDashboard from '../../pages/ClientDashboard';
import RoomBooking from '../../components/Client/RoomBooking';
import './Css/RoomList.css';

const RoomList = () => {
  // Danh sách các phòng
  const rooms = [
    { id: 1, name: 'Phòng VIP 1', available: 5, busy: 2, broken: 1, config: 'i7, 16GB RAM, RTX 3070' },
    { id: 2, name: 'Phòng Thường 1', available: 3, busy: 5, broken: 0, config: 'i5, 8GB RAM, GTX 1060' },
    { id: 3, name: 'Phòng Đôi', available: 4, busy: 3, broken: 2, config: 'Ryzen 5, 16GB RAM, RTX 3060' },
  ];

  return (
    <div>
      {/* Truyền dữ liệu rooms vào cả ClientDashboard và RoomBooking */}
      <ClientDashboard rooms={rooms} />
      <RoomBooking rooms={rooms} />
    </div>
  );
};

export default RoomList;
