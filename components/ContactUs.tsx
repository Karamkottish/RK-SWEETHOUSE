"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PHONE = "+96654 919 9767";
const PHONE_CLEAN = "+966549199767";
const INSTAGRAM = "https://www.instagram.com/rksweethouse?igsh=Y2JhY3oweDBpM2Rh&utm_source=qr";
const TIKTOK = "https://www.tiktok.com/@rk_sweethouse?_r=1&_t=ZS-9518Jxf859M";
const WHATSAPP = `https://wa.me/${PHONE_CLEAN.replace("+", "")}`;

const socials = [
  {
    name: "Instagram",
    href: INSTAGRAM,
    color: "#E1306C",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: TIKTOK,
    color: "#010101",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.51V7.12a4.83 4.83 0 0 1-1-.43z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: WHATSAPP,
    color: "#25D366",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <>
      {/* Curvy divider */}
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

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFF8FC 50%, #FFE5F1 100%)" }}
      >
        {/* Animated background blobs */}
        <motion.div
           animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,77,158,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
           animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,214,236,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(233, 30, 140, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 30, 140, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-200/60 bg-pink-50/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-brand" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-pink-brand uppercase">
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s Connect
              <br />
              <span className="shimmer-text">with Sweetness</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto"
            >
              Have a craving? Want to place an order or just say hello?
              We&apos;d love to hear from you.
            </motion.p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — Sticker card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex items-center justify-center relative z-10"
            >
              <div className="relative group perspective-1000">
                {/* Glowing aura behind sticker */}
                <div className="absolute inset-0 rounded-full bg-pink-brand/20 blur-[80px] group-hover:bg-pink-brand/30 transition-colors duration-500 scale-110" />
                
                <motion.div 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]"
                >
                  <Image
                    src="/sticker1.png"
                    alt="RK SweetHouse Contact Sticker"
                    fill
                    className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Contact info */}
            <div className="flex flex-col gap-8">

              {/* WhatsApp card */}
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
                className="group flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #f0fdf4 100%)",
                  border: "1px solid rgba(37, 211, 102, 0.15)",
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300 text-white">
                  {socials[2].icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">Message on WhatsApp</p>
                  <p
                    className="text-lg font-bold text-gray-800 group-hover:text-[#25D366] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Chat with us now
                  </p>
                </div>
              </motion.a>

              {/* Social links row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
              >
                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  {socials.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                        delay: 0.3 + i * 0.08,
                      }}
                      className="group w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{
                        background: "linear-gradient(145deg, #FFFFFF, #FFF8FC)",
                        border: "1px solid rgba(255, 214, 236, 0.4)",
                        color: "#9ca3af",
                      }}
                      title={social.name}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = social.color;
                        (e.currentTarget as HTMLElement).style.borderColor = social.color + "40";
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 25px ${social.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#9ca3af";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 214, 236, 0.4)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
