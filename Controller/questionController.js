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

async function question(req, res) {
  const { questionid, title, description } = req.body;

  // Validate input
  if (!questionid || !title || !description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all required information" });
  }
  if (title.length > 200) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Title must be less than 200 characters" });
  }

  try {
    const username = req.user.username; // from auth middleware
    const userid = req.user.userid; // from auth middleware

    // Check for duplicate question ID
    const [existingQuestion] = await dbConnection.query(
      "SELECT * FROM questions WHERE questionid = ?",
      [questionid]
    );
    if (existingQuestion.length > 0) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ msg: "Question ID already exists" });
    }

    // Insert new question
    await dbConnection.query(
      "INSERT INTO questions (questionid, userid, title, description) VALUES (?, ?, ?, ?)",
      [questionid, userid, title, description]
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Question added", questionid });
  } catch (error) {
    console.error("Error adding question:", error); // Log error with context
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later" });
  }
}