import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import './FaqSection.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is the typical turnaround time for a custom web or mobile project?',
      answer: 'Most website design, app development, and branding projects are completed within 1 to 3 weeks depending on project complexity and feature scope. Express delivery options are available for urgent client launches.'
    },
    {
      question: 'How does payment and pricing work?',
      answer: 'We offer transparent, high-value pricing tiers structured between $250 and $1,000 max per project. Payments are split into clear milestones (e.g. 50% deposit upfront and 50% upon final sign-off and launch).'
    },
    {
      question: 'Will my website be mobile-responsive and search-engine optimized (SEO)?',
      answer: '100% yes. Every digital product built by Hiram at Ascendancy Solutions is engineered mobile-first with high speed performance, Google Schema.org structured data, and SEO meta tags out of the box.'
    },
    {
      question: 'Do you offer ongoing support and updates after launch?',
      answer: 'Yes! We provide 24/7 dedicated support, security patches, content updates, and post-launch maintenance to ensure your platform runs smoothly at all times.'
    },
    {
      question: 'How do we get started on my project?',
      answer: 'Getting started is simple! Simply reach out via our contact form below or message Hiram directly on WhatsApp (0715641618). We will discuss your goals and deliver a clear project roadmap within 24 hours.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">
            Got Questions? <span className="gradient-text-purple">We Have Answers.</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about working with Hiram & Ascendancy Solutions.
          </p>
        </div>

        <div className="faq-container glass-card">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <div className="question-text-wrap">
                    <HelpCircle size={20} className="faq-icon-purple" />
                    <h3 className="faq-question-title">{faq.question}</h3>
                  </div>
                  <ChevronDown size={20} className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
                </div>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
