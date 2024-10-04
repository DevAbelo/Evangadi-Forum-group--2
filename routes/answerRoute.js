const express = require("express");
const router=express.Router()

const{postAnswer,getAnswer}=require('../Controller/answerController')
router.post("/answer",postAnswer)
router.get("/:questionid", authMiddleware, getAnswer);
  module.exports=router
