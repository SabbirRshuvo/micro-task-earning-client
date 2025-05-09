import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCoins = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure();
  const {
    data: coins = 0,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["coins", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/coin/${user.email}`);

      return res.data?.coins;
    },
  });
  return [coins, isLoading, refetch];
};

export default useCoins;
