"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    icon: "❤️",
    title: "Made with Love",
    description: "Every piece carries the warmth of our family's tradition, handcrafted with genuine passion.",
  },
  {
    icon: "🏠",
    title: "Homemade",
    description: "From our kitchen to your table — authentic recipes passed down through generations.",
  },
  {
    icon: "🌿",
    title: "Natural Ingredients",
    description: "We source only the finest, freshest ingredients — no preservatives, no shortcuts.",
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Curvy Divider */}
      <div className="relative w-full overflow-hidden" style={{ marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          style={{ display: "block", minHeight: "60px" }}
        >
          <path
            d="M0,40 C240,100 480,0 720,60 C960,120 1200,20 1440,80 L1440,120 L0,120 Z"
            fill="white"
          />
          <path
            d="M0,60 C200,110 400,10 720,70 C1040,130 1240,30 1440,90 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* About Us Section */}
      <section
        id="about"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "white" }}
      >
        {/* Subtle pink accent orb */}
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,77,158,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,214,236,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-200/60 bg-pink-50/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-brand" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-pink-brand uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Family United
              <br />
              <span className="shimmer-text">by Sweetness</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              At RK SweetHouse, we&apos;re more than a bakery — we&apos;re a family bound by the
              art of making sweets. Every recipe holds a memory, every flavor tells a story,
              and every bite is a gift of love from our home to yours.
            </motion.p>
          </div>

          {/* Content grid — story + image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left — Story text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="space-y-6">
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  What started as a grandmother&apos;s kitchen tradition has blossomed into a
                  passion that spans generations. We believe that the best sweets aren&apos;t
                  made in factories — they&apos;re made in homes, where each ingredient is
                  chosen with care, and each recipe is perfected with patience.
                </p>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Our sweets carry the essence of <strong className="text-gray-700">homemade warmth</strong>.
                  We don&apos;t rush perfection. From the delicate balancing of flavors to the
                  final sprinkle of love, every step is a celebration of our craft. We invite
                  you to taste the difference that family devotion brings.
                </p>
              </div>

              {/* Signature line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.3 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-pink-brand to-pink-soft rounded-full" />
                <span
                  className="text-sm text-pink-brand/80 italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The RK Family
                </span>
              </motion.div>
            </motion.div>

            {/* Right — Logo / family visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,214,236,0.3), rgba(255,77,158,0.08))",
                    borderRadius: "2rem",
                  }}
                />
                <div className="relative glass-card p-8 sm:p-10">
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto">
                    <Image
                      src="/logo.png"
                      alt="RK SweetHouse Family"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <p
                    className="text-center mt-5 text-sm text-pink-brand/70 italic"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    &ldquo;Where every sweet tells our story&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values cards */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  delay: i * 0.12,
                }}
                className="group relative p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-brand/5"
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #FFF8FC 100%)",
                  border: "1px solid rgba(255, 214, 236, 0.35)",
                }}
              >
                {/* Icon */}
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-pink-brand to-pink-soft rounded-full transition-all duration-300 group-hover:w-16" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
