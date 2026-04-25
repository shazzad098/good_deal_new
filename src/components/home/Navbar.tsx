import { useState } from "react";
import { ContactForm } from "../ContactForm";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="gd-nav">
        <div className="nav-logo">
          <span className="brand">Good Deal</span>
          <span className="tagline">Engineering Excellence</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#advantages">Why Us</a></li>
          <li><a href="/authorized-agent">Authorized Agent</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
          Get in Touch
        </a>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#advantages" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a></li>
            <li><a href="/authorized-agent" onClick={() => setIsMobileMenuOpen(false)}>Authorized Agent</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <a href="#contact" className="mobile-nav-cta nav-cta" onClick={(e) => { 
            e.preventDefault(); 
            setIsMobileMenuOpen(false);
            setIsModalOpen(true); 
          }}>
            Get in Touch
          </a>
        </div>
      </nav>

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
    </>
  );
}
