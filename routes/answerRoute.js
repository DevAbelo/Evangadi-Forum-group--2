const express = require("express");
const router=express.Router()

const{postAnswer,getAnswer}=require('../Controller/answerController')
router.post("/answer",postAnswer)
router.post("/answer/:question_id",getAnswer)  //better with post even if we try to get 
module.exports=router                           //answer for specifice question

