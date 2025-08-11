import { FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 ">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80 text-gray-800">
          <h2 className="text-2xl font-semibold  ">MicroTask</h2>
          <p className="text-sm mt-3">
            Discover the world's most extraordinary platform to earn money.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <FaInstagram className="w-8 h-8 text-pink-500 cursor-pointer" />
            {/* Facebook */}
            <FaFacebook className="w-8 h-8 text-blue-600 cursor-pointer" />
            {/* Twitter */}
            <FaTwitter className="w-8 h-8 text-blue-400 cursor-pointer" />
            {/* LinkedIn */}
            <FaLinkedin className="w-8 h-8 text-blue-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm font-playfair text-gray-500/80">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="relative w-72 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 pl-4 pr-10 text-sm text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-white bg-gray-400 rounded-r-full hover:bg-primary-focus transition-all duration-200"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 font-playfair">
        <p>
          © {new Date().getFullYear()} <a href="#">MicroTask</a>. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
