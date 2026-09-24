import React from 'react';
import { X, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import './CaseStudyModal.css';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="case-modal-overlay" onClick={onClose}>
      <div className="case-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="case-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Modal Banner Image */}
        <div className="case-banner-wrap">
          <img src={project.image} alt={project.title} className="case-banner-img" />
          <div className="case-banner-badge">
            <TrendingUp size={16} />
            <span>{project.impact}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="case-modal-body">
          <div className="case-header-info">
            <span className="case-cat-tag">{project.category}</span>
            <h2 className="case-title">{project.title}</h2>
            <div className="case-client-row">
              <strong>Client Partner:</strong> {project.client}
            </div>
          </div>

          <div className="case-grid">
            <div className="case-col">
              <h4 className="case-subheading">The Challenge</h4>
              <p className="case-text">{project.challenge}</p>
            </div>

            <div className="case-col">
              <h4 className="case-subheading">Our Strategic Solution</h4>
              <p className="case-text">{project.solution}</p>
            </div>
          </div>

          <div className="case-results-box glass-card">
            <h4 className="case-subheading gradient-text-cyan">Measured Results & Impact</h4>
            <div className="results-list">
              {project.results.map((res, i) => (
                <div key={i} className="result-item">
                  <CheckCircle2 size={18} className="result-check" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-tech-section">
            <h4 className="case-subheading">Technologies Employed:</h4>
            <div className="case-tech-flex">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="case-tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="case-modal-footer">
            <button onClick={onClose} className="btn-primary">
              <span>Close Case Study</span>
            </button>
            <a href="#contact" onClick={onClose} className="btn-secondary">
              <span>Discuss Similar Project</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
