const express = require("express");
const router=express.Router()
// const authMiddleware = require("../middlewear/authMiddleware")

const {
  postAnswer,
  getAnswer,
} = require("../Controller/answerController");

// Route to get answers for a specific question (GET method)

router.post("/answer", postAnswer);

router.get("/:questionid", getAnswer);

module.exports=router
