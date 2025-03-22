import { Request, Response } from 'express';
import { Campaign } from '../models/campaign.model';

export const campaignController = {
  async getAllCampaigns(req: Request, res: Response) {
    try {
      // If user is a brand, show only their campaigns
      // If user is an influencer, show campaigns related to them
      const query = req.user?.role === 'brand' 
        ? { brandId: req.user.userId }
        : { influencerId: req.user?.userId };
        
      const campaigns = await Campaign.find(query)
        .populate('brandId', 'name email')
        .populate('influencerId');
        
      res.json(campaigns);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching campaigns' });
    }
  },

  async getCampaignById(req: Request, res: Response) {
    try {
      const campaign = await Campaign.findById(req.params.id)
        .populate('brandId', 'name email')
        .populate('influencerId');
        
      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }
      
      // Check if user has permission to view this campaign
      if (req.user?.role === 'brand' && campaign.brandId.toString() !== req.user.userId) {
        return res.status(403).json({ error: 'Not authorized to view this campaign' });
      }
      
      if (req.user?.role === 'influencer' && campaign.influencerId.toString() !== req.user.userId) {
        return res.status(403).json({ error: 'Not authorized to view this campaign' });
      }
      
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching campaign' });
    }
  },

  async createCampaign(req: Request, res: Response) {
    try {
      if (req.user?.role !== 'brand') {
        return res.status(403).json({ error: 'Only brands can create campaigns' });
      }
      
      const campaign = new Campaign({
        ...req.body,
        brandId: req.user.userId
      });
      
      await campaign.save();
      res.status(201).json(campaign);
    } catch (error) {
      res.status(500).json({ error: 'Error creating campaign' });
    }
  },

  async updateCampaign(req: Request, res: Response) {
    try {
      const campaign = await Campaign.findById(req.params.id);
      
      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }
      
      // Only brand owners can update their campaigns
      if (req.user?.role === 'brand' && campaign.brandId.toString() !== req.user.userId) {
        return res.status(403).json({ error: 'Not authorized to update this campaign' });
      }
      
      const updatedCampaign = await Campaign.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      
      res.json(updatedCampaign);
    } catch (error) {
      res.status(500).json({ error: 'Error updating campaign' });
    }
  },

  async updateDeliverableStatus(req: Request, res: Response) {
    try {
      const { deliverableId, completed } = req.body;
      
      const campaign = await Campaign.findById(req.params.id);
      
      if (!campaign) {
        return res.status(404).json({ error: 'Campaign not found' });
      }
      
      // Find and update the specific deliverable
      const deliverable = campaign.deliverables.id(deliverableId);
      
      if (!deliverable) {
        return res.status(404).json({ error: 'Deliverable not found' });
      }
      
      deliverable.completed = completed;
      campaign.updatedAt = new Date();
      
      await campaign.save();
      
      res.json(campaign);
    } catch (error) {
      res.status(500).json({ error: 'Error updating deliverable status' });
    }
  }
}; 