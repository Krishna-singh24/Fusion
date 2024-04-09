import  mongoose, { Schema }  from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    feedback:{
        type:String,
        required:true,
    },

},{
    timestamps:true
})

const Feedback= mongoose.model("Feedback",feedbackSchema)

export {Feedback};