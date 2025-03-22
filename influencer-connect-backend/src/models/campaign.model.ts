import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  objectives: [String],
  platforms: [String],
  status: { 
    type: String, 
    enum: ['draft', 'pending', 'active', 'completed', 'cancelled'],
    default: 'draft'
  },
  deliverables: [{
    type: { type: String, required: true },
    description: String,
    dueDate: Date,
    completed: { type: Boolean, default: false }
  }],
  metrics: {
    impressions: Number,
    engagement: Number,
    clicks: Number,
    conversions: Number
  },
  paymentStatus: {
    type: String,
    enum: ['unpaid', 'partially_paid', 'paid'],
    default: 'unpaid'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Campaign = mongoose.model('Campaign', campaignSchema); 