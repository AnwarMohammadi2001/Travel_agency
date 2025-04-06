import React from "react";
import { FiMapPin, FiPhone, FiClock, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framermotion/variants";
const Contact = () => {
  return (
    <div id="cntact" className="text-center max-w-[80%] mx-auto py-10">
      <div className="text-center  space-y-3 mb-7">
        <h1 className="text-xl font-Poppins font-semibold dark:text-gray-100">Contact</h1>
        <h2 className="text-4xl font-Satisfy text-gray-600 dark:text-gray-300">
          Need Help? Contact Us
        </h2>
      </div>
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full rounded-lg mt-5 h-[500px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1955.045213011696!2d69.09359696089034!3d34.503365385434925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1671df8243565%3A0x5d6d3b278baedde9!2sHussain%20Zada%20Market!5e0!3m2!1sen!2s!4v1741670971310!5m2!1sen!2s"
          width="100%"
          height="100%"
          // style="border:0;"
          allowfullscreen=""
          className="rounded-lg"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
      <div className="max-w-8xl mx-auto px-6 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-4  flex justify-between"
        >
          {/* Address */}
          <div className="flex items-center space-x-3">
            <span className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-300 ">
              <FiMapPin className="text-red-600 dark:text-amber-500" size={24} />
            </span>
            <div className="text-start ml-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">Baraki, Kabul, Afghanistan</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center space-x-3">
            <span className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-300">
              <FiPhone className="text-red-600 dark:text-amber-500" size={24} />
            </span>
            <div className="text-start ml-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+93 772 387 935</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center space-x-3">
            <span className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-300">
              <FiClock className="text-red-600 dark:text-amber-500" size={24} />
            </span>

            <div className="text-start ml-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Opening Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Sunday: 8:00 AM - 10:00 PM
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-300">
              <FiMail className="text-red-600 dark:text-amber-500" size={24} />
            </span>

            <div className="text-start ml-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">anwarmohammadi1390@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="w-full mt-5  p-10 h-[480px] flex justify-center items-center "
        >
          <form className="space-y-6 w-full">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300  bg-amber-50  focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="subject"
                className="p-3 border border-gray-300 bg-amber-50   focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Third Row */}
            <div>
              <textarea
                placeholder="Message"
                className="p-3 border border-gray-300 bg-amber-50  w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                rows="6"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className=" p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
