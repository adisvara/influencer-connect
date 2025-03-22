// src/models/influencer.model.ts
import mongoose from 'mongoose';

const influencerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bio: String,
  categories: [String],
  socialMedia: {
    instagram: String,
    youtube: String,
    tiktok: String,
    twitter: String
  },
  metrics: {
    followers: Number,
    engagement: Number
  },
  pricing: {
    postRate: Number,
    storyRate: Number
  },
  location: String,
  languages: [String],
  pastCollaborations: [{
    brandName: String,
    date: Date,
    description: String
  }]
});

export const Influencer = mongoose.model('Influencer', influencerSchema);