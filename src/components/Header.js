"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 sm:py-6 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-[#FF6B00] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-parkinsans font-bold text-xs sm:text-sm tracking-wide border border-[#F0E6D8] shadow-xs hover:border-[#FF6B00] transition-colors"
          >
            LOGO
          </motion.div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a
            href="#home"
            className="text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[#57534E] hover:text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            Services
          </a>
          <a
            href="#blog"
            className="text-[#57534E] hover:text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-[#57534E] hover:text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-[#57534E] hover:text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#api"
            className="text-[#57534E] hover:text-[#FF6B00] font-medium text-sm lg:text-base transition-colors"
          >
            API
          </a>
        </nav>

        {/* Desktop Auth Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-xl border border-[#E5DEC9] text-[#FF6B00] hover:bg-[#F7F2E6] font-medium text-xs lg:text-sm transition-colors cursor-pointer"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-xl bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white font-medium text-xs lg:text-sm transition-opacity hover:opacity-95 shadow-sm cursor-pointer"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#F7F2E8] text-[#57534E] hover:text-[#FF6B00] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[70px] bg-[#FFFDF7]/98 backdrop-blur-lg border-b border-[#EAE4D9] p-6 shadow-xl z-50 flex flex-col space-y-4"
          >
            <a
              href="#home"
              className="text-[#FF6B00] font-semibold text-lg border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-[#57534E] font-medium text-base border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-[#57534E] font-medium text-base border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#about"
              className="text-[#57534E] font-medium text-base border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-[#57534E] font-medium text-base border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              href="#api"
              className="text-[#57534E] font-medium text-base border-b border-[#F0E8DD] pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </a>
            <div className="pt-2 flex flex-col space-y-3">
              <button className="w-full py-3 rounded-xl border border-[#E5DEC9] text-[#FF6B00] font-semibold text-sm">
                Sign In
              </button>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white font-semibold text-sm shadow-md">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
