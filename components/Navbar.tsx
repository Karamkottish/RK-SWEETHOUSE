"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-pink-soft/30 border-b border-pink-soft/30"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-soft/60 group-hover:ring-pink-brand/50 transition-all duration-300 shadow-md">
              <Image
                src="/logo.png"
                alt="RK SweetHouse Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="text-lg font-bold text-pink-deep"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                RK SweetHouse
              </span>
              <span className="text-[10px] tracking-[0.2em] text-pink-brand/70 uppercase font-medium">
                A Bite of Love
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/menu" className="btn-primary py-2.5 px-6 text-sm">
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-pink-soft/30 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-pink-brand rounded-full origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-pink-brand rounded-full"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-pink-brand rounded-full origin-center"
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-pink-soft/40 shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-medium py-2 border-b border-pink-soft/30 ${
                      pathname === link.href
                        ? "text-pink-brand"
                        : "text-gray-700 hover:text-pink-brand"
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/menu"
                onClick={() => setMenuOpen(false)}
                className="btn-primary justify-center mt-2 text-sm py-3"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
