import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
    // Integrate backend/email service later
  };

  return (
    <footer className="py-8 bg-black text-gray-300 relative overflow-hidden">      
      <div className="relative z-10 max-w-6xl mx-auto px-18 grid md:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">Spotlight on Truth</h3>
          <p className="mt-2 text-sm text-gray-400">
            Documenting, verifying, and preserving truth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/regions" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Regions
              </Link>
            </li>
            <li>
              <Link to="/articles" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/merchandise" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Merchandise
              </Link>
            </li>
            <li>
              <Link to="/about" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Regions */}
        <div>
          <h4 className="text-white font-semibold mb-3">Regions</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Gaza</li>
            <li className="hover:text-white cursor-pointer">Kashmir</li>
            <li className="hover:text-white cursor-pointer">Sudan</li>
          </ul>
        </div>

        {/* Connect / Subscribe */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect & Subscribe</h4>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>

          {/* Email subscription */}
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-l-full border border-gray-400 focus:border-white focus:outline-none text-white"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#C33838] px-3 py-2 rounded-r-full border border-gray-400 hover:bg-red-700 hover:border-white transition text-white flex items-center"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Spotlight on Truth - All Rights Reserved.
      </p>
    </footer>
  );
}