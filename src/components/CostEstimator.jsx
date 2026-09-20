import React, { useState } from 'react';
import { Calculator, Check, Zap, Send, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import './CostEstimator.css';

export default function CostEstimator({ onScrollToContact }) {
  const [selectedServices, setSelectedServices] = useState(['web-dev']);
  const [scale, setScale] = useState('growth'); // 'mvp', 'growth', 'enterprise'
  const [timeline, setTimeline] = useState('standard'); // 'express', 'standard', 'flexible'
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    { id: 'web-dev', name: 'Website & Web App', basePrice: 1200 },
    { id: 'mobile-app', name: 'Mobile App (iOS/Android)', basePrice: 2200 },
    { id: 'ecommerce', name: 'E-Commerce Storefront', basePrice: 1600 },
    { id: 'branding', name: 'Graphics & Brand Identity', basePrice: 800 },
    { id: 'video', name: 'Video Editing & Motion Ads', basePrice: 700 },
    { id: 'seo', name: 'SEO & Growth Marketing', basePrice: 900 },
  ];

  const scaleMultipliers = {
    mvp: 0.85,
    growth: 1.0,
    enterprise: 1.6
  };

  const timelineMultipliers = {
    express: 1.25,
    standard: 1.0,
    flexible: 0.9
  };

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate price bounds
  const rawSum = selectedServices.reduce((acc, serviceId) => {
    const s = availableServices.find(item => item.id === serviceId);
    return acc + (s ? s.basePrice : 0);
  }, 0);

  const finalEst = Math.round(rawSum * scaleMultipliers[scale] * timelineMultipliers[timeline]);
  const minEst = Math.round(finalEst * 0.9);
  const maxEst = Math.round(finalEst * 1.15);

  const handleBookEstimate = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onScrollToContact({
        services: selectedServices.map(sId => availableServices.find(s => s.id === sId)?.name).join(', '),
        scale,
        timeline,
        estimateRange: `$${minEst.toLocaleString()} - $${maxEst.toLocaleString()}`
      });
    }, 1200);
  };

  return (
    <section id="estimator" className="estimator-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">INTERACTIVE CALCULATOR</div>
          <h2 className="section-title">
            Estimate Your <span className="gradient-text-cyan">Project Scope & Investment</span>
          </h2>
          <p className="section-desc">
            Select your required core services, project scope, and timeline to receive an instant transparent cost estimate.
          </p>
        </div>

        <div className="estimator-card glass-card">
          <div className="estimator-grid">
            {/* Left Steps Panel */}
            <div className="estimator-controls">
              {/* Step 1: Services Selection */}
              <div className="step-box">
                <label className="step-label">
                  <span className="step-num">1</span>
                  <span>Select Required Core Services (Choose 1 or more):</span>
                </label>
                <div className="service-checkbox-grid">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        className={`service-check-pill ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleService(service.id)}
                      >
                        <div className="pill-check">
                          {isSelected && <Check size={14} />}
                        </div>
                        <span>{service.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div className="step-box">
                <label className="step-label">
                  <span className="step-num">2</span>
                  <span>Select Project Complexity & Scale:</span>
                </label>
                <div className="options-selector">
                  <button
                    type="button"
                    className={`option-btn ${scale === 'mvp' ? 'active' : ''}`}
                    onClick={() => setScale('mvp')}
                  >
                    <strong>MVP / Startup</strong>
                    <span>Essential core features</span>
                  </button>
                  <button
                    type="button"
                    className={`option-btn ${scale === 'growth' ? 'active' : ''}`}
                    onClick={() => setScale('growth')}
                  >
                    <strong>Growing Business</strong>
                    <span>Full feature suite</span>
                  </button>
                  <button
                    type="button"
                    className={`option-btn ${scale === 'enterprise' ? 'active' : ''}`}
                    onClick={() => setScale('enterprise')}
                  >
                    <strong>Enterprise Platform</strong>
                    <span>Custom APIs & heavy scale</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="step-box">
                <label className="step-label">
                  <span className="step-num">3</span>
                  <span>Desired Delivery Timeline:</span>
                </label>
                <div className="options-selector">
                  <button
                    type="button"
                    className={`option-btn ${timeline === 'express' ? 'active' : ''}`}
                    onClick={() => setTimeline('express')}
                  >
                    <strong>Express (2 Weeks)</strong>
                    <span>Priority sprint (+25%)</span>
                  </button>
                  <button
                    type="button"
                    className={`option-btn ${timeline === 'standard' ? 'active' : ''}`}
                    onClick={() => setTimeline('standard')}
                  >
                    <strong>Standard (4-6 Weeks)</strong>
                    <span>Standard cadence</span>
                  </button>
                  <button
                    type="button"
                    className={`option-btn ${timeline === 'flexible' ? 'active' : ''}`}
                    onClick={() => setTimeline('flexible')}
                  >
                    <strong>Flexible (8+ Weeks)</strong>
                    <span>Budget friendly (-10%)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Live Estimate Output Box */}
            <div className="estimator-summary-box glass-card">
              <div className="summary-header">
                <Calculator className="summary-icon" />
                <h3>Estimated Investment</h3>
              </div>

              <div className="price-display">
                <div className="price-range">
                  ${minEst.toLocaleString()} — ${maxEst.toLocaleString()}
                </div>
                <div className="price-subtext">Estimated range based on selected scope</div>
              </div>

              <div className="summary-breakdown">
                <div className="breakdown-row">
                  <span>Services Included:</span>
                  <strong>{selectedServices.length} Selected</strong>
                </div>
                <div className="breakdown-row">
                  <span>Scale Level:</span>
                  <strong className="capitalize">{scale}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Target Delivery:</span>
                  <strong className="capitalize">{timeline}</strong>
                </div>
              </div>

              <div className="estimator-guarantee">
                <ShieldCheck size={18} className="guarantee-icon" />
                <span>Includes 100% source code ownership & 30-day post launch bug guarantee.</span>
              </div>

              <button 
                onClick={handleBookEstimate}
                disabled={submitted}
                className="btn-primary est-submit-btn"
              >
                {submitted ? (
                  <span>Preparing Quote...</span>
                ) : (
                  <>
                    <Zap size={18} />
                    <span>Lock In Estimate & Proceed</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
