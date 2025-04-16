import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import HeadFooter from "./HeadFooter";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <HeadFooter />

      {/* Footer Main Content */}
      <div className="bg-[#001219] text-white py-12 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo and Socials */}
          <div className="">
            <img src="/logo.svg" alt="Logo" className="w-36 md:w-52 " />
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Your trusted partner for extraordinary travel experiences since
              2015.
            </p>
            <div className="flex gap-4 mt-4 text-primary">
              {[FaFacebook, FaTwitter, FaInstagram, FaTiktok].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    size={22}
                    className="cursor-pointer hover:text-white transition-colors duration-300"
                  />
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
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

          {/* Support Links */}
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

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p>455 West Orchard Street</p>
              <p>Kings Mountain, NC 280867</p>
              <div className="flex items-center gap-2 mt-2">
                <MdCall className="text-primary" />
                <a href="#">+088 (246) 642-27-10</a>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-primary" />
                <a href="#">example@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter and stay updated.
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 border bg-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 max-w-4xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} ADVENTURE AURA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
