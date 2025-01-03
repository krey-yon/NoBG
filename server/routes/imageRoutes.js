import express from 'express';
import { removebg } from '../controllers/imageController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/auth.js';
