import React, { useEffect, useState } from 'react';

export const Preloader = ({ loading }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1500;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);
      if (percent === 100) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // When parent signals loading is done, trigger fade-out
  useEffect(() => {
    if (!loading) {
      setProgress(100);
      const t = setTimeout(() => setFadeOut(true), 100);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <div className="preloader" style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.8s ease-in-out',
      pointerEvents: fadeOut ? 'none' : 'all',
      overflow: 'hidden'
    }}>
      {/* Background large stroke text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 24rem)',
        fontFamily: 'var(--font-display)',
        fontWeight: '900',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
        letterSpacing: '0.1em',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 1
      }}>
        AGAM
      </div>

      {/* Foreground content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease-in-out'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: '900',
          color: 'var(--accent-gold)',
          letterSpacing: '0.15em',
          margin: 0,
          textTransform: 'uppercase'
        }}>
          AGAM 26
        </h1>

        <p style={{
          fontFamily: 'serif',
          fontSize: 'clamp(0.7rem, 2vw, 1rem)',
          color: 'var(--accent-gold)',
          letterSpacing: '0.15em',
          margin: 0,
          opacity: 0.8,
          textTransform: 'uppercase'
        }}>
          NSS College of Engineering
        </p>

        {/* Progress Percentage */}
        <div style={{
          marginTop: '25px',
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          color: 'var(--accent-gold)',
          fontWeight: '700',
          letterSpacing: '0.15em',
          opacity: 0.9
        }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};
