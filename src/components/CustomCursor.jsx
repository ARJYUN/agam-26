import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if mobile/touch device
    const checkMobile = () => {
      const isTouch = window.innerWidth < 1024 || 'ontouchstart' in window;
      setIsMobile(isTouch);
      if (!isTouch) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic hover styles for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, select, .interactive-element');
      if (target) {
        setHovered(true);
        const text = target.getAttribute('data-cursor-text') || 'VIEW';
        setHoverText(text);
      } else {
        setHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    let animationFrameId;
    
    // Smoothly animate the trailing ring
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <div className={hovered ? 'cursor-hover' : ''}>
      {/* Tiny solid dot */}
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Outer elegant brass ring */}
      <div
        className="custom-cursor-ring"
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
      {/* Text inside the expanded cursor */}
      <div
        className="custom-cursor-text"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {hoverText}
      </div>
    </div>
  );
};
