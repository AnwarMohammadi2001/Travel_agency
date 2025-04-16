import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const AboutSection = () => {
  const reviews = [
    {
      id: 1,
      image: "/pop/person1.jpg",
    },
    {
      id: 2,
      image: "/pop/person2.jpg",
    },
    {
      id: 3,
      image: "/pop/person3.png",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-red-100/50 mt-10 py-16 md:py-28">
      <div className="flex flex-col items-center justify-center">
        <div className="py-1 px-8 text-center bg-white text-lg text-red-600 uppercase rounded-full">
          about us
        </div>
      </div>
      <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="flex justify-center mt-5 md:mt-0">
          <img src="/pop/image-6.png" alt="" className="h-[450px] md:h-auto" />
        </div>
        <div className="p-10 flex flex-col  justify-center">
          <h2 className="text-lg md:text-2xl lg:text-5xl font-bold font-Roboto">
            Your Journey, Our Passion
          </h2>
          <p className="mt-3 text-[15px] font-semibold text-justify ">
            We believe that travel is more than just visiting new places; it's
            about creating memories, experiencing diverse cultures, and
            discovering the wonders of the world. With years of experience in
            the travel industry, our dedicated team is committed to providing
            exceptional travel experiences tailored to your unique desires and
            needs.
          </p>
          <div className="py-4 md:grid grid-cols-2 gap-10">
            <div className="relative w-[250px] h-[150px]  rounded-xl overflow-hidden cursor-pointer group">
              <img
                src="/pop/video.jpg"
                alt="video"
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                <FaRegPlayCircle size={34} className="text-white" />
              </div>
            </div>
            <div className=" mt-5 md:mt-0 space-y-5">
              <ul className="space-y-2">
                {[
                  "Budget-Friendly",
                  "Luxurious Getaways",
                  "Trusted Local Guides",
                ].map((item) => (
                  <li className="flex items-center gap-2  ">
                    <IoMdCheckmarkCircleOutline
                      size={20}
                      className="text-primary "
                    />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary relative flex items-center w-[180px] gap-x-2 cursor-pointer group transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                <span className="text-lg">Learn More</span>
                <IoArrowForwardCircleOutline className="text-2xl absolute right-3 top-4 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
          <div className=" flex items-center gap-x-6 mt-10">
            {/* Overlapping Images */}
            <div className="flex items-center  -space-x-4 ">
              {reviews.map((user) => (
                <img
                  key={user.id}
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="space-y-2">
              <span className="text-[15px]">4.7 Star Rating</span>
              <p className="text-[15px]">Based on 3,571 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
