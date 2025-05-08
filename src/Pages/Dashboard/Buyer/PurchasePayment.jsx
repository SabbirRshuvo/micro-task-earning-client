import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLocation } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const PurchasePayment = () => {
  const { state } = useLocation();
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Pay ${state?.price} to get {state?.coins} coins
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm coins={state?.coins} price={state?.price} />
      </Elements>
    </div>
  );
};

export default PurchasePayment;
