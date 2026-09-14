"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="w-full bg-[#FFFDF7] py-12 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1920px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#FFF5EA] rounded-[28px] border border-[#FDE5CC] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between min-h-[380px] lg:min-h-[420px] shadow-xs"
      >
        
        {/* World Map Overlay (clipped inside rounded card) */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[70%] h-[90%] opacity-40 flex items-center justify-center">
            <Image
              src="/images/world.png"
              alt="World Map Overlay"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 max-w-xl flex flex-col space-y-5 lg:space-y-6">
          <h2 className="font-parkinsans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1E1E] leading-[1.2] tracking-tight">
            Ready to Grow Your Social<br className="hidden sm:inline" />
            {" "}Media <span className="text-[#FF6B00]">in Bangladesh?</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-[500px]">
            Join over 68,000 users who are already using SMM to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="px-7 py-3.5 rounded-xl border border-[#FF9243] bg-white text-[#FF6B00] hover:bg-[#FFF7ED] font-medium text-sm sm:text-base transition-colors text-center"
            >
              See All Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#signup"
              className="px-7 py-3.5 rounded-xl text-white font-medium text-sm sm:text-base transition-opacity text-center shadow-md hover:opacity-95"
              style={{
                background: "linear-gradient(90deg, #FF9243 0%, #DD6017 55%, #983200 100%)",
              }}
            >
              Create Free Account
            </motion.a>
          </div>
        </div>

        {/* Right Girl Image Column - Overflowing Top */}
        <div className="relative lg:absolute lg:right-10 xl:right-16 lg:-top-12 lg:bottom-0 w-full lg:w-[420px] xl:w-[460px] h-[340px] lg:h-[calc(100%+48px)] pointer-events-none z-10 flex items-end justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/girl.png"
              alt="Social Media Marketing Specialist"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

      </motion.div>
    </section>
  );
}

