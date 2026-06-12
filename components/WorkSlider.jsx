import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Student Grievance System",
          path: "/thumb1.jpg",
          link: "https://github.com/nandha587/Student-Grievance-System",
        },
        {
          title: "Student Performance Prediction",
          path: "/thumb2.jpg",
          link: "https://github.com/nandha587",
        },
        {
          title: "Sales Data Analysis",
          path: "/thumb3.jpg",
          link: "https://github.com/nandha587",
        },
        {
          title: "ATS Resume Builder",
          path: "/thumb4.jpg",
          link: "https://github.com/nandha587/ATS-resume-builder",
        },
      ],
    },
    {
      images: [
        {
          title: "Appfluencer Hub",
          path: "/thumb4.jpg",
          link: "https://github.com/nandha587/appfluencer-hub",
        },
        {
          title: "AI Resume Classifier",
          path: "/thumb1.jpg",
          link: "https://github.com/nandha587/ai_resume_classifier",
        },
        {
          title: "Credit Card Loan Analytics",
          path: "/thumb2.jpg",
          link: "https://github.com/nandha587/credit_card_loan_analytics",
        },
        {
          title: "Ask My Docs",
          path: "/thumb3.jpg",
          link: "https://github.com/nandha587/ask-my-docs",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />

                  {/* permanent title overlay */}
                  <div className="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded text-[11px] font-semibold text-white tracking-wide border border-white/10 group-hover:opacity-0 transition-all duration-300 z-10">
                    {image.title}
                  </div>

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title & details on hover */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500 flex flex-col items-center justify-center w-full px-4 text-center">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col items-center gap-y-2"
                    >
                      <div className="text-sm md:text-base font-bold tracking-wider text-white uppercase line-clamp-2">
                        {image.title}
                      </div>
                      <div className="flex items-center gap-x-2 text-[12px] tracking-[0.2em] text-accent font-bold bg-white/10 px-3 py-1 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        <span>GITHUB</span>
                        <BsArrowRight className="text-lg" aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
