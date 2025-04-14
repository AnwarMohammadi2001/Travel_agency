import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopulerDes from "../components/PopulerDes";

const Home = () => {
  return (
    <div>
      <header className="fixed w-full z-60  transition-colors duration-500 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Navbar />
        </div>
      </header>
      <main className="">
        <Hero />
        <PopulerDes />
      </main>
    </div>
  );
};

export default Home;
