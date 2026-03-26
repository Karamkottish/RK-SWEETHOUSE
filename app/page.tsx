import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MenuSection from "@/components/MenuSection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <MenuSection />
      <ContactUs />
    </main>
  );
}
