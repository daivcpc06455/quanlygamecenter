import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceManagement = () => {
  // Dữ liệu dịch vụ mẫu với hình ảnh sản phẩm
  const [services, setServices] = useState([
    { id: 1, name: 'Pizza', price: '100,000 VND', category: 'Đồ ăn', description: 'Pizza thơm ngon', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Nước ép cam', price: '40,000 VND', category: 'Thức uống', description: 'Nước ép cam tươi', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Combo Pizza và Nước', price: '130,000 VND', category: 'Combo', description: 'Gồm pizza và nước uống', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Hamburger', price: '60,000 VND', category: 'Đồ ăn', description: 'Hamburger bò ngon', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Coca Cola', price: '20,000 VND', category: 'Thức uống', description: 'Nước giải khát có ga', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Khoai tây chiên', price: '35,000 VND', category: 'Đồ ăn', description: 'Khoai tây chiên giòn', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Bánh mì kẹp', price: '45,000 VND', category: 'Đồ ăn', description: 'Bánh mì kẹp thịt', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Trà đào', price: '50,000 VND', category: 'Thức uống', description: 'Trà đào mát lạnh', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Combo Hamburger và Nước', price: '90,000 VND', category: 'Combo', description: 'Hamburger và nước uống', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Pepsi', price: '20,000 VND', category: 'Thức uống', description: 'Nước giải khát Pepsi', image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Gà rán', price: '75,000 VND', category: 'Đồ ăn', description: 'Gà rán KFC giòn tan', image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Sinh tố bơ', price: '60,000 VND', category: 'Thức uống', description: 'Sinh tố bơ ngọt mát', image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Kem socola', price: '30,000 VND', category: 'Đồ ăn', description: 'Kem socola đậm vị', image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Cà phê sữa', price: '45,000 VND', category: 'Thức uống', description: 'Cà phê sữa thơm ngon', image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Combo Gà rán và Pepsi', price: '95,000 VND', category: 'Combo', description: 'Gà rán và Pepsi', image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Bánh ngọt', price: '25,000 VND', category: 'Đồ ăn', description: 'Bánh ngọt thơm ngon', image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Trà sữa trân châu', price: '50,000 VND', category: 'Thức uống', description: 'Trà sữa trân châu mát lạnh', image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Bánh xèo', price: '70,000 VND', category: 'Đồ ăn', description: 'Bánh xèo truyền thống', image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Sinh tố dâu', price: '60,000 VND', category: 'Thức uống', description: 'Sinh tố dâu tươi ngon', image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Sushi', price: '150,000 VND', category: 'Đồ ăn', description: 'Sushi tươi ngon theo phong cách Nhật', image: 'https://via.placeholder.com/150' },
  ]);

  // Xóa dịch vụ
  const deleteService = (id) => {
    const filteredServices = services.filter((service) => service.id !== id);
    setServices(filteredServices);
  };

  // Tạm thời hiển thị thông báo khi người dùng chọn "Cập nhật" hoặc "Thêm"
  const handleUpdateService = (service) => {
    alert(`Cập nhật dịch vụ: ${service.name}`);
  };

  const handleAddService = () => {
    alert('Thêm dịch vụ mới');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Quản lý dịch vụ</h2>

      {/* Button thêm dịch vụ */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={handleAddService}>
          Thêm dịch vụ mới
        </button>
      </div>

      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.name}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">
                  <strong>Giá:</strong> {service.price}
                </p>
                <p className="card-text">
                  <strong>Loại:</strong> {service.category}
                </p>
                <p className="card-text">
                  <strong>Mô tả:</strong> {service.description}
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-warning me-2" onClick={() => handleUpdateService(service)}>
                  Cập nhật
                </button>
                <button className="btn btn-danger" onClick={() => deleteService(service.id)}>
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManagement;
