import React from "react";
import img from "../assets/image/img4.jpg"; // Import your image here
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { contentContainer, contentItem } from "../utils/framermotion/variants";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <img
        src={img} // Replace with your image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col mx-28 items-start justify-center h-full text-white text-center px-4"
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          className="text-md md:text-lg uppercase mb-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full"
          variants={contentItem}
        >
          Experience Luxury Travel
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={contentItem}
        >
          Explore the World
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={contentItem}
        >
          Like Never Before
        </motion.h1>

        <motion.p
          className="text-lg md:text-lg mb-6 text-gray-200 text-justify max-w-2xl"
          variants={contentItem}
        >
          Discover the beauty of travel with our curated journeys. From Curated
          journeys to the world's most extraordinary destinations. Let us
          transform your travel dreams into unforgettable memories.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-x-5 mt-4"
          variants={contentItem}
        >
          <button className="bg-primary relative flex items-center w-[180px] gap-x-2 cursor-pointer group transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
            <span className="text-lg">Start Planning</span>
            <IoArrowForwardCircleOutline className="text-2xl absolute right-3 top-4 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button className="bg-white/20 backdrop-blur-md relative flex items-center w-[180px] group gap-x-2 cursor-pointer transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
            <span className="text-lg">Watch Video</span>
            <FaRegPlayCircle className="text-2xl absolute text-primary right-3 top-4 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
