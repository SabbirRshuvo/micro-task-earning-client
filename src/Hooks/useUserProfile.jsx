import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserProfile = () => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/profile");
      return data;
    },
  });
};

export default useUserProfile;
