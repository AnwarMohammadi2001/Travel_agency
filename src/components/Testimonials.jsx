import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";
const CUSTOMERS = [
  {
    id: 1,
    image: "/pop/person1.jpg",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Mohammad",
    agend: "SEO & Offcer",
  },
  {
    id: 2,
    image: "/pop/person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Zahra Jan",
    agend: "SEO & Offcer",
  },
  {
    id: 3,
    image: "/pop/person3.png",
    message:
      "“An absolutely incredible experience! The attention to detail and personalized service made our Maldives trip unforgettable. Highly recommend!”",
    name: "Sabrena",
    agend: "SEO & Offcer",
  },
  {
    id: 4,
    image: "/pop/person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "The Name",
    agend: "SEO & Offcer",
  },
];
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
    <div className="max-w-[90%] lg:max-w-[60%] relative group py-14 mx-auto">
      <div className="text-center flex  justify-center  space-y-3 mb-7">
        <h1 className="py-1 px-8 bg-red-200 text-lg text-red-600 uppercase rounded-full">
          TESTIMONIALS
        </h1>
      </div>
      <h2 className="text-5xl text-center  font-Satisfy font-extrabold text-gray-800 dark:text-gray-300">
        Top Reviews
      </h2>
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
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={100}
        slidesPerView={1}
        grabCursor={true}
        className="overflow-visible cursor-pointer relative"
      >
        {CUSTOMERS.length > 0 ? (
          CUSTOMERS.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center mt-7 space-y-3 items-center">
                <FaQuoteLeft
                  size={60}
                  className="text-xl  text-red-700 dark:text-amber-500"
                />
                <p className="text-center  flex dark:text-gray-300 items-center justify-center gap-2 text-base text-gray-700 max-w-2xl    italic">
                  {customer.message}
                </p>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-[120px] rounded-full h-[120px] mt-5"
                />
                <h3 className="text-lg font-bold dark:text-gray-100">
                  {customer.name}
                </h3>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      <FaStar size={20} />
                    </span>
                  ))}
                </div>
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
