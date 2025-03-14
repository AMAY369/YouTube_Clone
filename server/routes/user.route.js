import { Router } from "express";
import { signUp, signIn, logout } from "../controllers/user.controller.js";
const router = Router();


// defining user routes 
router.post("/signUp", signUp);
router.post("/login", signIn);
router.post("/logout", logout);

export default router;
