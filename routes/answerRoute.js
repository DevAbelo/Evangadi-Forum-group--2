const express = require("express");
const router=express.Router()

const{ getAllQuestions,getAnswer}=require('../Controller/answerController')
router.post("/answer", getAllQuestions);
router.get("/answer/:question_id",getAnswer)
  module.exports=router
