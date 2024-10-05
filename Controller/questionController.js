function question(req, res) {
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
