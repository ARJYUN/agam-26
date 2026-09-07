import React, { useState } from 'react';
import { Flame, Sparkles, ShoppingBag, ExternalLink, ArrowRight, ShieldCheck, Tag, Zap, Award } from 'lucide-react';
import frontPoster from '../../media team 6.png';
import backPoster from '../../media team 7.png';

export const MerchSection = () => {
  // Google Form Link for Merch Pre-Orders
  const GFORM_URL = "https://forms.gle/ZKeKMzciZmF2PiMz9";

  const [activeTab, setActiveTab] = useState('both'); // 'both', 'front', 'back'
  const [hoveredPoster, setHoveredPoster] = useState(null);

  const perks = [
    { icon: <Zap size={15} color="var(--accent-gold)" />, text: "240 GSM Bio-Washed Heavyweight Cotton" },
    { icon: <Award size={15} color="var(--accent-gold)" />, text: "High-Density Traditional Kerala Artwork Print" },
    { icon: <Sparkles size={15} color="var(--accent-gold)" />, text: "Modern Oversized Drop-Shoulder Fit (S to XXL)" },
    { icon: <ShieldCheck size={15} color="var(--accent-gold)" />, text: "Official NSSCE AGAM'26 Certified Collectible" }
  ];

  return (
    <section
      id="merch"
      style={{
        position: 'relative',
        padding: '110px 5% 100px',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
        borderTop: '1.5px solid var(--border-color)',
        borderBottom: '1.5px solid var(--border-color)'
      }}
    >
      {/* Background Decorative Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181, 138, 69, 0.07) 0%, rgba(158, 63, 50, 0.04) 40%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Section Header with Urgent Slogans & Badges */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          
          {/* Urgency Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#25201A',
            color: 'var(--accent-gold)',
            padding: '7px 20px',
            borderRadius: '40px',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '800',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            boxShadow: '0 6px 20px rgba(37, 32, 26, 0.18)',
            marginBottom: '16px',
            border: '1px solid rgba(181, 138, 69, 0.35)'
          }}>
            <Flame size={15} color="var(--accent-red)" style={{ filter: 'drop-shadow(0 0 6px #ff4400)' }} />
            <span>⚡ LIMITED STOCK DROP &bull; ONLY 200 PIECES MADE</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
            fontWeight: '800',
            color: 'var(--text-deep)',
            lineHeight: '1.08',
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em'
          }}>
            Official AGAM'26 Festival Merch
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.18rem)',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Wear the legacy of NSS College of Engineering. Premium heavyweight drop-shoulder tees featuring custom hand-illustrated Kerala cultural art. First come, first served.
          </p>

          {/* View Mode Switcher */}
          <div style={{
            display: 'inline-flex',
            gap: '8px',
            backgroundColor: 'var(--bg-secondary)',
            padding: '4px',
            borderRadius: '30px',
            border: '1px solid var(--border-color)',
            marginTop: '22px'
          }}>
            <button
              onClick={() => setActiveTab('both')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: activeTab === 'both' ? '#25201A' : 'transparent',
                color: activeTab === 'both' ? '#F8F4E8' : 'var(--text-deep)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              DUO POSTER VIEW
            </button>
            <button
              onClick={() => setActiveTab('front')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: activeTab === 'front' ? '#25201A' : 'transparent',
                color: activeTab === 'front' ? '#F8F4E8' : 'var(--text-deep)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              FRONT POSTER
            </button>
            <button
              onClick={() => setActiveTab('back')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: activeTab === 'back' ? '#25201A' : 'transparent',
                color: activeTab === 'back' ? '#F8F4E8' : 'var(--text-deep)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              BACK POSTER
            </button>
          </div>

        </div>

        {/* POSTER SHOWCASE GALLERY */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'both' ? 'repeat(auto-fit, minmax(340px, 1fr))' : '1fr',
          maxWidth: activeTab === 'both' ? '1180px' : '620px',
          margin: '0 auto 40px auto',
          gap: '30px',
          alignItems: 'center'
        }}>
          
          {/* POSTER 1: FRONT DESIGN */}
          {(activeTab === 'both' || activeTab === 'front') && (
            <div
              onMouseEnter={() => setHoveredPoster('front')}
              onMouseLeave={() => setHoveredPoster(null)}
              style={{
                position: 'relative',
                backgroundColor: '#1E1A16',
                borderRadius: '24px',
                padding: '16px',
                border: '2px solid var(--border-gold)',
                boxShadow: hoveredPoster === 'front'
                  ? '0 25px 60px rgba(158, 63, 50, 0.25), 0 0 20px rgba(181, 138, 69, 0.2)'
                  : '0 16px 45px rgba(37, 32, 26, 0.15)',
                transition: 'all 0.4s var(--ease-editorial)',
                transform: hoveredPoster === 'front' ? 'translateY(-6px)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Poster Frame Badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px 14px 12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.12em'
                }}>
                  <Sparkles size={13} />
                  <span>FRONT EDITION</span>
                </div>
                <div style={{
                  backgroundColor: 'rgba(158, 63, 50, 0.25)',
                  color: '#FFA39E',
                  border: '1px solid rgba(158, 63, 50, 0.5)',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  letterSpacing: '0.08em'
                }}>
                  LIMITED RUN
                </div>
              </div>

              {/* Poster Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#120F0D',
                aspectRatio: '1 / 1.12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={frontPoster}
                  alt="AGAM'26 Merch Front Edition Poster"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s var(--ease-editorial)',
                    transform: hoveredPoster === 'front' ? 'scale(1.03)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Poster Caption */}
              <div style={{ padding: '14px 8px 6px 8px', color: '#F8F4E8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.35rem', fontWeight: '700' }}>
                    Agam Signature Front
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
                    ₹399
                  </div>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#B5A898', marginTop: '3px' }}>
                  Features the sacred Theyyam sigil and Kerala typographical emblems.
                </div>
              </div>
            </div>
          )}

          {/* POSTER 2: BACK DESIGN */}
          {(activeTab === 'both' || activeTab === 'back') && (
            <div
              onMouseEnter={() => setHoveredPoster('back')}
              onMouseLeave={() => setHoveredPoster(null)}
              style={{
                position: 'relative',
                backgroundColor: '#1E1A16',
                borderRadius: '24px',
                padding: '16px',
                border: '2px solid var(--border-gold)',
                boxShadow: hoveredPoster === 'back'
                  ? '0 25px 60px rgba(158, 63, 50, 0.25), 0 0 20px rgba(181, 138, 69, 0.2)'
                  : '0 16px 45px rgba(37, 32, 26, 0.15)',
                transition: 'all 0.4s var(--ease-editorial)',
                transform: hoveredPoster === 'back' ? 'translateY(-6px)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Poster Frame Badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px 14px 12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.12em'
                }}>
                  <Sparkles size={13} />
                  <span>BACK ARTWORK EDITION</span>
                </div>
                <div style={{
                  backgroundColor: 'rgba(181, 138, 69, 0.25)',
                  color: '#FFE58F',
                  border: '1px solid rgba(181, 138, 69, 0.5)',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  letterSpacing: '0.08em'
                }}>
                  HIGH DENSITY ART
                </div>
              </div>

              {/* Poster Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#120F0D',
                aspectRatio: '1 / 1.12',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={backPoster}
                  alt="AGAM'26 Merch Back Edition Poster"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s var(--ease-editorial)',
                    transform: hoveredPoster === 'back' ? 'scale(1.03)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Poster Caption */}
              <div style={{ padding: '14px 8px 6px 8px', color: '#F8F4E8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.35rem', fontWeight: '700' }}>
                    Full Canvas Artwork Back
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-gold)' }}>
                    ₹399
                  </div>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#B5A898', marginTop: '3px' }}>
                  High-density back illustration showcasing the divine spirit of Theyyam.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* PERKS & DETAILS STRIP */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto 36px auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          padding: '16px 22px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1.5px solid var(--border-gold)',
          boxShadow: '0 8px 30px rgba(37, 32, 26, 0.05)'
        }}>
          {perks.map((p, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(181, 138, 69, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {p.icon}
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-deep)', lineHeight: '1.35' }}>
                {p.text}
              </span>
            </div>
          ))}
        </div>

        {/* MAIN BUY / PRE-ORDER CALL TO ACTION BUTTON */}
        <div style={{ textAlign: 'center' }}>
          
          <a
            href={GFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              backgroundColor: 'var(--accent-red)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: '900',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '20px 48px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 12px 35px rgba(158, 63, 50, 0.45)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.35s var(--ease-editorial)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#873428';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(158, 63, 50, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-red)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(158, 63, 50, 0.45)';
            }}
          >
            <ShoppingBag size={22} />
            <span>BUY OFFICIAL MERCH VIA GOOGLE FORM</span>
            <ExternalLink size={20} />
          </a>

          {/* Slogan Subtext */}
          <div style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: '600'
          }}>
            <Flame size={14} color="var(--accent-red)" />
            <span>Pre-orders close soon &bull; Instant confirmation & on-campus delivery included</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MerchSection;
