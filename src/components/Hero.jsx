import React from 'react';
import { FloatingCorner } from './FloatingCorner';

import { ScrollReveal } from './ScrollReveal';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#countdown');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper category icons mapping
  const categoryIcons = [
    {
      label: 'Music',
      svg: (
        <svg width="22" height="22" viewBox="0 0 70 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="66" r="10" />
          <circle cx="24" cy="66" r="6" />
          <line x1="20" y1="70" x2="56" y2="24" strokeWidth="3" />
          <path d="M56 24 C60 21, 62 16, 59 13 C56 10, 52 14, 53 18" />
          <line x1="22" y1="64" x2="52" y2="25" strokeWidth="1.25" />
          <line x1="26" y1="68" x2="54" y2="28" strokeWidth="1.25" />
        </svg>
      )
    },
    {
      label: 'Fine Arts',
      svg: (
        <svg width="22" height="22" viewBox="0 0 70 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 55 C12 45, 12 25, 28 20 C44 15, 55 25, 52 42 C50 55, 38 65, 20 55 Z" />
          <circle cx="28" cy="30" r="2.5" fill="currentColor" />
          <circle cx="42" cy="32" r="2.5" fill="currentColor" />
          <circle cx="36" cy="45" r="2.5" fill="currentColor" />
          <ellipse cx="20" cy="40" rx="3" ry="2" />
          <line x1="16" y1="75" x2="42" y2="25" strokeWidth="2.5" />
          <path d="M42 25 L45 20 M40 26 L43 21" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      label: 'Literary',
      svg: (
        <svg width="22" height="22" viewBox="0 0 70 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="25" y="55" width="20" height="15" rx="1" />
          <path d="M22 55 L48 55 L42 50 L28 50 Z" />
          <path d="M35 55 C38 45, 48 25, 58 15 C54 22, 46 36, 38 48" />
          <line x1="32" y1="58" x2="62" y2="12" strokeWidth="2.5" />
          <path d="M45 42 L55 35 M48 38 L58 31 M51 34 L61 27" />
        </svg>
      )
    },
    {
      label: 'Media',
      svg: (
        <svg width="22" height="22" viewBox="0 0 70 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="32" width="40" height="26" rx="2" />
          <path d="M28 32 L30 27 L40 27 L42 32 Z" />
          <circle cx="35" cy="45" r="9" />
          <circle cx="35" cy="45" r="5" />
          <circle cx="48" cy="37" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      label: 'Dance',
      svg: (
        <svg width="22" height="22" viewBox="0 0 70 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 40 C20 48, 50 48, 58 40" strokeWidth="3" />
          <circle cx="16" cy="47" r="2.5" fill="currentColor" />
          <circle cx="23" cy="49" r="2.5" fill="currentColor" />
          <circle cx="30" cy="50" r="2.5" fill="currentColor" />
          <circle cx="37" cy="50" r="2.5" fill="currentColor" />
          <circle cx="44" cy="49" r="2.5" fill="currentColor" />
          <circle cx="51" cy="47" r="2.5" fill="currentColor" />
          <circle cx="20" cy="55" r="2" fill="currentColor" />
          <circle cx="27" cy="57" r="2" fill="currentColor" />
          <circle cx="34" cy="58" r="2" fill="currentColor" />
          <circle cx="41" cy="57" r="2" fill="currentColor" />
          <circle cx="48" cy="55" r="2" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="home"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        paddingTop: '110px',
        paddingBottom: '120px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
    >


      {/* Main Grid Content */}
      <div className="hero-content-wrapper" style={{ maxWidth: '1250px', margin: '0 auto', width: '100%', padding: '0 20px', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '20px',
          position: 'relative'
        }} className="hero-flex-layout">

          <style dangerouslySetInnerHTML={{
            __html: `
            #home {
              background-image: url('/hero.png') !important;
            }
            @media (max-width: 768px) {
              #home {
                background-image: url('/herom.png') !important;
              }
            }
            @media (min-width: 1025px), (max-width: 1024px) and (orientation: landscape) {
              .hero-flex-layout {
                flex-direction: row !important;
                justify-content: space-between !important;
              }
              .hero-left-editorial {
                flex: 1.3 !important;
                text-align: left !important;
                align-items: flex-start !important;
              }
              .hero-right-visual {
                flex: 0.8 !important;
                display: flex !important;
                justify-content: flex-end !important;
                position: relative !important;
              }
            }
          `}} />

          {/* Left Column: Malayalam quote, logo titles & sub-taglines */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            zIndex: 3,
            paddingTop: '50px'
          }} className="hero-left-editorial">

            {/* Malayalam Quote */}
            <ScrollReveal delay={100} className="hero-quote-block">
              <div style={{
                textAlign: 'left',
                borderLeft: '2px solid var(--accent-red)',
                paddingLeft: '15px',
                marginBottom: '40px',
                maxWidth: '450px'
              }}>
                <span style={{ fontSize: '1.25rem', color: 'var(--accent-red)', fontFamily: 'serif', display: 'block', lineHeight: '1', marginBottom: '8px' }}>"</span>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  fontWeight: '500',
                  fontFamily: 'var(--font-malayalam)',
                  whiteSpace: 'pre-line'
                }}>
                  ഹൃദയത്തിൽ വിരിഞ്ഞ കല,<br />
                  വേദിയിൽ പിറക്കുന്ന ചരിത്രം.
                </p>
              </div>
            </ScrollReveal>

            {/* Brand Logo & Subtext */}
            <ScrollReveal delay={200}>
              <h1 style={{
                fontFamily: 'var(--font-malayalam)',
                fontSize: 'clamp(4.5rem, 10vw, 8rem)',
                fontWeight: '900',
                lineHeight: '0.85',
                color: 'var(--text-deep)',
                letterSpacing: '-0.02em',
                margin: '0',
                display: 'inline-block',
                transform: 'scaleY(1.25)',
                transformOrigin: 'bottom left',
                WebkitTextStroke: '2px var(--text-deep)',
                textShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                അഗം
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: 'var(--text-muted)',
                marginTop: '10px',
                display: 'block'
              }}>
                Where Art Meets Soul
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: '800',
                color: 'var(--accent-red)',
                marginTop: '6px',
                display: 'block'
              }}>
                SEP 17 &bull; 18 &bull; 19 &bull; 20, 2026
              </span>
            </ScrollReveal>

            {/* Central divider motif */}
            <ScrollReveal delay={350} className="hero-mobile-hide">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '25px 0'
              }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-color)' }} />
                <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--accent-gold)', transform: 'rotate(45deg)' }} />
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-color)' }} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="hero-mobile-hide">
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                fontWeight: '700',
                lineHeight: '1.5'
              }} className="hero-mobile-hide">
                A Celebration of<br />
                Art &bull; Culture &bull; Music &bull; Heritage
              </p>
            </ScrollReveal>

            {/* 6 Category Icons Grid (first half horizontally) */}
            <ScrollReveal delay={500} className="hero-mobile-hide">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                width: '100%',
                maxWidth: '500px',
                marginTop: '30px',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '20px'
              }} className="hero-categories-grid">
                <style dangerouslySetInnerHTML={{
                  __html: `
                  @media (min-width: 600px) {
                    .hero-categories-grid {
                      grid-template-columns: repeat(5, 1fr) !important;
                      gap: 12px !important;
                    }
                  }
                `}} />

                {categoryIcons.map((cat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)'
                    }}
                    className="interactive-element hero-category-item"
                    data-cursor-text="EVENT"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-red)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'inherit';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'inherit'
                    }}>
                      {cat.svg}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      fontWeight: '800',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--text-deep)',
                      lineHeight: '1.2'
                    }}>
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>



    </section>
  );
};
export default Hero;
