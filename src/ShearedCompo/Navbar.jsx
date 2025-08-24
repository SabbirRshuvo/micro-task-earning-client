import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { MdDashboard } from "react-icons/md";

import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navLinks = [
    { name: "Best Workers", path: "/best-workers" },
    { name: "About", path: "/about" },
  ];

  const { user, logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("logout error", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-black"
          : "py-4 md:py-6 text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="group inline-block">
        <div
          className={`text-xl md:text-2xl flex items-center gap-2 relative pb-1 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          MicroTask
          <span
            className={`block h-[2px] w-0 ${
              isScrolled ? "bg-black" : "bg-white"
            } transition-all duration-300 group-hover:w-full absolute bottom-0 left-0`}
          ></span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-black" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className=" md:flex items-center gap-4 gap-x-8 cursor-pointer">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User-image" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-50 mt-3 w-64 p-4 shadow-md text-sm space-y-2"
            >
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:bg-gray-800 rounded px-2 py-1 text-sm"
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>
              <hr className="border-t border-gray-300 my-2" />
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 hover:bg-gray-800 rounded px-2 py-1 w-full text-left text-sm"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className={`px-6 sm:px-8 py-2.5 rounded-full border border-gray-400 font-medium ml-4 transition duration-300 hover:bg-white hover:text-black hover:shadow-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
