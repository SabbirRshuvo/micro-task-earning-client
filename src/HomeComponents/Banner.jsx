import { FaArrowRight } from "react-icons/fa";

import bg from "../assets/bg.jpg";
import image1 from "../assets/user1.png";
import image2 from "../assets/user2.jpg";
import image3 from "../assets/user3.jpg";
import image4 from "../assets/user4.jpg";
import image5 from "../assets/user5.jpg";
import userGroup from "../assets/users-group.png";
const Banner = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16 min-h-screen gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white">
            Micro Task Earning Platform
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-xl mt-6 mx-auto lg:mx-0 text-white">
            Join our micro task earning platform and start making money today!
            Complete simple tasks, earn rewards, and enjoy flexible work hours.
            Sign up now and turn your spare time into cash!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <button
              className="px-8 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white active:scale-95 transition-all w-full sm:w-auto"
              type="button"
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 rounded-md bg-white text-sky-600 border border-sky-400 flex items-center gap-2 hover:bg-sky-600/5 active:scale-95 transition-all w-full sm:w-auto"
              type="button"
            >
              <span>Our Earning</span>
            </button>
          </div>

          {/* User Group */}
          <div className="flex flex-col mb-10 lg:mb-0 sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
            <div className="flex -space-x-3">
              {[image1, image2, image3, image4, image5].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="user"
                  className="size-10 sm:size-12 border-2 border-white rounded-full hover:-translate-y-px transition"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-medium text-white flex items-center gap-2">
                Join 10,000+ users <FaArrowRight className="text-slate-200" />
              </p>
              <p className="text-xs sm:text-sm text-white/90">
                Used by 1,000+ people
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 md:max-w-sm lg:max-w-md xl:max-w-lg mt-16  lg:mt-0">
          <img
            className="w-full h-auto drop-shadow-xl"
            src={userGroup}
            alt="User group"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
