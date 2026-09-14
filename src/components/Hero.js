"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFDF7] py-6 sm:py-10 lg:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text & CTA Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
          {/* Trust Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-transparent py-1 px-1 rounded-xl"
          >
            {/* Green Trust Star */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex items-center justify-center mr-1">
              <Image
                src="/images/star_green.png"
                alt="Trust Star"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 4 Full Stars + 1 Half Star */}
            <div className="flex items-center space-x-1">
              <Image src="/images/star_full.png" alt="star" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <Image src="/images/star_full.png" alt="star" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <Image src="/images/star_full.png" alt="star" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <Image src="/images/star_full.png" alt="star" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <Image src="/images/star_haf.png" alt="half star" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
            </div>

            {/* Rating Text */}
            <span className="font-bold text-[#1C1917] text-sm sm:text-base ml-1">Excellent</span>
            <span className="text-[#292524] text-sm sm:text-base font-normal">4.8 out of 5</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-parkinsans font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#1C1917] leading-[1.12] tracking-tight"
          >
            Best SMM Panel <br className="hidden sm:inline" />
            in Bangladesh -{" "}
            <span className="text-[#FF6B00]">
              Fast ,Safe &amp; Growth in Social Media.
            </span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#666666] text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl"
          >
            SMM is Bangladesh&apos;s most reliable &amp; cheap SMM panel for real social media growth.
            We built this platform for Bangladeshi businesses, creators, and agencies.
            You get fast delivery, safe methods, and followers that actually stay. No fake bots.
            No account risks. Just real results. Most panels chase big numbers. We focus on
            keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-[#E5DEC9] bg-white text-[#57534E] hover:text-[#FF6B00] hover:bg-[#F7F2E6] font-medium text-xs sm:text-base transition-colors text-center min-w-[140px]"
            >
              View Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#signup"
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] hover:opacity-95 text-white font-medium text-xs sm:text-base transition-opacity text-center shadow-md min-w-[160px]"
            >
              Create an Account
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image Graphic Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative w-full"
        >
          <div className="relative w-full max-w-[580px] aspect-[5/4] sm:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            <Image
              src="/images/hero_img.png"
              alt="SMM Panel Girl"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
