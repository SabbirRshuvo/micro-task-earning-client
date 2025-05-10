/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTotalCoins from "../../../Hooks/useTotalCoins";

const Withdrawals = () => {
  const { user } = useAuth();
  const [withdrawDollar, setWithdrawDollar] = useState(0);

  const { totalCoins, isLoading } = useTotalCoins();

  // Load user data
  const { data: userData = {} } = useQuery({
    queryKey: ["user-coins", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?email=/${user.email}`
      );
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const coinsToWithdraw = watch("coin");

  // update dollar value based on input
  const handleCoinChange = (e) => {
    const coin = parseInt(e.target.value);
    if (!isNaN(coin)) {
      setWithdrawDollar((coin / 20).toFixed(2));
    } else {
      setWithdrawDollar(0);
    }
  };

  const onSubmit = async (data) => {
    const withdrawalData = {
      worker_email: user.email,
      worker_name: user.displayName,
      withdrawal_coin: parseInt(data.coin),
      withdrawal_amount: parseFloat((data.coin / 20).toFixed(2)),
      payment_system: data.payment_system,
      account_number: data.account_number,
      withdraw_date: new Date().toISOString(),
      status: "pending",
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/withdrawals`,
        withdrawalData
      );
      Swal.fire(
        "Success!",
        "Your withdrawal request has been submitted.",
        "success"
      );
      reset();
      setWithdrawDollar(0);
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  const userCoins = userData?.coins || 0;
  const canWithdraw = userCoins >= 200;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Withdraw Earnings</h2>

      <div className="mb-6 text-center">
        <p className="font-semibold">
          Your Current Coin: <span className="text-blue-600">{totalCoins}</span>
        </p>
        <p className="font-semibold">
          Equivalent Dollar:{" "}
          <span className="text-green-600">
            ${(totalCoins / 20).toFixed(2)}
          </span>
        </p>
      </div>

      {canWithdraw ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="font-semibold">Coin to Withdraw</label>
            <input
              type="number"
              {...register("coin", {
                required: true,
                min: 200,
                max: totalCoins,
              })}
              onChange={handleCoinChange}
              placeholder="Enter coin amount"
              className="w-full px-3 py-2 border rounded"
            />
            {errors.coin && (
              <p className="text-sm text-red-500">
                Enter a valid coin amount (min 200, max {totalCoins})
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold">Withdraw Amount ($)</label>
            <input
              type="text"
              value={withdrawDollar}
              readOnly
              className="w-full px-3 py-2 bg-gray-100 border rounded"
            />
          </div>

          <div>
            <label className="font-semibold">Select Payment System</label>
            <select
              {...register("payment_system", { required: true })}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="Nagad">Nagad</option>
              <option value="Upay">Upay</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
            {errors.payment_system && (
              <p className="text-sm text-red-500">
                Please select a payment system
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold">Account Number</label>
            <input
              type="text"
              {...register("account_number", { required: true })}
              placeholder="Enter account number"
              className="w-full px-3 py-2 border rounded"
            />
            {errors.account_number && (
              <p className="text-sm text-red-500">Account number is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Withdraw
          </button>
        </form>
      ) : (
        <p className="text-center text-red-600 font-semibold mt-4">
          Insufficient coin (Minimum 200 required)
        </p>
      )}
    </div>
  );
};

export default Withdrawals;
