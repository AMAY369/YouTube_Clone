import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/db.js";
import userRoutes from './routes/user.route.js'
import videoRoutes from './routes/video.route.js'

import cookieParser from "cookie-parser";
// import commentRoutes from './routes/comment.route.js'

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB();


app.use('/auth', userRoutes)
app.use('/api', videoRoutes)

app.listen(3000,()=>{console.log("Server is running on PORT 3000")});