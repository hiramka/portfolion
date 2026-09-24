import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { siteConfig } from '../../config/site';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, Code2, Globe, Star, Users } from 'lucide-react';
import './SampleProductApp.css';

export default function SampleProductApp({ onOpenBooking, onGetStarted }) {
  return (
    <div className="sample-app-wrapper">
      {/* Sample Hero Section */}
      <section className="sample-hero">
        <Badge variant="glow" icon={Sparkles}>Template Demo App Showcase</Badge>
        <h1 className="sample-hero-title">
          Build & Deploy Scalable Web Apps <span className="gradient-text">10x Faster</span>
        </h1>
        <p className="sample-hero-subtitle">
          This live demo page demonstrates how to combine DevStack template component primitives into production product landing pages, SaaS platforms, or agency websites.
        </p>

        <div className="sample-hero-actions">
          <Button size="lg" variant="gradient" iconRight={ArrowRight} onClick={onGetStarted}>
            Launch New Project
          </Button>
          <Button size="lg" variant="secondary" iconLeft={Code2} onClick={onOpenBooking}>
            Book Technical Call
          </Button>
        </div>

        {/* Tech Stack Pills Showcase */}
        <div className="tech-stack-row">
          {siteConfig.techStack.map((item, idx) => (
            <div key={idx} className="tech-pill">
              <span className="tech-name">{item.name}</span>
              <Badge size="sm" variant="neutral">{item.badge}</Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="sample-features">
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <Badge variant="primary">Built-in Features</Badge>
          <h2>Everything You Need to Ship Software</h2>
        </div>

        <div className="sample-features-grid">
          <Card variant="glass" padding="lg" isHoverable>
            <div className="feature-icon-wrapper">
              <Zap className="text-accent" size={24} />
            </div>
            <h3>Lightning Fast Vite 8</h3>
            <p>Instant server start, HMR hot module reloading, and esbuild compilation for high developer velocity.</p>
          </Card>

          <Card variant="glass" padding="lg" isHoverable>
            <div className="feature-icon-wrapper">
              <ShieldCheck className="text-accent" size={24} />
            </div>
            <h3>Web3Forms REST API</h3>
            <p>Serverless contact forms, lead collection, and email delivery without complex backend servers.</p>
          </Card>

          <Card variant="glass" padding="lg" isHoverable>
            <div className="feature-icon-wrapper">
              <Globe className="text-accent" size={24} />
            </div>
            <h3>Dark & Light Themes</h3>
            <p>Built-in CSS variable design token engine supporting instant theme toggling and system preferences.</p>
          </Card>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="sample-stats">
        <Card variant="glow" padding="lg">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Lighthouse Performance Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0ms</span>
              <span className="stat-label">Configuration Setup Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Modular Component Isolation</span>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Box */}
      <section className="sample-cta">
        <Card variant="glass" padding="lg" className="cta-card text-center">
          <Badge variant="glow" icon={Sparkles}>Ready to Build?</Badge>
          <h2>Clone This Template for Your Next Project</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.5rem auto 1.5rem auto' }}>
            Start with clean code architecture, reusable UI primitives, and production-grade API integrations today.
          </p>
          <Button size="lg" variant="primary" iconRight={ArrowRight} onClick={onGetStarted}>
            Get Template Code
          </Button>
        </Card>
      </section>
    </div>
  );
}
