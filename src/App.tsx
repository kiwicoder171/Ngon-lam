import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureMenu } from './components/SignatureMenu';
import { HeritageStory } from './components/HeritageStory';
import { MediaShowcase } from './components/MediaShowcase';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { StickyBottomDock } from './components/StickyBottomDock';
import { ReservationModal } from './components/ReservationModal';
import { DeliveryModal } from './components/DeliveryModal';

const MainContent: React.FC = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  useEffect(() => {
    // Reset scroll to top on fresh load/reload
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handleOpenReservation = () => setReservationOpen(true);
  const handleOpenDelivery = () => setDeliveryOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2c221e]">
      {/* Navigation */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onOpenDelivery={handleOpenDelivery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenReservation={handleOpenReservation}
          onOpenDelivery={handleOpenDelivery}
        />
        <SignatureMenu
          onOpenReservation={handleOpenReservation}
          onOpenDelivery={handleOpenDelivery}
        />
        <HeritageStory />
        <MediaShowcase />
        <ReviewsSection />
        <LocationHours
          onOpenReservation={handleOpenReservation}
          onOpenDelivery={handleOpenDelivery}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Dock for Mobile Viewports */}
      <StickyBottomDock
        onOpenReservation={handleOpenReservation}
        onOpenDelivery={handleOpenDelivery}
      />

      {/* Modals */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
      <DeliveryModal
        isOpen={deliveryOpen}
        onClose={() => setDeliveryOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
