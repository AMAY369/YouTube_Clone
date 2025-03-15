import jwt from "jsonwebtoken";
import user from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

// authentication function for user authentication using token 
const auth = async (req, res, next) => {
  const token = req.cookies.token;   // fetching token from req.cookies 
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  } else {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);  //verfying the jwt token for user authentication 
      req.user = await user.findById(decode.userId).select("-password");
      next();
    } catch (err) {
      res.status(401).json({ error: "Token is not valid" });
    }
  }
};

export default auth;
