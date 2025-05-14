import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import Spinner from "../../../ShearedCompo/Spinner";

const ManageTaks = () => {
  const [refresh, setRefresh] = useState(false);

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["admin-tasks", refresh],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/tasks`
      );
      return res.data;
    },
  });

  const handleDelete = async (taskId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/tasks/${taskId}`
      );
      if (res.data.success) {
        Swal.fire("Deleted!", "Task has been deleted.", "success");
        setRefresh(!refresh);
      }
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Tasks</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th>Title</th>
              <th>Detail</th>
              <th>Buyer</th>
              <th>Required Workers</th>
              <th>Payable</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.task_title}</td>
                <td>{task.task_detail}</td>
                <td>{task.buyer_name}</td>
                <td>{task.required_workers}</td>
                <td>${task.payable_amount}</td>
                <td>{task.completion_date}</td>
                <td>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Delete Task
                  </button>
                </td>
              </tr>
            ))}
            {tasks.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No tasks available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTaks;
