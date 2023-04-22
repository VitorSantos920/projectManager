const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projectmanager',
  port: 3306,
});

module.exports = connection;
