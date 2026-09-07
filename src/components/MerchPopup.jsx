import React, { useEffect } from 'react';
import { X, Flame, ShoppingBag, ArrowRight } from 'lucide-react';
import frontPoster from '../../media team 6.png';
import backPoster from '../../media team 7.png';

export const MerchPopup = ({ isOpen, onClose }) => {
  // Google Form link for purchasing merch
  const GFORM_URL = "https://forms.gle/ZKeKMzciZmF2PiMz9";

  // Allow closing via Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="merch-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 12, 10, 0.86)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'max(14px, env(safe-area-inset-top, 14px)) 12px max(14px, env(safe-area-inset-bottom, 14px)) 12px',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        animation: 'merchFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes merchFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes merchModalScale {
          from { transform: scale(0.92) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @media (max-width: 640px) {
          .merch-overlay {
            padding: max(14px, env(safe-area-inset-top, 14px)) 10px max(14px, env(safe-area-inset-bottom, 14px)) 10px !important;
          }
          .merch-modal-card {
            max-height: calc(100dvh - 28px) !important;
            border-radius: 20px !important;
            margin: auto !important;
          }
          .merch-popup-close-btn {
            top: 12px !important;
            right: 12px !important;
            width: 40px !important;
            height: 40px !important;
            background-color: #261F1A !important;
            border: 2px solid rgba(255, 255, 255, 0.65) !important;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.85) !important;
          }
          .merch-header-container {
            padding-right: 48px !important;
            padding-left: 6px !important;
          }
        }
      `}} />

      <div
        onClick={(e) => e.stopPropagation()}
        className="merch-modal-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '780px',
          backgroundColor: '#1C1713',
          color: '#F8F4E8',
          borderRadius: '24px',
          border: '1.5px solid var(--border-gold)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 35px rgba(181, 138, 69, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'min(90vh, 90dvh, calc(100dvh - 32px))',
          margin: 'auto',
          animation: 'merchModalScale 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="merch-popup-close-btn"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 100,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#2A221C',
            border: '1.5px solid rgba(255, 255, 255, 0.45)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.7)',
            padding: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-red)';
            e.currentTarget.style.borderColor = 'var(--accent-red)';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2A221C';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={22} strokeWidth={2.5} color="#FFFFFF" />
        </button>

        {/* Scrollable Modal Container */}
        <div style={{
          overflowY: 'auto',
          padding: 'clamp(20px, 3.5vw, 32px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          {/* Header Banner */}
          <div className="merch-header-container" style={{ textAlign: 'center', paddingRight: '36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(158, 63, 50, 0.25)',
              border: '1px solid rgba(158, 63, 50, 0.6)',
              color: '#FFA39E',
              padding: '5px 16px',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              <Flame size={14} color="#FF6B6B" style={{ filter: 'drop-shadow(0 0 6px #ff4400)' }} />
              <span>LIMITED STOCKS</span>
            </div>

            <h3 style={{
              margin: '4px 0 0 0',
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)',
              fontWeight: '800',
              color: '#F8F4E8',
              lineHeight: '1.15',
              letterSpacing: '-0.01em'
            }}>
              AGAM'26 Official Festival Merch
            </h3>
          </div>

          {/* Visual Poster Showcase (Duo Grid) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            alignItems: 'center'
          }}>
            
            {/* Front Poster Frame */}
            <div style={{
              position: 'relative',
              backgroundColor: '#120F0D',
              borderRadius: '16px',
              padding: '12px',
              border: '1px solid rgba(181, 138, 69, 0.35)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                zIndex: 10,
                backgroundColor: 'rgba(28, 23, 19, 0.88)',
                border: '1px solid rgba(181, 138, 69, 0.4)',
                color: 'var(--accent-gold)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.64rem',
                fontWeight: '800',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-display)'
              }}>
                FRONT PRINT
              </div>

              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0A0807',
                aspectRatio: '1 / 1.12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={frontPoster}
                  alt="AGAM Merch Front"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Back Poster Frame */}
            <div style={{
              position: 'relative',
              backgroundColor: '#120F0D',
              borderRadius: '16px',
              padding: '12px',
              border: '1px solid rgba(181, 138, 69, 0.35)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                zIndex: 10,
                backgroundColor: 'rgba(28, 23, 19, 0.88)',
                border: '1px solid rgba(181, 138, 69, 0.4)',
                color: 'var(--accent-gold)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.64rem',
                fontWeight: '800',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-display)'
              }}>
                BACK ARTWORK
              </div>

              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0A0807',
                aspectRatio: '1 / 1.12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={backPoster}
                  alt="AGAM Merch Back"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            marginTop: '6px'
          }}>
            
            {/* BUY NOW Button */}
            <a
              href={GFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                maxWidth: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: 'var(--accent-red)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: '900',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '16px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(158, 63, 50, 0.5)',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                transition: 'all 0.25s var(--ease-editorial)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#873428';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(158, 63, 50, 0.65)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(158, 63, 50, 0.5)';
              }}
            >
              <ShoppingBag size={20} />
              <span>BUY NOW</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MerchPopup;
