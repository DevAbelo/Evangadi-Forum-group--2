const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbconfig");


async function postAnswer(req,res){
  //Assignee: Liyu
  const {questionid, answer}=req.body
if(!questionid || !answer){
  return res.status(StatusCodes.BAD_REQUEST).json({msg:"please provide all requird information"})
}
try {
  const username=req.user.username;  // from auth middlewear
  const userid=req.user.userid       // from auth middlewear
  await dbConnection.query("insert into answers (questionid,userid,answer) values(?,?,?)",[questionid,userid,answer])
  return res.status(StatusCodes.CREATED).json({msg:"answer added"})
} catch (error) {
  console.log(error.message)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"someting went wrong,try again later"})
}
 
}

// function to get the answer
// Assign to Selam
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

module.exports = { postAnswer, getAnswer };
