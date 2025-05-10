import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const useSubmissions = () => {
  const { user } = useAuth();
  const email = user?.email;
  const {
    data: submissions = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["submissions", email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/submissions?workerEmail=${email}`
      );
      return res.data;
    },
    enabled: !!email,
  });

  const totalEarningCoins = submissions
    .filter((item) => item.status === "approved")
    .reduce((sum, item) => sum + item.payable_amount, 0);

  return { submissions, totalEarningCoins, isLoading, isError, refetch };
};

export default useSubmissions;
