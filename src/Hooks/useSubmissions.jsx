import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const useSubmissions = () => {
  const { user, loading } = useAuth();
  const email = user?.email;

  const {
    data: submissions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submissions", email],
    enabled: !loading && !!email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/submissions?workerEmail=${email}`
      );
      return res.data; // Make sure this is an array
    },
  });

  const totalEarnedCoins = submissions?.reduce((sum, item) => {
    const coin = parseInt(item.payable_amount) || 0;
    return sum + coin;
  }, 0);

  return { submissions, totalEarnedCoins, refetch, isLoading };
};

export default useSubmissions;
