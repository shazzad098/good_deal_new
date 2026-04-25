import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function AuthorizedAgent() {
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
      <section className="hero" style={{ minHeight: "30vh", padding: "120px 6% 60px", background: "var(--dark)" }}>
        <div className="hero-bg-glow" style={{ top: "-100px", left: "-100px" }} />
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1 className="reveal">
              Authorized <em>Agent</em>
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="services" style={{ paddingTop: "80px", paddingBottom: "120px", display: "flex", justifyContent: "center" }}>
        <div className="reveal" style={{ maxWidth: "800px", width: "100%", padding: "0 6%" }}>
          <img 
            src="/images/Agents/pcj.jpeg" 
            alt="Authorized Agent" 
            style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} 
          />
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
