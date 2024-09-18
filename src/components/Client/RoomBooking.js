import React, { useState } from 'react';

const RoomBooking = ({ addRoomToCart }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    { id: 1, name: 'Phòng A', price: 50000 },
    { id: 2, name: 'Phòng B', price: 60000 },
    { id: 3, name: 'Phòng C', price: 70000 },
  ];

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    addRoomToCart(room); // Thêm phòng vào giỏ hàng
  };
  return (
    <div>
      <h2>Đặt Phòng Quán Nét</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.name} - {room.price} VND
            <button onClick={() => handleSelectRoom(room)}>Chọn Phòng</button>
          </li>
        ))}
      </ul>
      {selectedRoom && (
        <div>
          <h3>Bạn đã chọn: {selectedRoom.name}</h3>
        </div>
      )}
    </div>
  );
};

export default RoomBooking;
