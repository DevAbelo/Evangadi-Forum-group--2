const express = require("express");
const router=express.Router()
// const authMiddleware = require("../middlewear/authMiddleware")

const {
  getAllQuestions,
  getAnswer,
} = require("../Controller/answerController");
router.post("/answer", getAllQuestions);
router.get("/:questionid", getAnswer);

module.exports=router
