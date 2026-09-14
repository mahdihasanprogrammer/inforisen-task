"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: "/images/icon1.png",
      value: "321,879",
      label: "Order Processed",
    },
    {
      id: 2,
      icon: "/images/icon2.png",
      value: "6,245",
      label: "Available Services",
    },
    {
      id: 3,
      icon: "/images/icon3.png",
      value: "8,552",
      label: "Registered User",
    },
    {
      id: 4,
      icon: "/images/icon4.png",
      value: "#1",
      label: "Regional Rank",
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF7] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border border-[#F3EBE0] shadow-[0_8px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center relative">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-parkinsans font-extrabold text-2xl sm:text-3xl text-[#1C1917] mb-1">
              {stat.value}
            </h3>
            <p className="text-[#FF6B00] font-medium text-xs sm:text-sm tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
