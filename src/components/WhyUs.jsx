import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { FaBath } from "react-icons/fa6";
const WhyUs = () => {
  return (
    <div className="relative w-full h-screen md:h-[95vh] bg-black mt-10 mb-28">
      {/* Background Image */}
      <img
        src='/image/img4.jpg' // Replace with your image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col  md:mx-28 items-start justify-center h-full text-white text-center px-4">
        <div className="md:absolute order-2 lg:order-2 -bottom-24 left-14 bg-amber-50 rounded-2xl border h-auto lg:h-[650px] xl:h-[650px] text-gray-200 text-justify lg:w-[550px] p-5 md:p-10 lg:p-14 ">
          <div className="space-y-2 border-b border-gray-600 py-6">
            <span>
              <IoIosAirplane className="text-[#ED6B03]" size={60} />
            </span>
            <h4 className="text-xl text-gray-800 font-semibold">
              Customized Packages
            </h4>
            <p className="pr-10 text-gray-800 text-[13px]">
              Tailor-made itineraries to suit your preferences and interests,
              ensuring a unique travel experience every time.
            </p>
          </div>
          <div className="space-y-2 border-b border-gray-600 py-6">
            <span>
              <img src="/pop/climbing.webp" alt="" className="h-14 " />
            </span>
            <h4 className="text-xl text-gray-800 font-semibold">
              Adventure Tours
            </h4>
            <p className="pr-10 text-gray-800 text-[13px]">
              Explore thrilling destinations and activities, from mountain
              trekking to scuba diving, for the adrenaline seekers.
            </p>
          </div>
          <div className="space-y-2 border-b border-gray-600 py-6">
            <span>
              <FaBath className="text-[#ED6B03] mb-1" size={40} />
            </span>
            <h4 className="text-xl text-gray-800 font-semibold">
              Luxury Vacations
            </h4>
            <p className="pr-10 text-gray-800 text-[13px]">
              Indulge in opulent accommodations and exclusive experiences,
              designed for those sekking a lavish escape.
            </p>
          </div>
        </div>
        <div className="md:absolute order-1 lg:order-2 right-[20%] py-10 lg:py-0 w-full lg:w-[170px] space-y-3 top-[30%]">
          <p className="bg-white/20 backdrop-blur-md text-xl  cursor-pointer transition text-white font-semibold px-2 py-2 rounded-full shadow-lg">
            Why Us
          </p>
          <p className=" text-2xl lg:text-6xl font-extrabold font-Roboto">
            Crafting Unforgettable Journeys
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
