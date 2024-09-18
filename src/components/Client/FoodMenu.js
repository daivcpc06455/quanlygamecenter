import React, { useState } from 'react';
import './Css/FoodMenu.css';

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
    <div>
      <h2>Menu Đồ Ăn và Thức Uống</h2>
      <input
        type="text"
        placeholder="Tìm kiếm món ăn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFoods.map(food => (
          <li key={food.id}>
            {food.name} - {food.price} VND
            <button onClick={() => addToCart(food)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodMenu;
