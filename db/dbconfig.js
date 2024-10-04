const mysql2 = require("mysql2");

const dbConnection = mysql2.createConnection({
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
    user: "Evangadi-admin",
  database: "Evangadi-admin",
  host: "localhost",
  password: "123456789",
  connectionLimit: 10,
   
  });
  module.exports=dbConnection.promise()