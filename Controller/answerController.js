const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbconfig"); 

// Function to handle GET request for fetching all questions
async function getAllQuestions(req, res) {
  try {
    // Fetch all questions from the database
    const [questions] = await dbConnection.query("SELECT * FROM questions");

    // Check if there are no questions
    if (questions.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "No questions found.",
        total: 0,
        questions: [],
      });
    }

    // Respond with all questions and metadata
    return res.status(StatusCodes.OK).json({
      total: questions.length,
      questions: questions,
    });
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
