import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "HITRON UI/UX Competition",
    position: "1st Place Winner",
    message:
      "Competitive UI/UX development under time constraints. Engineered a user interface layout recognized for responsiveness and user experience.",
  },
  {
    image: "/t-avt-2.png",
    name: "HTML and CSS in Depth",
    position: "Meta / Coursera Certified",
    message:
      "Advanced certification verifying proficiency in modern front-end standards, semantic markup, grid architectures, and responsive layout styling.",
  },
  {
    image: "/t-avt-3.png",
    name: "Java Crash Course",
    position: "Coursera Certified",
    message:
      "Validation of programming fundamentals, object-oriented software engineering principles, class structures, and fundamental algorithms.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto text-4xl text-accent">
                  <FaAward className="mx-auto" />
                </div>

                {/* name */}
                <div className="text-lg font-bold">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-semibold tracking-widest text-white/60 mt-1">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaAward
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
