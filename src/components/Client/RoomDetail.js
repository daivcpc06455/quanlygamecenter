import React from 'react';
import { useParams } from 'react-router-dom';
import './Css/RoomDetail.css';

// Dữ liệu mẫu về phòng (có thể thay thế bằng API)
const roomData = {
  1: { name: 'Phòng VIP 1', available: 5, busy: 2, broken: 1, config: 'i7, 16GB RAM, RTX 3070', description: 'Phòng VIP với cấu hình cao cấp.' },
  2: { name: 'Phòng Thường 1', available: 3, busy: 5, broken: 0, config: 'i5, 8GB RAM, GTX 1060', description: 'Phòng thường với giá cả hợp lý.' },
  3: { name: 'Phòng Đôi', available: 4, busy: 3, broken: 2, config: 'Ryzen 5, 16GB RAM, RTX 3060', description: 'Phòng đôi với không gian riêng tư.' },
};

const RoomDetail = () => {
  const { id } = useParams();  // Lấy id của phòng từ URL
  const room = roomData[id];

  return (
    <div className="room-detail">
      <h1>{room.name}</h1>
      <p>Cấu hình: {room.config}</p>
      <p>Mô tả: {room.description}</p>
      <p>Máy trống: {room.available}</p>
      <p>Máy bận: {room.busy}</p>
      <p>Máy hỏng: {room.broken}</p>
    </div>
  );
};

export default RoomDetail;
