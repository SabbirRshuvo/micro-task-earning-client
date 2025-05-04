import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rakib Hasan",
      quote:
        "This platform helped me earn money by doing simple tasks from home. Loved the experience!",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sadia Akter",
      quote:
        "As a buyer, I found skilled workers easily. Very smooth and professional.",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Tanvir Hossain",
      quote:
        "Excellent UI and easy to use! I’ve been using this site for weeks now.",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        What Our Users Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full">
              <img
                src={user.photo}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {user.name}
              </h3>
              <p className="text-gray-600 italic">"{user.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
