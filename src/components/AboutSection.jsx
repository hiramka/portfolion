import React from 'react';
import { Target, Cpu, Palette, BarChart3, CheckCircle2, FileDown } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Scope',
      desc: 'We clarify technical requirements, user flows, project milestones, and transparent cost estimates.'
    },
    {
      num: '02',
      title: 'UI/UX & Architecture',
      desc: 'Creating high-fidelity wireframes, design systems, and scalable backend database schemas.'
    },
    {
      num: '03',
      title: 'Agile Full-Stack Build',
      desc: 'Writing clean, modular React / Node / Mobile code with weekly staging updates for continuous feedback.'
    },
    {
      num: '04',
      title: 'QA & Optimization',
      desc: 'Rigorous speed optimization, cross-browser testing, security hardening, and SEO auditing.'
    },
    {
      num: '05',
      title: 'Deployment & Support',
      desc: 'Zero-downtime production deployment, complete source code handover, and 24/7 post-launch maintenance.'
    }
  ];

  const techPills = [
    'React 19', 'Vite', 'Node.js', 'React Native', 'TypeScript',
    'PostgreSQL', 'TailwindCSS', 'REST & GraphQL', 'Stripe & M-Pesa', 'AWS / Vercel'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">ABOUT US & OUR PROCESS</div>
          <h2 className="section-title">
            Engineering Fast, Reliable Software With{' '}
            <span className="gradient-text-purple">Transparent Execution</span>
          </h2>
          <p className="section-desc">
            At Ascendancy Solutions, we bridge the gap between design and full-stack engineering. 
            No fluff, no hidden costs — just clean code and software engineered to perform.
          </p>
        </div>

        {/* 2-Column Story Layout */}
        <div className="about-grid">
          {/* Left Column Story & Value Props */}
          <div className="about-story glass-card">
            <h3 className="story-heading">Built On Technical Rigor & Direct Communication</h3>
            <p className="story-paragraph">
              Whether you are launching a new software product, upgrading a mobile app, or replacing a slow legacy website, 
              our engineering team works directly with you at every milestone to ensure full transparency and timely delivery.
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
                <span>Built-in speed optimization, security & SEO best practices</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Full source code ownership & ongoing technical maintenance</span>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="about-tech-stack">
              <div className="tech-stack-title">Technologies We Master:</div>
              <div className="tech-pills-row">
                {techPills.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="about-deck-wrap">
              <a 
                href="/docs/Ascendancy_Solutions_Capabilities_Deck_2026.pdf" 
                download="Ascendancy_Solutions_Agency_Deck_2026.pdf" 
                className="btn-secondary about-deck-btn"
                title="Download our official agency capability deck"
              >
                <FileDown size={18} />
                <span>Download Agency Deck (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column 5-Step Process */}
          <div className="process-card glass-card">
            <h3 className="story-heading">Our 5-Step Execution Roadmap</h3>
            <div className="process-steps-list">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step-item">
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-info">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
