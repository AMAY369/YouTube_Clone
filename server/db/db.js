import mongoose from "mongoose";


// function for connecting to database 
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/youtube") // connecting to database
    .then(() => console.log("DB connection successful!"))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
