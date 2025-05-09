import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [submissionDetails, setSubmissionDetails] = useState("");

  const { data: task, isLoading } = useQuery({
    queryKey: ["task", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tasks/${id}`
      );
      return res.data;
    },
  });

  if (isLoading)
    return <div className="text-center text-red-300">Loading...</div>;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submission = {
      task_id: task._id,
      task_title: task.task_title,
      payable_amount: task.payable_amount,
      worker_email: user?.email,
      worker_name: user?.displayName,
      submission_details: submissionDetails,
      Buyer_name: task.buyer_name,
      Buyer_email: task.buyer_email,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/submissions`,
        submission
      );
      if (res.data.insertedId) {
        Swal.fire("Submitted successfully!", "", "success");
        setSubmissionDetails("");
      }
    } catch (err) {
      Swal.fire("Submission failed", "", "error", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg space-y-6">
      <h1 className="text-2xl font-bold">{task.task_title}</h1>

      <p>
        <strong>Buyer:</strong> {task.buyer_name}
      </p>
      <p>
        <strong>Completion Date:</strong> {task.completion_date}
      </p>
      <p>
        <strong>Payable Amount:</strong> {task.payable_amount} coins
      </p>
      <p>
        <strong>Required Workers:</strong> {task.required_workers}
      </p>
      <p>
        <strong>Details:</strong> {task.task_detail || "No details provided."}
      </p>

      {/* Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <label className="block font-semibold">
          Your Work Details (submission_details):
        </label>
        <textarea
          value={submissionDetails}
          onChange={(e) => setSubmissionDetails(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 "
          rows="5"
          placeholder="Describe your work here..."
          required
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskDetails;
