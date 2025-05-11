import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCoins = () => {
  const { user } = useAuth();
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
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/worker-stats?email=${email}`
      );
      return res.data;
    },
    enabled: !!email,
  });

  const userCoins = stats.totalEarning;

  return { userCoins, stats, isLoading, isFetching, refetch, error };
};

export default useCoins;
