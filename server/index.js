import express from "express";
import connectDB from "./db/db.js";
import userRoutes from './routes/user.route.js'
import videoRoutes from './routes/video.route.js'

import cookieParser from "cookie-parser";
import commentRoutes from './routes/comment.route.js'
import cors from 'cors'
import searchRoutes from './routes/search.route.js'


const app = express();
app.use(express.json());
connectDB();
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}))


app.use('/auth', userRoutes)
app.use('/api', videoRoutes)
app.use('/api',searchRoutes)
app.use('/api', commentRoutes)

app.listen(3000,()=>{console.log("Server is running on PORT 3000")});