import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CUSTOMERS } from "./deta";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    // Update Swiper settings after DOM elements are rendered
    if (paginationRef.current) {
      paginationRef.current.classList.add("custom-pagination");
    }
  }, []);

  return (
    <div className="max-w-[60%] relative group py-10 mx-auto">
      <div className="text-center space-y-3 mb-7">
        <h1 className="text-xl font-Poppins font-semibold dark:text-gray-100">TESTIMONIALS</h1>
        <h2 className="text-4xl font-Satisfy text-gray-600 dark:text-gray-300">
          What Are They Saying About Us
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: paginationRef.current, // Set the pagination container
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.update();

          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        spaceBetween={100}
        slidesPerView={1}
        grabCursor={true}
        className="overflow-visible cursor-pointer relative"
      >
        {CUSTOMERS.length > 0 ? (
          CUSTOMERS.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center mt-7 space-y-3 items-center">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-[200px] rounded-full h-[200px]"
                />
                <h3 className="text-lg font-bold dark:text-gray-100">{customer.name}</h3>
                <p className="text-base dark:text-gray-300">{customer.agend}</p>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      <FaStar size={20} />
                    </span>
                  ))}
                </div>
                <p className="text-center flex dark:text-gray-300 items-center justify-center gap-2 text-base text-gray-700 italic">
                  <FaQuoteLeft className="text-xl text-red-700 dark:text-amber-500" />
                  {customer.message}
                  <FaQuoteRight className="text-xl text-red-700 dark:text-amber-500 " />
                </p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full flex items-center justify-center text-gray-500">
            تصاویری در دسترس نیست
          </div>
        )}
      </Swiper>
      {/* Pagination container with ref */}
      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center mt-5 space-x-2"
      ></div>
    </div>
  );
};

export default Testimonials;
