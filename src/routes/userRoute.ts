import express from 'express';
import { signIn, signUp } from '../controllers/userController';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);

userRouter.route('/signin').post(signIn);

export default userRouter;
