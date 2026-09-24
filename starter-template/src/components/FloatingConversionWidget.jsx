import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, X } from 'lucide-react';
import './FloatingConversionWidget.css';

export default function FloatingConversionWidget({ onOpenBooking }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Reveal widget smoothly after small scroll or 3 seconds
    const timer = setTimeout(() => setVisible(true), 1500);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="floating-conversion-container animate-fade-in">
      <div className="floating-conversion-pill glass-card">
        {/* Live Availability Indicator */}
        <div className="floating-status-dot-wrap">
          <span className="floating-pulse-dot"></span>
        </div>

        {/* Action Trigger */}
        <button 
          onClick={onOpenBooking}
          className="floating-book-btn"
          aria-label="Book Free Discovery Call"
        >
          <Calendar size={16} className="btn-icon-pulse" />
          <span className="floating-btn-text">
            <strong>Book Free 15-Min Call</strong>
            <span className="floating-btn-sub">Slots Available Today</span>
          </span>
        </button>

        {/* WhatsApp Direct Quick Icon */}
        <a 
          href="https://wa.me/254715641618?text=Hi%20Ascendancy%20Solutions,%20I'd%20like%20to%20chat%20about%20a%20project." 
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-quick-wa"
          title="Instant WhatsApp Chat"
          aria-label="Instant WhatsApp Chat"
        >
          <MessageSquare size={16} />
        </a>

        {/* Close/Minimize Pill */}
        <button 
          onClick={() => setDismissed(true)} 
          className="floating-dismiss-btn"
          aria-label="Dismiss quick booking widget"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
