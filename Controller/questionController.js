const dataBaseConnection = require("../db/dbconfig");
const { StatusCodes } = require("http-status-codes");
function question(req, res) {
  // Assignee: Edom;
  // Assignee: Hanna;

  res.send("question hanna");
}

async function Allquestion(req, res) {
  try {
    const [results] = await dataBaseConnection.query(
      `SELECT 
          questions.questionid AS question_id, 
          questions.title, 
          questions.description AS content, 
          users.username AS user_name 
      FROM questions 
      JOIN users ON questions.userid = users.userid 
      ORDER BY questions.id DESC`
    );
    return res.status(StatusCodes.OK).json({ questions: results });
  } catch (error) {
    // console.log(error.message);
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "No questions found" });
  }
}

module.exports = { question, Allquestion };
