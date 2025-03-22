// src/routes/auth.routes.ts
import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { validateRequest } from '../middleware/validation.middleware';
import { registerSchema, loginSchema } from '../validators/auth.validator';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', validateRequest(registerSchema), authController.register);
router.post('/login', validateRequest(loginSchema), authController.login);
router.post('/logout', authMiddleware, authController.logout);
router.get('/verify-email/:token', authController.verifyEmail);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

export default router;