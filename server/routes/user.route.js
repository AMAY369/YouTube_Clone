
import { Router } from 'express';
const router = Router()
import { signUp, signIn, logout} from '../controllers/user.controller.js';

router.post("/signUp",signUp)
router.post("/login",signIn)
router.post("/logout",logout)

export default router