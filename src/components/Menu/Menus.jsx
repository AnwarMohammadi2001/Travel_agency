import React, { useState } from "react";
import Starters from "./Starters";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import IceCream from "./IceCream";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/framermotion/variants";

const menuItems = [
  { name: "Starters", component: <Starters /> },
  { name: "Breakfast", component: <Breakfast /> },
  { name: "Lunch", component: <Lunch /> },
  { name: "Desserts", component: <Desserts /> },
  { name: "Drinks", component: <Drinks /> },
  { name: "Ice Cream", component: <IceCream /> },
];

const Menus = () => {
  const [activeMenu, setActiveMenu] = useState("Starters");

  return (
    <section id="menu" className="p-6">
      <div className="text-center space-y-3 py-5">
        <h2 className="text-xl font-Poppins dark:text-gray-100 font-semibold">
          Our Menu
        </h2>
        <h3 className="text-4xl font-Satisfy dark:text-gray-300 text-gray-600">
          Check Our Cafe Roya Menu
        </h3>
      </div>
      <div className="flex justify-center mt-6 gap-5 mb-6">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <button
              className={`px-4 py-2 transition-colors text-lg border-gray-300 duration-300 ${
                activeMenu === item.name
                  ? "text-gray-800 dark:text-gray-100 border-red-700 dark:border-amber-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
              onClick={() => setActiveMenu(item.name)}
            >
              {item.name}
            </button>
            <span
              className={`absolute h-[2px] w-full left-0 -bottom-0.5 transition-transform duration-300 bg-red-800 dark:bg-amber-500 origin-right group-hover:origin-left ${
                activeMenu === item.name
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex max-w-[80%] mx-auto flex-col min-h-[60vh] md:flex-row gap-10"
      >
        {menuItems.find((item) => item.name === activeMenu)?.component}
      </motion.div>
    </section>
  );
};

export default Menus;
