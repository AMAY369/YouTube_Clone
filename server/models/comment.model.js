import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",  //reference to user model 
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video",  //reference to video model 
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const comment = mongoose.model("comment", commentSchema);

export default comment;
