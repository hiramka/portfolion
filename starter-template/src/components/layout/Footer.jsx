import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import Badge from '../common/Badge';
import { Code2, Globe, Share2, Heart, Shield } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="brand-icon">
                <Code2 size={20} color="#ffffff" />
              </div>
              <span className="brand-name">{siteConfig.name}</span>
            </div>
            <p className="footer-desc">{siteConfig.description}</p>
            <div className="footer-socials">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Globe size={18} />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <Share2 size={18} />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Code2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Template Modules</h4>
            <ul>
              <li><Link to="/quickstart">Quickstart Guide</Link></li>
              <li><Link to="/catalog">Component Catalog</Link></li>
              <li><Link to="/services">API Services & State</Link></li>
              <li><Link to="/demo">Sample Product App</Link></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-links-col">
            <h4>Core Technologies</h4>
            <ul>
              {siteConfig.techStack.map((tech, idx) => (
                <li key={idx}>
                  <span className="footer-tech-item">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Badge */}
          <div className="footer-badge-col">
            <h4>Quality Standard</h4>
            <Badge variant="glow" icon={Shield}>Production Ready</Badge>
            <p className="footer-small-text">
              Modular design tokens, clean code standards, zero runtime bloat.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Built for software development projects.</p>
          <p className="footer-heart">
            Engineered with <Heart size={14} className="text-heart" /> for Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
