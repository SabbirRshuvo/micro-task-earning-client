import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const fetchTaskById = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
  return res.data;
};
const TaskDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const {
    data: task,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => fetchTaskById(id),
  });

  const onSubmit = async (data) => {
    const submission = {
      task_id: task._id,
      task_title: task.task_title,
      payable_amount: task.payable_amount,
      submission_details: data.submission_details,
      worker_name: user.displayName,
      worker_email: user.email,
      buyer_name: task.buyer_name,
      buyer_email: task.buyer_email,
      current_date: new Date().toISOString(),
      status: "pending",
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/submissions`,
        submission
      );
      if (res.data.insertedId) {
        Swal.fire("Success", "Submission Sent Successfully!", "success");
        reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to submit your task", "error");
    }
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">Error loading task.</div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      <h2 className="text-3xl font-bold mb-4 text-center">{task.task_title}</h2>
      <p>
        <strong>Buyer Name:</strong> {task.buyer_name}
      </p>
      <p>
        <strong>Buyer Email:</strong> {task.buyer_email}
      </p>
      <p>
        <strong>Payable Amount:</strong> {task.payable_amount} coins
      </p>
      <p>
        <strong>Completion Date:</strong> {task.completion_date}
      </p>
      <p>
        <strong>Required Workers:</strong> {task.required_workers}
      </p>
      <p className="my-4">
        <strong>Task Details:</strong>
        <br /> {task.task_detail}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <label className="block font-medium">Submit Your Work (Details)</label>
        <textarea
          {...register("submission_details", { required: true })}
          className="w-full border border-gray-300 rounded-md p-3"
          rows="5"
          placeholder="Enter your submission details here..."
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition cursor-pointer"
        >
          Submit Work
        </button>
      </form>
    </div>
  );
};

export default TaskDetails;
