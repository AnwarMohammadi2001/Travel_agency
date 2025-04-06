import React from "react";
import { motion } from "framer-motion";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { chief } from "./deta";
import { fadeIn } from "../utils/framermotion/variants";

const Chef = () => {
  return (
    <div id="chef" className="bg-gray-100 dark:bg-zinc-900">
      <div className="text-center max-w-[80%] mx-auto py-10">
        <div className="text-center  space-y-3 mb-7">
          <h1 className="text-xl font-Poppins font-semibold dark:text-gray-100">
            CHEFS
          </h1>
          <h2 className="text-4xl font-Satisfy text-gray-600 dark:text-gray-300">
            Our Professional Chefs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-5">
          {chief.map((item, index) => (
            <motion.div
              variants={fadeIn("up")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto max-h-96 object-cover"
                />
                {/* Wave Shape */}
                <div className="absolute -bottom-3 -left-2 -right-2 overflow-hidden">
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="w-full h-20"
                  >
                    <path
                      d="M0.00,49.98 C150.00,150.00 349.73,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                      className="fill-white dark:fill-zinc-800"
                    ></path>
                  </svg>
                </div>

                {/* Social Media Icons - Smooth Animation */}
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-12 right-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out space-x-4 items-center bg-white/30 backdrop-blur-md px-2.5 py-3 rounded-lg"
                >
                  {/* Social Media Links with ARIA labels */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <CiFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-gray-700 hover:text-fuchsia-600"
                  >
                    <CiInstagram size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-gray-700 hover:text-slate-900"
                  >
                    <BsTwitterX size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="text-gray-700 hover:text-green-600"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </motion.div>
              </div>
              <div className="p-5 pb-8">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-amber-500">
                  {item.name}
                </h1>
                <h2 className="text-lg text-gray-500 dark:text-gray-300">
                  {item.job}
                </h2>
                <p className="text-gray-600 mt-4 text-sm mb-10 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chef;
