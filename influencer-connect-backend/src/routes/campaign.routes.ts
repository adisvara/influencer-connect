import { Router } from 'express';
import { campaignController } from '../controllers/campaign.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// All campaign routes require authentication
router.use(authMiddleware);

router.get('/', campaignController.getAllCampaigns);
router.get('/:id', campaignController.getCampaignById);
router.post('/', campaignController.createCampaign);
router.put('/:id', campaignController.updateCampaign);
router.patch('/:id/deliverable', campaignController.updateDeliverableStatus);

export default router; 