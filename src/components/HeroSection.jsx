import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Zap, Star, Calendar } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onGetStarted, onBookCall }) {
  return (
    <section id="home" className="hero-section">
      {/* Decorative Gradient Background Elements inspired by reference design */}
      <div className="decor-cyan-semicircle" />
      <div className="decor-bg-glow-right" />
      <svg className="decor-purple-wave" viewBox="0 0 1200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-40px' }}>
        <path 
          d="M-50 180 C 200 40, 450 260, 750 120 C 950 20, 1150 160, 1300 80" 
          stroke="url(#heroPurpleWaveGradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          opacity="0.65" 
        />
        <defs>
          <linearGradient id="heroPurpleWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e5e5" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#71717a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="bg-glow-purple hero-glow-top"></div>
      <div className="bg-glow-cyan hero-glow-bottom"></div>

      <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Column Text Content */}
        <div className="hero-content">
          <div className="hero-badge animate-float">
            <Sparkles size={16} className="badge-sparkle" />
            <span>FULL-STACK WEB & MOBILE DEVELOPMENT AGENCY</span>
          </div>

          <h1 className="hero-title">
            We Design & Build Custom{' '}
            <span className="gradient-text-purple">Web Apps</span>,{' '}
            <span className="gradient-text-cyan">Mobile Applications</span> & Scalable E-Commerce Stores
          </h1>

          <p className="hero-description">
            At Ascendancy Solutions, we partner directly with startups, local businesses, and scale-ups 
            to engineer ultra-fast software products, intuitive interfaces, and high-performance digital platforms 
            built to grow your business.
          </p>

          <div className="hero-actions">
            <button onClick={onBookCall} className="btn-primary hero-btn-main">
              <Calendar size={18} />
              <span>Book Free Strategy Call</span>
            </button>

            <a href="#services" className="btn-secondary hero-btn-secondary">
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </a>

            <div className="hero-action-badge">
              <span className="pulse-mini-dot"></span>
              <span>15-Min Focused Consultation</span>
            </div>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="hero-trust-bar">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="star-icon" />
              ))}
            </div>
            <div className="trust-text">
              <strong>5.0★ Rating</strong> across 20+ delivered client projects worldwide
            </div>
          </div>
        </div>

        {/* Right Column Interactive Visual Card */}
        <div className="hero-visual-wrapper">
          <div className="hero-main-card glass-card">
            {/* Visual Header */}
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="card-title-pill">ascendancy-solutions.app/live-preview</div>
            </div>

            {/* Showcase Visual Content */}
            <div className="card-inner-visual">
              <img 
                src="/images/web_app.webp" 
                alt="Ascendancy Web Application Dashboard" 
                className="hero-dashboard-img"
                width="600"
                height="380"
                decoding="async"
                fetchPriority="high"
              />

              {/* Floating Stat Badges */}
              <div className="floating-stat-card card-stat-1 glass-card animate-float">
                <div className="stat-icon-wrap icon-purple">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="stat-val">&lt; 200ms</div>
                  <div className="stat-lbl">Global Load Speed</div>
                </div>
              </div>

              <div className="floating-stat-card card-stat-2 glass-card">
                <div className="stat-icon-wrap icon-cyan">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="stat-val">100%</div>
                  <div className="stat-lbl">Code & IP Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Key Metric Counters */}
      <div className="container hero-stats-grid">
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-purple">20+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-cyan">&lt; 1s</div>
          <div className="stat-label">Average Page Load</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-coral">100%</div>
          <div className="stat-label">On-Time Delivery</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-purple">24/7</div>
          <div className="stat-label">Technical Support</div>
        </div>
      </div>
    </section>
  );
}
