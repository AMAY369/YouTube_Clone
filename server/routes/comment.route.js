
import { Router } from 'express';
import { addComment, getCommentByVideoId } from '../controllers/comment.controller.js';
import auth from '../middlewares/authentication.js';

const router = Router()

router.post('/comments', auth, addComment)
router.get('/comment/:videoId', getCommentByVideoId)




export default router;