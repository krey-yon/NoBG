import express from 'express';
import { clerkWebhook } from '../controllers/UserControllers.js';

const userRouter = express.Router();

userRouter.post('/webhooks', clerkWebhook);

export default userRouter;