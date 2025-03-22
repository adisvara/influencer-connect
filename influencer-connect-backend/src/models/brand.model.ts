import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: { type: String, required: true },
  website: String,
  industry: String,
  size: String,
  description: String,
  logo: String,
  primaryContact: {
    name: String,
    position: String,
    phone: String
  },
  socialMedia: {
    instagram: String,
    facebook: String,
    twitter: String,
    linkedin: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Brand = mongoose.model('Brand', brandSchema); 