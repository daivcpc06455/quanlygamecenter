import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const RoomManagement = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Phòng 1', status: 'Đang sử dụng', location: 'Tầng 1', capacity: 4, startTime: '10:00', endTime: '12:00', price: 50000, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Phòng 2', status: 'Trống', location: 'Tầng 2', capacity: 2, startTime: '08:00', endTime: '09:00', price: 30000, image: 'https://via.placeholder.com/100' },
  ]);
  
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newRoom, setNewRoom] = useState({
    name: '',
    status: '',
    location: '',
    capacity: '',
    startTime: '',
    endTime: '',
    price: '',
    image: '',
  });

  // Hàm tính tổng thời gian sử dụng
  const calculateTotalTime = (start, end) => {
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    const totalMinutes = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
    return `${Math.floor(totalMinutes / 60)} giờ ${totalMinutes % 60} phút`;
  };

  // Hàm tính tổng tiền phòng
  const calculateTotalPrice = (room) => {
    const totalTime = calculateTotalTime(room.startTime, room.endTime);
    const [hours] = totalTime.split(' giờ').map(Number);
    return room.price * hours;
  };

  // Thêm phòng mới
  const handleAddRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, ...newRoom }]);
    setNewRoom({ name: '', status: '', location: '', capacity: '', startTime: '', endTime: '', price: '', image: '' });
  };

  // Chỉnh sửa phòng
  const handleUpdateRoom = (updatedRoom) => {
    setRooms(rooms.map(room => (room.id === updatedRoom.id ? updatedRoom : room)));
    setSelectedRoom(null);
  };

  // Xóa phòng
  const handleDeleteRoom = (roomId) => {
    setRooms(rooms.filter(room => room.id !== roomId));
    setSelectedRoom(null);
  };

  // Hàm chọn phòng và hiển thị modal
  const handleShowDetails = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Quản lý Phòng</h2>

      {/* Form thêm phòng */}
      <div className="card p-4 shadow-sm mb-5">
        <div className="row g-3">
          <div className="col-md-3">
            <input type="text" className="form-control" value={newRoom.name} onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })} placeholder="Tên phòng" />
          </div>
          <div className="col-md-3">
            <select className="form-control" value={newRoom.status} onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}>
              <option value="">Chọn trạng thái</option>
              <option value="Trống">Trống</option>
              <option value="Đang sử dụng">Đang sử dụng</option>
              <option value="Đang bảo trì">Đang bảo trì</option>
            </select>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" value={newRoom.location} onChange={(e) => setNewRoom({ ...newRoom, location: e.target.value })} placeholder="Vị trí" />
          </div>
          <div className="col-md-3">
            <input type="number" className="form-control" value={newRoom.capacity} onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })} placeholder="Sức chứa" />
          </div>
          <div className="col-md-3 mt-2">
            <input type="time" className="form-control" value={newRoom.startTime} onChange={(e) => setNewRoom({ ...newRoom, startTime: e.target.value })} placeholder="Thời gian bắt đầu" />
          </div>
          <div className="col-md-3 mt-2">
            <input type="time" className="form-control" value={newRoom.endTime} onChange={(e) => setNewRoom({ ...newRoom, endTime: e.target.value })} placeholder="Thời gian kết thúc" />
          </div>
          <div className="col-md-3 mt-2">
            <input type="number" className="form-control" value={newRoom.price} onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })} placeholder="Giá phòng (VND)" />
          </div>
          <div className="col-md-3 mt-2">
            <input type="text" className="form-control" value={newRoom.image} onChange={(e) => setNewRoom({ ...newRoom, image: e.target.value })} placeholder="Link hình ảnh phòng" />
          </div>
          <div className="col-md-3 mt-2">
            <button className="btn btn-primary" onClick={handleAddRoom}>Thêm Phòng</button>
          </div>
        </div>
      </div>

      {/* Bảng danh sách phòng */}
      <h3>Danh sách phòng</h3>
      <table className="table table-striped table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã phòng</th>
            <th scope="col">Tên phòng</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Vị trí</th>
            <th scope="col">Sức chứa</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.name}</td>
              <td>{room.status}</td>
              <td>{room.location}</td>
              <td>{room.capacity}</td>
              <td><img src={room.image} alt={room.name} style={{ width: '80px', height: 'auto' }} /></td> {/* Hình nhỏ lại */}
              <td>
                <button className="btn btn-info btn-sm me-2" onClick={() => handleShowDetails(room)}>Chi tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>{/* Modal chi tiết phòng */}
      {selectedRoom && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-fullscreen" role="document"> {/* Modal fullscreen */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chi tiết phòng {selectedRoom.name}</h5>
              </div>
              <div className="modal-body">
                <img src={selectedRoom.image} alt={selectedRoom.name} style={{ width: '300px', height: 'auto', marginBottom: '15px' }} /> {/* Hình nhỏ hơn */}
                <div className="form-group">
                  <label>Mã phòng: {selectedRoom.id}</label>
                </div>
                <div className="form-group">
                  <label>Tên phòng</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedRoom.name}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Trạng thái</label>
                  <select
                    className="form-control"
                    value={selectedRoom.status}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, status: e.target.value })}
                  >
                    <option value="Trống">Trống</option>
                    <option value="Đang sử dụng">Đang sử dụng</option>
                    <option value="Đang bảo trì">Đang bảo trì</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Vị trí</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedRoom.location}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, location: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Sức chứa</label>
                  <input
                    type="number"
                    className="form-control"
                    value={selectedRoom.capacity}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, capacity: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian bắt đầu</label>
                  <input
                    type="time"
                    className="form-control"
                    value={selectedRoom.startTime}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, startTime: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian kết thúc</label>
                  <input
                    type="time"
                    className="form-control"
                    value={selectedRoom.endTime}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, endTime: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Giá phòng</label>
                  <input
                    type="number"
                    className="form-control"
                    value={selectedRoom.price}
                    onChange={(e) => setSelectedRoom({ ...selectedRoom, price: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Tổng thời gian sử dụng: {calculateTotalTime(selectedRoom.startTime, selectedRoom.endTime)}</label>
                </div>
                <div className="form-group">
                  <label>Tổng tiền phòng: {calculateTotalPrice(selectedRoom)} VND</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" onClick={() => handleUpdateRoom(selectedRoom)}>Sửa</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteRoom(selectedRoom.id)}>Xóa</button>
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedRoom(null)}>Đóng</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
