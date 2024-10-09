const express = require("express");
const router=express.Router()

const{question,Allquestion}=require('../Controller/questionController')
router.post("/question",question)
router.get("/question",Allquestion)
  module.exports=router
