import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SubmissionModal from "./SubmissionModal";

const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data: stats = {} } = useQuery({
    queryKey: ["buyerStats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stats/${user.email}`);
      return res.data;
    },
  });

  // Fetch submissions to review
  const { data: reviews = [] } = useQuery({
    queryKey: ["taskSubmissions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/review/${user.email}`);
      return res.data;
    },
  });

  const approveMutation = useMutation({
    mutationFn: async (submissionId) => {
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/submissions/approve/${submissionId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["taskSubmissions"]);
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (submissionId) => {
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/submissions/reject/${submissionId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["taskSubmissions"]);
    },
  });

  console.log(stats);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buyer Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded">
          Total Tasks: {stats.totalTasks}
        </div>
        <div className="bg-white p-4 shadow rounded">
          Pending Workers: {stats.pendingWorkers}
        </div>
        <div className="bg-white p-4 shadow rounded">
          Total Paid: ${stats.totalPaid}
        </div>
      </div>

      {reviews.length > 0 ? (
        <>
          <h3 className="text-lg font-semibold mb-2">
            Task Submissions to Review
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Worker</th>
                  <th>Task</th>
                  <th>Payable ($)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((submission) => (
                  <tr key={submission._id}>
                    <td>{submission.worker_name}</td>
                    <td>{submission.task_title}</td>
                    <td>{submission.payable_amount}</td>
                    <td>
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="btn btn-sm btn-info mr-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => approveMutation.mutate(submission._id)}
                        className="btn btn-sm btn-success mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectMutation.mutate(submission._id)}
                        className="btn btn-sm btn-error"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>no data avaliable</p>
      )}

      {selectedSubmission && (
        <SubmissionModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
};

export default BuyerHome;
