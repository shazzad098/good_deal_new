import { useReveal } from "../hooks/useReveal";
import { Navbar } from "../components/home/Navbar";
import { Hero } from "../components/home/Hero";
import { AboutSection } from "../components/home/AboutSection";
import { AdvantagesSection } from "../components/home/AdvantagesSection";
import { ContactSection } from "../components/home/ContactSection";
import { Footer } from "../components/home/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* QUOTE BAR */}
      <div className="quote-bar">
        <div className="quote-line" />
        <span>"Best Deal, Best Service"</span>
        <div className="quote-line" />
      </div>

      <AboutSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
