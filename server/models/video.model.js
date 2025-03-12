import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    videoLink:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        default:"All"
    },
    like:{
        type:Number,
        default:0
    },
    dislike:{
        type:Number,
        default:0
    }
},{timestamps:true})

const video  = mongoose.model('video',videoSchema);

export default video;