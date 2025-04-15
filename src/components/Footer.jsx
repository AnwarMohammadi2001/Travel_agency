import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import HeadFooter from "./HeadFooter";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="">
      <HeadFooter />
      <div className="bg-[#001219] text-white py-12 ">
        <div className="max-w-[78%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div>
            <img src="/logo.svg" alt="" />
            <p className="mt-4 text-sm max-w-[300px] text-gray-300">
              Your trusted partner for extraordinary travel experiences since
              2015.
            </p>
            <div className="flex gap-5 mt-4 text-primary transition-colors duration-500">
              <FaFacebook
                size={24}
                className="cursor-pointer hover:text-white"
              />
              <FaTwitter
                size={24}
                className="cursor-pointer hover:text-white"
              />
              <FaInstagram
                size={24}
                className="cursor-pointer hover:text-white"
              />
              <FaTiktok size={24} className="cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <p>455 West Orchard Street Kings</p>
              <p>Mountain, NC 280867</p>
              <li className="flex items-center gap-2">
                <MdCall size={20} className="text-primary" />
                <a href="#">+088 (246) 642-27-10</a>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail size={20} className="text-primary" />
                <a href="#">example@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter and stay updated.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900 border bg-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 cursor-pointer text-white py-2 rounded-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-center text-gray-400 border-t max-w-5xl mx-auto text-sm">
          <p className="mt-5">
            &copy; {new Date().getFullYear()} ADVENTURE AURA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
