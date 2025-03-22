// src/types/influencer.types.ts
export interface IInfluencer {
  userId: string;
  bio: string;
  categories: string[];
  socialMedia: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
  };
  metrics: {
    followers: number;
    engagement: number;
  };
  pricing: {
    postRate: number;
    storyRate: number;
  };
  location: string;
  languages: string[];
  pastCollaborations: Array<{
    brandName: string;
    date: Date;
    description: string;
  }>;
}