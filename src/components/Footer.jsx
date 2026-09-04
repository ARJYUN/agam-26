import React from 'react';
import { ScrollReveal } from './ScrollReveal';
export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'transparent',
      backgroundImage: 'url(/footer.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      color: '#F8F4E8', // Off-white
      marginTop: '-80px',
      padding: '90px 20px 30px',
      position: 'relative',
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)'
    }}>
      <ScrollReveal>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ marginBottom: '15px' }}>
            <img
              src="/LOG.png"
              alt="AGAM Logo"
              style={{
                height: '90px',
                width: 'auto',
                // If LOG.png is white, we might need filter: 'invert(1)' 
                // But for now, just a subtle dark drop shadow on a light bg
                filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.08))'
              }}
            />
          </div>

          {/* Subtle top divider */}
          <div style={{ width: '80px', height: '1px', backgroundColor: 'rgba(248, 244, 232, 0.2)', marginBottom: '15px' }} />


          {/* Copyright */}
          <div style={{ fontSize: '0.6rem', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '500' }}>
            &copy; NSS College of Engineering 2026. All rights reserved
          </div>
        </div>
      </ScrollReveal>

      {/* Basic hover style for the names */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hover-highlight:hover {
          color: var(--accent-red) !important;
        }
      `}} />
    </footer>
  );
};
export default Footer;
