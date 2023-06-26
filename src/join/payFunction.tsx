import React from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

//stripe public key -- change this later
const stripePromise = loadStripe('pk_test_51KjvTHAxvm9Pn2cMOfKKVTyeNCV0aQwwoDBetwfa9NOYtgSIhq1CKblvwtPnnPPycZxH4PEZr10I5zUja26ihEZT00lwQjmfE4');

export const payNow = async (email: string) => {
    const stripe: Stripe | null = await stripePromise;

    // Create a checkout session on the server
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Add any necessary payload data for subscription creation
        // e.g., plan ID, customer email, etc.
        planId: "price_1NINZCAxvm9Pn2cMh2b6ypQa",
        customerEmail: email               //change to reflect user email
      }),
    }).then(v => v.json());


    // Redirect to the Stripe checkout page
    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: response.id,
      });

      if (result.error) {
        console.error("error redirecting" + result.error);
        // Handle any error during redirection
      }
    }
  };