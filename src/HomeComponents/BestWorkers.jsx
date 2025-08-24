/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Spinner from "../ShearedCompo/Spinner";

const BestWorkers = () => {
  const {
    data: workers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bestWorkers"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/best-workers`
      );
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;
  console.log(workers);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center mb-6"> Best Workers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workers.map((worker, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={worker.photoURL}
              alt={worker.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{worker.name}</h3>
            <p className="text-green-600 font-medium">Coins: {worker.coins}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
