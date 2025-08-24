/* eslint-disable no-unused-vars */

import { FaBriefcase, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    title: "Tasks & Projects",
    desc: "Create and manage tasks and projects with deadlines and priorities.",
  },
  {
    title: "Worker Bidding",
    desc: "Allow workers to bid on tasks with proposals and pricing.",
  },
  {
    title: "Auto Payment Split",
    desc: "Automatically split payments between workers and platform fees.",
  },
  {
    title: "Update Coins",
    desc: "Track and update your earnings and coins in real-time.",
  },
];

import microTask from "../assets/micro-task2.jpg";
const WorksFeatures = () => {
  return (
    <div className="w-full bg-gray-500">
      <section className="bg-white py-8 px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="flex justify-center order-1 md:order-none">
            <motion.img
              src={microTask}
              alt="Micro Tasks"
              className="rounded-xl shadow-md w-full max-w-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-orange-500 text-4xl" />
              <h2 className="text-3xl font-bold">Micro Tasks & Earning</h2>
            </div>
            <p className="text-gray-600 mb-3">
              Micro Task are short freelance tasks. Freelancers bid with a price
              and deadline.
            </p>
            <p className="text-gray-600 mb-3">
              <span className="bg-yellow-100 px-1">
                Payments are auto-split
              </span>{" "}
              between freelancer and your commission using Stripe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each job has a <b>project page</b> for chat, files, and updates.
              Earnings can be tracked in their Wallet dashboard.
            </p>

            <div className="flex flex-col mt-8 space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="bg-green-500 text-white rounded-full p-2 flex items-center justify-center">
                    <FaCheck className="text-sm" />
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WorksFeatures;
