import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

import { useNavigate } from "react-router-dom";
import { fireSafetyProducts as solutions } from "../data/fireSafetyProducts";

export default function FireSafetySolutions() {
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
              onClick={() => navigate(`/fire-life-safety-solutions/${item.id}`)}
              style={{ animationDelay: `${index * 0.1}s`, cursor: "pointer" }}
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
