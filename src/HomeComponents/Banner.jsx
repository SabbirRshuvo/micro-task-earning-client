import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Earn Money Online",
      subtitle: "Complete Simple Tasks, Earn Real Rewards",
      image:
        "https://i.ibb.co.com/SX5tZMJW/328391180-f57b10ed-08f4-4064-a94f-5ba2d10792d8.jpg",
    },
    {
      id: 2,
      title: "Post Your Tasks Easily",
      subtitle: "As a Buyer, Hire Global Workers Instantly",
      image: "https://i.ibb.co.com/sv9TDQjD/2151179435.jpg",
    },
    {
      id: 3,
      title: "Join as Developer",
      subtitle: "Build and Deploy Micro Tasking Systems with Us",
      image: "https://i.ibb.co.com/sv8XKvZw/2151043242.jpg",
    },
  ];
  return (
    <section className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        showArrows
        swipeable
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[90vh] object-cover w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
