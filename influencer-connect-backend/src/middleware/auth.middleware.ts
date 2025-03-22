// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new Error('Authentication required');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof decoded !== 'string' && decoded) {
      req.user = {
        userId: decoded.userId as string,
        role: decoded.role as string
      };
    }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};