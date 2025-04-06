import React from "react";
import img from "../assets/news.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framermotion/variants";

const Newsletter = () => {
  return (
    <div
      className="relative w-full h-72 my-5 bg-cover bg-center flex items-center justify-around"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Left colored section */}
      <div className="absolute inset-0 bg-yellow-600 clip-diagonal-left opacity-80"></div>
      {/* right colored section */}
      <div className="absolute inset-0 clip-diagonal-right bg-black opacity-60 "></div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center relative z-10"
      >
        <h3 className="text-white text-2xl font-bold">
          Stay Informed About Special Offers
        </h3>
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center bg-white relative z-10  flex justify-end w-[450px] "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full bg-white text-black  placeholder:text-black  focus:outline-none relative z-20"
        />
        <button className="px-4 py-3 bg-yellow-600 text-white hover:bg-yellow-700">
          Subscribe
        </button>
      </motion.div>

      {/* Content */}
    </div>
  );
};

export default Newsletter;
