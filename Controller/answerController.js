const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbconfig");

// Function to handle GET request for fetching all questions
async function getAllQuestions(req, res) {
  try {
    // Fetch all questions from the database
    const [questions] = await dbConnection.query(
      "select questions.id,questions.questionid,questions.userid,questions.title,questions.description,users.username, questions.created_at from questions INNER JOIN users where questions.userid = users.userid"
    );
    return res
      .status(StatusCodes.OK)
      .json({ msg: "All question sent", questions });
  } catch (error) {
    console.error("Database query error:", error.message); // Log the error for debugging
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

// function to get the answer
async function getAnswer(req, res) {
  // const { questionid, answer } = req.body;
  // req.params: Used to get data from the URL path of the request, typically in GET requests.
  const { questionid } = req.params;

  if (!questionid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide a question ID." });
  }
  try {
    // First, check if the question exists
    const [questions] = await dbConnection.query(
      "SELECT questionid FROM questions WHERE questionid = ?",
      [questionid]
    );
    // If the question does not exist, return an error
    if (questions.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "No question found with this ID." });
    }
    // const userid = req.user.userid; // from auth middlewear
    
    // retrieve/get answers for a specific question
    const [answer] = await dbConnection.query(
      "SELECT answerid, answer, created_at FROM answers WHERE questionid = ?",
      [questionid]
    );
    return res.status(StatusCodes.OK).json({ questionid, answer: answer });
  } catch (error) {
    // console.error("Error while submitting answer:", error.message);
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, please try again!" });
  }
}

module.exports = { getAllQuestions, getAnswer };
