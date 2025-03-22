// src/routes/influencer.routes.ts
import { Router } from 'express';
import { influencerController } from '../controllers/influencer.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', influencerController.getAllInfluencers);
router.get('/:id', influencerController.getInfluencerById);
router.get('/category/:category', influencerController.getByCategory);
router.get('/search', influencerController.searchInfluencers);

// Protected routes
router.post('/', authMiddleware, influencerController.createProfile);
router.put('/:id', authMiddleware, influencerController.updateProfile);

export default router;