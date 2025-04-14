import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlobe, FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { toggleLanguage } from "../redux/languageSlice";

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Package", path: "#Package" },
  { id: 4, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const language = useSelector((state) => state.language.language);
  const iconClass = darkMode ? "text-yellow-400" : "text-gray-100";

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full left-0 px-28 right-0 z-60 transition-all duration-300 ${scrolled}`}
    >
      <div className="px-4 flex items-center justify-between py-3">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-5">
          <img src="/logo.svg" alt="" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 px-32 py-3 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-amber-400 relative dark:text-amber-500 dark:hover:text-amber-400 text-[15px] group cursor-pointer transition-colors duration-500"
            >
              <a href={item.path} className="text-gray-100">
                {item.name}
              </a>
              <span className="absolute h-[2px] left-0 transform w-full -bottom-1 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right bg-gray-100 dark:bg-amber-500 transition-transform duration-500"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="relative flex items-center py-1   px-5 bg-primary rounded-full overflow-hidden transition-all duration-500">
          {/* Icons Section */}
          <div className="flex items-center  p-1 rounded-full space-x-4 relative z-10">
            {darkMode ? (
              <FaSun
                className={`w-6 h-6 cursor-pointer ${iconClass}`}
                onClick={() => dispatch(toggleDarkMode())}
                onMouseDown={(e) => e.preventDefault()}
              />
            ) : (
              <FaMoon
                className={`w-6 h-6 cursor-pointer ${iconClass}`}
                onClick={() => dispatch(toggleDarkMode())}
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            <FaGlobe
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleLanguage())}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
