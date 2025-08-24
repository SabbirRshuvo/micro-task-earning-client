/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Spinner from "../ShearedCompo/Spinner";

import { motion } from "framer-motion";
import { FaCrown, FaCoins } from "react-icons/fa";
import workerBg from "../assets/workers.jpg";
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
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay py-16 px-6"
      style={{
        backgroundImage: `url(${workerBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Best Workers of the Month
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Meet our top-performing workers who earned the highest coins this
          month. Keep up the great work and aim for the leaderboard! 🚀
        </motion.p>

        {/* Worker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {workers.map((worker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              {/* Badge */}
              {index < 3 && (
                <div className="absolute top-3 left-3 bg-yellow-400 text-white rounded-full p-2 shadow-md">
                  <FaCrown className="text-xl" />
                </div>
              )}

              {/* Photo */}
              <div className="flex justify-center mt-6">
                <img
                  src={worker.photoURL}
                  alt={worker.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-sky-500 shadow-md"
                />
              </div>

              {/* Info */}
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {worker.name}
                </h3>
                <p className="flex items-center justify-center gap-2 mt-2 text-sky-600 font-medium">
                  <FaCoins className="text-yellow-500" /> {worker.coins} Coins
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BestWorkers;
