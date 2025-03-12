import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/db.js";

const app = express();
app.use(express.json());

connectDB();

app.listen(3000,()=>{console.log("Server is running on PORT 3000")});