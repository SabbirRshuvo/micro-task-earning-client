/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axiosSecure.get(`/tasks`);
        setTasks(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading tasks...</div>;
  }
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white shadow-md rounded-xl p-4 space-y-2"
        >
          <h2 className="text-xl font-bold">{task.task_title}</h2>
          <p>
            <span className="font-semibold">Buyer:</span> {task.buyer_name}
          </p>
          <p>
            <span className="font-semibold">Completion Date:</span>{" "}
            {task.completion_date}
          </p>
          <p>
            <span className="font-semibold">Payable Amount:</span>{" "}
            {task.payable_amount} coins
          </p>
          <p>
            <span className="font-semibold">Required Workers:</span>{" "}
            {task.required_workers}
          </p>
          <button
            onClick={() => navigate(`/dashboard/task-details/${task._id}`)}
            className="mt-2 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            <FaEye /> View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
