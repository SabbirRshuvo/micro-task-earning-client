import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const banners = [
    {
      heading: "Unlock Your Earning Potential",
      title: "Join as a Micro-Task Worker Today!",
      image: "https://i.ibb.co.com/wFZBVFqF/pic.jpg",
    },
    {
      heading: "Find Talent Faster",
      title: "Post Your Tasks and Get Things Done",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
    },
    {
      heading: "Effortless Task Management",
      title: "Track, Approve, and Earn With Ease",
      image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1470&q=80",
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
