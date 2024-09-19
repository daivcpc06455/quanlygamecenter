// backend/dbConfig.js

const sql = require('mssql');

const dbConfig = {
  user: 'sa',
  password: '123',
  server: 'CHIDAI4353',
  database: 'QLQUANNET',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

module.exports = dbConfig;
