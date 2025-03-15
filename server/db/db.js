import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// function for connecting to database 
const connectDB = () => {

  const mongoDB_URI = process.env.MONGODB_URI;

  mongoose
    .connect(mongoDB_URI) // connecting to database
    .then(() => console.log("DB connection successful!"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
