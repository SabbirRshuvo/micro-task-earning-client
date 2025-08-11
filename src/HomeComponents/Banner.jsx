import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import bg from "../../src/assets/team-banner.jpg";
const Banner = () => {
  return (
    <>
      <section className="bg-[#f4faf7] h-[800px] flex items-center py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mt-12 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]">
              Job Board <span className="font-normal">and</span>
              <br />
              <span className="text-[#0b7c3b] font-extrabold">
                Freelance Marketplace
              </span>
              <br />
              WordPress Theme
            </h1>

            {/* Rating */}
            <div className="mt-5 inline-flex items-center bg-[#fbe7b3] text-[#1a1a1a] px-5 py-1.5 rounded-full text-sm font-medium max-w-max">
              <FaStar className="text-[#fbbf24] mr-2" />
              4.84 out of 5 stars based on 275 ratings
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 max-w-xl leading-relaxed text-base md:text-lg">
              Build a professional job board similar to{" "}
              <span className="font-semibold">Indeed</span>,{" "}
              <span className="font-semibold">Monster</span>, or{" "}
              <span className="font-semibold">LinkedIn</span> – or a freelance
              marketplace like <span className="font-semibold">Upwork</span> or{" "}
              <span className="font-semibold">Fiverr</span>.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="bg-[#0b7c3b] hover:bg-[#096330] text-white px-8 py-3 rounded-full font-medium transition">
                Buy Now <span className="ml-2">$79</span>
              </button>
              <button className="border border-[#0b7c3b] text-[#0b7c3b] px-8 py-3 rounded-full font-medium hover:bg-[#0b7c3b] hover:text-white transition">
                Browse Demos
              </button>
            </div>

            {/* Features */}
            <div className="mt-6 flex flex-col sm:flex-row gap-6 text-gray-700 text-sm justify-center lg:justify-start">
              <span className="flex items-center gap-2">
                <FaCheck className="text-[#0b7c3b]" /> One-Time Payment
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="text-[#0b7c3b]" /> Lifetime License
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={bg}
              alt="Illustration"
              className="max-w-full h-auto"
              style={{ maxHeight: "500px", width: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
