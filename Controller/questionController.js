const dbConnection = require("../db/dbconfig");
async function question(req, res) {
  // Assignee: Edom;
  // Assignee: Hanna;

  const { title, description } = req.body;

  console.log("title:", title);
  console.log("description:", description);

  // validate req body
  if (!title || !description) {
    return res.status(400).json({
      error: "Bad Request",
      msg: "please provide all required fields",
    });
  }

  try {
    // const createdBy = req.user ? req.user.userid : null;

    // if(!createdBy) {
    //   return res.status(400).json({
    //     error: 'user id is request!'
    //   })
    // }

    //inser the question

    // await dbConnection.execute(
    //   "INSERT INTO questions (questionid, userid, title,description) VALUES (1,2,?,?)",
    //   [title, description || null]
    // );

    return res.status(201).json({
      msg: "Question created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }

  // res.send("question hanna");
}

function Allquestion(req, res) {
  //Assignee: Feysel
  //Assignee: Belayenesh;

  res.send("All question");
}

module.exports = { question, Allquestion };
