// src/components/Admin/RoomManagement.js
import React, { useState } from 'react';

const RoomManagement = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Phòng 1', type: 'VIP' },
    { id: 2, name: 'Phòng 2', type: 'Standard' },
  ]);
  const [newRoom, setNewRoom] = useState({ name: '', type: '' });

  const handleAddRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, ...newRoom }]);
    setNewRoom({ name: '', type: '' });
  };

  return (
    <div>
      <h2>Quản lý phòng</h2>
      <input type="text" value={newRoom.name} onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })} placeholder="Tên phòng" />
      <input type="text" value={newRoom.type} onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })} placeholder="Loại phòng" />
      <button onClick={handleAddRoom}>Thêm phòng</button>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.name} ({room.type}) <button>Xem</button> <button>Cập nhật</button> <button>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomManagement;
