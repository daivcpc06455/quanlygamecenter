// src/components/Client/RoomBooking.js
import React from 'react';

const RoomBooking = () => {
  return (
    <div>
      <h2>Đặt phòng</h2>
      <form>
        <div className="form-group">
          <label>Chọn phòng</label>
          <select className="form-control">
            <option>Phòng 1 - VIP</option>
            <option>Phòng 2 - Standard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ngày đặt</label>
          <input type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Đặt phòng</button>
      </form>
    </div>
  );
};

export default RoomBooking;
