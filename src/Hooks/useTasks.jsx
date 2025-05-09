import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTasks = () => {
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
      return res.data;
    },
  });
  return { tasks, isLoading, refetch };
};

export default useTasks;
