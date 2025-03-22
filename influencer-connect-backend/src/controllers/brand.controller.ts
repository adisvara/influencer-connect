import { Request, Response } from 'express';
import { Brand } from '../models/brand.model';

export const brandController = {
  async getProfile(req: Request, res: Response) {
    try {
      const brand = await Brand.findOne({ userId: req.user?.userId });
      
      if (!brand) {
        return res.status(404).json({ error: 'Brand profile not found' });
      }
      
      res.json(brand);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching brand profile' });
    }
  },
  
  async createProfile(req: Request, res: Response) {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      // Check if profile already exists
      const existingBrand = await Brand.findOne({ userId: req.user.userId });
      
      if (existingBrand) {
        return res.status(400).json({ error: 'Brand profile already exists' });
      }
      
      const brand = new Brand({
        ...req.body,
        userId: req.user.userId
      });
      
      await brand.save();
      res.status(201).json(brand);
    } catch (error) {
      res.status(500).json({ error: 'Error creating brand profile' });
    }
  },
  
  async updateProfile(req: Request, res: Response) {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const updatedBrand = await Brand.findOneAndUpdate(
        { userId: req.user.userId },
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      
      if (!updatedBrand) {
        return res.status(404).json({ error: 'Brand profile not found' });
      }
      
      res.json(updatedBrand);
    } catch (error) {
      res.status(500).json({ error: 'Error updating brand profile' });
    }
  }
}; 