import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosSecure from "./useAxiosSecure";

const useCoins = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  const {
    data: stats = {},
    isLoading,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["workerStats", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/worker-stats?email=${email}`);
      return res.data;
    },
    enabled: !!email,
  });

  const userCoins = stats.totalEarning;

  return { userCoins, stats, isLoading, isFetching, refetch, error };
};

export default useCoins;
