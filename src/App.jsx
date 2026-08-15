import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventRegistration } from './components/EventRegistration';
import { Leaderboard } from './components/Leaderboard';
import { OrganizingTeam } from './components/OrganizingTeam';
import { Footer } from './components/Footer';
import { AllEventsPage } from './components/AllEventsPage';
import { RegisterModal } from './components/RegisterModal';
import { Preloader } from './components/Preloader';
import { MarqueeDivider } from './components/MarqueeDivider';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedEvt, setSelectedEvt] = useState('');
  const [currentPage, setCurrentPage] = useState(window.location.hash === '#/events' ? 'events' : 'home');
  const [loading, setLoading] = useState(true);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // End the loading state (hides progress bar etc.)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Wait 1250ms for the clip-path circle wipe to complete
      const hideTimer = setTimeout(() => setPreloaderVisible(false), 1250);
      return () => clearTimeout(hideTimer);
    }
  }, [loading]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/events') {
        setCurrentPage('events');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && window.location.hash && window.location.hash !== '#/events') {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [currentPage]);

  const handleOpenRegisterModal = (catId = '', eventId = '') => {
    setSelectedCat(catId);
    setSelectedEvt(eventId);
    setIsRegisterOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterOpen(false);
    setSelectedCat('');
    setSelectedEvt('');
  };

  return (
    <div className="app-container">
      {/* Preloader overlaid on top — content renders underneath immediately */}
      {preloaderVisible && <Preloader loading={loading} />}

      {/* Subtle organic paper texture overlay */}
      <div className="paper-texture" />

      {/* Navigation Header */}
      <Header onOpenRegisterModal={() => handleOpenRegisterModal()} />

      {currentPage === 'home' ? (
        <>
          {/* Main Sections */}
          <main>
            {/* Hero entry section with Theyyam image & parallax */}
            <Hero onOpenRegisterModal={handleOpenRegisterModal} />

            {/* Countdown to fest start */}
            <Countdown onOpenRegisterModal={handleOpenRegisterModal} />

            {/* Categories and Event registration details */}
            <EventRegistration onOpenRegisterModal={handleOpenRegisterModal} />

            {/* Infinite Marquee Divider */}
            <MarqueeDivider />

            {/* Expandable Department standings */}
            <Leaderboard />

            {/* Infinite Marquee Divider */}
            <MarqueeDivider />

            {/* Organizing committee grid with custom vector avatars */}
            <OrganizingTeam />
          </main>
        </>
      ) : (
        <AllEventsPage onOpenRegisterModal={handleOpenRegisterModal} />
      )}

      {/* Footer closing page */}
      <Footer onOpenRegisterModal={() => handleOpenRegisterModal()} />

      {/* Registration popup and pass voucher */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegisterModal}
        initialCategoryId={selectedCat}
        initialEventId={selectedEvt}
      />
    </div>
  );
}

export default App;
