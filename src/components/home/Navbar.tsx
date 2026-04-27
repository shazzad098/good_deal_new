import { useState } from "react";
import { Link } from "react-router-dom";
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
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/#advantages">Why Us</Link></li>
          <li><Link to="/authorized-agent">Authorized Agent</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
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
            <li><Link to="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/#advantages" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link></li>
            <li><Link to="/authorized-agent" onClick={() => setIsMobileMenuOpen(false)}>Authorized Agent</Link></li>
            <li><Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
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
