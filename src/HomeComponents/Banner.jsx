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
        "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    },
    {
      id: 2,
      title: "Post Your Tasks Easily",
      subtitle: "As a Buyer, Hire Global Workers Instantly",
      image: "https://source.unsplash.com/1600x700/?work,remote",
    },
    {
      id: 3,
      title: "Join as Developer",
      subtitle: "Build and Deploy Micro Tasking Systems with Us",
      image: "https://source.unsplash.com/1600x700/?coding,developer",
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
