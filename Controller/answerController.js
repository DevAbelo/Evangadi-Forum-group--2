const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbconfig"); 

// Function to handle GET request for fetching all questions
async function getAllQuestions(req, res) {
  try {
    // Fetch all questions from the database
const [questions]= await dbConnection.query("select questions.id,questions.questionid,questions.userid,questions.title,questions.description,users.username from questions INNER JOIN users where questions.userid = users.userid")
    return res.status(StatusCodes.OK).json({msg:"All question sent",questions})

  } catch (error) {
    console.error("Database query error:", error.message); // Log the error for debugging
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}



function getAnswer(req, res) {
  //Assignee: Selam

  res.send("get All answer for specific id question");
}

module.exports = { getAllQuestions, getAnswer };
