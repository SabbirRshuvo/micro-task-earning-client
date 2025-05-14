import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center max-w-md text-white">
        <div className="flex justify-center mb-4"></div>
        <h1 className="text-4xl font-bold mb-4">403 Forbidden</h1>
        <p className="mb-6 text-lg">
          You are not allowed to this page! Page provide the right user
          authorization.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-800 transition-colors duration-300 rounded-full text-white font-semibold shadow-md"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
