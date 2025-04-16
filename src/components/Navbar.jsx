import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { toggleLanguage } from "../redux/languageSlice";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Package", path: "#Package" },
  { id: 4, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const iconClass = darkMode ? "text-yellow-400" : "text-gray-100";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 w-full left-0 px-4 md:px-28 z-60 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center space-x-5">
          <img src="/logo.svg" alt="Logo" className="h-10 w-36 md:w-40 lg:w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium">
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

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-primary px-4 py-1 rounded-full">
            {darkMode ? (
              <FaSun
                className={`w-6 h-6 cursor-pointer ${iconClass}`}
                onClick={() => dispatch(toggleDarkMode())}
              />
            ) : (
              <FaMoon
                className={`w-6 h-6 cursor-pointer ${iconClass}`}
                onClick={() => dispatch(toggleDarkMode())}
              />
            )}
            <FaGlobe
              className={`w-6 h-6 cursor-pointer ${iconClass} ml-3`}
              onClick={() => dispatch(toggleLanguage())}
            />
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/90 rounded-md p-4 mt-2"
          >
            <ul className="flex flex-col space-y-4 text-gray-100">
              {navItems.map((item) => (
                <li key={item.id} className="hover:text-amber-400">
                  <a href={item.path} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
              <div className="flex space-x-4 pt-2 border-t border-gray-700 mt-2">
                {darkMode ? (
                  <FaSun
                    className={`w-6 h-6 cursor-pointer ${iconClass}`}
                    onClick={() => dispatch(toggleDarkMode())}
                  />
                ) : (
                  <FaMoon
                    className={`w-6 h-6 cursor-pointer ${iconClass}`}
                    onClick={() => dispatch(toggleDarkMode())}
                  />
                )}
                <FaGlobe
                  className={`w-6 h-6 cursor-pointer ${iconClass}`}
                  onClick={() => dispatch(toggleLanguage())}
                />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
