"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Payments() {
  return (
    <section className="w-full bg-[#FFFDF7] py-10 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto overflow-hidden relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-3 mb-8 sm:mb-12"
      >
        <span className="text-[#FF6B00] font-bold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#FF6B00] pb-1">
          Payment Methods
        </span>
        <h2 className="font-parkinsans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1917]">
          Multiple Payment <span className="text-[#FF6B00]">Methods</span>
        </h2>
        <p className="text-[#666666] text-xs sm:text-base max-w-3xl leading-relaxed">
          We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order.
        </p>
      </motion.div>

      {/* World Map & Payment Badges Orbit */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-5xl mx-auto py-8 sm:py-12 flex flex-col items-center justify-center min-h-75 sm:min-h-105"
      >
        {/* World Map Vector Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/content.png"
            alt="World Map Network"
            width={950}
            height={480}
            className="w-full h-auto object-contain max-h-[380px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
