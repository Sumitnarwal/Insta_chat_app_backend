import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        lastname: { type: String, required: true },
        isAdmin: { type: Boolean, required: false },
        password: { type: String, required: true },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesAt: String,
        worksAt: String,
        relationship: String,
        followers: [],
        following: [],
    }, 
    {timestamps: true}

)
const UserModel=mongoose.model("Users",UserSchema)

export default UserModel 

