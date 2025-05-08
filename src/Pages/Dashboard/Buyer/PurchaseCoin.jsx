import React from "react";
import { useNavigate } from "react-router";

const coinOptions = [
  { coins: 10, price: 1 },
  { coins: 150, price: 10 },
  { coins: 500, price: 20 },
  { coins: 1000, price: 35 },
];
const PurchaseCoin = () => {
  const navigate = useNavigate();
  const handleSelect = (option) => {
    navigate(`/dashboard/parchase-payment`, { state: option });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 max-w-5xl mx-auto">
      {coinOptions.map((opt) => (
        <div
          key={opt.coins}
          className="border p-6 text-center cursor-pointer hover:shadow-xl transition"
          onClick={() => handleSelect(opt)}
        >
          <h2 className="text-xl font-semibold">{opt.coins} coins</h2>
          <p>=</p>
          <p className="text-green-600 text-2xl font-bold">${opt.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PurchaseCoin;
