const express = require("express");
const router=express.Router()

const authMiddleware = require('../middlewear/authMiddleware')
const{register,checkuser,login}=require('../Controller/userController')
router.post("/register",register)
  router.post("/login",login)
  router.get("/check",authMiddleware,checkuser)

  module.exports=router
