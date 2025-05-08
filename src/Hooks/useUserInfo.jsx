import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const { user } = useAuth();
  const email = user?.email;
  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["userInfo", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${email}`
      );
      return res.data;
    },
  });

  return [userInfo, refetch];
};

export default useUserInfo;
