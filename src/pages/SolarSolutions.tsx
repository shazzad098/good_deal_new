import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

import { useNavigate } from "react-router-dom";
import { solarProducts as solutions } from "../data/solarProducts";

export default function SolarSolutions() {
  const navigate = useNavigate();
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
        <div className="hero-bg-glow" style={{ top: "-100px", left: "-100px" }} />
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className="hero-eyebrow" style={{ justifyContent: "center" }}>
              <div className="hero-eyebrow-line" />
              <span>Renewable Energy Division</span>
              <div className="hero-eyebrow-line" />
            </div>
            <h1 className="reveal">
              Sustainable <em>Solar Solutions</em>
            </h1>
            <p className="hero-subtitle reveal" style={{ margin: "28px auto 0" }}>
              Comprehensive EPC services and specialized solar infrastructure solutions tailored for industrial, residential, and utility-scale projects.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="services" style={{ paddingTop: "80px", paddingBottom: "120px" }}>
        <div className="product-list">
          {solutions.map((item, index) => (
            <div 
              key={item.id} 
              className="product-row reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image-container">
                <img src={item.image} alt={item.title} className="product-stock-image" />
                <div className="image-overlay-glow" />
              </div>
              <div className="product-info-container">
                <div className="product-number">{(index + 1).toString().padStart(2, '0')}</div>
                <h2>{item.title}</h2>
                <div className="divider" style={{ margin: "20px 0" }} />
                <p>{item.description}</p>
                <button 
                  className="btn-outline" 
                  style={{ marginTop: "32px", padding: "10px 24px" }}
                  onClick={() => navigate(`/sustainable-solar-solutions/${item.id}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
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
