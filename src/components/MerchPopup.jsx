import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const MerchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 4 seconds after app starts (giving time for the preloader to finish)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleScrollToMerch = () => {
    setIsOpen(false);
    setTimeout(() => {
      const merchSection = document.getElementById('merch');
      if (merchSection) {
        // Adjust for sticky header if there is one
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = merchSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div 
        className="bg-paper-light"
        style={{
        borderRadius: '12px',
        padding: '35px 30px',
        maxWidth: '400px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <button 
          onClick={() => setIsOpen(false)}
          className="interactive-element"
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-deep)',
            padding: '5px'
          }}
        >
          <X size={24} />
        </button>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          color: 'var(--text-deep)',
          marginBottom: '20px',
          fontWeight: '900',
          letterSpacing: '0.1em',
          textAlign: 'center',
          lineHeight: 1.2
        }}>
          NEW MERCH<br/>DROP!
        </h3>

        <div style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '25px'
        }}>
          <img 
            src="/shirt.png" 
            alt="Merch Drop" 
            className="anim-float-medium"
            style={{
              width: '90%',
              height: 'auto',
              maxHeight: '250px',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
            }}
          />
        </div>

        <button
          onClick={handleScrollToMerch}
          className="btn-editorial interactive-element"
          style={{
            backgroundColor: '#121420',
            color: '#FFFFFF',
            border: '1px solid #121420',
            width: '100%',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#121420';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121420';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          CHECK IT OUT
        </button>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};
