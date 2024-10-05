const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = mysql2.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: process.env.DB_USER,
  database: process.env.MYSQL_DB,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  connectionLimit: 10,
});
module.exports = dbConnection.promise();
