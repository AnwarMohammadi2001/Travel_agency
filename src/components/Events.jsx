import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { EVENTS } from "./deta";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";

const Events = () => {
  const paginationRef = useRef(null); // Ref for pagination container

  return (
    <div className="relative group h-[650px] mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={2}
        slidesPerView={3}
        grabCursor={true}
        className="overflow-visible cursor-pointer relative"
      >
        {EVENTS.length > 0 ? (
          EVENTS.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col justify-center items-center h-[600px]">
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-8 space-y-2">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-2xl font-bold pb-1  border-b-2 border-red-600">
                    {" "}
                    ${event.cost}
                  </p>
                  <p className="text-base text-justify">{event.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full flex items-center justify-center text-gray-500">
            No item Available
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Events;
