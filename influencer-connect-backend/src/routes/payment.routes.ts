// src/routes/payment.routes.ts
import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Payment intent creation
router.post(
  '/create-payment-intent',
  authMiddleware,
  paymentController.createPaymentIntent
);

// Payment webhook handler
router.post('/webhook', paymentController.webhookHandler);

// Get payment history
router.get(
  '/history',
  authMiddleware,
  paymentController.getPaymentHistory
);

// Confirm payment
router.post(
  '/confirm',
  authMiddleware,
  paymentController.confirmPayment
);

export default router;