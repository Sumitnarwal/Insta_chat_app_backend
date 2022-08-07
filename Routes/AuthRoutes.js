import express from "express";
import  registerUser  from "../controllers/AuthController";
//const express=require("express")
const router = express.Router()

router.post("/register",registerUser)


export default router

