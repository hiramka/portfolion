import React, { useState } from 'react';
import { ExternalLink, Layers, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import './PortfolioSection.css';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-Commerce', 'Branding & Design'];

  const projects = [
    {
      id: 'fintech-saas',
      title: 'Apex Vault - Financial Analytics Portal',
      category: 'Web Development',
      image: '/images/web_app.webp',
      impact: '< 180ms Global Load',
      client: 'Apex Analytics Ltd.',
      techStack: ['React', 'Vite', 'Node.js', 'Chart.js'],
      shortDesc: 'A high-performance financial dashboard featuring real-time data visualizers, customizable widgets, and automated PDF reporting.',
      challenge: 'The client’s legacy reporting portal suffered from slow 4s load times, bloated database queries, and poor mobile responsiveness.',
      solution: 'We engineered a lightweight React/Vite dashboard leveraging virtualized data tables, client-side caching, and responsive Chart.js components.',
      results: [
        'Reduced initial dashboard load time from 4.2s to sub-180ms globally.',
        'Streamlined financial reporting workflow for over 5,000 daily users.',
        'Delivered 100% mobile responsive UI across desktop, tablet, and mobile.'
      ]
    },
    {
      id: 'fit-mobile-app',
      title: 'PulseFit - Cross-Platform Fitness Companion',
      category: 'Mobile Apps',
      image: '/images/mobile_app.webp',
      impact: '4.9★ Store Rating',
      client: 'Pulse Health Technologies',
      techStack: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
      shortDesc: 'Cross-platform iOS and Android mobile app featuring workout tracking, biometrics authentication, and offline data sync.',
      challenge: 'Pulse Health needed a unified codebase across iOS and Android without sacrificing native speed, biometric login, or offline step sync.',
      solution: 'Built a sleek React Native application with offline SQLite caching, smooth 60fps animations, and biometric security integration.',
      results: [
        'Simultaneous iOS & Android deployment delivered on schedule within 8 weeks.',
        'Maintained 4.9 out of 5 stars average user review rating.',
        'Seamless offline data syncing with zero data loss during connectivity drops.'
      ]
    },
    {
      id: 'luxury-storefront',
      title: 'Aura Luxe - Modern E-Commerce Storefront',
      category: 'E-Commerce',
      image: '/images/ecommerce.webp',
      impact: '+28% Checkout Rate',
      client: 'Aura Retail Group',
      techStack: ['Headless React', 'Stripe', 'Node.js', 'Tailwind'],
      shortDesc: 'Ultra-fast digital storefront with instant product filtering, streamlined express checkout, and mobile payment gateway integration.',
      challenge: 'Legacy e-commerce store suffered from high cart abandonment on mobile due to slow checkout pages and bulky image assets.',
      solution: 'Rebuilt the storefront as a lightweight React application with webp image pipelines, 1-click Stripe express checkout, and instant search.',
      results: [
        'Mobile cart completion rate increased by 28% in first 60 days.',
        'Page speed score jumped from 38 to 96 on Google PageSpeed Insights.',
        'Full automated order tracking and inventory sync integration.'
      ]
    },
    {
      id: 'brand-identity-system',
      title: 'Vanguard Security - Corporate Brand & UI System',
      category: 'Branding & Design',
      image: '/images/branding.webp',
      impact: 'Unified Design Tokens',
      client: 'Vanguard Security Corp',
      techStack: ['Figma', 'Design Systems', 'UI/UX', 'CSS Tokens'],
      shortDesc: 'Complete corporate visual identity system, interactive Figma component UI kit, dark-mode design tokens, and corporate website.',
      challenge: 'Disjointed design assets and inconsistent brand elements across mobile apps, marketing decks, and customer portals.',
      solution: 'Crafted a unified brand identity system with reusable Figma UI components, dark-mode CSS tokens, and comprehensive brand guidelines.',
      results: [
        'Delivered 40-page master brand guidelines & UI component library.',
        'Standardized design tokens across web apps and marketing sites.',
        'Streamlined future feature design sprints by 40%.'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">FEATURED WORK</div>
          <h2 className="section-title">
            Case Studies & Proven <span className="gradient-text-purple">Success Stories</span>
          </h2>
          <p className="section-desc">
            Explore our recent projects across web development, mobile apps, e-commerce, and brand strategy that delivered measurable business ROI.
          </p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                  loading="lazy" 
                  decoding="async" 
                  width="600" 
                  height="380" 
                />
                <div className="project-overlay">
                  <button 
                    onClick={() => setSelectedCaseStudy(project)} 
                    className="btn-primary overlay-btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="project-impact-badge">
                  <TrendingUp size={14} />
                  <span>{project.impact}</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-cat-pill">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-tech-list">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Component */}
      {selectedCaseStudy && (
        <CaseStudyModal 
          project={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </section>
  );
}
