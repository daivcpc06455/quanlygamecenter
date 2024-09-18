import React from 'react';

const ClientDashboard = ({ rooms }) => {
  return (
    <div className="dashboard">
      <h2>Danh sách các phòng</h2>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p>Cấu hình: {room.config}</p>
            <p>Máy trống: {room.available}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
