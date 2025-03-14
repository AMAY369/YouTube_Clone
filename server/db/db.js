import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/youtube")
    .then(() => console.log("DB connection successful!"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
