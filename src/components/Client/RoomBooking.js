import React, { useState } from 'react';

const RoomBooking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    { id: 1, name: 'Phòng A', price: 50000 },
    { id: 2, name: 'Phòng B', price: 60000 },
    { id: 3, name: 'Phòng C', price: 70000 },
  ];

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Đặt Phòng Quán Nét</h2>
      <input
        type="text"
        placeholder="Tìm kiếm phòng..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRooms.map(room => (
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
