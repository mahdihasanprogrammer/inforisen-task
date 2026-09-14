"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is buying followers legal in Bangladesh?",
      answer:
        "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
    },
    {
      question: "What if service is not delivered?",
      answer:
        "If an order fails to deliver within the specified timeframe, our automated system will process a refund back to your panel balance instantly.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders start within 5 to 30 minutes after placement. Full completion depends on order size and delivery speed settings.",
    },
    {
      question: "Is Drip feed safer?",
      answer:
        "Yes, drip feeding allows you to spread your order delivery over time, making follower and engagement growth look natural to algorithms.",
    },
    {
      question: "Can I order daily?",
      answer:
        "Absolutely. You can place multiple orders daily for different links or platforms without any restrictions.",
    },
    {
      question: "Can agencies resell services?",
      answer:
        "Yes! We offer API access so agencies and resellers can connect their own panel directly to our system.",
    },
    {
      question: "Will engagement drop?",
      answer:
        "We offer high-retention services with refill guarantees to ensure your engagement and follower counts remain steady.",
    },
    {
      question: "Which platform is best for business in BD?",
      answer:
        "Facebook and TikTok currently drive the highest organic engagement and business conversions in Bangladesh.",
    },
  ];

  const col1 = faqs.filter((_, idx) => idx % 2 === 0);
  const col2 = faqs.filter((_, idx) => idx % 2 === 1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#FFFDF7] py-10 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16"
      >
        <span className="text-[#FF6B00] font-bold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#FF6B00] pb-1">
          FAQ
        </span>
        <h2 className="font-parkinsans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1917]">
          Frequently Asked <span className="text-[#FF6B00]">Questions</span>
        </h2>
        <p className="text-[#666666] text-xs sm:text-base max-w-3xl leading-relaxed">
          Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.
        </p>
      </motion.div>

      {/* 2 Column Accordion Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start max-w-5xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          {col1.map((faq, i) => {
            const actualIndex = i * 2;
            const isOpen = openIndex === actualIndex;
            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl transition-all overflow-hidden border ${
                  isOpen
                    ? "bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] border-[#DD6017] text-white shadow-md"
                    : "bg-[#F7F2E8] border-[#EFE7D8] text-[#1C1917] hover:bg-[#F2ECE0]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(actualIndex)}
                  className="w-full py-3.5 sm:py-4 px-5 sm:px-6 text-left flex items-center justify-between font-bold text-xs sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="ml-2 flex-shrink-0">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-white/90 leading-relaxed font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          {col2.map((faq, i) => {
            const actualIndex = i * 2 + 1;
            const isOpen = openIndex === actualIndex;
            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl transition-all overflow-hidden border ${
                  isOpen
                    ? "bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] border-[#DD6017] text-white shadow-md"
                    : "bg-[#F7F2E8] border-[#EFE7D8] text-[#1C1917] hover:bg-[#F2ECE0]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(actualIndex)}
                  className="w-full py-3.5 sm:py-4 px-5 sm:px-6 text-left flex items-center justify-between font-bold text-xs sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="ml-2 flex-shrink-0">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-white/90 leading-relaxed font-normal"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
