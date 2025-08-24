import React from "react";
import {
  FiUser,
  FiLogIn,
  FiShield,
  FiGrid,
  FiLayout,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiUser size={30} />,
    title: "User Dashboard",
    desc: "Manage your settings and data in an intuitive dashboard.",
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
    icon: <FiGrid size={30} />,
    title: "Pixel Perfect Icons",
    desc: "Clean, sharp, and scalable pixel-perfect icons.",
  },
  {
    icon: <FiLayout size={30} />,
    title: "Responsive Design",
    desc: "Looks great on all devices, big or small.",
  },
  {
    icon: <FiPackage size={30} />,
    title: "Regular Updates",
    desc: "Get new features and improvements regularly.",
  },
  {
    title: "Coins System",
    icon: <FiTrendingUp size={30} />,
    desc: "Earn and manage coins with our integrated system.",
  },
];
const OtherFeatures = () => {
  return (
    <section className="max-w-screen-2xl  mx-auto px-5 py-12 bg-gray-300">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 underline underline-offset-4">
        Features
      </h2>
      <div className="grid gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-orange-200 transition-colors duration-300 hover:text-black flex flex-col items-center text-center"
          >
            <div className="text-green-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600  hover:text-black text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherFeatures;
