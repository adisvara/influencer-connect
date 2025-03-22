declare module '@polar-sh/sdk' {
  export interface SDKOptions {
    apiKey: string;
    // Add other options as needed
  }

  export interface PaymentIntent {
    id: string;
    clientSecret: string;
    amount: number;
    currency: string;
    status: string;
    // Add other properties as needed
  }

  export interface WebhookEvent {
    id: string;
    type: string;
    data: any;
    // Add other properties as needed
  }

  export class Polar {
    constructor(options: SDKOptions);
    
    createPaymentIntent(params: {
      amount: number;
      currency: string;
    }): Promise<PaymentIntent>;
    
    confirmPaymentIntent(paymentIntentId: string): Promise<any>;
    
    constructWebhookEvent(payload: any, signature: any): WebhookEvent;
    
    // Add other methods as needed
  }
} 