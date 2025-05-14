import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-800">
          Oops! Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mt-2 mb-4">
          We couldn't find the page you're looking for. Please check the URL or
          try again later.
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:underline text-lg mt-4 inline-block"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
