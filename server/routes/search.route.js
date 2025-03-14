import { Router } from "express";
const router = Router();

import { searchVideo } from "../controllers/search.controller.js";


// defaing route for fetching searched videos 
router.get("/search", searchVideo);

export default router;
