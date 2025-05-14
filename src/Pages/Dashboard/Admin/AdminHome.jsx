import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";

const AdminHome = () => {
  const [refresh, setRefresh] = useState(false);

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats", refresh],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/stats`
      );
      return res.data;
    },
  });

  const { data: withdrawals = [] } = useQuery({
    queryKey: ["withdrawals", refresh],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/withdrawals`
      );
      return res.data;
    },
  });

  const handleApprove = async (request) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/admin/withdraw-approve/${request._id}`,
      {
        email: request.worker_email,
        coins: request.withdrawal_coin,
      }
    );
    if (res.data.success) {
      Swal.fire("Success!", "Withdrawal Approved", "success");
      setRefresh(!refresh);
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          Total Workers: {stats.totalWorkers}
        </div>
        <div className="bg-white p-4 rounded shadow">
          Total Buyers: {stats.totalBuyers}
        </div>
        <div className="bg-white p-4 rounded shadow">
          Total Coins: {stats.totalCoins}
        </div>
        <div className="bg-white p-4 rounded shadow">
          Total Payments: ${stats.totalPayments}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Pending Withdrawal Requests
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100">
              <th>Coin</th>
              <th>Amount ($)</th>
              <th>Payment System</th>
              <th>Account No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((w) => (
              <tr key={w._id}>
                <td>{w.withdrawal_coin}</td>
                <td>${w.withdrawal_amount}</td>
                <td>{w.payment_system}</td>
                <td>{w.account_number}</td>
                <td>
                  <button
                    onClick={() => handleApprove(w)}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Payment Success
                  </button>
                </td>
              </tr>
            ))}
            {withdrawals.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No pending requests.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
