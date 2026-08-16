import React from 'react';

export const ScrollReveal = ({ children, delay = 150, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ScrollReveal;
