/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10 my-24">
      <Fade direction="up" triggerOnce>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-sky-600">
            Contact Us
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Have any questions or suggestions? We’d love to hear from you. Fill
            out the form or reach us directly.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* about section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                A Glimpse of Paradise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://i.ibb.co.com/0RZzTDXf/blogging-guide-m-MBxum-Ifu-So-unsplash.jpg"
                    alt="Room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://i.ibb.co.com/4ZcC7QSQ/alexander-mils-l-CPh-Gxs7pww-unsplash.jpg"
                    alt="Pool"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="https://i.ibb.co.com/9Hw8X66H/jakub-zerdzicki-LNnm-Sumlw-O4-unsplash.jpg"
                    alt="Dining"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Where to Find Us</h3>
              <p className="text-gray-600 mb-2">
                123 Beach Road, Zero Point, Rajshahi
              </p>
              <p className="text-gray-600">Earn Money and change the world!</p>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-base-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32 focus:outline-none"
                />
                <button type="submit" className="btn btn-sky-600 w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-base-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Our Contact Info</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-sky-600" /> +880 1234 567890
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-sky-600" /> support@microTask.com
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sky-600" /> 123 Rajshahi,
                  Bangladesh
                </p>
                <p>Support Hours: 24/7 Hours</p>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex gap-4 text-2xl text-sky-600">
                  <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Optional Map Section */}
          <Fade triggerOnce>
            <div className="w-full max-w-6xl mt-12 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Rajshahi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.220841587056!2d88.60416621429608!3d24.374534084281735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef78f9c273cd%3A0x4c39b05f82f9c8b3!2sRajshahi!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
