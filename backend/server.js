// backend/server.js

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sql = require('mssql');
const dbConfig = require('./dbConfig'); // Import cấu hình kết nối cơ sở dữ liệu

const app = express();

// Middleware
app.use(cors()); // Cho phép truy cập từ domain khác
app.use(express.json()); // Parse request body với định dạng JSON

// Kết nối tới SQL Server
sql.connect(dbConfig)
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('Error connecting to SQL Server:', err);
  });

// Sử dụng routes cho người dùng
app.use('/api/users', userRoutes);

// Middleware kiểm tra các route không tồn tại
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Xử lý lỗi toàn cục
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Khởi động server trên cổng 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
