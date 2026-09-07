import React from 'react';

export const MerchSection = () => {
  const marqueeText = (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> MERCH <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> AGAM 26 
      <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> MERCH <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> AGAM 26 
      <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> MERCH <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> AGAM 26 
      <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> MERCH <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> AGAM 26 
      <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> MERCH <span style={{ margin: '0 20px', fontSize: '0.6em', opacity: 0.5 }}>•</span> AGAM 26 
    </span>
  );

  const MarqueeBar = () => (
    <div style={{ 
      backgroundColor: 'var(--accent-red)', 
      color: 'var(--bg-primary)', 
      padding: '8px 0', 
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="marquee-container">
        <div className="marquee-content" style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '0.8rem', 
          letterSpacing: '0.15em', 
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
        </div>
      </div>
    </div>
  );

  return (
    <section id="merch" className="bg-paper-dark" style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>



      <MarqueeBar />

      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '40px 20px 120px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px'
      }}>
        
        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          color: 'var(--text-deep)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '25px',
          letterSpacing: '0.15em',
          fontWeight: '800',
          textAlign: 'center'
        }}>
          <span>THE</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 'bold', marginTop: '-10px' }}>അഗം</span> MERCH
          </div>
        </h2>

        {/* Image & Labels Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          marginBottom: '20px'
        }}>
          
          {/* Main T-Shirt Image */}
          <img 
            src="/shirt.png" 
            alt="Mashi Merch Collection" 
            className="anim-float-medium"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 5
            }}
          />

          {/* Labels */}
          <Label text="oversized" top="55%" left="-5%" rotation="-4deg" />
          <Label text="regular" top="75%" right="-2%" rotation="2deg" />

          {/* Sparkles */}
          <Sparkle top="10%" left="15%" size={24} />
          <Sparkle bottom="5%" right="25%" size={20} />
          
        </div>

        {/* Action Area */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          marginTop: '10px'
        }}>
          {/* Price */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.2rem',
            fontWeight: '900',
            color: 'var(--text-deep)',
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            lineHeight: 1
          }}>
            350 <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-deep)', opacity: 0.8 }}>Rs</span>
          </div>

          {/* Buy Button */}
          <a
            href="https://forms.gle/4mLNDg4oyjekVNpU6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial interactive-element"
            data-cursor-text="BUY"
            style={{ 
              marginTop: '5px',
              backgroundColor: '#121420',
              color: '#FFFFFF',
              borderColor: '#121420',
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
            <span>Buy Now</span>
            <svg 
              className="arrow-icon" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const Label = ({ text, top, left, right, bottom, rotation }) => (
  <div style={{
    position: 'absolute',
    top, left, right, bottom,
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: '900',
    color: 'var(--accent-red)',
    textTransform: 'lowercase',
    transform: `rotate(${rotation})`,
    zIndex: 10,
    letterSpacing: '-0.02em',
    // Outline effect using theme background color
    textShadow: `
      -2px -2px 0 var(--bg-primary),
      2px -2px 0 var(--bg-primary),
      -2px 2px 0 var(--bg-primary),
      2px 2px 0 var(--bg-primary),
      -3px 0 0 var(--bg-primary),
      3px 0 0 var(--bg-primary),
      0 -3px 0 var(--bg-primary),
      0 3px 0 var(--bg-primary),
      0 6px 15px rgba(0,0,0,0.1)
    `,
    pointerEvents: 'none'
  }}>
    {text}
  </div>
);

const Sparkle = ({ top, left, right, bottom, size }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top, left, right, bottom,
      zIndex: 6,
      opacity: 0.8
    }}
  >
    <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="white" />
  </svg>
);
