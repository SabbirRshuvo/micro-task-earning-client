import { FaArrowRight } from "react-icons/fa";

import image1 from "../assets/bg.jpg";
import userGroup from "../assets/users-group.png";
const Banner = () => {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16 min-h-screen">
        <div className="max-md:text-center">
          <h5 className="text-4xl md:text-6xl/[76px] font-semibold max-w-xl leading-tight text-white">
            Micro Task Earning Platform
          </h5>

          <p className="text-sm md:text-base max-w-lg mt-6 max-md:px-2 text-white">
            Join our micro task earning platform and start making money today!
            Complete simple tasks, earn rewards, and enjoy flexible work hours.
            Sign up now and turn your spare time into cash!
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button
              className="px-8 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white active:scale-95 transition-all "
              type="button"
            >
              Get Started
            </button>
            <button
              className="px-5 py-3 rounded-md bg-white text-sky-600 border border-sky-400 flex items-center gap-2 hover:bg-sky-600/5 active:scale-95 transition-all"
              type="button"
            >
              <span>Our Earning</span>
            </button>
          </div>
          <div className="flex items-center mt-9">
            <div className="flex -space-x-3.5 pr-3">
              <img
                src={image1}
                alt="image"
                className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-1"
              />
              <img
                src={image1}
                alt="image"
                className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[2]"
              />
              <img
                src={image1}
                alt="image"
                className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[3]"
              />
              <img
                src={image1}
                alt="image"
                className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[4]"
              />
              <img
                src={image1}
                alt="image"
                className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[4]"
              />
            </div>
            <div>
              <div className="flex items-center gap-px">
                <p className="text-sm font-medium text-white">
                  Join 10,000+ users
                </p>
                <FaArrowRight className="text-slate-700" />
              </div>
              <p className="text-sm text-white">Used by 1,000+ people</p>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-xs lg:max-w-lg">
          <img className="w-full h-auto" src={userGroup} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Banner;
