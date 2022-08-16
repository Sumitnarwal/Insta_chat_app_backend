
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import AuthRouter from "./Routes/AuthRoutes.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoutes.js"
import UploadRoute from "./Routes/UploadRote.js"
///////routers


////////////middleware
const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//usege of Roters
app.use("/auth", AuthRouter)
app.use("/user", UserRoute)
app.use("/post", PostRoute)
app.use("/upload", UploadRoute)


mongoose.connect(process.env.MONGO_DB).then(() =>
    app.listen(process.env.PORT, () =>

        console.log(`listening port ${process.env.PORT}`))).catch((err) => {
            console.log(err)
        })




