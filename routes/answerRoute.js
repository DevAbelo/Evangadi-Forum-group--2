const express = require("express");
const router=express.Router()
// const authMiddleware = require("../middlewear/authMiddleware")

const {
  postAnswer,
  getAnswer,
} = require("../Controller/answerController");
router.post("/answer", postAnswer);

// Route to get answers for a specific question (GET method)
router.get("/:questionid", getAnswer);

module.exports=router
