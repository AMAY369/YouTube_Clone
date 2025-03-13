import { Router } from 'express';
const router = Router();

import { searchVideo } from '../controllers/search.controller.js';

router.get('/search',searchVideo);

export default router;