import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa"; // Added Globe icon for language toggle
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice"; // Adjust the import path as needed
import { toggleLanguage } from "../redux/languageSlice"; // Adjust the import path as needed

const navItems = [
  { id: 1, name: "صفحه اصلی", path: "#" },
  { id: 2, name: "درباره ما", path: "#about" },
  { id: 3, name: "خدمات ما", path: "#services" },
  { id: 4, name: "سفرهای زیارتی", path: "#ziyarat-trips" },
  { id: 5, name: "سفرهای سیاحتی", path: "#sightseeing-trips" },
  { id: 6, name: "گالری تصاویر", path: "#gallery" },
  { id: 7, name: "تماس با ما", path: "#contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode); // Access dark mode state from Redux
  const language = useSelector((state) => state.language.language); // Access language state from Redux

  // Set dark or light class based on the darkMode state
  const iconClass = darkMode ? "text-yellow-400" : "text-gray-600"; // Change icon color based on dark mode

  const toggleLang = () => {
    dispatch(toggleLanguage()); // Dispatch action to toggle language
  };

  return (
    <nav className={``}>
      <div className="px-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-5">
          <div className="text-2xl font-bold">✈️</div>
          <span className="text-3xl font-semibold font-Roboto dark:text-amber-500 transition-colors duration-500">
            {language === "en" ? "Travelogue" : "سفرنامه"}
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)" }}
          className="hidden md:flex space-x-10  px-32 py-3 font-medium dark:text-gray-700 
  bg-gradient-to-r from-gray-200 to-gray-100 
  shadow-md backdrop-blur-md dark:from-zinc-800  dark:to-zinc-900 transition-colors duration-500"
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-amber-400 relative dark:text-amber-500 dark:hover:text-amber-400 text-[15px] group cursor-pointer transition-colors duration-500"
            >
              <a href={item.path}>{item.name}</a>
              <span className="absolute h-[2px] left-0 transform w-full -bottom-1 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right  bg-amber-500 dark:bg-amber-500 transition-colors duration-500"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          {/* Dark Mode Toggle */}
          {darkMode ? (
            <FaSun
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
              onMouseDown={(e) => e.preventDefault()} // Prevents focus issues
            />
          ) : (
            <FaMoon
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
              onMouseDown={(e) => e.preventDefault()} // Prevents focus issues
            />
          )}

          {/* Language Toggle */}
          <FaGlobe
            className={`w-6 h-6 cursor-pointer ${iconClass}`}
            onClick={toggleLang} // Toggles between English and Dari
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
