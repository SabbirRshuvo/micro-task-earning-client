import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCoins from "../../../Hooks/useCoins";
const CheckoutForm = ({ coins, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch } = useCoins();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);

    try {
      const { data: clientSecretData } = await axiosSecure.post(
        "/create-payment-intent",
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

        const res = await axiosSecure.post("/payments", paymentInfo);
        if (res.data.success) {
          refetch();
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
