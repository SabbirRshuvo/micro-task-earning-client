import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePayments = ({ email }) => {
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/payments?email=${email}`
      );
      return res.data;
    },
  });
  return [payments, isLoading];
};

export default usePayments;
