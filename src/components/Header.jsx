import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const Header = ({ onOpenRegisterModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0.92);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Fade bg out while scrolling, restore after scroll stops
      if (!isHovered) {
        setBgOpacity(0.08);
        clearTimeout(scrollTimerRef.current);
        scrollTimerRef.current = setTimeout(() => {
          setBgOpacity(0.92);
        }, 1200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimerRef.current);
    };
  }, [isHovered]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#countdown' },
    { label: 'Events', href: '#events' },
    { label: 'Leaderboard', href: '#leaderboard' },
    { label: 'Team', href: '#team' }
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    
    // If we are on the dedicated events page, change hash to navigate back to home
    if (window.location.hash === '#/events') {
      window.location.hash = href;
      return;
    }

    e.preventDefault();
    let targetSelector = href;
    if (href === '#home') targetSelector = '#home';
    else if (href === '#countdown') targetSelector = '#countdown';
    else if (href === '#events') targetSelector = '#events';
    else if (href === '#leaderboard') targetSelector = '#leaderboard';
    else if (href === '#team') targetSelector = '#team';

    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jumping page layout
      window.history.pushState(null, null, href);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: isScrolled ? 'rgba(248, 244, 232, 0.1)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      transition: 'all 0.4s var(--ease-editorial)',
      padding: isScrolled ? '12px 5%' : '20px 5%'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative'
      }}>
        
        {/* Left Side: College Malayalam Subtitle Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '320px',
            textAlign: 'left'
          }}
          className="interactive-element"
          data-cursor-text="HOME"
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: '600',
            color: 'var(--text-deep)',
            lineHeight: '1.4',
            letterSpacing: '0.01em'
          }}>
            എൻ.എസ്.എസ് കോളേജ് ഓഫ് എഞ്ചിനീയറിംഗ്, പാലക്കാട്
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            color: 'var(--accent-red)',
            fontWeight: '700',
            marginTop: '2px'
          }}>
            SEP 17–20, 2026 &bull; CULTURAL FEST
          </span>
        </a>

        {/* Right Side: Navigation & Social Link */}
        <nav style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 900px) {
              .desktop-nav {
                display: flex !important;
              }
              .mobile-toggle-btn {
                display: none !important;
              }
            }
          `}} />
          
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                textDecoration: 'none',
                position: 'relative',
                padding: '4px 0'
              }}
              className="interactive-element nav-item-underline"
              data-cursor-text="GO TO"
            >
              <style dangerouslySetInnerHTML={{__html: `
                .nav-item-underline::after {
                  content: '';
                  position: absolute;
                  bottom: -2px;
                  left: 0;
                  width: 0;
                  height: 1.5px;
                  background-color: var(--accent-red);
                  transition: width 0.3s var(--ease-editorial);
                }
                .nav-item-underline:hover::after {
                  width: 100%;
                }
              `}} />
              {link.label}
            </a>
          ))}

          {/* Social Instagram link directly in header */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-deep)',
              marginLeft: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-red)';
              e.currentTarget.style.borderColor = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-deep)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            className="interactive-element"
            data-cursor-text="INSTAGRAM"
          >
            <InstagramIcon size={14} />
          </a>

          {/* Ticket icon or Register button */}
          <button
            onClick={() => onOpenRegisterModal()}
            style={{
              marginLeft: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--accent-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-red)';
              e.currentTarget.style.color = 'var(--bg-primary)';
              e.currentTarget.style.borderColor = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent-red)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            className="interactive-element"
            data-cursor-text="PASS"
          >
            <Ticket size={14} />
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-deep)',
            cursor: 'pointer',
            padding: '5px'
          }}
          className="mobile-toggle-btn interactive-element"
          data-cursor-text="MENU"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Full Screen Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                background: 'none',
                border: 'none',
                color: 'var(--text-deep)',
                cursor: 'pointer',
                zIndex: 10,
                padding: '10px'
              }}
            >
              <X size={32} />
            </button>

            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              alignItems: 'center',
              paddingTop: '100px',
              zIndex: 1
            }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-deep)',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegisterModal();
                }}
                style={{
                  marginTop: '15px',
                  padding: '12px 35px',
                  fontSize: '0.85rem',
                  borderRadius: '4px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}
                className="btn-editorial btn-editorial-primary"
              >
                Register Pass
              </button>
            </div>

            {/* Image in vacant space below */}
            <div style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: '40px',
              opacity: 0.85
            }}>
              <img 
                src="/menu.png" 
                alt="Decorative menu art" 
                style={{ 
                  width: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain',
                  objectPosition: 'bottom'
                }} 
              />
            </div>
          </div>
        )}
        
      </div>
    </header>
  );
};
export default Header;
