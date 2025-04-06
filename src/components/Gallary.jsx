import React from "react";
import img1 from "../assets/gallary1.jpg";
import img2 from "../assets/gallary2.jpg";
import img3 from "../assets/gallary3.jpg";
import img4 from "../assets/gallary4.jpg";
import img5 from "../assets/gallary5.jpg";
import img6 from "../assets/gallary6.jpg";
import img7 from "../assets/gallary7.jpg";
import "../utils/Gallary.css";

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowUpZA } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const Gallary = () => {
  const gallary = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div id="gallary" className="text-center max-w-[80%] mx-auto py-10">
      {/* Swiper Slider */}
      <div className="gallary-container">
        <h1 className="text-4xl font-Satisfy text-gray-600 dark:text-gray-100 mb-4">
          Cafe Roya Gallery
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4} // Changed from "auto" to 5
          spaceBetween={1} // Added for spacing between slides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {gallary.map((item, index) => (
            <SwiperSlide key={index} className="swiper-image">
              <img src={item} alt={`slide_image_${index}`} />
            </SwiperSlide>
          ))}

          {/* <div className="slider-controler ">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowRoundBack />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoIosArrowRoundForward />
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallary;
