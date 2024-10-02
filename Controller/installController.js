const express = require("express");
const app = express();
const mySql = require("mysql2");
const connection = mySql.createConnection({
  host: "localhost",
  user: "evangadi-db",
  password: "evangadi-db",
  database: "evangadi-db",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //if you are using on window make sure to delete this line (The socket Path)
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("It is connected");
  }
});
app.get("/install-table", (req, res) => {
  let users = `CREATE TABLE IF NOT EXISTS users (
    userid INT(20) NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (userid)
  )`;

  let questions = `CREATE TABLE IF NOT EXISTS questions (
    id INT(20) NOT NULL AUTO_INCREMENT,
    questionid VARCHAR(100) NOT NULL UNIQUE,
    userid INT(20) NOT NULL,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    tag VARCHAR(20),
    PRIMARY KEY (id, questionid),
    FOREIGN KEY (userid) REFERENCES users(userid)
  )`;

  let answers = `CREATE TABLE IF NOT EXISTS answers (
    answerid INT(20) NOT NULL AUTO_INCREMENT,
    userid  INT(20) NOT NULL,
    questionid VARCHAR(100) NOT NULL,
    answer VARCHAR(200) NOT NULL,
    PRIMARY KEY (answerid),
    FOREIGN KEY (questionid) REFERENCES questions(questionid),
    FOREIGN KEY (userid) REFERENCES users(userid)

  )`;

  connection.query(users, (err, result) => {
    if (err) console.log(`Error Found: ${err}`);
  });
  connection.query(questions, (err, result) => {
    if (err) console.log(`Error Found: ${err}`);
  });
  connection.query(answers, (err, result) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  res.end("Tables Created"); // The response for the client
  console.log("Tables Created");
});
app.listen(2024, () => {
  console.log(
    "Listening 👍 and running on http://localhost:2024/install-table"
  );
});
