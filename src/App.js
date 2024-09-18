import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import RoomManagement from './components/Admin/RoomManagement';
import CustomerManagement from './components/Admin/CustomerManagement';
import BookingHistory from './components/Admin/BookingHistory';
import Cart from './components/Client/Cart'; // Import Cart
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="rooms" element={<RoomManagement />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="bookings" element={<BookingHistory />} />
          </Route>

          {/* Client routes */}
          <Route path="/client" element={<ClientLayout />}>
            <Route path="dashboard" element={<ClientDashboard />} />
          </Route>

          {/* Cart route */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
