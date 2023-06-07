import React from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NGSqcHeyT0BlJCP8hE7cXbVaclnvLtNxnlpIQtFsKbNW6mmTrMEZrPio7UprjIqM8h8qkxxFRVgRBlNkgBYPg0o00Nh6XPdhY');

const PayNowButton: React.FC = () => {
  const handleClick = async () => {
    const stripe: Stripe | null = await stripePromise;

    // Create a checkout session on the server
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Add any necessary payload data for subscription creation
        // e.g., plan ID, customer email, etc.
      }),
    });

    const session = await response.json();

    // Redirect to the Stripe checkout page
    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error);
        // Handle any error during redirection
      }
    }
  };

  return (
    <button onClick={handleClick}>Pay Now</button>
  );
};

export default PayNowButton;
