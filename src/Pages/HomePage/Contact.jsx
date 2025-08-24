/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import bg from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-sky-600">Touch</span>
          </h1>
          <p className="text-gray-600">
            Have questions, feedback, or just want to say hello? Fill out the
            form, or reach us through the contact details below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-4">
              <FaPhoneAlt className="text-sky-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+880 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-4">
              <FaEnvelope className="text-sky-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@microtask.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-4">
              <FaMapMarkerAlt className="text-sky-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-6">
            <FaFacebook className="text-2xl text-gray-600 hover:text-sky-600 cursor-pointer transition" />
            <FaTwitter className="text-2xl text-gray-600 hover:text-sky-600 cursor-pointer transition" />
            <FaLinkedin className="text-2xl text-gray-600 hover:text-sky-600 cursor-pointer transition" />
            <FaInstagram className="text-2xl text-gray-600 hover:text-sky-600 cursor-pointer transition" />
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-sky-600 hover:bg-sky-700 text-white w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
