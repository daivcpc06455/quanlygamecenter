import React from 'react';
import './Css/History.css';

const History = ({ cartItems }) => {
  return (
    <div className="history-container">
      <h2>Lịch sử mua hàng</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} VND - Số lượng: 1
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có giao dịch nào.</p>
      )}
      <h4>
        Tổng tiền: {cartItems.reduce((total, item) => total + item.price, 0)} VND
      </h4>
    </div>
  );
};

export default History;
