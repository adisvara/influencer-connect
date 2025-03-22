// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './auth.routes';
import influencerRoutes from './influencer.routes';
import paymentRoutes from './payment.routes';
import campaignRoutes from './campaign.routes';
import brandRoutes from './brand.routes';

const router = Router();

// Auth routes
router.use('/auth', authRoutes);

// Influencer routes
router.use('/influencers', influencerRoutes);

// Brand routes
router.use('/brands', brandRoutes);

// Payment routes
router.use('/payments', paymentRoutes);

// Campaign routes
router.use('/campaigns', campaignRoutes);

export default router;