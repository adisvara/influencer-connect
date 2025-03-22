import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Prevent multiple reviews from the same user for the same influencer
reviewSchema.index({ influencerId: 1, userId: 1 }, { unique: true });

export const Review = mongoose.model('Review', reviewSchema); 