

import mongoose from "mongoose";
const ChatSchema=mongoose.Schema({
    members:{
        type:Array,
    },

},
{
    timestamps: true,
    versionKey: false,
}
)

const ChatModel=mongoose.model("Chat",ChatSchema)
export default ChatModel