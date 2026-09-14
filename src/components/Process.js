"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section 
      className="w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto relative overflow-hidden"
      style={{ background: "radial-gradient(circle at top right, #FFEBE0 0%, #FFFFFF 45%, #FFFFFF 60%, #FFDEC9 100%)" }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-3 mb-16 sm:mb-24"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#E65C00] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            WORKING PROCESS
          </span>
          <div className="flex items-center space-x-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E65C00]"></div>
            <div className="w-8 h-[1.5px] bg-[#E65C00]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E65C00]"></div>
          </div>
        </div>
        <h2 className="font-parkinsans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] pt-2">
          Grow Your <span className="text-[#E65C00]">Socials in 4 Simple</span> Steps
        </h2>
        <p className="text-[#666666] text-xs sm:text-sm max-w-2xl leading-relaxed">
          A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.
        </p>
      </motion.div>

      {/* 2x2 Grid with Central Orbit Hub */}
      <div className="relative max-w-5xl mx-auto">

        {/* Central Orbit Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center pointer-events-none"
        >
          <div 
            className="relative w-36 h-36 rounded-full flex items-center justify-center"
            style={{ 
              background: "rgba(255, 235, 220, 0.6)", 
              border: "1px solid rgba(255, 180, 130, 0.4)",
              backdropFilter: "blur(4px)"
            }}
          >
            {/* Left dot */}
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E65C00] border-2 border-white shadow-sm"></span>
            {/* Right dot */}
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E65C00] border-2 border-white shadow-sm"></span>

            {/* Inner orange circle with Logo/Text */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center font-parkinsans font-extrabold text-2xl text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #FF7A1A 0%, #C84B00 100%)" }}
            >
              H
            </div>
          </div>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 md:gap-x-16">

          {/* ── STEP 01 TOP LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative p-2"
          >
            <div className="relative bg-[#FFF9F5] border border-[#FFEADA] rounded-2xl p-6 sm:p-8 flex flex-col space-y-3 shadow-[0_10px_30px_rgba(230,92,0,0.04)] overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 opacity-30 pointer-events-none">
                <Image src="/images/shape1.png" alt="dots" width={64} height={64} className="w-full h-full object-contain" />
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF8C42] to-[#E65C00] rounded-r-2xl"></div>

              <span className="font-parkinsans font-extrabold text-4xl sm:text-5xl text-[#E65C00] relative z-10">01</span>
              <h3 className="font-parkinsans font-bold text-lg sm:text-xl text-[#E65C00] relative z-10">Create Account</h3>
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed relative z-10">
                Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.
              </p>
            </div>
          </motion.div>

          {/* ── STEP 02 TOP RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex flex-col justify-center p-6 sm:p-8 space-y-3"
          >
            <span className="font-parkinsans font-extrabold text-4xl sm:text-5xl text-[#E65C00]">02</span>
            <h3 className="font-parkinsans font-bold text-lg sm:text-xl text-[#E65C00]">Add Funds</h3>
            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
              Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.
            </p>
          </motion.div>

          {/* ── STEP 03 BOTTOM LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex flex-col justify-center p-6 sm:p-8 space-y-3"
          >
            <span className="font-parkinsans font-extrabold text-4xl sm:text-5xl text-[#E65C00]">03</span>
            <h3 className="font-parkinsans font-bold text-lg sm:text-xl text-[#E65C00]">Select Service</h3>
            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
              Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.
            </p>
          </motion.div>

          {/* ── STEP 04 BOTTOM RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative p-2"
          >
            <div className="relative bg-[#FFF9F5] border border-[#FFEADA] rounded-2xl p-6 sm:p-8 flex flex-col space-y-3 shadow-[0_10px_30px_rgba(230,92,0,0.04)] overflow-hidden">
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30 pointer-events-none">
                <Image src="/images/shape2.png" alt="dots" width={64} height={64} className="w-full h-full object-contain" />
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF8C42] to-[#E65C00] rounded-l-2xl"></div>

              <span className="font-parkinsans font-extrabold text-4xl sm:text-5xl text-[#E65C00] relative z-10">04</span>
              <h3 className="font-parkinsans font-bold text-lg sm:text-xl text-[#E65C00] relative z-10">Place your order</h3>
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed relative z-10">
                Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}