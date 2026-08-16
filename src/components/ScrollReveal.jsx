import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({ children, delay = 150, className = '' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when at least 15% of the element is visible (slightly later than before)
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-on-scroll ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
export default ScrollReveal;
