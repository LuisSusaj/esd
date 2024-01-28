import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const DonationForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Handle donation submission and payment processing here.
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Donate
      </button>
    </form>
  );
};

export default DonationForm;
