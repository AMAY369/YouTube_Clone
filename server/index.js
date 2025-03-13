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



// app.get('/api/search', async (req, res) => {
//   const searchQuery = req.query.q;
//   try {
//     const videos = await video.find({
//       $or: [
//         { title: { $regex: searchQuery, $options: 'i' } },
//         { category: { $regex: searchQuery, $options: 'i' } }
//       ]
//     }).populate('user','channelName profilePic userName createdAt');
//     res.json({ videos });
//   } catch (error) {
//     res.status(500).json({ message: 'Error searching videos', error });
//   }
// });

app.use('/auth', userRoutes)
app.use('/api', videoRoutes)
app.use('/api',searchRoutes)
app.use('/api', commentRoutes)

app.listen(3000,()=>{console.log("Server is running on PORT 3000")});