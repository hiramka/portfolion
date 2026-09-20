import React from 'react';
import { Target, Cpu, Palette, BarChart3, CheckCircle2 } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Target className="pillar-icon icon-purple" />,
      title: 'Strategic Architecture',
      desc: 'We map every user click to business outcomes, crafting intuitive user flows that maximize retention.'
    },
    {
      icon: <Cpu className="pillar-icon icon-cyan" />,
      title: 'Modern Engineering',
      desc: 'Leveraging React, Vite, and Cloud APIs for blazing fast load speeds, security, and effortless scaling.'
    },
    {
      icon: <Palette className="pillar-icon icon-coral" />,
      title: 'Bespoke Aesthetics',
      desc: 'Eye-catching glassmorphism, vibrant palettes, and custom motion design that position you as an industry leader.'
    },
    {
      icon: <BarChart3 className="pillar-icon icon-purple" />,
      title: 'Conversion-Focused ROI',
      desc: 'Every feature, CTA, and layout element is engineered to turn casual visitors into paying customers.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">WHO WE ARE</div>
          <h2 className="section-title">
            Empowering Growing Businesses With{' '}
            <span className="gradient-text-purple">World-Class</span> Digital Products
          </h2>
          <p className="section-desc">
            At Ascendancy Solutions, we believe every business deserves a strong digital presence that inspires trust, 
            establishes authority, and turns visitors into high-value clients.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="about-grid">
          {/* Left Column Story & Value Props */}
          <div className="about-story glass-card">
            <h3 className="story-heading">Engineered For Impact & Scale</h3>
            <p className="story-paragraph">
              Whether you are launching a new tech startup, expanding an e-commerce brand, or refreshing an established corporate identity, 
              our dedicated team combines design mastery with deep technical expertise to deliver results on time and beyond expectations.
            </p>

            <div className="story-check-list">
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Transparent fixed-scope pricing with zero hidden fees</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>100% Mobile responsive & cross-platform optimization</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Integrated SEO, speed optimization & analytics tracking</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Full source code ownership & 24/7 post-launch support</span>
              </div>
            </div>
          </div>

          {/* Right Column Pillars Grid */}
          <div className="pillars-grid">
            {pillars.map((item, index) => (
              <div key={index} className="pillar-card glass-card">
                <div className="pillar-icon-box">{item.icon}</div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
