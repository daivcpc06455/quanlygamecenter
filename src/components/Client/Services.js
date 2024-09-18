import React, { useState } from 'react';
import './Css/Services.css';

const Services = ({ cartItems, addToCart }) => {
  const categories = ['Đồ ăn', 'Đồ ăn vặt', 'Nước uống', 'Các món thêm'];
  const [selectedCategory, setSelectedCategory] = useState('Đồ ăn');

  const allFoods = {
    'Đồ ăn': [
      { id: 1, name: 'Mì xào', price: 30000 },
      { id: 2, name: 'Cơm chiên', price: 35000 },
    ],
    'Đồ ăn vặt': [
      { id: 3, name: 'Snack khoai tây', price: 15000 },
      { id: 4, name: 'Bánh mì nướng', price: 20000 },
    ],
    'Nước uống': [
      { id: 5, name: 'Trà sữa', price: 25000 },
      { id: 6, name: 'Cà phê', price: 20000 },
    ],
    'Các món thêm': [
      { id: 7, name: 'Xúc xích', price: 20000 },
      { id: 8, name: 'Trứng ốp la', price: 15000 },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="services-container">
      <div className="category-sidebar">
        <h3>Danh mục món ăn</h3>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="food-list">
        <h3>{selectedCategory}</h3>
        <ul>
          {allFoods[selectedCategory].map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} VND
              <button onClick={() => handleAddToCart(item)}>Thêm vào giỏ</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-summary">
        <h3>Giỏ hàng</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} VND - Số lượng: 1
            </li>
          ))}
        </ul>
        <h4>
          Tổng tiền: {cartItems.reduce((total, item) => total + item.price, 0)} VND
        </h4>
        <button onClick={() => alert('Thanh toán thành công!')}>Thanh toán</button>
      </div>
    </div>
  );
};

export default Services;
