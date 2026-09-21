import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onGetStarted, onBookCall }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          <img src="/logo.jpg" alt="Ascendancy Solutions Logo" className="brand-logo-img" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-cta-wrap">
          <button onClick={onBookCall} className="nav-book-btn">
            <Calendar size={15} />
            <span>Book Call</span>
          </button>

          <button onClick={onGetStarted} className="btn-primary nav-cta-btn">
            <span>Get a Quote</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>
          
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button 
                className="btn-primary mobile-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCall();
                }}
              >
                <Calendar size={16} /> Book Free Call
              </button>
              <button 
                className="btn-secondary mobile-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStarted();
                }}
              >
                Get a Quote <ArrowRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
