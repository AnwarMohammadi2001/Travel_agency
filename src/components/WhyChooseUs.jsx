import React from "react";
import ReadMoreBtn from "../utils/ReadMoreBtn";
import img from "../assets/why.jpg";
import { Coffee, Heart, Star, ThumbsUp } from "lucide-react";
import { fadeIn } from "../utils/framermotion/variants";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <div className="bg-amber-50 dark:bg-zinc-900 overflow-hidden min-h-[500px]   py-20">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex max-w-[80%] mx-auto flex-col h-[380px] md:flex-row gap-10"
      >
        {/* First Div (1/2 of the other three divs) */}
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex-1 relative overflow-hidden md:flex-[2] h-full  text-center bg-white px-14 py-10 rounded-lg"
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0  bg-opacity-70 backdrop-blur-md"></div>
          <div>
            <div className="relative z-10 text-center w-full space-y-5 bottom-0 mb-4">
              <h3 className="text-xl font-semibold">Why Choose Cafe Roya</h3>
              <p className="text-gray-600 dark:text-gray-800 text-base text-justify">
                At Cafe Roya, we believe that great food brings people together.
                Our carefully curated menu features a blend of traditional and
                modern flavors, crafted with the finest ingredients. Whether
                you're looking for a cozy spot to unwind or a lively atmosphere
                to celebrate, our welcoming ambiance and attentive service make
                every visit special. Experience the perfect blend of taste and
                comfort with us!
              </p>
             {/* <ReadMoreBtn label="Read More" />  */}
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex-1 group bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg space-y-3  flex flex-col justify-center items-center gap-4">
          <div className="h-20 w-20 p-2 bg-gray-200 rounded-full group-hover:bg-red-600 flex justify-center items-center   ">
            <Coffee className="w-10 h-10 text-red-500 group-hover:text-white" />
          </div>
          <div className="p-6 space-y-5 ">
            <h3 className="text-lg text-black dark:text-gray-100 font-semibold text-center">
              Premium Quality Coffee
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our cafe uses only the finest Arabica beans to brew rich and
              aromatic coffee.
            </p>
          </div>
        </div>

        {/* Third Div */}
        <div className="flex-1 group bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg space-y-3  flex flex-col justify-center items-center gap-4">
          <div className="h-20 w-20 p-2 bg-gray-200 rounded-full group-hover:bg-red-600 flex justify-center items-center   ">
            <Heart className="w-10 h-10 text-red-500 group-hover:text-white" />
          </div>
          <div className="p-6 space-y-5 ">
            <h3 className="text-lg text-black dark:text-gray-100 font-semibold text-center">
              Highly Rated by Customers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Our customers love us for our quality service and delicious
              beverages.
            </p>
          </div>
        </div>
        {/* Fourth Div */}
        <div className="flex-1 group bg-gray-100 p-4 dark:bg-zinc-700 rounded-lg space-y-3  flex flex-col justify-center items-center gap-4">
          <div className="h-20 w-20 p-2 bg-gray-200 rounded-full group-hover:bg-red-600 flex justify-center items-center   ">
            <Star className="w-10 h-10 text-red-500 group-hover:text-white" />
          </div>
          <div className="p-6 space-y-5 ">
            <h3 className="text-lg text-black dark:text-gray-100 font-semibold text-center">
              Friendly Atmosphere
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Enjoy a warm and welcoming environment that feels like a second
              home.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
