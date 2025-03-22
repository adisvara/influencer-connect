// src/controllers/payment.controller.ts
import { Request, Response } from 'express';
import { paymentService } from '../services/payment.service';
import { Payment } from '../models/payment.model';

export const paymentController = {
  async createPaymentIntent(req: Request, res: Response) {
    try {
      const { amount, currency = 'usd' } = req.body;

      const paymentIntent = await paymentService.createPaymentIntent(amount, currency);

      res.json({ clientSecret: paymentIntent.clientSecret });
    } catch (error) {
      res.status(500).json({ error: 'Error creating payment intent' });
    }
  },

  async webhookHandler(req: Request, res: Response) {
    const sig = req.headers['polar-signature'];

    try {
      const event = paymentService.verifyWebhookEvent(req.body, sig);
      
      switch (event.type) {
        case 'payment.succeeded':
          // Handle successful payment
          await paymentService.recordSuccessfulPayment(event.data);
          break;
        case 'payment.failed':
          // Handle failed payment
          await paymentService.recordFailedPayment(event.data);
          break;
      }

      res.json({ received: true });
    } catch (error) {
      res.status(400).json({ error: 'Webhook error' });
    }
  },

  async getPaymentHistory(req: Request, res: Response) {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const payments = await Payment.find({ userId: req.user.userId })
        .sort({ createdAt: -1 })
        .populate('campaignId');

      res.json(payments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching payment history' });
    }
  },

  async confirmPayment(req: Request, res: Response) {
    try {
      const { paymentIntentId } = req.body;
      
      if (!paymentIntentId) {
        return res.status(400).json({ error: 'Payment intent ID is required' });
      }

      const payment = await paymentService.processPayment(paymentIntentId);
      
      res.json({ success: true, payment });
    } catch (error) {
      res.status(500).json({ error: 'Error confirming payment' });
    }
  }
};