import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePayments = () => {
  const { user } = useAuth();

  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/payments/${user.email}`
      );
      return res.data;
    },
  });
  return [payments, isLoading, refetch];
};

export default usePayments;
