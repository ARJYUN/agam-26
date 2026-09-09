import React from 'react';

export const ProShow = () => {
  return (
    <section className="section-wrapper bg-paper-light" style={{ paddingTop: '80px', paddingBottom: '40px', textAlign: 'center' }}>
      <div className="editorial-heading-block" style={{ margin: '0 auto 40px auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="editorial-tagline">Experience The Thrill</span>
        <h2 className="editorial-title" style={{ color: 'var(--accent-red)' }}>
          PRO SHOW
        </h2>
        <div className="ornamental-divider" style={{ width: '100%', maxWidth: '300px', margin: '20px auto 0' }}>
          <div className="ornamental-divider-motif">
            <span className="accent"></span>
            <span></span>
            <span className="accent"></span>
          </div>
        </div>
      </div>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        borderRadius: '8px', 
        overflow: 'hidden',
        boxShadow: 'var(--shadow-editorial)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '12px'
      }}>
        <video 
          src="/cover.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '75vh',
            display: 'block',
            borderRadius: '4px',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  );
};
