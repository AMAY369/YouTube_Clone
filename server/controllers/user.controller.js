import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: false, // Set to true in production
  sameSite: "Lax",
};

export const signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;
    const isExist = await user.findOne({ userName });
    if (isExist) {
      res.status(400).json({ error: "username already exist" });
    } else {
      let updatedPass = await bcrypt.hash(password, 10);
      const newUser = new user({
        channelName,
        userName,
        about,
        profilePic,
        password: updatedPass,
      });
      await newUser.save();
      res
        .status(201)
        .json({
          message: "user registered successfully",
          success: "yes",
          data: newUser,
        });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const getUser = await user.findOne({ userName });
    if (getUser && (await bcrypt.compare(password, getUser.password))) {
      const token = jwt.sign({ userId: getUser._id }, "Secret_Key");
      res.cookie("token", token, cookieOptions);

      res.json({
        message: "logged in successfully",
        success: "yes",
        token,
        getUser,
      });
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (errorMsg) {
    res.status(500).json({ error: "Server error" });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("token", cookieOptions)
    .json({ message: "Logged out successfully" });
};
