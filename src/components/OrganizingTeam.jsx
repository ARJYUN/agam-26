import React from 'react';
import { FloatingCorner } from './FloatingCorner';

import { ScrollReveal } from './ScrollReveal';
import { teamMembers } from '../data/festData';

// A premium, stylized vector line-art avatar representing classical editorial portrait drawings
const ArtisticAvatar = ({ seedId, gender = 'male' }) => {
  const colors = [
    { bg: '#E8E1CE', line: 'var(--text-deep)', accent: 'var(--accent-red)' },
    { bg: '#F1EBDD', line: 'var(--text-deep)', accent: 'var(--accent-gold)' },
    { bg: '#E2DEC9', line: 'var(--text-deep)', accent: 'var(--accent-green)' },
  ];
  const theme = colors[seedId % colors.length];

  return (
    <svg width="100%" height="100%" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="140" fill={theme.bg} rx="2" />
      <circle cx="60" cy="70" r="38" stroke="rgba(112, 92, 69, 0.12)" strokeWidth="0.75" />
      
      {/* Hair styling */}
      {seedId % 2 === 0 ? (
        <path d="M30 60 C30 32, 90 32, 90 60 C90 64, 86 60, 83 58 C78 55, 42 55, 37 58 C34 60, 30 64, 30 60 Z" fill={theme.line} opacity="0.9" />
      ) : (
        <g>
          <circle cx="60" cy="26" r="8" fill={theme.accent} opacity="0.8" />
          <path d="M28 62 C28 32, 92 32, 92 62 C92 85, 85 98, 85 110 L35 110 C35 98, 28 85, 28 62 Z" fill={theme.line} opacity="0.95" />
        </g>
      )}

      {/* Head and features */}
      <path d="M48 90 C48 102, 72 102, 72 90" stroke={theme.line} strokeWidth="1.5" />
      <path d="M44 75 C44 90, 47 94, 60 94 C73 94, 76 90, 76 75 C76 58, 44 58, 44 75 Z" fill={theme.bg} stroke={theme.line} strokeWidth="1.5" />
      <circle cx="53" cy="72" r="1.5" fill={theme.line} />
      <circle cx="67" cy="72" r="1.5" fill={theme.line} />
      <path d="M60 70 L60 80 L58 80" stroke={theme.line} strokeWidth="1" />
      <path d="M55 85 C57 87, 63 87, 65 85" stroke={theme.accent} strokeWidth="1.25" strokeLinecap="round" />

      <circle cx="42" cy="78" r="2" fill={theme.accent} />
      <circle cx="78" cy="78" r="2" fill={theme.accent} />
    </svg>
  );
};

export const OrganizingTeam = () => {

  return (
    <section 
      id="team" 
      className="section-wrapper bg-paper-dark" 
      style={{ 
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Background Theyyam mask sketch on bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '-10px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/17.png" alt="decorative left" style={{ 
          width: '260px', 
          opacity: 0.7,
          marginRight: '20px'
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        
        {/* Header Title - stylized like the reference image */}
        <ScrollReveal>
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-malayalam)', 
              fontSize: 'clamp(3.5rem, 10vw, 4.5rem)', 
              fontWeight: '900',
              color: 'var(--accent-gold)',
              letterSpacing: '0',
              marginBottom: '10px',
              lineHeight: '1.2'
            }}>
              സംഘാടകർ
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: '600'
            }}>
              The Minds Behind Agam'26
            </p>
          </div>
        </ScrollReveal>

        {/* Vintage Scattered Grid Layout */}
        <div className="vintage-team-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '50px 30px',
          marginTop: '40px',
          justifyItems: 'center'
        }}>
          
          <style dangerouslySetInnerHTML={{__html: `
            .vintage-polaroid {
              transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
              cursor: pointer;
            }
            .vintage-polaroid:hover {
              transform: translateY(-10px) scale(1.05) rotate(0deg) !important;
              z-index: 10 !important;
              box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4) !important;
            }
            .vintage-polaroid:hover .polaroid-image {
              filter: sepia(0.2) contrast(1.1) !important;
            }
            
            /* Mobile 2-column grid scaling */
            @media (max-width: 768px) {
              .vintage-team-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 30px 10px !important;
                padding: 0 5px;
              }
              .vintage-polaroid {
                width: 100% !important;
                max-width: 165px;
                padding: 10px 10px 50px 10px !important;
              }
              .polaroid-image {
                height: 160px !important;
              }
              .vintage-polaroid h4 {
                font-size: 1rem !important;
                margin-bottom: 0px !important;
              }
              .vintage-polaroid p {
                font-size: 0.55rem !important;
                letter-spacing: 0.05em !important;
              }
            }
          `}} />

          {teamMembers.map((member, index) => {
            // Alternating random-ish rotation for the scattered effect
            const rotations = [-4, 3, -2, 5, -5, 2, -3, 4];
            const rotate = rotations[index % rotations.length];

            return (
              <ScrollReveal key={member.id} delay={index * 50}>
                <div 
                  className="vintage-polaroid interactive-element"
                  data-cursor-text="VIEW"
                  style={{
                    width: '240px',
                    backgroundColor: '#F7F3E8', // Aged paper color
                    padding: '12px 12px 65px 12px', // Polaroid bottom heavy padding
                    border: '1px solid #E2DEC9',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15), inset 0 0 40px rgba(112, 92, 69, 0.05)',
                    transform: `rotate(${rotate}deg)`,
                    position: 'relative'
                  }}
                >
                  {/* Faux Tape at the top center */}
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-2deg)',
                    width: '60px',
                    height: '25px',
                    backgroundColor: 'rgba(232, 225, 206, 0.7)', // masking tape look
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    zIndex: 2
                  }} />

                  {/* Image Container */}
                  <div 
                    className="polaroid-image"
                    style={{
                      width: '100%',
                      height: '240px',
                      backgroundColor: '#1a1a1a', 
                      filter: 'sepia(0.6) contrast(1.2) brightness(0.9)', // Vintage photo filter
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingBottom: '20px',
                      overflow: 'hidden',
                      transition: 'filter 0.5s ease',
                      border: '1px solid rgba(0,0,0,0.1)'
                    }}
                  >
                    <ArtisticAvatar seedId={member.id} />
                  </div>

                  {/* Text Details (Handwritten/Typewriter style) */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '0',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0 15px'
                  }}>
                    <h4 style={{
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#2A241D', // Dark brown ink
                      fontStyle: 'italic',
                      marginBottom: '2px',
                      letterSpacing: '0.02em'
                    }}>
                      {member.name}
                    </h4>
                    <p style={{
                      fontSize: '0.7rem',
                      color: '#5C4E3D',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OrganizingTeam;
