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
import BookingHistory from './components/Admin/BookingHistory'; // Thêm quản lý đơn đặt phòng



// import UserManagement from './components/Admin/UserManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="customers" element={<CustomerManagement />} />
          <Route path="bookings" element={<BookingHistory />} /> {/* Quản lý đơn đặt phòng */}
        </Route>

        {/* Client routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
