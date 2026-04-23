import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const solutions = [
  {
    id: 1,
    title: "Utility Scale Solar Power Plant",
    description: "Large-scale solar installations designed to generate bulk power for the grid, maximizing energy output and land utilization.",
    image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Industrial Rooftop PV System",
    description: "Optimized solar systems for industrial facilities, reducing operational costs and carbon footprint efficiently.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Battery Energy Storage System",
    description: "Advanced energy storage solutions ensuring reliable power supply and grid stability around the clock.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Residential PV Solution",
    description: "Tailored solar power systems for homes, bringing sustainable and independent energy to your household.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Solar Irrigation System",
    description: "Eco-friendly solar-powered pumps and irrigation setups to support sustainable agricultural practices.",
    image: "https://media.istockphoto.com/id/1322433940/photo/solar-panels-which-can-run-submerge-water-pump-for-irrigation-and-distribution-of-water-in.jpg?s=612x612&w=0&k=20&c=ARL_MdUeMQ06smgbYUnlDDRa3mq3txPxvrX6JFp7ov4=",
  },
  {
    id: 6,
    title: "Floating Solar PV System",
    description: "Innovative solar installations on water bodies, saving land space and increasing panel efficiency through natural cooling.",
    image: "https://media.istockphoto.com/id/2244092029/photo/drone-view-of-floating-solar-panel-solar-photovoltaic-panel-pv-system-in-industry-lake-water.jpg?s=612x612&w=0&k=20&c=H3hF5HaAGXnub8SPTKCrIEW3YSIaZ_qP54FAOvmPxu8=",
  },
  {
    id: 7,
    title: "Building Integrated PV solution",
    description: "Seamlessly integrated solar panels into building architecture, combining aesthetic design with energy generation.",
    image: "https://media.istockphoto.com/id/2159449289/photo/office-building-rooftop-solar-power-generation.jpg?s=612x612&w=0&k=20&c=i79dSNpDecCtn_OJ69Y8PCMTtdqwqOwHbP9fN-Oz9zc=",
  },
  {
    id: 8,
    title: "Solar Carport & EV Solution",
    description: "Dual-purpose solar structures that provide shade for vehicles while generating clean energy for EV charging.",
    image: "https://media.istockphoto.com/id/2220975356/photo/aaerial-view-of-solar-panels-installed-as-shade-roof-over-parking-lot-for-parked-cars.jpg?s=612x612&w=0&k=20&c=d-Qt0MI-ZZAoKpq4cAQobnlY9CxKrqzjE-vPWtlnP88=",
  },
  {
    id: 9,
    title: "Energy Monitoring System",
    description: "Real-time tracking and analytics platforms to optimize energy consumption and system performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 10,
    title: "SCADA Solution",
    description: "Supervisory Control and Data Acquisition systems for precise management and control of solar infrastructure.",
    image: "https://media.istockphoto.com/id/2270785686/photo/workers-checking-steel-material-at-power-transmission-tower-construction-site.jpg?s=612x612&w=0&k=20&c=TRSdmHc_PKkv0YrCSG5JD5yDZ08cKdqfPwMJWm-hxSE=",
  },
];

export default function SolarSolutions() {
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
                <button className="btn-outline" style={{ marginTop: "32px", padding: "10px 24px" }}>
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
