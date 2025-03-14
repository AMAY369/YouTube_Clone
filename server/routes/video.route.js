import { Router } from "express";
import {
  uploadVideo,
  getAllVideo,
  getVideoById,
  getAllVideoByUserID,
} from "../controllers/video.controller.js";
import auth from "../middlewares/authentication.js";

const router = Router();


// defining video routes 
router.post("/video", auth, uploadVideo);
router.get("/allVideos", getAllVideo);
router.get("/getVideoById/:id", getVideoById);
router.get("/:userId/channel", getAllVideoByUserID);

export default router;
