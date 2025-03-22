import { Router } from 'express';
import { brandController } from '../controllers/brand.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// All brand routes require authentication
router.use(authMiddleware);

router.get('/profile', brandController.getProfile);
router.post('/profile', brandController.createProfile);
router.put('/profile', brandController.updateProfile);

export default router; 