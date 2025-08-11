import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import { FaEyeSlash, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "react-lottie-player";
import loadingAnimation from "../../assets/login.json";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const result = await login(email, password);
      const user = result.user;

      const { data: jwtData } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: user.email },
        { withCredentials: true }
      );

      localStorage.setItem("access-token", jwtData.token);

      Swal.fire("Success", "Logged in successfully!", "success");
      navigate(from);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoogle = async () => {
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
        `${import.meta.env.VITE_API_URL}/users?email=${user?.email}`
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
    <div className="flex h-[700px] w-full my-10">
      <div className="w-full  hidden md:inline-block max-w-2xl pt-20 pl-20">
        <Lottie
          loop
          animationData={loadingAnimation}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
          </p>

          <button
            onClick={handleGoogle}
            type="button"
            className="relative group overflow-hidden w-full mt-8 h-12 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center gap-3 cursor-pointer"
          >
            {/* Animated Background Fill */}
            <span className="absolute left-0 top-0 h-full w-0 bg-gray-300 transition-all duration-500 group-hover:w-full z-0"></span>

            {/* Content on top */}
            <span className="relative z-10 flex items-center gap-3 transition duration-300 group-hover:text-black">
              <FcGoogle className="text-2xl" />
              <span className="font-medium">Continue with Google</span>
            </span>
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex flex-col space-y-3 w-full  max-w-md mx-auto">
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineMail className="text-gray-600" />
              <input
                type="email"
                placeholder="Email id"
                {...register("email", { required: "Email is required" })}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div className="relative w-full">
              <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 pr-12 gap-2">
                <FaLock className="text-gray-600" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl cursor-pointer"
              >
                {showPassword ? <AiOutlineEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:underline"
              href="#"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
