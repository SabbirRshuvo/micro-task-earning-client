import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const banners = [
    {
      heading: "Unlock Your Earning Potential",
      title: "Join as a Micro-Task Worker Today!",
      image: "https://source.unsplash.com/1600x900/?freelance,work",
    },
    {
      heading: "Find Talent Faster",
      title: "Post Your Tasks and Get Things Done",
      image: "https://source.unsplash.com/1600x900/?business,meeting",
    },
    {
      heading: "Effortless Task Management",
      title: "Track, Approve, and Earn With Ease",
      image: "https://source.unsplash.com/1600x900/?technology,office",
    },
  ];
  return (
    <section className="w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={5000}
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <img
              src={banner.image}
              alt={`Slide ${index + 1}`}
              className="object-cover h-[70vh] w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {banner.heading}
              </h2>
              <p className="text-white text-lg md:text-2xl">{banner.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
