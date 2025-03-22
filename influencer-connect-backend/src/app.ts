// src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectMongoDB, pgPool } from './config/database';
import routes from './routes';
import { logger } from './utils/logger';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Database connection
connectMongoDB()
  .then(() => {
    logger.info('MongoDB connected successfully');
    
    // Test PostgreSQL connection, but don't fail if it's not available
    pgPool.query('SELECT NOW()', (err, result) => {
      if (err) {
        logger.warn('PostgreSQL connection failed, but continuing without it. Some features may not work properly.');
        logger.error('PostgreSQL error details:', err);
      } else {
        logger.info('PostgreSQL connected successfully');
      }
      
      // Start the server after MongoDB is connected, regardless of PostgreSQL status
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        logger.info(`Server running on port ${PORT}`);
      });
    });
  })
  .catch(err => {
    logger.error('MongoDB connection failed:', err);
    process.exit(1);
  });

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;