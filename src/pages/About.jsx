import React from "react";
import img from "../assets/about1.jpg";
import img2 from "../assets/about3.jpg";
import img3 from "../assets/about4.jpg";
import img4 from "../assets/about5.jpg";
import table from "../assets/table.jpg";
import { fadeIn } from "../utils/framermotion/variants";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="bg-amber-50 dark:bg-zinc-900 overflow-hidden min-h-[100vh]  py-12"
    >
      <div className="text-center  space-y-3 mb-7">
        <h1 className="text-xl font-Poppins dark:text-gray-100 font-semibold">About Us</h1>
        <h2 className="text-4xl font-Satisfy text-gray-600 dark:text-gray-300">
          Learn More About Us
        </h2>
      </div>

      <div className="flex max-w-[80%] mx-auto flex-col md:flex-row gap-8">
        {/* Left Section: Image */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full  flex flex-col  gap-5 md:w-1/2"
        >
          <img
            src={img} // Replace with your image URL
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-[50vh]"
          />
          <div
            className="h-[150px] border rounded-lg bg-gray-300 flex items-center justify-center p-4 relative overflow-hidden"
            style={{
              backgroundImage: `url(${table})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Blur Overlay */}
            <div className="absolute inset-0  bg-opacity-50 backdrop-blur-xs"></div>

            {/* Content at the bottom */}
            <div className="relative z-10 text-center w-full bottom-0 mb-4">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Book a Table
              </h3>
              <p className="text-gray-200  mb-4">
                Reserve your spot for an unforgettable dining experience.
              </p>
              <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-byellow-600 transition duration-300">
                Reserve Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Title, Description, List, and Image */}
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          {/* Title */}
          <h2 className="text-3xl dark:text-gray-100 font-semibold font-Satisfy text-gray-800 mb-4">
            We with The Aspects Foos Professional Services
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-base text-justify mb-6">
            Nestled in the heart of the city, Café Roya is more than just a
            place to eat – it’s an experience that brings together tradition,
            flavor, and warmth. Our café is inspired by the rich heritage of our
            community, offering a cozy ambiance where friends and family gather
            to share stories over a cup of freshly brewed coffee and
            mouthwatering dishes.
          </p>

          {/* List */}
          <ul className="list-none text-sm text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 dark:text-yellow-500" />
              Online Ordering & Delivery
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 dark:text-yellow-500" />
              Catering for Special Events
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500 dark:text-yellow-500" />
              Private Dining & Reservations
            </li>
            <li className="flex items-center gap-2 ">
              <FaCheck className="text-green-500 dark:text-yellow-500" />
              Custom Cake & Pastry Orders
            </li>
          </ul>

          <p className="text-gray-600 text-base dark:text-gray-300 text-justify mb-6">
            Nestled in the heart of the city, Café Roya is more than just a
            place to eat – it’s an experience that brings together tradition,
            flavor, and warmth.
          </p>
          <div className="h-[130px]  grid grid-cols-2 gap-x-5">
            <div>
              <img src={img2} alt="" className="rounded-lg shadow-md" />
            </div>
            <div>
              <img src={img4} alt="" className="rounded-lg shadow-md" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
