import express from 'express';
import * as authController from './authController.js';
import protect from './auth.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', protect, authController.getProfile);
router.get('/logout', authController.logout);

export default router;