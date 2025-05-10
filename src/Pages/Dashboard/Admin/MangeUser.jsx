import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import axios from "axios";

const MangeUser = () => {
  const [refresh, setRefresh] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["all-users", refresh],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRemove = async (userId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/users/${userId}`
      );
      if (res.data.success) {
        Swal.fire("Deleted!", "User has been deleted.", "success");
        setRefresh(!refresh);
      }
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/admin/users/${userId}`, {
      role: newRole,
    });
    setRefresh(!refresh);
    Swal.fire("Success", "User role updated", "success");
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Coin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>
                  <img
                    src={u.photoURL}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{u.display_name}</td>
                <td>{u.email}</td>
                <td>
                  <select
                    value={u.role}
                    onChange={(e) => handleRoleChange(u._id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="admin">Admin</option>
                    <option value="buyer">Buyer</option>
                    <option value="worker">Worker</option>
                  </select>
                </td>
                <td>{u.coins || 0}</td>
                <td>
                  <button
                    onClick={() => handleRemove(u._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeUser;
