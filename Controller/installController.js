const dbConnection = require("../db/dbconfig");
async function install(req, res) {
  // Assignee: Eyob;
  let createuser = `CREATE TABLE if not exists users(
    userid int(20) not null auto_increment,
    username varchar(20) not null,
    firstname varchar(20) not null,
    lastname varchar(20) not null,
    email varchar(20) not null,
    password varchar(100) not null,
    PRIMARY KEY (userid)
)`;
  let createquestions = `CREATE TABLE if not exists questions(
    id int(20) not null auto_increment,
    questionid varchar(100) not null unique,
    userid int(20) not null,
    title varchar(200) not null,
    description varchar(300) not null,
    tag varchar(20),
    PRIMARY KEY (id,questionid),
    FOREIGN KEY (userid) REFERENCES users(userid)
)`;
  let createanswers = `CREATE TABLE if not exists answers(
    answerid int(20) not null auto_increment,
    userid int(20) not null,
    questionid varchar(100) not null unique,
    answer varchar(500) not null,
    PRIMARY KEY (answerid),
    FOREIGN KEY (questionid) REFERENCES questions(questionid),
    FOREIGN KEY (userid) REFERENCES users(userid)
    
)`;
  let alterquestion = `ALTER TABLE questions ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`;
   let alteranswer= `ALTER TABLE answers ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`;
  try {
    await dbConnection.query(createuser);
    await dbConnection.query(createquestions);
    await dbConnection.query(createanswers);
    await dbConnection.query(alterquestion);
    await dbConnection.query(alteranswer);
    return res.status(201).json({ msg: "table created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "someting went wrong,try again later" });
  }
}

module.exports = { install };
