const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = mysql2.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: process.env.USER,
  password: process.env.PASSWORD, // Make sure this is correct
  database: process.env.DATABASE,
  host: "localhost",
  port: 3307, // Specify the port
  connectionLimit: 10,
});
  module.exports=dbConnection.promise()
  

// const mysql2 = require("mysql2");
//  const dotenv = require("dotenv");
// dotenv.config();

// const dbConnection = mysql2.createPool({
//   user: process.env.USER,
//   password: process.env.PASSWORD, // Make sure this is correct
//   database: process.env.DATABASE,
//   host: "localhost",
//   port: 3307, // Specify the port
//   connectionLimit: 10,
// });

// module.exports = dbConnection.promise();