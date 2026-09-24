import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Apex Capital Inc.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'Hiram and the Ascendancy Solutions team completely redesigned our financial web application. Our client engagement surged by 340% within weeks, and Hiram delivered ahead of schedule with flawless code quality.'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Growth',
      company: 'Aura International',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'The e-commerce store built by Hiram transformed our business. Mobile conversions jumped by 42% and we generated over $1.8M during our launch quarter. Hiram is a highly recommended digital partner!'
    },
    {
      name: 'David Chen',
      role: 'Founder & CEO',
      company: 'Pulse Health Technologies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'Our mobile app required complex offline sync and biometric login. Hiram executed the UI design and cross-platform build effortlessly. We reached 120,000+ app downloads in under 6 months.'
    }
  ];

  const brandLogos = [
    'APEX CAPITAL',
    'AURA LUXE',
    'PULSE HEALTH',
    'VANGUARD CYBER',
    'NEXUS DIGITAL'
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const current = testimonials[activeIdx];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">TESTIMONIALS</div>
          <h2 className="section-title">
            What Our <span className="gradient-text-purple">Clients Say</span>
          </h2>
          <p className="section-desc">
            Discover how we have helped visionary leaders and fast-growing businesses achieve strategic digital transformation.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="testimonial-card glass-card">
          <Quote className="quote-watermark" />
          
          <div className="testimonial-content">
            <div className="rating-stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} className="star-icon" />
              ))}
            </div>

            <p className="quote-text">"{current.quote}"</p>

            <div className="client-info-row">
              <img src={current.image} alt={current.name} className="client-avatar" loading="lazy" decoding="async" />
              <div>
                <h4 className="client-name">{current.name}</h4>
                <div className="client-role">{current.role} • <strong>{current.company}</strong></div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="carousel-controls">
            <button onClick={handlePrev} className="carousel-btn" aria-label="Previous testimonial">
              <ChevronLeft size={22} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot-indicator ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>
            <button onClick={handleNext} className="carousel-btn" aria-label="Next testimonial">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Brand Logos Bar */}
        <div className="brand-logos-bar">
          {brandLogos.map((logo, index) => (
            <div key={index} className="brand-logo-item">
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
