import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, container } from "../utils/framermotion/variants"; // adjust path as needed
const YourPlace = () => {
  const continents = ["Africa", "Asia", "Europe", "Australia"];
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-3 gap-5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="col-span-1 p-5 "
        >
          <div className="">
            <apan className="py-1 px-8  bg-red-200 text-lg text-red-600 uppercase rounded-full">
              TESTIMONIALS
            </apan>
            <p className="mt-3 text-5xl font-extrabold font-Roboto">Popular</p>
            <p className="mt-3 text-5xl font-extrabold font-Roboto">
              Destinations
            </p>
            <p className="mt-3 text-lg ">
              Join us as we explore the wonders of the globe, one incredible
              journey at a time.
            </p>
            <button className="bg-primary mt-5 relative flex items-center w-[180px] gap-x-2 cursor-pointer group transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
              <span className="text-lg">Find Packages</span>
              <IoArrowForwardCircleOutline className="text-2xl absolute right-3 top-4 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className=" relative rounded-[20%] overflow-hidden group h-[500px] mt-10 w-full"
          >
            <img
              src="/src/assets/image/img4.jpg"
              alt=""
              className="rounded-[20%] w-[370px] h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 group-hover:scale-110 transition-all duration-300">
              <IoArrowForwardCircleOutline size={34} className="text-white" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-lg font-semibold">
              London
            </div>
          </motion.div>
        </motion.div>
        <div className="col-span-2 ">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 gap-y-5"
          >
            {continents.map((name, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="relative w-[370px] h-[400px] rounded-[20%] overflow-hidden cursor-pointer group"
              >
                <img
                  src={`/src/assets/image/img${index + 1}.jpg`}
                  alt={name}
                  className="rounded-[20%] w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 group-hover:scale-110 transition-all duration-300">
                  <IoArrowForwardCircleOutline
                    size={34}
                    className="text-white"
                  />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-lg font-semibold">
                  {name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default YourPlace;
