/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegListAlt, FaBriefcase, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    title: "Portfolio / Showcase",
    desc: "Add and showcase your portfolio or photo gallery to attract employers.",
  },
  {
    title: "Attachments Upload",
    desc: "Upload PDF resumes, cover letters, and other important documents.",
  },
  {
    title: "Tasks / Jobs Reviews",
    desc: "Allow integration of review systems for completed tasks or projects.",
  },
  {
    title: "Wallet & Earnings",
    desc: "Track your earnings in a dedicated wallet dashboard.",
  },
];

import jobListing from "../assets/job-listing.jpg";
import microTask from "../assets/micro-task.jpg";
const WorksFeatures = () => {
  return (
    <div className="w-full">
      {/* ===== SECTION 1 - JOB LISTINGS ===== */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 ">
        <h2 className="text-center my-10 lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold  ">
          Micro Task Feature
        </h2>
        <hr className="py-6 text-gray-500" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-screen-2xl  mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaRegListAlt className="text-green-500 text-4xl" />
              <h2 className="text-3xl font-bold">Job Listings</h2>
            </div>
            <p className="text-gray-600 mb-3">
              WorkScout makes it easy for employers to{" "}
              <b>add and manage job listings</b>.
            </p>
            <p className="text-gray-600 mb-3 space-y-4 py-2">
              <b>AI Hiring Assistant</b> analyzes applications with AI to rate
              candidate fit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="bg-yellow-100 px-1">
                Job applications are simple.
              </span>{" "}
              Candidates can use a custom form (name, email, cover letter,
              resume) or apply with their WorkScout resume.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <motion.img
              src={jobListing}
              alt="Job Listings"
              className="rounded-xl shadow-md w-full max-w-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== SECTION 2 - MICROJOBS ===== */}
      <section className="bg-white py-16 px-6 md:px-16">
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
              alt="Microjobs and Tasks"
              className="rounded-xl shadow-md w-full max-w-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-green-500 text-4xl" />
              <h2 className="text-3xl font-bold">Microjobs and Tasks</h2>
            </div>
            <p className="text-gray-600 mb-3">
              Microjobs are short freelance tasks. Freelancers bid with a price
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
