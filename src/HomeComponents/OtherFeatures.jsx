import React from "react";
import {
  FiDownload,
  FiUser,
  FiBell,
  FiMapPin,
  FiLogIn,
  FiShield,
  FiMessageCircle,
  FiSearch,
  FiGrid,
  FiLayout,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiDownload size={30} />,
    title: "One Click Install",
    desc: "Get started quickly with easy one click installation.",
  },
  {
    icon: <FiUser size={30} />,
    title: "User Dashboard",
    desc: "Manage your settings and data in an intuitive dashboard.",
  },
  {
    icon: <FiBell size={30} />,
    title: "Automatic Notification",
    desc: "Stay updated with real-time automatic notifications.",
  },
  {
    icon: <FiMapPin size={30} />,
    title: "Location Autocomplete",
    desc: "Fast and accurate location suggestions as you type.",
  },
  {
    icon: <FiLogIn size={30} />,
    title: "Social Login",
    desc: "Sign in easily using your favorite social accounts.",
  },
  {
    icon: <FiShield size={30} />,
    title: "Google reCAPTCHA",
    desc: "Protect your site from spam and abuse securely.",
  },
  {
    icon: <FiMessageCircle size={30} />,
    title: "Private Messaging",
    desc: "Send and receive private messages safely and quickly.",
  },
  {
    icon: <FiSearch size={30} />,
    title: "AJAX Search Result",
    desc: "Instant search results with AJAX powered queries.",
  },
  {
    icon: <FiGrid size={30} />,
    title: "Pixel Perfect Icons",
    desc: "Clean, sharp, and scalable pixel-perfect icons.",
  },
  {
    icon: <FiLayout size={30} />,
    title: "Elementor Page Builder",
    desc: "Build beautiful pages easily with Elementor integration.",
  },
  {
    icon: <FiPackage size={30} />,
    title: "WP All Import",
    desc: "Seamlessly import data with WP All Import compatibility.",
  },
  {
    icon: <FiTrendingUp size={30} />,
    title: "SEO Optimized",
    desc: "Improve your ranking with built-in SEO optimization.",
  },
];
const OtherFeatures = () => {
  return (
    <section className="max-w-screen-2xl  mx-auto px-5 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Some Other Features
      </h2>
      <div className="grid gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-green-600 transition-colors duration-300 hover:text-white flex flex-col items-center text-center"
          >
            <div className="text-green-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600  hover:text-white text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherFeatures;
