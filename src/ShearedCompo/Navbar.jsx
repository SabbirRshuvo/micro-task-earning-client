/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { MdDashboard } from "react-icons/md";

import { FaSignOutAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { AiOutlineMenuFold } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navLinks = [
    { name: "Best Workers", path: "/best-workers" },
    { name: "Contact", path: "/contact" },
  ];

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const userCoins = user?.coins;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled || !isHome
          ? "bg-white/80 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6 text-black"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="group inline-block">
        <div
          className={`text-xl md:text-2xl flex items-center gap-2 ${
            isScrolled || !isHome ? "text-gray-800" : "text-black"
          } relative pb-1`}
        >
          MicroTask
          <span
            className={`block h-[2px] w-0 ${
              isScrolled || !isHome ? "bg-slate-700" : "bg-black"
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
            className={`group flex flex-col gap-0.5  ${
              isScrolled || !isHome ? "text-gray-800" : "text-black"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled || !isHome ? "bg-gray-700" : "bg-black"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4 gap-x-8 cursor-pointer">
        {/* <Link
          to="/dashboard"
          className={`${
            !isScrolled ? "text-white" : "text-black"
          } border rounded-2xl px-4 `}
        >
          Dashboard
        </Link> */}

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-4 shadow-md text-sm space-y-2"
            >
              {/* User Info */}
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-sm"
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>

              {/* Divider */}
              <hr className="border-t border-gray-300 my-2" />

              {/* Settings Link */}
              {/* <li>
                <Link
                  to="/manage-account"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-sm"
                >
                  <MdManageAccounts />
                  Manage Account
                </Link>
              </li> */}

              {/* My Bookings Link */}
              {/* <li>
                <Link
                  to="/my-bookings"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-sm"
                >
                  <MdOutlineCalendarMonth />
                  My Bookings
                </Link>
              </li> */}

              {/* Sign Out Button */}
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 w-full text-left text-sm"
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
            className={`px-6 sm:px-8 py-2.5 rounded-full border border-gray-400 font-medium ml-4 cursor-pointer transition duration-300 hover:bg-white hover:text-black hover:shadow-md ${
              isScrolled && isHome ? "text-black" : "text-black"
            } ${!isHome ? "invert " : "invert-0"}`}
          >
            Sign In
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AiOutlineMenuFold
            className={` text-2xl font-semibold cursor-pointer ${
              isScrolled || !isHome ? "text-gray-800" : "text-black"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdClose className="text-4xl font-semibold" />
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="group inline-block relative pb-1 text-xl font-medium transition duration-300 text-gray-700 hover:text-gray-500"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
        ))}

        {/* middle section  */}
        {user ? (
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-24  rounded-full">
                <img alt="User-image" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-64 p-4 shadow-md text-md space-y-2"
            >
              {/* User Info */}
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-sm"
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>
              {/* Divider */}
              <hr className="border-t border-gray-300 my-2" />

              {/* Settings Link */}
              {/* <li>
                <Link
                  to="/manage-account"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1  text-sm"
                >
                  <MdManageAccounts />
                  Manage Account
                </Link>
              </li> */}

              {/* My Bookings Link */}
              {/* <li>
                <Link
                  to="/my-bookings"
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1  text-sm"
                >
                  <MdOutlineCalendarMonth />
                  My Bookings
                </Link>
              </li> */}

              {/* Sign Out Button */}
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 w-full text-left  text-sm"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/sign-in"
            className={`px-6 sm:px-8 py-2.5 rounded-full border border-gray-400 font-medium ml-4 cursor-pointer transition duration-300 hover:bg-gray-600 hover:text-white hover:shadow-md ${
              isScrolled ? "text-black" : "text-black"
            } `}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
