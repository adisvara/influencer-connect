// src/config/database.ts
import mongoose from 'mongoose';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

// MongoDB connection
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    logger.info('MongoDB connected');
    return true;
  } catch (error) {
    logger.error('MongoDB connection error:', error);
    throw error;
  }
};

// PostgreSQL connection
export const pgPool = new Pool({
  connectionString: process.env.POSTGRES_URI,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test PostgreSQL connection
export const testPostgresConnection = async () => {
  try {
    const client = await pgPool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    logger.info('PostgreSQL connected', result.rows[0]);
    return true;
  } catch (error) {
    logger.error('PostgreSQL connection error:', error);
    throw error;
  }
};