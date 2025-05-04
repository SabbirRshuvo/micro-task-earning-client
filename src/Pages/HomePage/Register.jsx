import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    createUser,
    updateUserProfile,
    signInWithGoogle,
    loading,
    syncUserWithDatabase,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const [submitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Create Firebase user
      const result = await createUser(data.email, data.password);
      console.log(result.user);

      // Update user profile with name and photo
      await updateUserProfile(data.name, data.photoURL);

      // Create user in database
      await syncUserWithDatabase({
        displayName: data.name,
        email: data.email,
        role: data.role,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: true,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();

      // Sync Google user with database
      await syncUserWithDatabase({
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Google sign in successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: error.message,
        showConfirmButton: true,
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
          <div className="mt-6">
            <p className="text-center text-gray-500 mb-2">Or sign in with</p>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
              disabled={loading}
            >
              <FcGoogle className="text-xl" />
              <span className="text-gray-700 font-medium cursor-pointer">
                Continue with Google
              </span>
            </button>
          </div>
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
