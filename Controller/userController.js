const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbconfig");
const dotenv = require("dotenv");
dotenv.config();

// user register
async function register(req, res) {
  // check if the user provides all the information required
  const { username, first_name, last_name, email, password } = req.body;
  if (!email || !password || !first_name || !last_name || !username) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Bad Request",
      message: "Please provide all required fields",
    });
  }
  // response if the input password less than 8 digit
  if (password.length < 8) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Bad Request",
      message: "Password must be at least 8 characters",
    });
  }
  try {
    // check if the user already exists
    const [user] = await dbConnection.query(
      "SELECT username,userid FROM users WHERE username = ? or email = ?",
      [username, email]
    );
    // response if the user exists
    if (user.length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "Conflict",
        message: "User already existed",
      });
    }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // insert the user to database
    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, first_name, last_name, email, hashedPassword]
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

function checkuser(req, res) {
  //Assignee: Habte and bekalu 10/04/2024
  const username = req.user.username;
  const userid = req.user.userid;
  return res
    .status(StatusCodes.OK)
    .json({ msg: "valid user", username, userid });
}

// end check user here

function login(req, res) {
  //   Assignee: Abel

  res.send("login");
}

module.exports = { register, checkuser, login };
