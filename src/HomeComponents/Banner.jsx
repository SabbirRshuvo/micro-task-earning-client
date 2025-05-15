import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    heading: "Earn From Micro Tasks",
    title: "Complete simple tasks and earn coins instantly.",
    image: "https://i.ibb.co/wNk8VPT5/pic.jpg",
  },
  {
    heading: "Flexible Work Hours",
    title: "Work whenever you want, wherever you want.",
    image: "https://i.ibb.co/V0ZBP63K/18706.jpg",
  },
  {
    heading: "Secure Payments",
    title: "Instant and secure coin transfer on task approval.",
    image: "https://i.ibb.co/bjdzTP5h/2148773983.jpg",
  },
];
const Banner = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-2">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="rounded-lg overflow-hidden shadow-md"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] md:h-[400px]">
              <img
                src={banner.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-xl md:text-4xl font-bold mb-2">
                  {banner.heading}
                </h2>
                <p className="text-sm md:text-lg">{banner.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
