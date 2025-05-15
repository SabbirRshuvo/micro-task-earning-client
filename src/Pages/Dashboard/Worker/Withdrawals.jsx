/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Withdrawals = () => {
  const { user } = useAuth();
  const userCoins = user?.coins;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const coinToWithdraw = watch("withdrawal_coin");

  const onSubmit = async (data) => {
    const withdrawal_coin = parseInt(data.withdrawal_coin);
    const withdrawal_amount = withdrawal_coin / 20;

    const withdrawData = {
      worker_email: user?.email,
      worker_name: user?.name,
      withdrawal_coin,
      withdrawal_amount,
      payment_system: data.payment_system,
      account_number: data.account_number,
      withdraw_date: new Date(),
      status: "pending",
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/withdrawals`,
        withdrawData
      );

      Swal.fire({
        icon: "success",
        title: "Withdrawal Request Submitted!",
        text: `Your withdrawal of ${withdrawal_coin} coins has been submitted for review.`,
        confirmButtonColor: "#16a34a",
      });
      reset();
      setWithdrawAmount(0);
      window.location.reload();
    } catch (err) {
      toast.error("Failed to submit withdrawal.");
    }
  };

  const handleCoinChange = (e) => {
    const coins = parseInt(e.target.value);
    if (coins > userCoins || coins < 200) {
      setWithdrawAmount(0);
    } else {
      setWithdrawAmount(coins / 20);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4"> Withdraw Coins</h2>

      <div className="mb-4 text-center">
        <p className="text-lg font-semibold">Available Coins: {userCoins}</p>
        <p className="text-md text-green-600">
          Withdrawal Value: ${userCoins / 20}
        </p>
      </div>

      {userCoins < 200 ? (
        <p className="text-red-500 text-center font-semibold">
          Insufficient coin
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Coin To Withdraw</label>
            <input
              type="number"
              {...register("withdrawal_coin", {
                required: true,
                min: 200,
                max: userCoins,
              })}
              onChange={handleCoinChange}
              className="input input-bordered w-full focus:outline-0"
              placeholder="Enter coin amount (min 200)"
            />
            {errors.withdrawal_coin && (
              <p className="text-red-500 text-sm">
                Enter a valid amount (min 200, max {userCoins})
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium">Withdraw Amount ($)</label>
            <input
              type="number"
              value={withdrawAmount}
              readOnly
              className="input input-bordered w-full bg-gray-100 focus:outline-0"
            />
          </div>

          <div>
            <label className="block font-medium">Select Payment System</label>
            <select
              {...register("payment_system", { required: true })}
              className="select select-bordered w-full focus:outline-0"
            >
              <option value="">Select</option>
              <option value="Bkash">Bkash</option>
              <option value="Rocket">Rocket</option>
              <option value="Nagad">Nagad</option>
              <option value="Upay">Upay</option>
              <option value="Bank">Bank</option>
            </select>
            {errors.payment_system && (
              <p className="text-red-500 text-sm">Payment system is required</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Account Number</label>
            <input
              type="text"
              {...register("account_number", { required: true })}
              className="input input-bordered w-full focus:outline-0"
              placeholder="Enter your account number"
            />
            {errors.account_number && (
              <p className="text-red-500 text-sm">Account number is required</p>
            )}
          </div>

          <button type="submit" className="btn btn-secondary w-full">
            Submit Withdrawal
          </button>
        </form>
      )}
    </div>
  );
};

export default Withdrawals;
