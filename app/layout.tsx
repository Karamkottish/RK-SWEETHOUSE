import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RK SweetHouse — A Bite of Love",
  description:
    "Handcrafted sweets made with love. Discover our exquisite collection of artisan confections at RK SweetHouse.",
  keywords: ["sweets", "confections", "bakery", "RK SweetHouse", "desserts"],
  openGraph: {
    title: "RK SweetHouse — A Bite of Love",
    description: "Handcrafted sweets made with love.",
    type: "website",
  },
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-inter antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
