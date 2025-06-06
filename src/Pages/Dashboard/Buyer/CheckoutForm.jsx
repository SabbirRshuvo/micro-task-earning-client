import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

import axios from "axios";
const CheckoutForm = ({ coins, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);

    try {
      const { data: clientSecretData } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-payment-intent`,
        {
          price,
        }
      );

      const paymentResult = await stripe.confirmCardPayment(
        clientSecretData.clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: user?.displayName,
              email: user?.email,
            },
          },
        }
      );

      if (paymentResult.paymentIntent.status === "succeeded") {
        const paymentInfo = {
          email: user.email,
          price,
          coins,
          transactionId: paymentResult.paymentIntent.id,
          date: new Date(),
        };

        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/payments`,
          paymentInfo
        );
        if (res.data.success) {
          window.location.reload();
          Swal.fire("Success", "Coins purchased successfully!", "success");
        }
      } else {
        setError("Payment failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-secondary w-full"
      >
        {processing ? "Processing..." : `Pay $${price}`}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
