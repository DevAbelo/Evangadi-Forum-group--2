// import dbConnection from "./installController"

function register(req, res) {
  //check all required information
  //sql statement
  //query
  //Assignee: Ephrame
// Assignee: Bereket; 
  res.send("register");
}

// start cheuser here 
// function checkuser(req, res) {
//   //Assignee: Habte & Bekalu
//   res.send("check user");
  
// }

function checkuser(req, res) {
  //Assignee: Habte and bekalu
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
