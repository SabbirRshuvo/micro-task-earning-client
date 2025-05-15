import React from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaLock,
  FaRocket,
  FaTasks,
  FaUserPlus,
} from "react-icons/fa";

const ExtraSection = () => {
  return (
    <>
      <section className="bg-white py-16 px-4 text-center my-10">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <FaUserPlus className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
            <p>Create your free account as a Worker or Buyer in seconds.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTasks className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">2. Complete Tasks</h3>
            <p>
              Browse available tasks and complete them easily from your
              dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaDollarSign className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">3. Earn Coins</h3>
            <p>Submit your work, get it approved, and earn money securely.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <FaCheckCircle className="text-3xl text-green-600 mb-3" />
            <h4 className="font-semibold mb-2">Verified Tasks</h4>
            <p>
              All tasks go through a manual review process to ensure quality and
              legitimacy.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaDollarSign className="text-3xl text-yellow-500 mb-3" />
            <h4 className="font-semibold mb-2">Fast Payouts</h4>
            <p>
              Withdraw your earnings quickly and securely with multiple payout
              options.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaRocket className="text-3xl text-indigo-600 mb-3" />
            <h4 className="font-semibold mb-2">Easy to Use</h4>
            <p>
              Clean and intuitive interface that works seamlessly on mobile and
              desktop.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaLock className="text-3xl text-blue-600 mb-3" />
            <h4 className="font-semibold mb-2">Secure System</h4>
            <p>Advanced security measures to protect your data and earnings.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaTasks className="text-3xl text-green-500 mb-3" />
            <h4 className="font-semibold mb-2">Task Variety</h4>
            <p>
              Thousands of tasks from different categories to suit every skill
              level.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <FaUserPlus className="text-3xl text-pink-600 mb-3" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p>
              Our dedicated support team is here to help you anytime you need.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
        <p className="text-lg mb-6">
          Join thousands of freelancers already earning money from home.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition cursor-pointer">
          Get Started Now
        </button>
      </section>
    </>
  );
};

export default ExtraSection;
