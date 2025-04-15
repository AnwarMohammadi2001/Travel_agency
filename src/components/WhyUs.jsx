import React from "react";
import img from "../assets/image/img4.jpg";
import { IoIosAirplane } from "react-icons/io";
import { FaBath } from "react-icons/fa6";
const WhyUs = () => {
  return (
    <div className="relative w-full h-[85vh] bg-black mb-28">
      {/* Background Image */}
      <img
        src={img} // Replace with your image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col  mx-28 items-start justify-center h-full text-white text-center px-4">
        <div className="absolute -bottom-24 left-14 bg-amber-50 rounded-2xl border lg:h-[650px] xl:h-[650px] text-gray-200 text-justify w-[550px] p-14 ">
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
        <div className="absolute right-[20%] w-[170px] space-y-3 top-[30%]">
          <p className="bg-white/20 backdrop-blur-md text-xl  cursor-pointer transition text-white font-semibold px-2 py-2 rounded-full shadow-lg">
            Why Us
          </p>
          <p className="text-6xl font-extrabold font-Roboto">
            Crafting Unforgettable Journeys
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
