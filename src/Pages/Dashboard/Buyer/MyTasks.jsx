import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyTasks = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [editingTask, setEditingTask] = useState(null);

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["myTasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks/user/${user.email}`
      );
      return res.data.sort(
        (a, b) => new Date(b.completion_date) - new Date(a.completion_date)
      );
    },
  });

  // Delete Task
  const deleteTaskMutation = useMutation({
    mutationFn: async (task) => {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/tasks/${task._id}`,
        {
          data: {
            userEmail: user.email,
            status: task?.status,
            refundAmount: task.required_workers * task.payable_amount,
          },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "Task deleted and coins adjusted.", "success");
      queryClient.invalidateQueries(["myTasks", user?.email]);
      queryClient.invalidateQueries(["userInfo"]);
    },
  });

  // ✅ Update Task
  const updateTaskMutation = useMutation({
    mutationFn: async (task) => {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/tasks/${task._id}`,

        {
          task_title: task.task_title,
          task_detail: task.task_detail,
          submission_info: task.submission_info,
        }
      );

      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Updated!", "Task has been updated.", "success");
      setEditingTask(null);
      queryClient.invalidateQueries(["myTasks", user?.email]);
    },
  });

  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted. Coins will be refunded if not completed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTaskMutation.mutate(task);
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = {
      _id: editingTask._id,
      task_title: form.task_title.value,
      task_detail: form.task_detail.value,
      submission_info: form.submission_info.value,
    };
    updateTaskMutation.mutate(updatedTask);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      <table className="table w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>Title</th>
            <th>Detail</th>
            <th>Workers</th>
            <th>Amount</th>
            <th>Deadline</th>
            <th>Submit Info</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.task_title}</td>
              <td>{task.task_detail}</td>
              <td>{task.required_workers}</td>
              <td>{task.payable_amount}</td>
              <td>{task.completion_date}</td>
              <td>{task.submission_info}</td>
              <td>{task.status}</td>
              <td className="space-x-2 space-y-2">
                <button
                  onClick={() => setEditingTask(task)}
                  className="btn btn-sm btn-warning"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-xl space-y-4 w-96"
          >
            <h3 className="text-xl font-bold mb-2">Update Task</h3>
            <input
              defaultValue={editingTask.task_title}
              name="task_title"
              className="input input-bordered w-full focus:outline-none"
            />
            <textarea
              defaultValue={editingTask.task_detail}
              name="task_detail"
              className="textarea textarea-bordered w-full focus:outline-none"
            />
            <input
              defaultValue={editingTask.submission_info}
              name="submission_info"
              className="input input-bordered w-full focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditingTask(null)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
