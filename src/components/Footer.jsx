import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterIcon, FacebookIcon } from './SocialIcons';

export const Footer = ({ onOpenRegisterModal }) => {
  const socialLinks = [
    { icon: <InstagramIcon size={18} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <YoutubeIcon size={18} />, href: 'https://youtube.com', label: 'Youtube' },
    { icon: <TwitterIcon size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FacebookIcon size={18} />, href: 'https://facebook.com', label: 'Facebook' }
  ];

  const handleNavClick = (e, href) => {
    if (window.location.hash === '#/events') {
      window.location.hash = href;
      return;
    }

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, href);
    }
  };

  return (
    <footer 
      className="bg-paper-light footer-section"
      style={{
        padding: '60px 6% 40px 6%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      


      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px'
        }} className="footer-layout">
          <style dangerouslySetInnerHTML={{__html: `
            .footer-grid {
              display: grid !important;
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            .footer-top {
              display: flex;
              flex-direction: column;
              gap: 40px;
              align-items: center;
              text-align: center;
            }
            .footer-brand {
              align-items: center !important;
              text-align: center !important;
              width: 100%;
            }
            .footer-brand p {
              text-align: center !important;
            }
            .footer-grid > div {
              align-items: center !important;
              text-align: center !important;
            }
            .footer-grid > div > div {
              justify-content: center !important;
            }
            .footer-bottom {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 16px !important;
            }
            @media (min-width: 768px) {
              .footer-grid {
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 40px !important;
              }
              .footer-brand,
              .footer-grid > div,
              .footer-grid > div > div {
                align-items: flex-start !important;
                text-align: left !important;
                justify-content: flex-start !important;
              }
              .footer-brand p {
                text-align: left !important;
              }
            }
            @media (min-width: 992px) {
              .footer-top {
                flex-direction: row !important;
                justify-content: space-between !important;
                align-items: flex-start !important;
              }
              .footer-brand {
                max-width: 400px !important;
                align-items: flex-start !important;
                text-align: left !important;
              }
              .footer-grid-wrapper {
                flex: 1.2 !important;
              }
              .footer-bottom {
                flex-direction: row !important;
                align-items: center !important;
                text-align: left !important;
              }
            }
          `}} />

          {/* Footer Top Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="footer-top">
            
            {/* Brand column */}
            <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <ScrollReveal>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  color: 'var(--text-deep)',
                  letterSpacing: '0.05em',
                  lineHeight: '1'
                }}>
                  AGAM '26
                </h3>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  color: 'var(--text-deep)',
                  fontWeight: '700',
                  marginTop: '4px',
                  display: 'block'
                }}>
                  WHERE ART MEETS SOUL
                </span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  margin: '15px 0 20px 0',
                  fontWeight: '700'
                }}>
                  A Celebration of Art, Culture, Music & Heritage
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  An artistic exploration of Kerala's heritage combined with dynamic contemporary expression. Built for creators and performers.
                </p>
              </ScrollReveal>
            </div>

            {/* Quick Links & Contact Columns */}
            <div className="footer-grid-wrapper" style={{ width: '100%' }}>
              <ScrollReveal delay={150}>
                <div className="footer-grid">
                  
                  {/* Sitemap Navigation */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-deep)' }}>
                      Navigation
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                      <a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Home</a>
                      <a href="#countdown" onClick={(e) => handleNavClick(e, '#countdown')} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Countdown</a>
                      <a href="#events" onClick={(e) => handleNavClick(e, '#events')} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Events & Registration</a>
                      <a href="#leaderboard" onClick={(e) => handleNavClick(e, '#leaderboard')} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Leaderboard</a>
                      <a href="#team" onClick={(e) => handleNavClick(e, '#team')} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Organizing Committee</a>
                    </div>
                  </div>

                  {/* Actions / Registration */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-deep)' }}>
                      Register
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Register now to participate in 10+ major inter-college competitions.
                    </p>
                    <button 
                      onClick={() => onOpenRegisterModal()}
                      className="btn-editorial btn-editorial-secondary interactive-element"
                      data-cursor-text="JOIN"
                      style={{ padding: '8px 18px', fontSize: '0.7rem', alignSelf: 'flex-start' }}
                    >
                      REGISTER FOR EVENTS
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-deep)' }}>
                      Get In Touch
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
                        <span>fest@agamcampus.edu</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={14} style={{ color: 'var(--accent-gold)' }} />
                        <span>+91 98765 43210</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <MapPin size={14} style={{ color: 'var(--accent-gold)', marginTop: '3px' }} />
                        <span>Agam Campus, Main Road, Kerala, India</span>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', margin: '10px 0' }} />

          {/* Footer Bottom (Social Icons & Copy) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }} className="footer-bottom">
            <span style={{ textAlign: 'left', lineHeight: '1.6' }}>
              &copy; 2026 AGAM | NSS COLLEGE OF ENGINEERING, PALAKKAD <br />
              ALL RIGHTS RESERVED
            </span>

            {/* Social Icons row */}
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-deep)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--bg-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                    e.currentTarget.style.borderColor = 'var(--accent-red)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-deep)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'none';
                  }}
                  className="interactive-element"
                  data-cursor-text={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
export default Footer;
