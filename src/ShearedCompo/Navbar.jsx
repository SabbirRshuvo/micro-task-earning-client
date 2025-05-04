import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const availableCoin = 240;
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    console.log("logged out");
    navigate("/");
  };
  console.log(user?.photoURL);
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md flex justify-between items-center">
      {/* Logo / Website Name */}
      <Link to="/" className="text-xl font-bold text-white">
        MicroTasks
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
            <a
              href="https://github.com/your-client-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
            >
              Join as Developer
            </a>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded">
              Coins: {availableCoin}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm cursor-pointer hover:text-red-400"
            >
              <FiLogOut /> Logout
            </button>
            <Link to="/profile" className="text-xl hover:text-gray-300">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 object-cover rounded-full"
                  alt=""
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>

            <a
              href="https://github.com/your-client-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Join as Developer
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
