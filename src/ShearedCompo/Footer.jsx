import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-bold mb-4 md:mb-0">MicroTasker</div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-xl transition-colors duration-200"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 text-xl transition-colors duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-xl transition-colors duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MicroTasker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
