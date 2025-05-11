/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register: createUser,
    setUser,
    updateUserProfile,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, password, photoURL, role } = data;

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateUserProfile(name, photoURL);

      const userData = {
        name,
        email,
        photoURL,
        role,
        coins: role === "buyer" ? 50 : 10,
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
        email: user.email,
      });
      localStorage.setItem("access-token", res.data.token);
      setUser(user);

      const res2 = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${res.data.token}`,
          },
        }
      );

      setUser(res2.data);

      Swal.fire("Success", "Account created successfully!", "success");
      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          className="input input-bordered w-full focus:outline-none"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input
          className="input input-bordered w-full focus:outline-none"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <input
          className="input input-bordered w-full focus:outline-none"
          {...register("photoURL", { required: true })}
          placeholder="Photo URL"
        />
        {errors.photoURL && (
          <span className="text-red-500">Photo URL is required</span>
        )}

        <input
          type="password"
          className="input input-bordered w-full focus:outline-none"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}

        <select
          className="select select-bordered w-full focus:outline-none"
          {...register("role", { required: true })}
        >
          <option value="">Select Role</option>
          <option value="worker">Worker</option>
          <option value="buyer">Buyer</option>
        </select>
        {errors.role && <span className="text-red-500">Role is required</span>}

        <button type="submit" className="btn btn-secondary w-full">
          Register
        </button>
      </form>
      <div className="divider">or</div>
      <p className="text-center text-sm mt-6 text-gray-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-green-600 font-semibold hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
