// src/controllers/influencer.controller.ts
import { Request, Response } from 'express';
import { Influencer } from '../models/influencer.model';

export const influencerController = {
  async getAllInfluencers(req: Request, res: Response) {
    try {
      const influencers = await Influencer.find().populate('userId');
      res.json(influencers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching influencers' });
    }
  },

  async getInfluencerById(req: Request, res: Response) {
    try {
      const influencer = await Influencer.findById(req.params.id).populate('userId');
      if (!influencer) {
        return res.status(404).json({ error: 'Influencer not found' });
      }
      res.json(influencer);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching influencer' });
    }
  },

  async createProfile(req: Request, res: Response) {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ error: 'Unauthorized: User ID not found' });
      }

      const influencer = new Influencer({
        ...req.body,
        userId: req.user.userId
      });
      await influencer.save();
      res.status(201).json(influencer);
    } catch (error) {
      res.status(500).json({ error: 'Error creating profile' });
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const updatedInfluencer = await Influencer.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      if (!updatedInfluencer) {
        return res.status(404).json({ error: 'Influencer not found' });
      }
      res.json(updatedInfluencer);
    } catch (error) {
      res.status(500).json({ error: 'Error updating profile' });
    }
  },

  async getByCategory(req: Request, res: Response) {
    try {
      const influencers = await Influencer.find({
        categories: req.params.category
      }).populate('userId');
      res.json(influencers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching influencers by category' });
    }
  },

  async searchInfluencers(req: Request, res: Response) {
    try {
      const { query } = req.query;
      const influencers = await Influencer.find({
        $or: [
          { bio: { $regex: query, $options: 'i' } },
          { location: { $regex: query, $options: 'i' } }
        ]
      }).populate('userId');
      res.json(influencers);
    } catch (error) {
      res.status(500).json({ error: 'Error searching influencers' });
    }
  }
};