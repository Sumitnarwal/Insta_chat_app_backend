
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRouter from "./Routes/AuthRoutes.js"
///////routers


////////////middleware
const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//usege of Roters
app.use("/auth",AuthRouter)

mongoose.connect(process.env.MONGO_DB).then(()=>
app.listen(process.env.PORT,()=>

console.log(`listening port ${process.env.PORT}`))).catch((err)=>{
    console.log(err)
})



