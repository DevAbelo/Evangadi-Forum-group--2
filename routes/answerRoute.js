const express = require("express");
const router=express.Router()

const{ getAllQuestions,getAnswer}=require('../Controller/answerController')
router.post("/answer", getAllQuestions);
router.get("/:questionid", authMiddleware, getAnswer);

  module.exports=router
