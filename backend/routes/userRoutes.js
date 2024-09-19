// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Route đăng ký
router.post('/register', userController.registerUser);

// Route đăng nhập
router.post('/login', userController.loginUser);

module.exports = router;
