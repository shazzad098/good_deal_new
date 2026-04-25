import { useState } from "react";

export function Hero() {
  const heroVideos = [
    "/solar-bg.f399.mp4",
    "/grid-bg.mp4",
  ];
  const [videoIndex, setVideoIndex] = useState(0);

  return (
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
  );
}
