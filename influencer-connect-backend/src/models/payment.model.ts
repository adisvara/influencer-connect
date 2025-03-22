import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer' },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'usd' },
  status: { 
    type: String, 
    enum: ['pending', 'succeeded', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentIntentId: { type: String },
  paymentMethod: { type: String },
  metadata: { type: Object },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Payment = mongoose.model('Payment', paymentSchema); 