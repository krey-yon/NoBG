import express from 'express';
import { removeBg } from '../controllers/imageControllers.js';
import upload from '../middlewares/multer.js';
import authUser from '../middlewares/auth.js';

const imageRouter = express.Router();

imageRouter.post('/remove-bg', authUser, upload.single('image'), removeBg);

export default imageRouter;