import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import HeadFooter from "./HeadFooter";

const Footer = () => {
  return (
    <footer className="">
      <HeadFooter />
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div>
            <h1 className="text-2xl font-bold text-red-500">Tamadon</h1>
            <p className="mt-4 text-sm text-gray-300">
              Tamadon is your go-to travel partner, offering unforgettable
              journeys with trust and ease. Discover the world with us.
            </p>
            <div className="flex gap-3 mt-4 text-red-400">
              <FaFacebook className="cursor-pointer hover:text-white" />
              <FaTwitter className="cursor-pointer hover:text-white" />
              <FaInstagram className="cursor-pointer hover:text-white" />
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
                className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Tamadon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
