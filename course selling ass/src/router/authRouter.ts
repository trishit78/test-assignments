import express from 'express'
import { signInController, signUpController } from '../controllers/user.controller.js';

const authRouter = express.Router();

authRouter.post('/signup',signUpController);
authRouter.post('/signin',signInController);

export default authRouter;