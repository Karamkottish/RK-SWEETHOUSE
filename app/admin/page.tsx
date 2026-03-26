"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AdminPortal() {
  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-24"
      style={{
        background: "linear-gradient(135deg, #FFF8FC 0%, #FFFFFF 40%, #FFD6EC 100%)",
      }}
    >
      <Navbar />

      {/* Decorative Orbs */}
      <div
        className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,77,158,0.04) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,214,236,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="inline-block relative w-32 h-32 sm:w-40 sm:h-40 glass-card p-4 rounded-[2rem] shadow-xl shadow-pink-brand/10">
             <Image src="/3d-logo-transparent.png" alt="RK SweetHouse" fill className="object-contain drop-shadow-lg scale-110" priority />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-gray-200 text-xs font-bold tracking-[0.25em] text-gray-500 uppercase shadow-sm">
            🔒 Staff Only
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Admin <span className="text-pink-brand">Portal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed mb-12"
        >
          The sweetest management dashboard is currently under development. Please check back later!
        </motion.p>

        {/* Bouncing Loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 rounded-full bg-pink-brand shadow-sm shadow-pink-brand/30"
              style={{
                animation: `bounceDot 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
    </main>
  );
}
