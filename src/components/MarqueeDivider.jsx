import React from 'react';

export const MarqueeDivider = () => {
  const textContent = (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ margin: '0 20px' }}>✦</span> AGAM '26 THE CULTURAL EXTRAVAGANZA 
      <span style={{ margin: '0 20px' }}>✦</span> NSS COLLEGE OF ENGINEERING 
      <span style={{ margin: '0 20px' }}>✦</span> AGAM '26 THE CULTURAL EXTRAVAGANZA 
      <span style={{ margin: '0 20px' }}>✦</span> NSS COLLEGE OF ENGINEERING 
    </span>
  );

  return (
    <div style={{ 
      backgroundColor: 'var(--accent-red)', 
      color: 'var(--bg-primary)', 
      padding: '8px 0', 
      borderTop: '1.5px solid var(--text-deep)', 
      borderBottom: '1.5px solid var(--text-deep)', 
      width: '100%',
      overflow: 'hidden' 
    }}>
      <div className="marquee-container">
        <div className="marquee-content" style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '0.95rem', 
          letterSpacing: '0.15em', 
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          {/* We repeat the content a few times to create the seamless loop */}
          {textContent}
          {textContent}
          {textContent}
          {textContent}
        </div>
      </div>
    </div>
  );
};
