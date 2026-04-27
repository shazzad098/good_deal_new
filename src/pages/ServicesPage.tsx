import { useReveal } from "../hooks/useReveal";
import { Navbar } from "../components/home/Navbar";
import { ServicesSection } from "../components/home/ServicesSection";
import { Footer } from "../components/home/Footer";

export default function ServicesPage() {
  useReveal();

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "120px" }}>
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
}
