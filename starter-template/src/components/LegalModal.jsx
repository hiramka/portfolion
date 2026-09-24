import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import './LegalModal.css';

export default function LegalModal({ isOpen, onClose, activeTab = 'privacy', onTabChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div className="legal-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="legal-modal-close" onClick={onClose} aria-label="Close legal modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="legal-modal-header">
          <div className="legal-modal-badge">
            <ShieldCheck size={16} />
            <span>LEGAL & CORPORATE COMPLIANCE</span>
          </div>
          <h2 className="legal-modal-title">Ascendancy Solutions Governance</h2>
          <p className="legal-modal-subtitle">
            Transparency, data privacy, and clear client protections govern all digital engagements we deliver.
          </p>

          {/* Navigation Tabs */}
          <div className="legal-modal-tabs">
            <button
              className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => onTabChange('privacy')}
            >
              <Lock size={15} />
              <span>Privacy Policy</span>
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => onTabChange('terms')}
            >
              <FileText size={15} />
              <span>Terms of Service</span>
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => onTabChange('security')}
            >
              <ShieldCheck size={15} />
              <span>Security Standards</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="legal-modal-body">
          {activeTab === 'privacy' && (
            <div className="legal-content-pane animate-fade-in">
              <div className="legal-meta-row">
                <span>Effective Date: January 1, 2026</span>
                <span>Last Updated: September 2026</span>
              </div>

              <h3>1. Overview & Data Controller</h3>
              <p>
                Ascendancy Solutions ("we", "our", or "the Agency") is dedicated to protecting the privacy and personal data of our prospective clients, current partners, and website visitors. This Privacy Policy details how we collect, process, and safeguard your personal information in compliance with international privacy regulations including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
              </p>

              <h3>2. Data We Collect</h3>
              <p>We only collect information voluntarily provided by you through our website interaction points:</p>
              <ul>
                <li><strong>Contact & Project Inquiries:</strong> Full name, professional email address, phone/WhatsApp number, requested service category, and project specifications submitted via our contact or discovery call scheduling forms.</li>
                <li><strong>Anonymous Site Analytics:</strong> We utilize Vercel Analytics, a cookieless and privacy-preserving platform that measures anonymous performance telemetry (page load timings, country of origin, browser family) without storing IP addresses, tracking cookies, or identifiable personal records.</li>
              </ul>

              <h3>3. Purpose of Processing</h3>
              <p>We process client information strictly for the following legitimate business interests:</p>
              <ul>
                <li>Evaluating project scope, preparing technical proposals, and delivering project estimates.</li>
                <li>Scheduling discovery calls and communicating milestone updates via email or WhatsApp.</li>
                <li>Fulfilling contractual agreements and delivering digital engineering services.</li>
                <li>We do not sell, rent, monetize, or disclose your contact information to third-party advertisers.</li>
              </ul>

              <h3>4. Third-Party Data Processors</h3>
              <p>
                To deliver resilient agency operations, we partner with verified, enterprise-grade processors:
              </p>
              <ul>
                <li><strong>Web3Forms:</strong> Secure dispatch of contact inquiries via encrypted HTTPS endpoints.</li>
                <li><strong>Vercel Inc.:</strong> Hosting infrastructure and edge network caching with SOC 2 Type II certification.</li>
                <li><strong>WhatsApp Business / Meta:</strong> Direct client communication and instant messaging support.</li>
              </ul>

              <h3>5. Your Rights Under GDPR & CCPA</h3>
              <p>
                You have the fundamental right to request access to, correction of, or deletion of your personal data at any time. To request complete removal of your records, contact our privacy officer at{' '}
                <a href="mailto:hello@ascendancysolutions.com" className="legal-link">hello@ascendancysolutions.com</a>.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="legal-content-pane animate-fade-in">
              <div className="legal-meta-row">
                <span>Standard Agency Terms & Conditions</span>
                <span>Version 2.4</span>
              </div>

              <h3>1. Engagement & Scope of Work</h3>
              <p>
                Ascendancy Solutions delivers bespoke web development, mobile applications, brand identity systems, and growth marketing services. All engagements are formalized via an agreed Statement of Work (SOW) outlining milestones, deliverables, and estimated timelines.
              </p>

              <h3>2. 100% Intellectual Property (IP) Ownership</h3>
              <p>
                We believe our clients must own their digital assets without restriction. Upon full payment of the agreed project fees:
              </p>
              <ul>
                <li><strong>Source Code:</strong> You receive 100% transfer of all custom application source code, database architectures, and API integrations.</li>
                <li><strong>Design & Brand Assets:</strong> All Figma UI/UX kits, vector logos, custom typography guidelines, and media collateral become your exclusive property.</li>
                <li><strong>No Vendor Lock-In:</strong> We deliver thoroughly documented code repositories allowing any modern engineering team to maintain the software.</li>
              </ul>

              <h3>3. 30-Day Post-Launch Bug-Fix Guarantee</h3>
              <p>
                Every bespoke software build deployed by Ascendancy Solutions is backed by our signature <strong>30-Day Post-Launch Warranty</strong>. Any bugs, functional discrepancies, or layout regressions identified within 30 days of production release are resolved promptly at zero additional charge.
              </p>

              <h3>4. Payment Milestones & Invoicing</h3>
              <p>
                Custom digital projects are typically structured on milestone-based disbursements (e.g., 50% deposit upon kickoff, 50% upon final user acceptance and production deployment). Flexible retainer arrangements are available for ongoing technical maintenance and marketing retainers.
              </p>

              <h3>5. Limitation of Liability</h3>
              <p>
                Ascendancy Solutions exercises the highest degree of software engineering best practices. In no event shall the Agency be held liable for indirect, incidental, or consequential damages resulting from third-party hosting downtime, external API outages, or unauthorized third-party intrusion beyond our control.
              </p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="legal-content-pane animate-fade-in">
              <div className="legal-meta-row">
                <span>Infrastructure & Application Security Standards</span>
                <span>SOC 2 Compliant Edge Network</span>
              </div>

              <h3>1. End-to-End Encryption</h3>
              <p>
                Our production web applications are enforced with strict HTTPS via TLS 1.3 encryption. All incoming and outgoing data transmissions are secured with modern cryptographic ciphers, automated SSL renewal, and HSTS headers.
              </p>

              <h3>2. Secure Development Lifecycle (SDLC)</h3>
              <ul>
                <li><strong>Automated Code Auditing:</strong> All codebase updates are linted and scanned with Oxlint and modern static analyzers before compilation.</li>
                <li><strong>Zero Plaintext Secrets:</strong> API keys and access tokens are managed via cryptographically isolated environment variables on Vercel's global edge platform.</li>
                <li><strong>Anti-Spam & Bot Defense:</strong> Contact submission endpoints feature invisible cryptographic honeypot verification to neutralize automated vulnerability scanning.</li>
              </ul>

              <h3>3. Responsible Disclosure</h3>
              <p>
                If you believe you have discovered a security concern or vulnerability relating to our platform or client products, please disclose it responsibly to{' '}
                <a href="mailto:hello@ascendancysolutions.com" className="legal-link">hello@ascendancysolutions.com</a>. We acknowledge and address verified security inquiries within 24 business hours.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="legal-modal-footer">
          <div className="legal-support-note">
            Have questions about compliance or contracts? Contact <a href="mailto:hello@ascendancysolutions.com">hello@ascendancysolutions.com</a>
          </div>
          <button onClick={onClose} className="btn-primary legal-done-btn">
            <span>Acknowledge & Close</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
