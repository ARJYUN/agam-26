import React, { useEffect, useState, useRef } from 'react';

export const FloatingCorner = ({ children, position = 'top-left', speed = 'slow', factor = 0.03 }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Scroll listener for simple parallax
    const handleScroll = () => {
      if (window.innerWidth < 768) return; // Disable scroll parallax on mobile
      if (!containerRef.current) return;
      
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      
      const parentRect = parent.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const parentCenter = parentRect.top + parentRect.height / 2;
      const distFromCenter = parentCenter - viewportCenter;
      
      // Calculate scroll offset based on distance from center of screen
      setScrollOffset(-distFromCenter * factor * 1.5);
    };
    
    // Mouse move listener for cursor-reactive hover
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return; // Disable mouse move reaction on mobile
      
      // Subtly react based on cursor position relative to center of screen
      const x = (e.clientX - window.innerWidth / 2) * factor;
      const y = (e.clientY - window.innerHeight / 2) * factor;
      setMouseOffset({ x, y });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    // Run once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [factor]);
  
  // Speed-based animation class
  const floatClass = speed === 'fast' ? 'anim-float-fast' : speed === 'medium' ? 'anim-float-medium' : 'anim-float-slow';
  
  // Limit decorative elements on mobile (show only top-left or bottom-right, or scale down)
  const isCornerHiddenOnMobile = isMobile && (position === 'top-right' || position === 'bottom-left');
  
  if (isCornerHiddenOnMobile) return null;
  
  // Style for sizing and offset positioning
  const style = {
    transform: isMobile ? 'none' : `translate3d(${mouseOffset.x}px, ${mouseOffset.y + scrollOffset}px, 0)`,
    opacity: isMobile ? 0.4 : 0.65,
    scale: isMobile ? '0.7' : '1',
  };
  
  return (
    <div
      ref={containerRef}
      className={`floating-corner-container ${position} ${floatClass}`}
      style={style}
    >
      {children}
    </div>
  );
};
