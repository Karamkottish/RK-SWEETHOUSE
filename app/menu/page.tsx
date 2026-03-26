"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const dots = [0, 1, 2];

export default function MenuPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(135deg, #FFF8FC 0%, #FFD6EC 60%, #FF4D9E18 100%)" }}
    >
      <Navbar />

      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Subtle polka-dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #FF4D9E 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-24 pb-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="glass-card p-4 shadow-xl shadow-pink-brand/15 inline-block">
            <div className="relative w-28 h-28">
              <Image
                src="/logo.png"
                alt="RK SweetHouse"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Coming Soon text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-pink-soft/60 text-xs font-bold tracking-[0.25em] text-pink-brand uppercase">
            ✨ Coming Soon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 shimmer-text"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Sweet Menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-gray-500/80 max-w-md leading-relaxed mb-10"
        >
          We&apos;re curating something incredibly delightful for you.
          Our full menu of handcrafted sweets is almost ready — stay tuned!
        </motion.p>

        {/* Bouncing dots loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 mb-12"
        >
          {dots.map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-pink-brand"
              style={{
                animation: `bounceDot 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="btn-primary">
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>

      {/* Footer mini */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 text-center py-6 text-xs text-gray-400"
      >
        © {new Date().getFullYear()} RK SweetHouse · A Bite of Love
      </motion.footer>
    </main>
  );
}
