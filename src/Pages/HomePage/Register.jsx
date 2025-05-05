import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [submitted] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, password, photoURL, role } = data;

    try {
      await createUser(email, password, name, photoURL, role);
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });
      reset();
      navigate("/");
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Drag me!",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Profile URL</label>
            <input
              type="photoURL"
              {...register("photoURL", {
                required: "Profile URL is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="https://example.com/profile.jpg"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                  message: "Must contain letters and numbers",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Select Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Choose Role --</option>
              <option value="worker">Worker</option>
              <option value="buyer">Buyer</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="flex  flex-col text-center">
          <p className="text-center mt-4">
            Already have an Account!
            <Link to="/login" className="text-green-600 font-semibold ml-2">
              Login
            </Link>{" "}
          </p>
        </div>

        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Registration successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
