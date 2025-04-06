import React from "react";
import { ICE_MENU } from "./menuitems";
import { fadeIn } from "../../utils/framermotion/variants";
import { motion } from "framer-motion";
const IceCream = () => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="text-center flex flex-col justify-center items-center"
    >
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
        Menu
      </h2>
      <p className="text-xl text-red-700 font-semibold dark:text-amber-500">
        Ice Cream
      </p>
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-12 flex flex-wrap justify-center gap-20 "
      >
        {ICE_MENU.map((item) => (
          <div key={item.id} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className=" h-[450px] w-full"
            />
            <div className="space-y-2 mt-5">
              <h4 className="text-xl font-semibold dark:text-gray-300 text-gray-800">
                {item.title}
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {item.des}
              </p>
              <span className="text-xl font-bold text-red-800 dark:text-amber-500">
                ${item.cost}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default IceCream;
