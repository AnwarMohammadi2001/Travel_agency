import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HeadFooter = () => {
  return (
    <div className="h-[450px]  bg-primary grid grid-cols-1 md:grid-cols-2 relative ">
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-50">
        <img src="/pop/image-12.png" alt="" className="w-full h-full object-cover" />
        </div> */}
      <div className="max-w-7xl mx-auto ">
        <div className="mt-20 ">
          <h1 className="text-6xl font-Roboto font-bold text-white">
            Ready to Start Your <br /> Adventure ?
          </h1>
          <p className="text-white text-lg mt-4 max-w-[500px]  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptatibus voluptate vitae expedita, rerum quisquam. Enim,
          </p>
          <button className="bg-white relative flex items-center mt-5 w-[180px] gap-x-2 cursor-pointer group transition text-primary font-semibold px-6 py-3 rounded-xl shadow-lg">
            <span className="text-lg">Start Planning</span>
            <IoArrowForwardCircleOutline className="text-2xl absolute right-3 top-4 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
        <div className="absolute -top-20 right-[10%] items-center justify-center">
          <img src="/pop/image-12.png" alt="" className="h-[530px]" />
        </div>
      </div>
    </div>
  );
};

export default HeadFooter;
