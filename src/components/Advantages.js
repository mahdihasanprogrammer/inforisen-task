"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      icon: "/images/password.png",
      title: "We Never Ask for Your Password",
      desc: "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
      linkText: "Zero security risk.",
      linkColor: "text-[#00B67A]",
    },
    {
      id: 2,
      icon: "/images/not-bots.png",
      title: "We Use Real Users, Not Bots",
      desc: "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when",
      linkText: "bans happen. ➔",
      linkColor: "text-[#00B67A]",
    },
    {
      id: 3,
      icon: "/images/trafic.png",
      title: "We Deliver Gradually",
      desc: "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.",
    },
    {
      id: 4,
      icon: "/images/cup.png",
      title: "Our Track Record",
      desc: "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto relative overflow-hidden">
      {/* Background Shape Top-Left */}
      <div className="absolute top-0 left-0 w-full sm:w-2/3 lg:w-1/2 h-80 sm:h-96 pointer-events-none z-0">
        <Image
          src="/images/shape1.png"
          alt="background shape top"
          width={800}
          height={400}
          className="w-full h-full object-contain object-top-left"
        />
      </div>

      {/* Background Shape Bottom-Right */}
      <div className="absolute bottom-0 right-0 w-full sm:w-2/3 lg:w-1/2 h-80 sm:h-96 pointer-events-none z-0">
        <Image
          src="/images/shape2.png"
          alt="background shape bottom"
          width={800}
          height={400}
          className="w-full h-full object-contain object-bottom-right"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 mb-14 sm:mb-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-[#FF6B00] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              ADVANTAGES
            </span>
            <div className="flex items-center space-x-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div>
              <div className="w-8 h-[1.5px] bg-[#FF6B00]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div>
            </div>
          </div>

          <h2 className="font-parkinsans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] pt-1">
            Advantages of using <span className="text-[#FF6B00]">our panel services</span>
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm max-w-2xl leading-relaxed">
            Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
          </p>
        </motion.div>

        {/* 2x2 Cards Grid with Central Divider Lines */}
        <div className="relative">
          {/* Subtle Orange Grid Divider Overlay (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent -translate-y-1/2 pointer-events-none z-0"></div>
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF6B00]/30 to-transparent -translate-x-1/2 pointer-events-none z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {advantages.map((adv, idx) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/90 backdrop-blur-sm rounded-[32px] p-8 sm:p-10 border border-[#F3F4F6] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05)] flex flex-col space-y-4 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-start mb-2">
                  <Image
                    src={adv.icon}
                    alt={adv.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-parkinsans font-bold text-xl sm:text-2xl text-[#1C1917]">
                  {adv.title}
                </h3>
                <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                  {adv.desc}{" "}
                  {adv.linkText && (
                    <span className={`font-bold text-xs sm:text-sm inline-block ${adv.linkColor || "text-[#00B67A]"}`}>
                      {adv.linkText}
                    </span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}