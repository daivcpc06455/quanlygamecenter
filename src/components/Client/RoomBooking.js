import React, { useState } from 'react';
import './RoomBooking.css'; // Import file CSS cho RoomBooking

const RoomBooking = ({ addRoomToCart }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Phòng A',
      price: 50000,
      description: 'Phòng rộng rãi với máy lạnh và màn hình 24 inch.',
      amenities: ['Máy lạnh', 'Màn hình 24 inch', 'Internet tốc độ cao'],
    },
    {
      id: 2,
      name: 'Phòng B',
      price: 60000,
      description: 'Phòng có màn hình 32 inch và ghế gaming thoải mái.',
      amenities: ['Màn hình 32 inch', 'Ghế gaming', 'Internet tốc độ cao'],
    },
    {
      id: 3,
      name: 'Phòng C',
      price: 70000,
      description: 'Phòng VIP với màn hình 34 inch cong và tai nghe xịn.',
      amenities: ['Màn hình 34 inch cong', 'Ghế gaming cao cấp', 'Tai nghe xịn'],
    },
  ];

  const handleSelectRoom = (room) => {
    if (selectedRoom && selectedRoom.id === room.id) {
      // Nếu phòng đang được chọn, bỏ chọn nó (tắt chi tiết)
      setSelectedRoom(null);
    } else {
      // Nếu phòng chưa được chọn, hiển thị chi tiết
      setSelectedRoom(room);
    }
  };

  const handleBookRoom = () => {
    if (selectedRoom) {
      addRoomToCart(selectedRoom); // Thêm phòng vào giỏ hàng
      alert(`Bạn đã đặt phòng: ${selectedRoom.name}`);
    }
  };

  return (
    <div className="room-booking-container">
      <h2 className="room-booking-title">Đặt Phòng</h2>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={room.id} className="room-item">
            <span className="room-name">{room.name}</span> - <span className="room-price">{room.price} VND</span>
            <button className="select-room-button" onClick={() => handleSelectRoom(room)}>
              {selectedRoom && selectedRoom.id === room.id ? 'Ẩn Chi Tiết' : 'Xem Chi Tiết'}
            </button>
          </li>
        ))}
      </ul>

      {selectedRoom && (
        <div className="selected-room">
          <h3>Chi Tiết Phòng: {selectedRoom.name}</h3>
          <p>{selectedRoom.description}</p>
          <ul>
            {selectedRoom.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <button className="book-room-button" onClick={handleBookRoom}>
            Đặt Phòng
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomBooking;
