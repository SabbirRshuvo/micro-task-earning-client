/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegListAlt, FaBriefcase, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
import mobileMenu from "../assets/mobile-menu.webp";
const Responsive = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 ">
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
            <h2 className="text-3xl font-bold">Mobile Friendly</h2>
          </div>
          <p className="text-yellow-500 mb-3">
            Your website must work well on all devices.{" "}
            <span className="text-gray-500">
              {" "}
              Mobile use now exceeds desktop, so accessibility is key.
            </span>
            .
          </p>
          <p className="text-gray-600 mb-3 space-y-4 py-2">
            We made sure
            <b>WorkScout looks great on phones, tablets, laptops, and more.</b>
            he experience just feels right.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <motion.img
            src={mobileMenu}
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
  );
};

export default Responsive;
