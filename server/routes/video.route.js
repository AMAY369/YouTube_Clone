
import { Router } from 'express';
import { uploadVideo, getAllVideo } from '../controllers/video.controller.js';
import auth from '../middlewares/authentication.js'

const router= Router()

router.post('/video', auth, uploadVideo)
router.get('/allVideos', getAllVideo)



export default router