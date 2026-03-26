"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/menu/image${i + 1}.jpeg`,
  alt: `RK SweetHouse Delight ${i + 1}`,
}));

export default function MenuSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // How many cards visible based on screen
  const visibleCount = 3;
  const totalSlides = menuImages.length;

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > current ? 1 : -1));
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [current, totalSlides]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(next, 3500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, next]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Get visible images (current, current+1, current+2)
  const getVisibleImages = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (current + i) % totalSlides;
      items.push({ ...menuImages[idx], offset: i });
    }
    return items;
  };

  const visibleImages = getVisibleImages();

  return (
    <>
      {/* Curvy divider from white to pink */}
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
            d="M0,80 C360,20 720,110 1080,40 C1260,5 1380,60 1440,30 L1440,120 L0,120 Z"
            fill="#FFF8FC"
          />
          <path
            d="M0,90 C300,40 600,100 900,50 C1100,20 1300,70 1440,45 L1440,120 L0,120 Z"
            fill="#FFF8FC"
            opacity="0.6"
          />
        </svg>
      </div>

      <section
        id="menu-preview"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FFF8FC 0%, #FFD6EC 60%, #FF4D9E15 100%)",
        }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,77,158,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,214,236,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-pink-soft/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-brand animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-pink-brand uppercase">
                Our Creations
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="text-gray-900">Taste Our </span>
              <span className="shimmer-text">Sweet Collection</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
              className="text-base sm:text-lg text-gray-500/80 max-w-xl mx-auto leading-relaxed"
            >
              Each creation is a masterpiece — handcrafted with love, designed to
              delight your senses.
            </motion.p>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
            className="relative"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            {/* Main carousel area */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleImages.map((item, i) => (
                  <Link
                    key={`${item.id}-${current}`}
                    href="/menu"
                    className="group block"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                        delay: i * 0.08,
                      }}
                      className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                      style={{
                        boxShadow: "0 8px 32px rgba(233, 30, 140, 0.12)",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover text */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white tracking-wide">
                            View Menu
                          </span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Corner glass tag */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => { pauseAutoPlay(); prev(); }}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-pink-soft/50 flex items-center justify-center text-pink-brand hover:bg-pink-brand hover:text-white hover:border-pink-brand transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-brand/20"
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {menuImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { pauseAutoPlay(); goTo(i); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2.5 bg-pink-brand"
                        : "w-2.5 h-2.5 bg-pink-soft/70 hover:bg-pink-brand/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => { pauseAutoPlay(); next(); }}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-pink-soft/50 flex items-center justify-center text-pink-brand hover:bg-pink-brand hover:text-white hover:border-pink-brand transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-brand/20"
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <span className="text-[10px] tracking-[0.15em] text-pink-brand/40 uppercase">
                {isAutoPlaying ? "Auto-playing" : "Paused"} · {current + 1} / {totalSlides}
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link href="/menu" className="btn-primary">
              <span>View Full Menu</span>
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
