// backend/controller/userController.js

const sql = require('mssql');
const bcrypt = require('bcrypt'); // Dùng để mã hóa mật khẩu
const dbConfig = require('../dbConfig');

// Hàm đăng ký người dùng
exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kết nối SQL Server và thêm người dùng mới
    await sql.connect(dbConfig);
    await sql.query`INSERT INTO Users (username, password, email) VALUES (${username}, ${hashedPassword}, ${email})`;

    res.status(200).send('User registered successfully');
  } catch (err) {
    console.error('Error during user registration:', err);
    res.status(500).send('Server error');
  }
};

// Hàm đăng nhập người dùng
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    await sql.connect(dbConfig);
    const result = await sql.query`SELECT * FROM Users WHERE username = ${username}`;

    if (result.recordset.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = result.recordset[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send('Login successful');
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Server error');
  }
};
