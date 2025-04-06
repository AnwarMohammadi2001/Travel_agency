import React from "react";
import image from "../assets/footer.jpg";
import img1 from "../assets/about.jpg";
import img2 from "../assets/about1.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";
import img5 from "../assets/about5.jpg";
import img6 from "../assets/gallary1.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
const navItems = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 3, name: "Menu", path: "#menu" },
  { id: 4, name: "Chefs", path: "#chef" },
  { id: 5, name: "Gallery", path: "#gallery" },
  { id: 6, name: "Contact", path: "#contact" },
];
const insta = [img1, img2, img3, img4, img5, img6];
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Ensures the image covers the entire footer
        backgroundPosition: "center", // Centers the image
        height: "500px", // Adjust the height as needed
      }}
      className="h-[550px] pt-10  relative"
    >
      {/* Add any content you want in the footer */}
      <div className="absolute inset-0 bg-black opacity-90 "></div>
      <div className="max-w-[80%] mx-auto text-white  relative z-20 py-6 grid gap-x-10 grid-cols-4 ">
        <div className="space-y-3">
          {/* Cafe Logo and Name */}
          <div className="flex items-center  space-x-2">
            <div className="text-5xl font-bold">☕</div>
            <span className="text-xl font-semibold font-Roboto dark:text-amber-500">Cafe Roya</span>
          </div>

          {/* Description */}
          <p className="pt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            inventore nemo.
          </p>

          {/* Contact Information */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-x-4 text-sm">
              <FaMapMarkerAlt className="text-yellow-400 w-7 h-7" />
              <span>123 Cafe Barchi, Kabul, Afghanistan</span>
            </div>
            <div className="flex items-center gap-x-4 text-sm">
              <FaPhoneAlt className="text-yellow-400 w-7 h-7" />
              <span>+123 456 7890</span>
              <span>+123 456 7890</span>
            </div>
            <div className="flex  items-center gap-x-4 text-sm">
              <FaEnvelope className="text-yellow-400 w-7 h-7" />
              <span>info@caferoya.com</span>
            </div>
          </div>
        </div>
        <div className="text-white">
          <div className="flex items-center   space-x-2">
            <span className="text-lg font-semibold dark:text-amber-500">Quick Link</span>
          </div>

          <ul className=" pt-7 font-medium space-y-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="hover:text-yellow-500 relative text-base group cursor-pointer"
              >
                <a href={item.path}>{item.name}</a>
                {/* <span className="absolute text-gray-800 h-[2px] left-0 transform w-full -bottom-1 scale-x-0 tra group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 bg-gray-800"></span> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <div className="flex items-center  space-x-2">
            <span className="text-lg font-semibold dark:text-amber-500">Instagram</span>
          </div>

          <div className="pt-9 grid grid-cols-3 gap-2">
            {insta.map((img) => (
              <div key={img.id}>
                <img src={img} alt="image instagram" className="h-20 w-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-white">
          {/* Title */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold dark:text-amber-500">Subscribe</span>
          </div>

          {/* Description */}
          <div className="pt-9">
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              nihil placeat ad nemo, dolores quam mollitia.
            </p>
          </div>

          {/* Email Input */}
          <div className="pt-4 flex items-center justify-center">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs px-3 py-2.5 mt-3 bg-white text-gray-800 focus:outline-none  rounded-l-md"
            />

            {/* Submit Button */}
            <button className="bg-yellow-500 text-black py-2.5 px-3 mt-3 ml-1 rounded-r-md flex items-center justify-center">
              <AiOutlineSend className="text-lg" />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="pt-6 flex space-x-4 text-xl text-yellow-400">
            <FaFacebook className="cursor-pointer hover:text-white transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-white transition duration-300" />
            <FaTwitter className="cursor-pointer hover:text-white transition duration-300" />
            <FaLinkedin className="cursor-pointer hover:text-white transition duration-300" />
          </div>
        </div>
      </div>
      <div className="max-w-[80%] relative z-2 mx-auto text-white border-t border-gray-600 py-6 mt-10">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Cafe Roya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
