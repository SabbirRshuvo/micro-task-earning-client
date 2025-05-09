import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const usePayments = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return [payments, isLoading, refetch];
};

export default usePayments;
