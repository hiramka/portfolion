import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import DiscoveryCallModal from './components/DiscoveryCallModal';
import FloatingConversionWidget from './components/FloatingConversionWidget';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});

  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('privacy');

  const handleOpenBooking = (initialData = {}) => {
    setBookingData(initialData);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenLegal = (tab = 'privacy') => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalModalOpen(false);
  };

  const handleScrollToContact = (_prefillData = null) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <CustomCursor />

      {/* Navigation */}
      <Navbar 
        onGetStarted={handleScrollToContact} 
        onBookCall={() => handleOpenBooking()} 
      />

      {/* Main Sections */}
      <main>
        <HeroSection 
          onGetStarted={handleScrollToContact} 
          onBookCall={() => handleOpenBooking()} 
        />
        <AboutSection />
        <ServicesSection onGetStarted={handleScrollToContact} />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection onBookCall={() => handleOpenBooking()} />
      </main>

      {/* Footer with Legal Compliance triggers */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* 1-Click Interactive Discovery Call Modal */}
      <DiscoveryCallModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBooking} 
        initialData={bookingData} 
      />

      {/* Legal & Corporate Compliance Modal (Privacy, Terms, Security) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={handleCloseLegal}
        activeTab={legalTab}
        onTabChange={setLegalTab}
      />

      {/* Floating Lead Conversion Widget */}
      <FloatingConversionWidget 
        onOpenBooking={() => handleOpenBooking()} 
      />
    </div>
  );
}
