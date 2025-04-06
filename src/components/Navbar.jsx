import React from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Moon icon for dark mode
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice"; // Adjust the import path as needed

const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Menu", path: "#menu" },
  { id: 4, name: "Chefs", path: "#chef" },
  { id: 5, name: "Gallery", path: "#gallery" },
  { id: 6, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode); // Access dark mode state from Redux

  // Set dark or light class based on the darkMode state

  const iconClass = darkMode ? "text-yellow-400" : "text-gray-600"; // Change icon color based on dark mode

  return (
    <nav className={``}>
      <div className="px-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2 py-3">
          <div className="text-2xl font-bold">☕</div>
          <span className="text-2xl font-semibold font-Roboto dark:text-amber-500">
            Cafe Roya
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)" }}
          className="hidden md:flex space-x-8 py-4 px-8 font-medium text-white 
  bg-gradient-to-r from-gray-700 to-gray-900 
  shadow-md backdrop-blur-sm dark:from-zinc-800 dark:to-zinc-900"
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-amber-400 relative dark:text-amber-500 dark:hover:text-amber-400 text-lg group cursor-pointer"
            >
              <a href={item.path}>{item.name}</a>
              <span className="absolute h-[2px] left-0 transform w-full -bottom-1 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 bg-amber-500 dark:bg-amber-500"></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 py-3">
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

          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-800 dark:text-amber-500" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-800 dark:text-amber-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
