const mysql2 = require("mysql2");

const dbConnection = mysql2.createConnection({
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
  user: "evangadi-admin",
  database: "evangadi_forum",
  host: "localhost",
  password: "123456",
});
module.exports = dbConnection.promise();
