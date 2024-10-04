function postAnswer(req, res) {
  //Assignee: Liyu
  res.send("post Answer to specific id question");
}

const dbConnection = require("../db/dbconfig");
const { StatusCodes } = require("http-status-codes");

async function getAnswer(req, res) {
  const { questionid, answer } = req.body;

  // Check if questionid and answer are provided
  if (!questionid || !answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide both question ID and answer." });
  }

  // Optionally, validate questionid is a number
  if (isNaN(questionid)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Question ID must be a number." });
  }

  try {
    // First, check if the question exists
    const [questions] = await dbConnection.query(
      "SELECT * FROM questions WHERE id = ?",
      [questionid]
    );
    // If the question does not exist, return an error
    if (questions.length === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "No question found with this ID." });
    }

    // Insert the answer into the database
    await dbConnection.query(
      "INSERT INTO answers (questionid, answer) VALUES (?, ?)",
      [questionid, answer]
    );

    return res.status(StatusCodes.CREATED).json({ answer: answer });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, please try again!" });
  }
}

module.exports = getAnswer;
