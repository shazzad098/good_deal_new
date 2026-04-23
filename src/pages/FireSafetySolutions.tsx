import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const solutions = [
  {
    id: 1,
    title: "Fire Protection System Design & Consultancy",
    description: "Expert engineering and design of comprehensive fire protection systems tailored to meet international safety standards and codes.",
    image: "https://media.istockphoto.com/id/2213326978/photo/header-pipes-valve-zone-and-fire-alarm-control-system-at-industrial-plants.jpg?s=612x612&w=0&k=20&c=yhLTJ-4Nk25dNPxZr3mVdPxdBM4FN2w_0VbbmIPE5SA=",
  },
  {
    id: 2,
    title: "Fire Detection & Alarm System Installation",
    description: "State-of-the-art early warning systems including smoke detectors, heat sensors, and smart control panels for rapid response.",
    image: "https://images.unsplash.com/photo-1653353436174-a8e724190fd3?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Fire Suppression & Extinguishing Systems",
    description: "Advanced automated suppression solutions including sprinklers, gas-based systems, and foam extinguishing technologies.",
    image: "https://media.istockphoto.com/id/2268420229/photo/close-up-image-of-fire-sprinkler-fire-sprinklers-are-part-of-an-integrated-water-piping.jpg?s=612x612&w=0&k=20&c=qgZZgVdKZksnSs6sa3o7qfXgFaoPmq4zrcjV5ZkoirU=",
  },
  {
    id: 4,
    title: "Electrical & Lightning Safety",
    description: "High-tech Early Streamer Emission (ESE) lightning arresters and surge protection devices ensuring complete electrical safety.",
    image: "https://media.istockphoto.com/id/2263639062/photo/transmitter-tower.jpg?s=612x612&w=0&k=20&c=fxoAU8CJndRtHxkC78RfROOmSHbWtETq4dG1BgMsiOU=",
  },
  {
    id: 5,
    title: "Fire Door & Emergency Exit Solutions",
    description: "UL-Listed, fire-rated steel doors and highly visible emergency exit pathways to secure safe evacuation routes.",
    image: "https://media.istockphoto.com/id/1691915673/photo/fire-exit-door-for-emergency-office-building-emergency-exit-with-exit-sign-and-fire.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yrhJq5hL74c4JKUXwOsx9ORpP8jCdb1dqg71zWRv48=",
  },
  {
    id: 6,
    title: "Inspection, Testing & Commissioning",
    description: "Rigorous testing and commissioning protocols to ensure all fire safety equipment functions flawlessly under critical conditions.",
    image: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg",
  },
  {
    id: 7,
    title: "Maintenance & Annual Service Contracts (AMC)",
    description: "Reliable round-the-clock maintenance services and AMCs to keep your life safety systems operational at all times.",
    image: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg",
  },
  {
    id: 8,
    title: "Fire Safety Equipment Supply",
    description: "Direct importer of genuine, globally certified fire safety equipment, guaranteeing authentic products and warranties.",
    image: "https://images.unsplash.com/photo-1760139546356-0a90390364d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmlyZSUyMFNhZmV0eSUyMEVxdWlwbWVudCUyMFN1cHBseXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Fire Safety Quality Assurance",
    description: "Strict adherence to IEC, NFPA, and BNBC compliance standards to provide unparalleled quality assurance in every project.",
    image: "https://media.istockphoto.com/id/2260152685/photo/safety-first-warning-sign-in-hands-workplace-protection-and-occupational-health-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZgmOMeqB0kZU7g6qpVFBR5Zv40F6tGaeBEFINuxpgfU=",
  },
];

export default function FireSafetySolutions() {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="gd-nav" style={{ position: "sticky", top: 0 }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <span className="brand">Good Deal</span>
          <span className="tagline">Engineering Excellence</span>
        </Link>
        <Link to="/" className="nav-cta" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </nav>

      {/* HEADER */}
      <section className="hero" style={{ minHeight: "40vh", padding: "120px 6% 60px", background: "var(--dark)" }}>
        <div className="hero-bg-glow" style={{ top: "-100px", left: "-100px", background: "radial-gradient(circle, rgba(196, 60, 60, 0.08) 0%, transparent 65%)" }} />
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className="hero-eyebrow" style={{ justifyContent: "center" }}>
              <div className="hero-eyebrow-line" />
              <span>Life Safety Division</span>
              <div className="hero-eyebrow-line" />
            </div>
            <h1 className="reveal">
              Fire &amp; Life <em>Safety Solutions</em>
            </h1>
            <p className="hero-subtitle reveal" style={{ margin: "28px auto 0" }}>
              Authorized partner for world-class, globally certified fire protection systems ensuring uncompromised safety and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - NEW CIRCULAR GRID DESIGN */}
      <section className="services" style={{ paddingTop: "80px", paddingBottom: "120px", background: "var(--dark2)" }}>
        <div className="fire-safety-grid">
          {solutions.map((item, index) => (
            <article 
              key={item.id} 
              className="fire-circle-card reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="fire-circle-image">
                <div className="fire-circle-glow" />
                <div className="fire-circle-image-inner">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="gd-footer">
        <div className="footer-brand">
          <div className="brand">Good Deal</div>
          <div className="sub">Engineered Excellence · Est. 2023</div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Good Deal · Tejgaon, Dhaka, Bangladesh
        </div>
      </footer>
    </>
  );
}
