import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Palette, 
  Video, 
  Search, 
  ArrowRight, 
  X, 
  CheckCircle,
  Zap
} from 'lucide-react';
import './ServicesSection.css';

export default function ServicesSection({ onGetStarted }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      icon: <Globe className="service-icon icon-purple" />,
      title: 'Website Design & Development',
      badge: 'POPULAR',
      shortDesc: 'Create modern, ultra-fast, responsive websites and web apps that showcase your brand and convert visitors into paying clients.',
      colorClass: 'gradient-purple',
      deliverables: [
        'Custom React / Vite & Next.js Single Page Applications',
        'Mobile-first responsive design across all viewports',
        'SEO-optimized architecture & fast page load speeds',
        'Interactive forms, dynamic content & backend API integration',
        'CMS & Admin Dashboard setups for easy content updates'
      ],
      idealFor: 'Startups, SaaS companies, and established businesses seeking a high-converting digital storefront.'
    },
    {
      id: 'mobile-app',
      icon: <Smartphone className="service-icon icon-cyan" />,
      title: 'Mobile App Development',
      badge: 'NEW',
      shortDesc: 'Native & cross-platform iOS and Android mobile apps engineered for fluid performance, push notifications, and offline access.',
      colorClass: 'gradient-cyan',
      deliverables: [
        'Cross-Platform iOS & Android React Native / Flutter Apps',
        'Sleek glassmorphic UI/UX mobile interface design',
        'Biometric authentication & secure cloud sync',
        'Push notifications & in-app messaging features',
        'Apple App Store & Google Play Store publishing guidance'
      ],
      idealFor: 'Businesses wanting to engage users on mobile devices with dedicated app experiences.'
    },
    {
      id: 'ecommerce',
      icon: <ShoppingBag className="service-icon icon-coral" />,
      title: 'E-Commerce & Storefronts',
      badge: 'FEATURED',
      shortDesc: 'Turn-key online stores with seamless shopping cart flows, payment gateway integration, inventory tracking, and high conversion checkout.',
      colorClass: 'gradient-coral',
      deliverables: [
        'Custom Shopify, WooCommerce & headless e-commerce builds',
        'Multi-currency & Local Payment Gateways (Stripe, PayPal, M-Pesa)',
        'Inventory management, order tracking & automated email receipts',
        'Mobile-optimized express checkout & cart recovery flows',
        'Product search, filtering, and customer review modules'
      ],
      idealFor: 'Retailers, D2C brands, and merchants looking to launch or scale online sales.'
    },
    {
      id: 'graphics-design',
      icon: <Palette className="service-icon icon-purple" />,
      title: 'Graphics Design & Branding',
      badge: 'CREATIVE',
      shortDesc: 'Eye-catching visual designs and corporate identity systems that elevate your brand image and leave a lasting impression.',
      colorClass: 'gradient-purple',
      deliverables: [
        'Complete Brand Identity Kits (Logo, Typography & Color Palette)',
        'Social media graphics, ad banners & marketing collateral',
        'Figma UI/UX wireframes & interactive prototypes',
        'Print-ready business cards, packaging & promotional materials',
        'Brand style guidelines documentation'
      ],
      idealFor: 'New ventures launching a brand or established companies looking for a visual refresh.'
    },
    {
      id: 'video-editing',
      icon: <Video className="service-icon icon-cyan" />,
      title: 'Video Editing & Motion Graphics',
      badge: 'ENGAGING',
      shortDesc: 'Professional video editing and motion graphics that transform raw footage into captivating, high-performing promo content.',
      colorClass: 'gradient-cyan',
      deliverables: [
        'High-converting social media reels, TikToks & Shorts editing',
        'Corporate promo videos & product demo showcases',
        'Dynamic motion graphics, logo animations & lower-thirds',
        'Color grading, sound design & audio balancing',
        'Multi-format export optimized for web and TV'
      ],
      idealFor: 'Content creators, agencies, and businesses aiming to dominate video channels.'
    },
    {
      id: 'seo-sem',
      icon: <Search className="service-icon icon-coral" />,
      title: 'SEO & Growth Marketing',
      badge: 'GROWTH',
      shortDesc: 'Boost online visibility and drive targeted traffic with search engine optimization, strategic Google Ads, and lead campaigns.',
      colorClass: 'gradient-coral',
      deliverables: [
        'On-page & Technical SEO audits and keyword optimization',
        'Google Ads (SEM) & Meta Pay-Per-Click ad campaign setup',
        'Local SEO listing optimization & Google Business profile sync',
        'Conversion Rate Optimization (CRO) & A/B testing strategy',
        'Monthly performance analytics & ROI reporting'
      ],
      idealFor: 'Businesses needing consistent organic search leads and targeted paid customer acquisition.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">SERVICES WE OFFER</div>
          <h2 className="section-title">
            Tailored Digital Solutions Built For{' '}
            <span className="gradient-text-cyan">Maximum Growth</span>
          </h2>
          <p className="section-desc">
            From custom web and mobile apps to e-commerce storefronts and targeted marketing, 
            we provide end-to-end digital services designed to outpace your competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="card-top">
                <div className="service-icon-wrap">{service.icon}</div>
                <span className={`service-pill-badge ${service.colorClass}`}>{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              <div className="service-card-actions">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="btn-service-details"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>

            <div className="modal-header-row">
              <div className="service-icon-wrap modal-icon-wrap">{selectedService.icon}</div>
              <div>
                <span className={`service-pill-badge ${selectedService.colorClass}`}>{selectedService.badge}</span>
                <h3 className="modal-service-title">{selectedService.title}</h3>
              </div>
            </div>

            <p className="modal-desc">{selectedService.shortDesc}</p>

            <div className="modal-section">
              <h4 className="modal-subheading">Key Deliverables Included:</h4>
              <div className="modal-deliverables-list">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="modal-deliverable-item">
                    <CheckCircle size={18} className="deliverable-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h4 className="modal-subheading">Ideal For:</h4>
              <p className="modal-ideal-text">{selectedService.idealFor}</p>
            </div>

            <div className="modal-footer-actions">
              <button 
                onClick={() => {
                  setSelectedService(null);
                  if (onGetStarted) onGetStarted();
                }}
                className="btn-primary modal-cta-btn"
              >
                <Zap size={18} />
                <span>Request This Service</span>
              </button>
              <button 
                onClick={() => setSelectedService(null)} 
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
