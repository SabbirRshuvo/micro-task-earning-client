import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useUserInfo from "../../../Hooks/useUserInfo";
import Swal from "sweetalert2";
import axios from "axios";

const PurchaseCoin = () => {
  const { user } = useAuth();
  const [coinAmount, setCoinAmount] = useState(0);
  const { userInfo, refetch } = useUserInfo(user?.email);

  const handlePurchase = async () => {
    if (!coinAmount || coinAmount <= 0) {
      return Swal.fire("Invalid Amount", "Enter a valid coin amount.", "error");
    }

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/add-coins`,
        {
          email: user.email,
          coins: parseInt(coinAmount),
        }
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", `${coinAmount} Coins Added!`, "success");
        refetch();
        setCoinAmount(0);
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add coins.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Purchase Coins
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg">
          Current Coins:{" "}
          <span className="font-bold">{userInfo?.coins || 0}</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="Enter Coin Amount"
          value={coinAmount}
          onChange={(e) => setCoinAmount(e.target.value)}
        />
        <button onClick={handlePurchase} className="btn btn-primary w-full">
          Add Coins
        </button>
      </div>
    </div>
  );
};

export default PurchaseCoin;
