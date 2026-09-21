import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Zap, Star, Calendar } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ onGetStarted, onBookCall }) {
  return (
    <section id="home" className="hero-section">
      <div className="bg-glow-purple hero-glow-top"></div>
      <div className="bg-glow-cyan hero-glow-bottom"></div>

      <div className="container hero-container">
        {/* Left Column Text Content */}
        <div className="hero-content">
          <div className="hero-badge animate-float">
            <Sparkles size={16} className="badge-sparkle" />
            <span>EXPERT DIGITAL SOLUTIONS FOR GROWING BUSINESSES</span>
          </div>

          <h1 className="hero-title">
            Transform Your Brand With High-Converting{' '}
            <span className="gradient-text-purple">Websites</span> &{' '}
            <span className="gradient-text-cyan">Digital Products</span>
          </h1>

          <p className="hero-description">
            At Ascendancy Solutions, we craft bespoke web applications, cross-platform mobile apps, 
            scalable e-commerce storefronts, and brand identities designed to captivate audiences 
            and turn visitors into loyal paying customers.
          </p>

          <div className="hero-actions">
            <button onClick={onBookCall} className="btn-primary hero-btn-main">
              <Calendar size={18} />
              <span>Book Discovery Call</span>
            </button>

            <a href="#services" className="btn-secondary hero-btn-secondary">
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </a>

            <div className="hero-action-badge">
              <span className="pulse-mini-dot"></span>
              <span>Free 15-Min Strategy Session</span>
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
              <strong>4.9/5 Rating</strong> from 15+ verified business clients worldwide
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
              <div className="card-title-pill">ascendancy-engine.v2.4.active</div>
            </div>

            {/* Showcase Visual Content */}
            <div className="card-inner-visual">
              <img 
                src="/images/web_app.png" 
                alt="Ascendancy Engine Dashboard" 
                className="hero-dashboard-img"
                decoding="async"
                fetchPriority="high"
              />

              {/* Floating Stat Badges */}
              <div className="floating-stat-card card-stat-1 glass-card animate-float">
                <div className="stat-icon-wrap icon-purple">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="stat-val">+310%</div>
                  <div className="stat-lbl">Conversion Increase</div>
                </div>
              </div>

              <div className="floating-stat-card card-stat-2 glass-card">
                <div className="stat-icon-wrap icon-cyan">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="stat-val">99.4%</div>
                  <div className="stat-lbl">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Key Metric Counters */}
      <div className="container hero-stats-grid">
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-purple">15+</div>
          <div className="stat-label">Projects Launched</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-cyan">5.0x</div>
          <div className="stat-label">Average Client ROI</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-coral">99.4%</div>
          <div className="stat-label">On-Time Delivery</div>
        </div>
        <div className="hero-stat-box glass-card">
          <div className="stat-num gradient-text-purple">24/7</div>
          <div className="stat-label">Dedicated Support</div>
        </div>
      </div>
    </section>
  );
}
