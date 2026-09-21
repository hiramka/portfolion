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

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});

  const handleOpenBooking = (initialData = {}) => {
    setBookingData(initialData);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
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

      {/* Footer */}
      <Footer />

      {/* 1-Click Interactive Discovery Call Modal */}
      <DiscoveryCallModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBooking} 
        initialData={bookingData} 
      />

      {/* Floating Lead Conversion Widget */}
      <FloatingConversionWidget 
        onOpenBooking={() => handleOpenBooking()} 
      />
    </div>
  );
}
