import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCoins = () => {
  const { user, loading } = useAuth();
  const email = user?.email;

  const axiosSecure = useAxiosSecure();
  const {
    data: userCoins = 0,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-coins", email],
    enabled: !loading && !!email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/coin/${email}`);

      return res.data?.coins || 0;
    },
  });
  return { userCoins, isLoading, refetch };
};

export default useCoins;
