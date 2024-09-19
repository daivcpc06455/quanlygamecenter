// index.js hoặc App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import RoomManagement from './components/Admin/RoomManagement';
import CustomerManagement from './components/Admin/CustomerManagement';
import ServiceManagement from './components/Admin/ServiceManagement';
import Statistics from './components/Admin/Statistics';
import BookingHistory from './components/Admin/BookingHistory'; // Thêm quản lý đơn đặt phòng
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Trang dashboard chính cho admin */}
          <Route index element={<AdminDashboard />} />

          {/* Các route khác trong admin */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="customers" element={<CustomerManagement />} />
          <Route path="bookings" element={<BookingHistory />} />
          <Route path="services" element={<ServiceManagement />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>

        {/* Client routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
        </Route>

        {/* Routes cho Login và Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Redirect về trang đăng nhập nếu không tìm thấy route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
