// src/config/polar.ts
import { Polar } from '@polar.sh/sdk';
import dotenv from 'dotenv';

dotenv.config();

export const polar = new Polar(process.env.POLAR_API_KEY!);