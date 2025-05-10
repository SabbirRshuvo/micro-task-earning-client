/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const BestWorkers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: workers = [], isLoading } = useQuery({
    queryKey: ["top-workers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/top-workers");
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center"> Best Workers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <div
            key={worker._id}
            className="bg-white rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={worker.photoURL}
              alt={worker.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{worker?.name}</h3>
            <p className="text-sm text-gray-600">{worker?.email}</p>
            {user.coins && (
              <p className="mt-2 font-bold text-green-600">
                {user.coins} coins
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
