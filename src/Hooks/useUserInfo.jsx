import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserInfo = (email) => {
  const {
    data: userInfo = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${email}`
      );
      return res.data;
    },
  });

  return { userInfo, isLoading, refetch };
};

export default useUserInfo;
