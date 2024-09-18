import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import AdminDashboard from './pages/AdminDashboard';  // Đảm bảo đường dẫn chính xác
import ClientDashboard from './pages/ClientDashboard';  // Đảm bảo đường dẫn chính xác
import RoomManagement from './components/Admin/RoomManagement';
import CustomerManagement from './components/Admin/CustomerManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="rooms" element={<RoomManagement />} />
          <Route path="customers" element={<CustomerManagement />} />
        </Route>

        {/* Client routes */}
        <Route path="/client/*" element={<ClientLayout />}>
          <Route path="dashboard" element={<ClientDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
