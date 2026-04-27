import { useState } from "react";
import { Link } from "react-router-dom";

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
            <span>Dhaka, Bangladesh</span>
          </div>
          <h1>
            Engineered <em>Excellence</em>
          </h1>
          <p className="hero-subtitle">
            Turnkey engineering solutions for power and infrastructure.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">
              Our Services
            </Link>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
