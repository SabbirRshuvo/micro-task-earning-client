import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const userCoins = user?.coins;

  const handleLogout = () => {
    logout();
    navigate("/");
  };
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
            <Link
              to="https://github.com/SabbirRshuvo/micro-task-earning-client"
              target="_blank"
              rel="safsd"
              className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
            >
              Join as Developer
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded">
              Coins: {userCoins ? userCoins : user.coins}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm cursor-pointer hover:text-red-400"
            >
              <FiLogOut /> Logout
            </button>
            <div className="hover:opacity-80 transition duration-200">
              {loading ? (
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              ) : user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-10 h-10 object-cover rounded-full"
                  alt="user"
                />
              ) : (
                <FaUserCircle className="text-3xl text-gray-600" />
              )}
            </div>

            <a
              href="https://github.com/SabbirRshuvo/micro-task-earning-client"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-sm"
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
