const express = require("express");
const router=express.Router()
const{register,checkuser,login}=require('../Controller/userController')

// user register 
router.post("/register",register)


  router.post("/login",login)
  router.get("/check",checkuser)

  module.exports=router
