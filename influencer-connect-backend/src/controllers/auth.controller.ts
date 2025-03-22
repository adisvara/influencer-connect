// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JwtPayload } from '../types/auth.types';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, password, role, name } = req.body;
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const user = new User({
        email,
        password,
        role,
        name
      });
      
      await user.save();

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: '24h' }
      );

      res.status(201).json({ token, user: { id: user._id, email, role } });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET!,
        { expiresIn: '24h' }
      );

      res.json({ token, user: { id: user._id, email, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: 'Error logging in' });
    }
  },

  async logout(req: Request, res: Response) {
    try {
      // In a real implementation, you might want to invalidate the token
      // or add it to a blacklist
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error logging out' });
    }
  },

  async verifyEmail(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      await User.findByIdAndUpdate(decoded.userId, { emailVerified: true });
      res.json({ message: 'Email verified successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid or expired token' });
    }
  },

  async forgotPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const resetToken = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );

      // In a real implementation, send reset token to user's email
      res.json({ message: 'Password reset instructions sent to email' });
    } catch (error) {
      res.status(500).json({ error: 'Error processing password reset' });
    }
  },

  async resetPassword(req: Request, res: Response) {
    try {
      const { token, newPassword } = req.body;
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await User.findByIdAndUpdate(decoded.userId, { password: hashedPassword });
      
      res.json({ message: 'Password reset successful' });
    } catch (error) {
      res.status(400).json({ error: 'Invalid or expired token' });
    }
  }
};