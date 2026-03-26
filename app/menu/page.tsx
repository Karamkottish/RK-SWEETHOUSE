"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const menuItems = [
  {
    id: 1,
    title: "7 Pieces Cake with Marshmallows",
    description: "7 pieces of RK SweetHouse cake with 5 pieces of marshmallows, sprinkled with love and coconut.",
    price: "25",
    images: ["/menu/image1.jpeg", "/menu/image2.jpeg"],
  },
  {
    id: 2,
    title: "5 Pieces Cake with Oreos",
    description: "5 pieces of RK SweetHouse Cake topped with Oreos and drowned in hot chocolate pudding.",
    price: "25",
    images: ["/menu/image3.jpeg", "/menu/image4.jpeg"],
  },
  {
    id: 3,
    title: "2 Pieces Coconut Cake",
    description: "2 pieces of RK SweetHouse cake with a generous sprinkle of love and coconut.",
    price: "17 Each Piece ",
    images: ["/menu/image5.jpeg"],
  },
  {
    id: 4,
    title: "Hot Chocolate Pudding Cake",
    description: "RK SweetHouse Cake mainly with hot chocolate pudding. You can also add Kinder or customize it!",
    price: "17",
    images: ["/menu/image6.jpeg", "/menu/image7.jpeg"],
  },
  {
    id: 5,
    title: "Chocolate Pudding & Biscuits",
    description: "RK SweetHouse cake served with rich chocolate pudding and delicate biscuits.",
    price: "15",
    images: ["/menu/image9.jpeg"],
  },
];

export default function MenuPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-24"
      style={{
        background: "linear-gradient(135deg, #FFF8FC 0%, #FFFFFF 40%, #FFD6EC 100%)",
      }}
    >
      <Navbar />

      {/* Decorative background orbs */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="inline-block relative w-24 h-24 sm:w-28 sm:h-28 glass-card p-3 rounded-[2rem] shadow-xl shadow-pink-brand/10">
              <Image src="/logo.png" alt="RK SweetHouse" fill className="object-contain p-2" priority />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The <span className="shimmer-text">Sweet Menu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Handcrafted with love and the finest ingredients. Explore our signature creations designed to melt your heart (and in your mouth).
          </motion.p>
        </div>

        {/* Menu Items Grid Layout */}
        <div className="flex flex-col gap-32 sm:gap-40 mt-10">
          {menuItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-10 lg:gap-20`}
              >
                {/* Images Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2"
                >
                  {item.images.length === 1 ? (
                    <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-pink-brand/10">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-square">
                      {/* Primary Image */}
                      <div className="absolute top-0 left-0 w-[75%] h-[80%] rounded-[2rem] overflow-hidden z-10 shadow-2xl shadow-pink-brand/15 group">
                        <Image
                          src={item.images[0]}
                          alt={`${item.title} 1`}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 1024px) 75vw, 40vw"
                        />
                      </div>
                      {/* Secondary Overlapping Image */}
                      <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-[2rem] overflow-hidden z-20 shadow-2xl shadow-gray-900/10 glass-card p-2 group">
                        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                          <Image
                            src={item.images[1]}
                            alt={`${item.title} 2`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 1024px) 60vw, 30vw"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col"
                >
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-brand" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-pink-brand uppercase">
                      Signature Sweet
                    </span>
                  </div>

                  <h2
                    className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h2>

                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="flex items-end gap-2 mb-10">
                    <span className="text-5xl font-bold text-pink-brand" style={{ fontFamily: "var(--font-playfair)" }}>
                      {item.price}
                    </span>
                    <span className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-1">
                      SAR
                    </span>
                  </div>

                  {/* Order Button */}
                  <div className="flex">
                    <Link
                      href="/#contact"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden shadow-lg shadow-pink-brand/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-brand/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-brand to-pink-deep transition-transform duration-300 group-hover:scale-105" />
                      <span className="relative text-white font-semibold tracking-wide text-sm uppercase">
                        Order Now
                      </span>
                      <svg
                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 text-center mt-32 pt-10 border-t border-pink-soft/30 max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 text-xs text-gray-400"
      >
        <p>© {new Date().getFullYear()} RK SweetHouse · A Bite of Love</p>
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <span className="text-pink-brand">❤️</span>
          <span>by the RK Family</span>
        </div>
      </motion.footer>
    </main>
  );
}
