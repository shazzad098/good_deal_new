import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { electricalProducts } from "../data/electricalProducts";
import { useReveal } from "../hooks/useReveal";

export default function ElectricalProductDetail() {
  const { id } = useParams();
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = electricalProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <Navigate to="/electrical-power-distribution" replace />;
  }

  return (
    <>
      <nav className="gd-nav" style={{ position: "sticky", top: 0 }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <span className="brand">Good Deal</span>
          <span className="tagline">Engineering Excellence</span>
        </Link>
        <Link to="/electrical-power-distribution" className="nav-cta" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ArrowLeft size={14} />
          Back to Solutions
        </Link>
      </nav>

      <section className="product-detail-hero" style={{ paddingTop: "140px", paddingBottom: "80px", background: "var(--dark)" }}>
        <div className="product-detail-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 6%" }}>
          <div className="product-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            
            <div className="product-detail-image reveal" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", position: "relative" }}>
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(11, 15, 20, 0.6) 0%, transparent 50%)" }} />
            </div>

            <div className="product-detail-content reveal" style={{ animationDelay: "0.2s" }}>
              <div className="section-label">
                <span>Solution Details</span>
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", color: "var(--text)", lineHeight: 1.15, marginBottom: "24px" }}>
                {product.title}
              </h1>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "32px", fontWeight: 300 }}>
                {product.longDescription}
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
                <div>
                  <h3 style={{ fontSize: "18px", color: "var(--gold)", marginBottom: "16px", fontFamily: "'Cormorant Garamond', serif" }}>Key Features</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {product.features.map((feature, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: 1.5 }}>
                        <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 style={{ fontSize: "18px", color: "var(--gold)", marginBottom: "16px", fontFamily: "'Cormorant Garamond', serif" }}>Core Benefits</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {product.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text)", lineHeight: 1.5 }}>
                        <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: "48px" }}>
                <a href="#contact" className="btn-primary" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}>
                  Inquire About This Service
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <footer className="gd-footer">
        <div className="footer-brand">
          <div className="brand">Good Deal</div>
          <div className="sub">Engineered Excellence · Est. 2023</div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Good Deal · Tejgaon, Dhaka, Bangladesh
        </div>
      </footer>
      
      <style>{`
        @media (max-width: 900px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
          .product-detail-image img {
            height: 350px !important;
          }
          .product-detail-content h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </>
  );
}
