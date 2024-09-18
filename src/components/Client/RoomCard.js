import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <h3>{room.name}</h3>
      <p>Máy hoạt động: {room.available}</p>
      <p>Máy bận: {room.busy}</p>
      <p>Máy hỏng: {room.broken}</p>
      <p>Cấu hình: {room.config}</p>
      <button>Xem chi tiết</button>
    </div>
  );
};

export default RoomCard;
