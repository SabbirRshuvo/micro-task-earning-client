import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = async (email) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/users/admin/${email}`
    );
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        title: "successfully added!",
        icon: "success",
        draggable: true,
      });
      refetch(); // update UI
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <td>{idx + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user.email)}
                    className="btn btn-sm btn-success"
                  >
                    Make Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
