import express from "express";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.route.js";
import videoRoutes from "./routes/video.route.js";

import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import commentRoutes from "./routes/comment.route.js";
import cors from "cors";  // Middleware for handling Cross-Origin Resource Sharing (CORS)
import searchRoutes from "./routes/search.route.js";

const app = express(); // Initialize Express application
app.use(express.json());

connectDB(); // Connect to MongoDB database
app.use(cookieParser());


// Configure CORS to allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);


// Define API routes
app.use("/auth", userRoutes);
app.use("/api", videoRoutes);
app.use("/api", searchRoutes);
app.use("/api", commentRoutes);


// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
