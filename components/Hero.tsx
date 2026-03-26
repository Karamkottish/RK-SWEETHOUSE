"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Lazy load Three.js canvas
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

const slogan = "A Bite of Love";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8FC 0%, #FFD6EC 55%, #FF4D9E15 100%)",
      }}
    >
      {/* Three.js Canvas — full hero background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HeroCanvas />
      </div>

      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(#FF4D9E 1px, transparent 1px), linear-gradient(90deg, #FF4D9E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16" style={{ pointerEvents: 'none' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)]">
          {/* Left — Text Content */}
          <div className="flex flex-col justify-center" style={{ pointerEvents: 'auto' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 self-start mb-8 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-pink-soft/60 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-pink-brand animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-pink-deep uppercase">
                Handcrafted with Love
              </span>
            </motion.div>

            {/* Brand name */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4"
            >
              <h2
                className="text-lg font-semibold text-pink-brand/80 tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                RK SweetHouse
              </h2>
            </motion.div>

            {/* Animated Slogan */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-2 overflow-hidden"
              aria-label={slogan}
              style={{ perspective: "800px" }}
            >
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {slogan.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className={`inline-block ${
                      char === " " ? "mr-4" : ""
                    } shimmer-text`}
                    style={{ transformOrigin: "top center" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              custom={1.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base sm:text-lg text-gray-500/80 leading-relaxed max-w-md"
            >
              Discover our world of artisan confections — each piece crafted
              with premium ingredients and a sprinkle of pure joy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={1.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/menu" className="btn-primary">
                <span>Explore Our Menu</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-pink-brand border-2 border-pink-brand/40 hover:border-pink-brand hover:bg-pink-soft/30 transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={2.0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-14 flex gap-10"
            >
              {[
                { value: "50+", label: "Sweet Varieties" },
                { value: "100%", label: "Natural Ingredients" },
                { value: "❤️", label: "Made with Love" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl font-bold text-pink-deep"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Floating Logo */}
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-full lg:min-h-[600px] w-full" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: 0.8,
              }}
              className="relative z-10 animate-float flex items-center justify-center w-full h-full"
            >
              <div className="relative w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] scale-[1.15] sm:scale-125 lg:scale-[1.35] lg:-ml-16 drop-shadow-2xl">
                <Image
                  src="/3d-logo-transparent.png"
                  alt="RK SweetHouse 3D Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-pink-brand/50 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-pink-brand/40 to-transparent" />
      </motion.div>
    </section>
  );
}
