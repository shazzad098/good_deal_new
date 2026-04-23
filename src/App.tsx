import { useState, type FormEvent } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReveal } from "./hooks/useReveal";
import { sendInquiry, INQUIRY_EMAIL } from "./lib/sendInquiry";
import { services, type ServiceCardData } from "./data/services";
import SolarSolutions from "./pages/SolarSolutions";
import FireSafetySolutions from "./pages/FireSafetySolutions";

/* ----------------- Service icons ----------------- */
function ServiceIcon({ kind }: { kind: ServiceCardData["icon"] }) {
  switch (kind) {
    case "electrical":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L6 18v26h36V18L24 4z" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M16 44V28h16v16" stroke="#C49A3C" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="4" stroke="#C49A3C" strokeWidth="1.5" />
        </svg>
      );
    case "fire":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 40h32M12 40V20l12-8 12 8v20" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M20 40v-10h8v10" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M24 8v4M18 14l-3-3M30 14l3-3" stroke="#C49A3C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "lightning":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6v36M24 6l-8 10M24 6l8 10" stroke="#C49A3C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M8 44c1.333-4 8-10 16-10s14.667 6 16 10" stroke="#C49A3C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "solar":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="6" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#C49A3C" strokeWidth="1.5" />
          <path
            d="M24 10V6M14.1 13l-3-2.8M33.9 13l3-2.8M10 22H6M38 22h4"
            stroke="#C49A3C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 40h40M8 40V20h32v20" stroke="#C49A3C" strokeWidth="1.5" />
          <path d="M4 20l20-12 20 12" stroke="#C49A3C" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="14" y="28" width="8" height="12" stroke="#C49A3C" strokeWidth="1.5" />
          <rect x="26" y="24" width="8" height="8" stroke="#C49A3C" strokeWidth="1.5" />
        </svg>
      );
  }
}

/* ----------------- Highlight icons (about) ----------------- */
function HighlightIcon({ name }: { name: string }) {
  switch (name) {
    case "compliance":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" />
        </svg>
      );
    case "import":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
          <path d="M3 7l9 4 9-4M12 11v10" strokeLinecap="round" />
        </svg>
      );
    case "sustainable":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M20 4c-9 0-14 5-14 12 0 2 1 4 1 4M20 4c0 9-5 14-12 14" strokeLinecap="round" />
        </svg>
      );
    case "expertise":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c1-4 4-7 8-7s7 3 8 7" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

/* ----------------- Service Card ----------------- */
function ServiceCard({ data }: { data: ServiceCardData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.num === "04") {
      navigate("/sustainable-solar-solutions");
    } else if (data.num === "02") {
      navigate("/fire-life-safety-solutions");
    }
  };

  const isClickable = data.num === "04" || data.num === "02";

  return (
    <article 
      className="service-card reveal" 
      onClick={handleClick}
      style={isClickable ? { cursor: "pointer" } : undefined}
    >
      <div className="sc-bg" style={{ backgroundImage: `url(${data.image})` }} />
      <div className="sc-overlay" />
      <span className="service-num">{data.num}</span>
      <div className="service-icon">
        <ServiceIcon kind={data.icon} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="service-tags">
        {data.tags.map((t) => (
          <span key={t} className="service-tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ----------------- Contact Form ----------------- */
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    setSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      await sendInquiry({
        name: String(fd.get("name") || ""),
        company: String(fd.get("company") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        service: String(fd.get("service") || ""),
        message: String(fd.get("message") || ""),
      });
      setStatus("success");
      setMessage(`Inquiry sent successfully to ${INQUIRY_EMAIL}. We'll be in touch shortly.`);
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Could not send inquiry. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Company name" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+880..." />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Electrical &amp; Power Distribution</option>
          <option>Fire &amp; Life Safety Solutions</option>
          <option>Lightning Protection Systems</option>
          <option>Solar EPC Solutions</option>
          <option>Civil &amp; Industrial Construction</option>
          <option>Other / General Inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Describe your project requirements..." required />
      </div>
      <button className="btn-submit" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
      {status !== "idle" && <div className={`form-status ${status}`}>{message}</div>}
    </form>
  );
}

/* ============================================================ */
/*                       MAIN APP                                */
/* ============================================================ */
function Home() {
  useReveal();

  const heroVideos = [
    "/solar-bg.f399.mp4",
    "/grid-bg.mp4",

  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="gd-nav">
        <div className="nav-logo">
          <span className="brand">Good Deal</span>
          <span className="tagline">Engineering Excellence</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#advantages">Why Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
          Get in Touch
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <video
          key={heroVideos[videoIndex]}
          className="hero-video-bg"
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoIndex((prev) => (prev + 1) % heroVideos.length)}
          src={heroVideos[videoIndex]}
        />


        <div className="hero-bg-glow" />
        <div className="hero-bg-glow2" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span>Dhaka, Bangladesh &nbsp;·&nbsp; Est. 2023</span>
            </div>
            <h1>
              Engineered <em>Excellence</em>
              <br />
              in Power &amp; Infrastructure
            </h1>
            <p className="hero-subtitle">
              A premier multi-disciplinary engineering and supply-chain firm delivering turnkey solutions in
              electrical power, fire safety, lightning protection, solar energy, and industrial construction.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-badge">
              <div className="hero-badge-inner">
                <span className="badge-text">Direct</span>
                <span className="badge-year">EST</span>
                <span className="badge-text">Importer</span>
              </div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">3+</div>
                <div className="label">Global Brands</div>
              </div>
              <div className="hero-stat">
                <div className="num">5</div>
                <div className="label">Service Verticals</div>
              </div>
              <div className="hero-stat">
                <div className="num">100%</div>
                <div className="label">Genuine Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-label">
          <span>Core Services</span>
        </div>
        <div className="services-intro">
          <h2 className="section-title reveal">
            Five Verticals of
            <br />
            <em>Engineering Excellence</em>
          </h2>
          <p className="reveal">
            End-to-end turnkey solutions engineered to the highest global standards, delivered with local expertise
            and direct-import reliability.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.num} data={s} />
          ))}
        </div>
      </section>

      {/* QUOTE BAR */}
      <div className="quote-bar">
        <div className="quote-line" />
        <span>"Best Deal, Best Service"</span>
        <div className="quote-line" />
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-label">
          <span>About Good Deal</span>
        </div>
        <h2 className="section-title reveal">
          Bridging Global Innovation
          <br />
          with <em>Local Expertise</em>
        </h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              GOOD DEAL is a premier, multi-disciplinary engineering and supply-chain firm headquartered in Dhaka,
              Bangladesh. As a <strong>Direct Importer and Authorized Partner</strong>, we bridge the gap between
              global technological innovations and local industrial requirements.
            </p>
            <p>
              By sourcing premium components directly from world-class manufacturers such as{" "}
              <strong>ABB, Schneider Electric, and Siemens</strong>, and integrating them with expert engineering, we
              ensure the highest standards of safety, efficiency, and sustainability.
            </p>
            <p>
              We are the <strong>authorized partner of PCJ Industries Co., Ltd. (Thailand)</strong> for the Bangladesh
              territory, bringing internationally certified fire and life safety solutions to the local market.
            </p>
            <div className="divider" />
            <div className="partners">
              <div className="partners-label">Authorized Partners &amp; Direct Importers</div>
              <div className="partner-logos">
                <div className="partner-tag">ABB — Switzerland</div>
                <div className="partner-tag">Schneider Electric — France</div>
                <div className="partner-tag">Siemens — Germany</div>
                <div className="partner-tag">EAE Busbar Systems</div>
                <div className="partner-tag">PCJ Industries — Thailand</div>
              </div>
            </div>
          </div>

          <div className="about-highlights reveal">
            <div className="highlight-card">
              <div className="hc-icon">
                <HighlightIcon name="compliance" />
              </div>
              <h4>International Compliance</h4>
              <p>
                All projects strictly adhere to IEC, NFPA, and BNBC safety and quality benchmarks — ensuring global
                standards on every installation.
              </p>
            </div>
            <div className="highlight-card">
              <div className="hc-icon">
                <HighlightIcon name="import" />
              </div>
              <h4>Direct Import Advantage</h4>
              <p>
                We eliminate middlemen by importing core components directly, guaranteeing 100% genuine products with
                full manufacturer warranties.
              </p>
            </div>
            <div className="highlight-card">
              <div className="hc-icon">
                <HighlightIcon name="sustainable" />
              </div>
              <h4>Sustainable Focus</h4>
              <p>
                Dedicated to supporting "Green Factory" initiatives through energy-efficient systems, solar EPC, and
                sustainable engineering practices.
              </p>
            </div>
            <div className="highlight-card">
              <div className="hc-icon">
                <HighlightIcon name="expertise" />
              </div>
              <h4>Technical Expertise</h4>
              <p>
                A team of seasoned engineers committed to technical precision, operational excellence, and continuous
                client support.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* ADVANTAGES */}
      <section className="advantages" id="advantages">
        <div className="section-label">
          <span>Why Good Deal</span>
        </div>
        <h2 className="section-title reveal">
          The <em>Good Deal</em> Advantage
        </h2>
        <div className="adv-grid reveal">
          <div className="adv-item">
            <div className="adv-number">
              100<sup>%</sup>
            </div>
            <div className="adv-label">Genuine Products</div>
          </div>
          <div className="adv-item">
            <div className="adv-number">3+</div>
            <div className="adv-label">Global OEM Partners</div>
          </div>
          <div className="adv-item">
            <div className="adv-number">5</div>
            <div className="adv-label">Service Verticals</div>
          </div>
          <div className="adv-item">
            <div className="adv-number">IEC</div>
            <div className="adv-label">International Standards</div>
          </div>
        </div>

        <div className="adv-cards">
          <div className="adv-card reveal">
            <div className="adv-card-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 4L4 10v10c0 8.837 6.268 17.12 14 19 7.732-1.88 14-10.163 14-19V10L18 4z"
                  stroke="#C49A3C"
                  strokeWidth="1.3"
                />
                <path d="M12 18l4 4 8-8" stroke="#C49A3C" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <h4>Direct Import &amp; Authenticity</h4>
            <p>
              We eliminate middlemen by importing core components directly from ABB, Schneider, and Siemens. This
              ensures 100% genuine products and full manufacturer warranties on every order.
            </p>
          </div>
          <div className="adv-card reveal">
            <div className="adv-card-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="14" stroke="#C49A3C" strokeWidth="1.3" />
                <path d="M18 10v8l5 5" stroke="#C49A3C" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <h4>International Compliance</h4>
            <p>
              All projects strictly adhere to IEC, NFPA, and BNBC safety and quality benchmarks — ensuring every
              installation meets global standards and local regulatory requirements.
            </p>
          </div>
          <div className="adv-card reveal">
            <div className="adv-card-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 4v28M8 9l10 5 10-5M8 18l10 5 10-5"
                  stroke="#C49A3C"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h4>Turnkey Solutions</h4>
            <p>
              From initial engineering assessment to final commissioning and O&amp;M, we handle every aspect of your
              project under one roof — reducing complexity and ensuring seamless delivery.
            </p>
          </div>
          <div className="adv-card reveal">
            <div className="adv-card-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <path d="M6 28c3-6 8-10 12-10s9 4 12 10" stroke="#C49A3C" strokeWidth="1.3" strokeLinecap="round" />
                <circle cx="18" cy="12" r="5" stroke="#C49A3C" strokeWidth="1.3" />
              </svg>
            </div>
            <h4>Sustainable &amp; Green Focus</h4>
            <p>
              Dedicated to supporting "Green Factory" initiatives through energy-efficient systems, solar EPC
              services, and environmentally responsible engineering practices across all projects.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-label">
          <span>Get in Touch</span>
        </div>
        <h2 className="section-title reveal">
          Start Your Next
          <br />
          <em>Engineering Project</em>
        </h2>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    stroke="#C49A3C"
                    strokeWidth="0.5"
                    fill="rgba(196,154,60,0.12)"
                  />
                </svg>
              </div>
              <div className="contact-item-text">
                <div className="label">Head Office</div>
                <div className="value">
                  163/6 Tejkunipara Road, Tejgaon
                  <br />
                  Dhaka-1215, Bangladesh
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"
                    stroke="#C49A3C"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <div className="contact-item-text">
                <div className="label">Phone</div>
                <div className="value">
                  <a href="tel:+8801619302150">+880 1619-302150</a>
                  <br />
                  <a href="tel:+8801706424134">+880 1706-424134</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
                    stroke="#C49A3C"
                    strokeWidth="1.3"
                  />
                  <path d="M22 6l-10 7L2 6" stroke="#C49A3C" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="contact-item-text">
                <div className="label">Email</div>
                <div className="value">
                  <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#C49A3C" strokeWidth="1.3" />
                  <circle cx="12" cy="7" r="4" stroke="#C49A3C" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="contact-item-text">
                <div className="label">Director</div>
                <div className="value">Mohammed Prince</div>
              </div>
            </div>
          </div>

          <div className="contact-right-panel" style={{ width: "100%" }}>
            <div className="contact-map reveal" style={{ height: "450px", overflow: "hidden", borderRadius: "var(--radius)" }}>
              <video
                src="/connect.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "var(--gold)", marginBottom: "24px", fontWeight: 400 }}>Send an Inquiry</h3>
            <ContactForm />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="gd-footer">
        <div className="footer-brand">
          <div className="brand">Good Deal</div>
          <div className="sub">Engineered Excellence · Est. 2023</div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Good Deal · Tejgaon, Dhaka, Bangladesh
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sustainable-solar-solutions" element={<SolarSolutions />} />
      <Route path="/fire-life-safety-solutions" element={<FireSafetySolutions />} />
    </Routes>
  );
}
