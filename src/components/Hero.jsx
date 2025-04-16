import React from "react";
import img from "../assets/image/img4.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { contentContainer, contentItem } from "../utils/framermotion/variants";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <img
        src={img}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 sm:px-10 md:px-20 lg:px-28"
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          className="text-sm sm:text-md md:text-lg uppercase mb-3 sm:mb-4 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full"
          variants={contentItem}
        >
          Experience Luxury Travel
        </motion.span>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4"
          variants={contentItem}
        >
          Explore the World
        </motion.h1>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          variants={contentItem}
        >
          Like Never Before
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-200 text-justify max-w-full sm:max-w-xl lg:max-w-2xl mb-6"
          variants={contentItem}
        >
          Discover the beauty of travel with our curated journeys. From curated
          journeys to the world's most extraordinary destinations. Let us
          transform your travel dreams into unforgettable memories.
        </motion.p>

        <motion.div
          className="flex  items-center gap-4 sm:gap-5 mt-4"
          variants={contentItem}
        >
          <button className="bg-primary relative flex items-center w-[150px] sm:w-[190px] gap-x-2 group transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
            <span className="text-md sm:text-lg">Start Planning</span>
            <IoArrowForwardCircleOutline className="text-xl sm:text-2xl absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button className="bg-white/20 backdrop-blur-md relative flex items-center  w-[150px] sm:w-[190px] group gap-x-2 transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
            <span className="text-md sm:text-lg">Watch Video</span>
            <FaRegPlayCircle className="text-xl sm:text-2xl absolute text-primary right-3 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
