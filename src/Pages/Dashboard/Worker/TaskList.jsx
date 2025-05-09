/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router";
import useTasks from "../../../Hooks/useTasks";
import { FaEye } from "react-icons/fa";

const TaskList = () => {
  const { tasks, refetch } = useTasks();

  const navigate = useNavigate();

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
            <span className="font-semibold">Submisson date:</span>{" "}
            {task.completion_date}
          </p>
          <p>
            <span className="font-semibold">Payment:</span>{" "}
            {task.payable_amount}
          </p>
          <p>
            <span className="font-semibold">Required_worker:</span>{" "}
            {task.required_workers}
          </p>
          <button
            onClick={() => navigate(`/dashboard/task-details/${task._id}`)}
            className="mt-2 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            <FaEye /> View Deatils
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
