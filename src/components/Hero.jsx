import React, { useEffect, useRef, useState } from "react";
import "../utils/Carousel.css";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";
import her5 from '../assets/image/img5.jpg'
import her2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const Hero = () => {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const slides = [
    {
      id: 1,
      image: her5,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      id: 2,
      image: img2,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      id: 3,
      image: img3,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      id: 4,
      image: img4,
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
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

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div ref={carouselRef} className="carousel">
      <div className="list">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
            </div>
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

      <div className="arrows">
        <button ref={prevRef} id="prev">
          &#9664;
        </button>
        <button ref={nextRef} id="next">
          &#9654;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default Hero;
