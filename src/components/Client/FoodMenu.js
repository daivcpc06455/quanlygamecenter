import React, { useState } from 'react';
import './FoodMenu.css'; // Import CSS cho FoodMenu

const FoodMenu = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const foods = [
    { id: 1, name: 'Mì xào', price: 30000 },
    { id: 2, name: 'Trà sữa', price: 25000 },
    { id: 3, name: 'Bánh mì', price: 20000 },
  ];

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-menu-container">
      <h2 className="food-menu-title">Menu Đồ Ăn và Thức Uống</h2>
      <input
        type="text"
        className="food-search-input"
        placeholder="Tìm kiếm món ăn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="food-list">
        {filteredFoods.map(food => (
          <li key={food.id} className="food-item">
            <span className="food-name">{food.name}</span> - <span className="food-price">{food.price} VND</span>
            <button className="add-to-cart-button" onClick={() => addToCart(food)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodMenu;
