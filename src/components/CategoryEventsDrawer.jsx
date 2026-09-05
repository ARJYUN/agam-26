import React, { useEffect } from 'react';
import { X, Award, Calendar, MapPin, Receipt, ShieldAlert } from 'lucide-react';

export const CategoryEventsDrawer = ({ category, onClose }) => {
  useEffect(() => {
    if (!category) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body scrolling behind the active drawer
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <>
      {/* Semi-transparent Backdrop Overlay */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(21, 19, 17, 0.5)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          zIndex: 2490,
          animation: 'fadeInDrawer 0.25s ease-out'
        }}
        aria-hidden="true"
      />

      {/* Slide-over Drawer for Event List Details */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={`${category.name} Events`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '600px',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2500,
          animation: 'slideInRight 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
          overflow: 'hidden'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes fadeInDrawer {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}} />
        
        {/* Drawer Header with Safe Area support */}
        <div style={{
          padding: 'max(20px, env(safe-area-inset-top, 20px)) 24px 20px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-secondary)',
          position: 'relative',
          zIndex: 2
        }}>
          <div>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '0.7rem', 
              color: 'var(--accent-red)', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase'
            }}>
              Category Events
            </span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.4rem', 
              textTransform: 'uppercase',
              color: 'var(--text-deep)'
            }}>
              {category.name}
            </h3>
          </div>
          
          <button 
            onClick={onClose}
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              minWidth: '42px',
              minHeight: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-deep)',
              touchAction: 'manipulation',
              transition: 'all 0.2s ease'
            }}
            className="interactive-element"
            data-cursor-text="CLOSE"
            aria-label="Close category events"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{
          flex: '1',
          overflowY: 'auto',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {category.events.map((event) => (
            <div key={event.id} style={{
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.1rem', 
                color: 'var(--text-deep)', 
                textTransform: 'uppercase' 
              }}>
                {event.title}
              </h4>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {event.desc}
              </p>

              {/* Metadata Row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                margin: '5px 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                  <Award size={13} style={{ color: 'var(--accent-gold)' }} />
                  <strong>Prize:</strong> {event.prize}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                  <Receipt size={13} style={{ color: 'var(--accent-gold)' }} />
                  <strong>Fee:</strong> {event.fee}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                  <Calendar size={13} style={{ color: 'var(--accent-gold)' }} />
                  {event.time}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-deep)' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-gold)' }} />
                  {event.venue}
                </div>
              </div>

              {/* Rules */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '15px',
                borderRadius: '2px',
                borderLeft: '2px solid var(--accent-red)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>
                  <ShieldAlert size={13} /> Rules
                </div>
                <ul style={{ paddingLeft: '15px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {event.rules.map((rule, rIdx) => (
                    <li key={rIdx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryEventsDrawer;
