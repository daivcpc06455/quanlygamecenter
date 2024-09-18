import React, { useState } from 'react';
import './Css/RoomBooking.css';

const RoomBooking = ({ rooms }) => {
  const [selectedHours, setSelectedHours] = useState(1);

  // Hàm xử lý đặt phòng
  const handleBooking = (room) => {
    const totalCost = selectedHours * room.pricePerHour;
    alert(`Đặt phòng ${room.name} cho ${selectedHours} tiếng. Tổng tiền: ${totalCost} VND`);
  };

  return (
    <div className="room-booking-container">
      <h2>Đặt phòng</h2>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>{room.name}</h3>
            <p>Cấu hình: {room.config}</p>
            <p>Máy trống: {room.available}</p>
            <label>Chọn thời gian:</label>
            <select value={selectedHours} onChange={(e) => setSelectedHours(parseInt(e.target.value))}>
              <option value={1}>1 tiếng</option>
              <option value={2}>2 tiếng</option>
              <option value={5}>5 tiếng</option>
              <option value={10}>10 tiếng</option>
            </select>
            <br />
            <button onClick={() => handleBooking(room)}>Đặt phòng</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomBooking;
