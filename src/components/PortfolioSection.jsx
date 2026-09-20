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
      title: 'Apex Vault - Financial Analytics Platform',
      category: 'Web Development',
      image: '/images/web_app.png',
      impact: '+340% User Engagement',
      client: 'Apex Capital Inc.',
      techStack: ['React', 'Vite', 'Node.js', 'Chart.js'],
      shortDesc: 'A high-performance SaaS analytics suite providing real-time portfolio insights and automated financial reporting.',
      challenge: 'Apex Capital required a modern, ultra-fast web application to visualize complex financial data streams for 50,000+ institutional clients without latency.',
      solution: 'We engineered a custom React/Vite dashboard leveraging WebSockets for real-time tick data, glassmorphic UI cards, and responsive data charts.',
      results: [
        '340% increase in daily active user session duration',
        'Sub-100ms dashboard load speed globally',
        '$4.2M in new client assets onboarded within 90 days'
      ]
    },
    {
      id: 'fit-mobile-app',
      title: 'PulseFit - AI Health & Workout Companion',
      category: 'Mobile Apps',
      image: '/images/mobile_app.png',
      impact: '4.9★ App Store Rating',
      client: 'Pulse Health Technologies',
      techStack: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
      shortDesc: 'Cross-platform iOS and Android mobile app featuring AI workout tracking, habit analytics, and live trainer chat.',
      challenge: 'Pulse Health needed a unified mobile experience across iOS and Android with offline sync capabilities and real-time step counter telemetry.',
      solution: 'Built a sleek React Native application with biometrics, dark-mode futuristic UI, and automated offline data synchronization.',
      results: [
        'Over 120,000 active app downloads in first 6 months',
        'Maintained a 4.9 out of 5 stars average App Store review',
        '84% user retention rate past 30 days'
      ]
    },
    {
      id: 'luxury-storefront',
      title: 'Aura Luxe - High-Fashion E-Commerce',
      category: 'E-Commerce',
      image: '/images/ecommerce.png',
      impact: '$1.8M Revenue Generated',
      client: 'Aura International Brand',
      techStack: ['Headless Shopify', 'React', 'Stripe', 'Tailwind'],
      shortDesc: 'Next-gen luxury storefront with instant checkout, multi-currency support, and dynamic product customizers.',
      challenge: 'Legacy WooCommerce site suffered from 4.8s page load times and high cart abandonment rates on mobile devices.',
      solution: 'Rebuilt as a Headless Shopify store with PWA capabilities, 1-click Stripe express checkout, and high-res video galleries.',
      results: [
        'Cart abandonment dropped by 42%',
        'Mobile conversion rate increased from 1.2% to 3.8%',
        'Over $1.8M sales processed in Q4 campaign'
      ]
    },
    {
      id: 'brand-identity-system',
      title: 'Vanguard Cyber - Full Brand Identity',
      category: 'Branding & Design',
      image: '/images/branding.png',
      impact: 'Global Rebrand Award',
      client: 'Vanguard Security Corp',
      techStack: ['Figma', 'Brand Design', 'UI/UX', 'Vector Motion'],
      shortDesc: 'Complete corporate visual identity system including logo design, 3D brand book, UI kit, and marketing collateral.',
      challenge: 'Vanguard needed to transition from an legacy IT firm to a top-tier cybersecurity authority ahead of Series-B fundraising.',
      solution: 'Designed a modern neon-accented identity system with strict grid guidelines, interactive Figma design tokens, and investor decks.',
      results: [
        'Successfully closed $18M Series-B funding round',
        'Unified 12 global branch offices under single brand guide',
        'Won 2025 International Brand Identity Excellence award'
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
                <img src={project.image} alt={project.title} className="project-img" loading="lazy" decoding="async" />
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
