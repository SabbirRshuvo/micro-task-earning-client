/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      const user = result.user;

      // ✅ Call syncUserWithDatabase only for JWT token, not DB insert
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: user.email },
        { withCredentials: true }
      );

      Swal.fire({
        title: "Successfully logged in!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Login failed!",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      // Check if user exists in DB
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user.email}`
      );

      if (!res.data) {
        // If not exists, insert user WITHOUT role
        await axios.post(
          `${import.meta.env.VITE_API_URL}/users`,
          {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
          { withCredentials: true }
        );
      }

      // Always take JWT
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: user.email,
        },
        { withCredentials: true }
      );

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-100 via-purple-100 to-blue-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-center text-gray-500 mb-2">Or sign in with</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span className="text-gray-700 font-medium cursor-pointer">
              Continue with Google
            </span>
          </button>
        </div>
        <div className="flex  flex-col text-center">
          <p className="text-center mt-4">
            Create a new Account!
            <Link to="/register" className="text-green-600 font-semibold ml-2">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
