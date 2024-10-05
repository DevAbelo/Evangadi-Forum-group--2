const express = require("express");
const router=express.Router()

const{postAnswer,getAnswer}=require('../Controller/answerController')
router.post("/answer",postAnswer)
router.get("/answer/:question_id", getAnswer)

  module.exports=router
