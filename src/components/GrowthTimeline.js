"use client";

import { motion } from "framer-motion";

export default function GrowthTimeline() {
  const columns = [
    {
      phase: "Weeks 1-2",
      doDesc: "Use SMM services to build initial followers and engagement",
      whyDesc: "Creates baseline credibility and improves first impression",
      costDesc: "৳2,000–5,000",
    },
    {
      phase: "Weeks 3-4",
      doDesc: "Start posting consistent, high-quality content",
      whyDesc: "Larger follower base increases organic engagement",
      costDesc: "Mostly content effort",
    },
    {
      phase: "Months 2-3",
      doDesc: "Continue content + light support if needed",
      whyDesc: "Faster reach, better algorithm response",
      costDesc: "Reduced SMM usage",
    },
    {
      phase: "Months 3-6",
      doDesc: "Focus mainly on organic growth",
      whyDesc: "Strong engagement pushes content naturally",
      costDesc: "Minimal or no SMM needed",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-10 sm:mb-14"
      >
        {/* Label */}
        <div className="flex flex-col items-center mb-4">
          <span
            className="font-bold uppercase tracking-[0.18em] pb-0.5"
            style={{ fontSize: "11px", color: "#FF6B00", borderBottom: "2px solid #FF6B00" }}
          >
            GROWTH
          </span>
          <div className="w-1.5 h-1.5 rounded-full mt-0.5" style={{ background: "#FF6B00" }} />
        </div>

        {/* Heading */}
        <h2
          className="font-parkinsans font-extrabold leading-tight mb-3"
          style={{ fontSize: "clamp(24px, 3vw, 42px)", color: "#1A1A2E" }}
        >
          Growing on Social Media in{" "}
          <span style={{ color: "#FF6B00" }}>Bangladesh</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-center leading-relaxed"
          style={{ fontSize: "13px", color: "#6B6B6B", maxWidth: "520px" }}
        >
          The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning
          for momentum, then let organic growth take over.
        </p>
      </motion.div>

      {/* ── 4 Cards Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {columns.map((col, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #FFD4A3",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* ── Phase Badge ── */}
            <div className="flex justify-center pt-5 pb-4 px-4">
              <div
                className="font-semibold text-white text-center"
                style={{
                  background: "linear-gradient(90deg, #FF9243 0%, #DD6017 55%, #983200 100%)",
                  borderRadius: "10px",
                  fontSize: "13px",
                  padding: "8px 28px",
                  minWidth: "130px",
                  letterSpacing: "0.01em",
                }}
              >
                {col.phase}
              </div>
            </div>

            {/* ── Steps ── */}
            <div className="flex flex-col px-3 pb-4 gap-0">

              {/* Step 01 */}
              <StepCard num="01" title="What You Do" desc={col.doDesc} />

              {/* Connector */}
              <StepConnector />

              {/* Step 02 */}
              <StepCard num="02" title="Why it Works" desc={col.whyDesc} />

              {/* Connector */}
              <StepConnector />

              {/* Step 03 */}
              <StepCard num="03" title="Estimated Cost/ Time" desc={col.costDesc} />

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Step Sub-card ─── */
function StepCard({ num, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, transition: { duration: 0.15 } }}
      className="flex flex-col cursor-default"
      style={{
        background: "#F5F5F7",
        borderRadius: "12px",
        padding: "14px 14px 14px 12px",
      }}
    >
      {/* Number badge + Title row */}
      <div className="flex items-center gap-2.5 mb-3">
        {/* White number badge */}
        <div
          className="flex-shrink-0 flex items-center justify-center font-bold"
          style={{
            background: "#FFFFFF",
            borderRadius: "6px",
            width: "30px",
            height: "22px",
            fontSize: "10px",
            color: "#999999",
            boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
            letterSpacing: "0.02em",
          }}
        >
          {num}
        </div>
        {/* Title in orange */}
        <span
          className="font-parkinsans font-bold leading-snug"
          style={{ fontSize: "13px", color: "#FF6B00" }}
        >
          {title}
        </span>
      </div>

      {/* Orange bullet + description */}
      <div className="flex items-start gap-2">
        <span
          className="shrink-0"
          style={{ color: "#FF6B00", fontSize: "9px", marginTop: "4px", lineHeight: 1 }}
        >
          ●
        </span>
        <p
          className="leading-relaxed"
          style={{ fontSize: "12px", color: "#666666" }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Vertical dot connector ─── */
function StepConnector() {
  return (
    <div className="flex items-center" style={{ paddingLeft: "20px", paddingTop: "2px", paddingBottom: "2px" }}>
      <div className="flex flex-col items-center">
        {/* top dashed */}
        <div
          style={{
            width: 0,
            height: "10px",
            borderLeft: "1.5px solid #FF8C42",
            opacity: 0.45,
          }}
        />
        {/* dot */}
        <div
          style={{
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            background: "#FF6B00",
          }}
        />
        {/* bottom dashed */}
        <div
          style={{
            width: 0,
            height: "10px",
            borderLeft: "1.5px solid #FF8C42",
            opacity: 0.45,
          }}
        />
      </div>
    </div>
  );
}
