import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const result = await login(email, password);
      const user = result.user;

      const { data: jwtData } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: user.email }
      );

      localStorage.setItem("access-token", jwtData.token);

      Swal.fire("Success", "Logged in successfully!", "success");
      navigate(from);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;

      const userData = {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        role: "worker",
        coins: 10,
      };

      const checkUser = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?email=/${user?.email}`
      );

      if (checkUser.status === 404) {
        await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);
      }

      const tokenRes = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
        email: user.email,
      });
      localStorage.setItem("access-token", tokenRes.data.token);

      Swal.fire("Success", "Logged in with Google!", "success");
      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="input input-bordered w-full focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="input input-bordered w-full focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          <button type="submit" className="btn btn-secondary w-full">
            Login
          </button>
        </form>

        <div className="divider">or</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-red-500" /> Continue with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
