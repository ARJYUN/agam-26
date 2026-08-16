import React from 'react';

export const CloudDivider = ({ position = 'top', color = 'var(--bg-primary)', isDissolve = false }) => {
  if (isDissolve) {
    return (
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        [position]: 0,
        height: '80px',
        width: '100%',
        zIndex: 10,
        pointerEvents: 'none',
        background: position === 'top' 
          ? `linear-gradient(to bottom, ${color} 0%, transparent 100%)`
          : `linear-gradient(to top, ${color} 0%, transparent 100%)`
      }} />
    );
  }

  return (
    <div style={{
      position: 'absolute',
      left: 0,
      right: 0,
      [position]: '-1px',
      height: '50px',
      width: '100%',
      zIndex: 10,
      pointerEvents: 'none',
      overflow: 'hidden',
      lineHeight: 0,
      transform: position === 'top' ? 'rotate(180deg)' : 'none'
    }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%', fill: color }}>
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c23.23,17.65,52.27,27.18,80.89,32.96,44.59,9,90.41,9.85,135.53,4.48,54.88-6.52,107.56-25.56,160.84-40.85,32.34-9.28,65.37-16.14,99.16-18.42,48.24-3.26,96.65,1.75,144.33,10.6,40.16,7.45,80.12,18.06,120.46,24.64,52.12,8.49,105.15,5.65,156.45-8.52,38.16-10.51,75.49-25.26,111.45-42.54,20-9.61,39.38-20.21,59.39-30,11.39-5.55,22.95-10.74,34.61-15.7V0Z" />
      </svg>
    </div>
  );
};
