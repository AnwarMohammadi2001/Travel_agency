import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <img
        src="/img4.jpg" // Replace with your image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          We provide top-notch services to help your business grow and succeed.
        </p>
        <button className="bg-primary hover:bg-white hover:text-primary transition text-white font-semibold px-6 py-3 rounded-full shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
