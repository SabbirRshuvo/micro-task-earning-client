import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SubmissionModal from "./SubmissionModal";

const BuyerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data: stats = {} } = useQuery({
    queryKey: ["buyerStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/buyer-stats?email=${user.email}`);
      return res.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["taskSubmissions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/submissions/review/${user.email}`);
      return res.data;
    },
  });

  const approveMutation = useMutation({
    mutationFn: async (submissionId) => {
      return axiosSecure.patch(`/submissions/approve/${submissionId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["taskSubmissions"]);
      queryClient.invalidateQueries(["buyerStats"]);
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (submissionId) => {
      return axiosSecure.patch(`/submissions/reject/${submissionId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["taskSubmissions"]);
      queryClient.invalidateQueries(["buyerStats"]);
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buyer Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                  <th>Buyer</th>
                  <th>Task</th>
                  <th>Payable ($)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((submission) => (
                  <tr key={submission._id}>
                    <td>{submission.buyer_name}</td>
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
        <p>No submissions to review</p>
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
