const mysql2 = require("mysql2");

const dbConnection = mysql2.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: "sql5734406",
  database: "sql5734406",
  host: "sql5.freemysqlhosting.net",
  password: "mDBp2G3SB1"
});
module.exports = dbConnection.promise();
