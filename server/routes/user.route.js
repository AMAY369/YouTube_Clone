
import { Router } from 'express';
import { signUp, signIn} from '../controllers/user.controller.js';
const router = Router()

router.post("/signUp",signUp)
router.post("/login",signIn)

export default router