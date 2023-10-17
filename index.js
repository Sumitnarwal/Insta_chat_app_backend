
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"

//routes
import AuthRouter from "./Routes/AuthRoutes.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoutes.js"
import UploadRoute from "./Routes/UploadRote.js"
import ChatRoute from "./Routes/ChatRouter.js"
import MessageRoutes from "./Routes/MessageRouter.js"

///////routers


const app = express()
dotenv.config()
const PORT = process.env.PORT;
//////////to serve images for public
app.use(express.static("public"))
app.use("/images", express.static("images"))
////////////middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//usege of Routes
app.use("/auth", AuthRouter)
app.use("/user", UserRoute)
app.use("/posts", PostRoute)
app.use("/upload", UploadRoute)
app.use("/chat", ChatRoute)
app.use("/message", MessageRoutes)


mongoose.connect(process.env.MONGO_DB)
.then(() =>
    app.listen(process.env.PORT, () =>
        console.log("start"),
        console.log(`listening port ${process.env.PORT}`)))
        .catch((err) => {
            console.log(err)

        })




