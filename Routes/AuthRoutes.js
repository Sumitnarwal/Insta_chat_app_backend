import express from "express";
import  registerUser, { loginUser }  from "../controllers/AuthController.js";
//const express=require("express")
const router = express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)

export default router




