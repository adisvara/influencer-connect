// src/services/influencer.service.ts
import { Influencer } from '../models/influencer.model';

export const influencerService = {
  async findByCategory(category: string) {
    return await Influencer.find({ categories: category });
  },

  async search(query: string) {
    return await Influencer.find({
      $or: [
        { bio: { $regex: query, $options: 'i' } },
        { location: { $regex: query, $options: 'i' } }
      ]
    });
  }
};