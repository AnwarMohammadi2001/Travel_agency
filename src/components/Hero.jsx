import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../utils/Carousel.css";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Hero = () => {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      image: img1,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...",
    },
    {
      id: 2,
      image: img2,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...",
    },
    {
      id: 3,
      image: img3,
      author: "LUNDEVvvvvv",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...",
    },
    {
      id: 4,
      image: img4,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat...",
    },
  ];

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const SliderDom = carouselDom.querySelector(".carousel .list");
    const thumbnailBorderDom = carouselDom.querySelector(
      ".carousel .thumbnail"
    );
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(
        ".carousel .list .item"
      );
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [slides.length]);
  useEffect(() => {
    setProgress(((activeIndex + 1) / slides.length) * 100);
  }, [activeIndex]);

  return (
    <div dir="ltr" ref={carouselRef} className="carousel">
      <div className="list">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            {/* Animated Image */}
            <AnimatePresence mode="wait">
              {index === activeIndex && (
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0, scale: 1.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>

            {/* Animated Content */}
            <motion.div
              className="content"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((items, index) => (
          <div
            key={items.id}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={items.image} alt={items.title} />
            <div className="content">
              <div className="title">{items.title}</div>
              <div className="description">
                {items.description.slice(0, 30)}...
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows flex justify-between items-center w-full mt-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-x-6">
          <button ref={prevRef} id="prev">
            <MdKeyboardArrowLeft size={26} />
          </button>
          <button ref={nextRef} id="next">
            <MdKeyboardArrowRight size={26} />
          </button>
        </div>

        {/* Progress Line with Progress Bar */}
        <div className="relative flex-grow mx-6 h-2 bg-white/30 rounded overflow-hidden">
          {/* Progress Bar */}
          <div
            className="absolute top-0 left-0 h-full transition-all duration-500 rounded"
            style={{
              width: `${progress}%`,
              backgroundColor: `hsl(${progress}, 70%, 50%)`,
            }}
          ></div>
        </div>

        {/* Slide Counter */}
        <div className="text-white text-4xl font-semibold min-w-[60px] text-center">
          0{activeIndex + 1}
        </div>
      </div>
    </div>
  );
};

export default Hero;
