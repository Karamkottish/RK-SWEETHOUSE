"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-transparent mt-16 sm:mt-24 pb-4 overflow-hidden z-20 -mb-2">
      <div className="relative bg-[#FFF2F8] rounded-t-[4rem] sm:rounded-t-[8rem] px-6 pt-24 pb-12 shadow-[0_-30px_50px_rgba(233,30,140,0.06)] border-t border-white/50">
        {/* Giant Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
          <h2 className="text-[10rem] md:text-[20rem] font-bold text-pink-brand whitespace-nowrap" style={{ fontFamily: "var(--font-playfair)" }}>
            A Bite of Love
          </h2>
        </div>

        {/* Floating Background Orbs inside Footer */}
        <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-pink-300/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-pink-400/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo Centerpiece */}
          <Link href="/" className="group relative w-40 h-40 sm:w-48 sm:h-48 mb-10 block perspective-[1000px]">
             <div className="w-full h-full absolute inset-0 bg-white/40 rounded-full blur-2xl group-hover:bg-pink-brand/20 transition-colors duration-700" />
             <Image
                src="/3d-logo-transparent.png"
                alt="RK SweetHouse"
                fill
                className="object-contain drop-shadow-[0_15px_25px_rgba(233,30,140,0.3)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:translate-y-[-10px] group-hover:rotate-3"
             />
          </Link>

          {/* Core Navigation Pills */}
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mb-14">
             {[
               { name: "Home", href: "/" },
               { name: "Menu", href: "/menu" },
               { name: "Our Story", href: "/#about" },
               { name: "Contact", href: "/#contact" }
             ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="px-6 py-2.5 rounded-full bg-white/60 hover:bg-white backdrop-blur-md border border-pink-brand/10 text-gray-600 hover:text-pink-brand font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {link.name}
                </Link>
             ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-brand/40 to-transparent rounded-full mb-12" />

          {/* Social Icons Interactive Array */}
          <div className="flex gap-6 mb-20 items-center justify-center">
             <a href="https://www.instagram.com/rksweethouse" target="_blank" rel="noopener noreferrer" className="group relative w-14 h-14 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/30 transition-transform duration-300 hover:scale-[1.15] hover:rotate-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-pink-600 uppercase tracking-widest transition-opacity">IG</span>
             </a>
             <a href="https://www.tiktok.com/@rk_sweethouse" target="_blank" rel="noopener noreferrer" className="group relative w-14 h-14 bg-gradient-to-tr from-gray-900 to-black rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.51V7.12a4.83 4.83 0 0 1-1-.43z"/></svg>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-gray-800 uppercase tracking-widest transition-opacity">TK</span>
             </a>
             <a href="https://wa.me/966549199767" target="_blank" rel="noopener noreferrer" className="group relative w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-[1.15] hover:rotate-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-[#128C7E] uppercase tracking-widest transition-opacity">WA</span>
             </a>
          </div>

          <p className="text-gray-500 font-medium text-sm text-center max-w-lg mb-12 italic">
            "Sweets are the poetry of the taste buds. We write them with a sprinkle of our family's magic."
          </p>

          {/* Bottom Bar Content */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 border-t border-pink-brand/10 pt-8 gap-6 relative">
            
            {/* Copyright */}
            <p className="text-xs font-semibold text-gray-400 tracking-wide order-2 md:order-1">
              © {new Date().getFullYear()} RK SweetHouse. All Rights Reserved.
            </p>

            {/* Admin Portal Gateway */}
            <Link 
              href="/admin" 
              className="absolute left-1/2 -translate-x-1/2 -top-6 bg-[#FCF0F6] hover:bg-pink-brand border border-pink-brand/10 hover:border-pink-brand rounded-full px-5 py-2.5 flex items-center gap-2 group transition-all duration-300 shadow-md shadow-pink-brand/5 hover:shadow-lg hover:shadow-pink-brand/20 hover:-translate-y-2 z-20 order-1 md:order-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-brand group-hover:text-white transition-colors"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-gray-500 group-hover:text-white uppercase transition-colors">Admin Portal</span>
            </Link>

            {/* Made with Love */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 order-3 md:order-3">
              <span>Made with</span>
              <span className="text-pink-brand animate-pulse">❤️</span>
              <span>by the RK Family</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
