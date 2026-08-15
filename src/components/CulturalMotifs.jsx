import React from 'react';

// Classical Dance Mudra (Hand gesture)
export const MudraMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    {/* Fine background circular guide */}
    <circle cx="50" cy="50" r="45" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3 3" />
    
    {/* Hand mudra outline */}
    <path
      d="M30 75 C 32 60, 38 50, 42 42 C 45 35, 48 20, 50 12 C 51 9, 53 9, 54 12 C 55 16, 52 32, 52 40"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M52 40 C 55 35, 62 20, 65 15 C 66.5 12.5, 68.5 13, 68 16 C 66.5 25, 59 38, 55 45 C 53 48.5, 53 50, 55 52"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Thumb ring finger contact */}
    <path
      d="M55 52 C 57.5 54.5, 61 56, 64 57 C 66 57.5, 66.5 59, 65 60 C 62 62, 54 60, 48 56"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Little finger curved away */}
    <path
      d="M48 56 C 52 59, 58 64, 62 67 C 64.5 69, 65 71, 62.5 71.5 C 58.5 72, 45 61, 40 55 C 37 51, 33 55, 30 75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Wrist lines and bracelets */}
    <path d="M26 73 C30 76, 32 80, 32 85" stroke="currentColor" strokeWidth="1" />
    <path d="M22 75 C26 78, 28 82, 28 87" stroke="currentColor" strokeWidth="1" />
    
    {/* Traditional floral ornament on palm center */}
    <circle cx="48" cy="46" r="3" fill="var(--accent-red)" />
    <circle cx="48" cy="46" r="6" stroke="var(--accent-gold)" strokeWidth="0.75" />
    <path d="M48 38 L48 40 M48 52 L48 54 M40 46 L42 46 M54 46 L56 46" stroke="var(--accent-gold)" strokeWidth="0.75" />
  </svg>
);

// Chenda (Traditional percussion instrument from Kerala)
export const ChendaMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    {/* Concentric bg circles */}
    <circle cx="50" cy="50" r="42" stroke="var(--border-color)" strokeWidth="0.5" />
    
    {/* Chenda Body */}
    {/* Upper Rim */}
    <ellipse cx="50" cy="25" rx="20" ry="6" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
    <ellipse cx="50" cy="25" rx="17" ry="4" stroke="currentColor" strokeWidth="0.75" />
    
    {/* Lower Rim */}
    <ellipse cx="50" cy="75" rx="20" ry="6" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
    
    {/* Vertical Cylindrical sides */}
    <line x1="30" y1="25" x2="30" y2="75" stroke="currentColor" strokeWidth="1.5" />
    <line x1="70" y1="25" x2="70" y2="75" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Decorative Bands in the middle */}
    <rect x="30" y="46" width="40" height="8" rx="1" fill="var(--accent-red)" stroke="currentColor" strokeWidth="1" />
    <line x1="30" y1="50" x2="70" y2="50" stroke="var(--accent-gold)" strokeWidth="1" />
    
    {/* Wooden Shell texture / lines */}
    <line x1="34" y1="29" x2="34" y2="71" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    <line x1="66" y1="29" x2="66" y2="71" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    
    {/* V-shaped straps (Tension ropes) */}
    <path d="M30 25 L38 46 L46 25 L54 46 L62 25 L70 46" stroke="currentColor" strokeWidth="1" />
    <path d="M30 75 L38 54 L46 75 L54 54 L62 75 L70 54" stroke="currentColor" strokeWidth="1" />
    <path d="M38 46 L38 54 M54 46 L54 54 M70 46 L70 54" stroke="currentColor" strokeWidth="1" />

    {/* Hanging tassels */}
    <path d="M30 46 C25 48, 23 55, 25 60" stroke="var(--accent-gold)" strokeWidth="1" />
    <circle cx="25" cy="60" r="2" fill="var(--accent-red)" />
  </svg>
);

// Nilavilakku (Traditional Kerala brass oil lamp)
export const LampMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    {/* Background Mandala Guideline */}
    <circle cx="50" cy="50" r="44" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="4 2" />
    
    {/* The Lamp Stem & Base */}
    {/* Base */}
    <path d="M32 85 C32 80, 36 78, 50 78 C64 78, 68 80, 68 85 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
    <line x1="30" y1="85" x2="70" y2="85" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Stem Pillars */}
    <path d="M47 78 L47 48 C47 45, 48 43, 45 42 L45 40 L55 40 L55 42 C52 43, 53 45, 53 48 L53 78 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-primary)" />
    
    {/* Ring Details on Stem */}
    <rect x="46" y="60" width="8" height="3" rx="1" fill="var(--accent-gold)" stroke="currentColor" strokeWidth="0.75" />
    <rect x="45" y="70" width="10" height="3" rx="1" fill="var(--accent-gold)" stroke="currentColor" strokeWidth="0.75" />
    
    {/* Oil Reservoir bowl */}
    <path d="M30 40 C30 32, 40 30, 50 30 C60 30, 70 32, 70 40 C70 42, 65 44, 50 44 C35 44, 30 42, 30 40 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
    <ellipse cx="50" cy="35" rx="18" ry="4" stroke="currentColor" strokeWidth="1" />
    
    {/* The Crown piece (Spire) */}
    <path d="M48 30 C48 24, 46 22, 50 16 C54 22, 52 24, 52 30 Z" stroke="currentColor" strokeWidth="1.25" fill="var(--accent-gold)" />
    
    {/* Glowing Flames */}
    {/* Left Flame */}
    <path d="M30 35 C28 32, 28 27, 30.5 24 C33 27, 31.5 32, 30 35 Z" fill="var(--accent-red)" opacity="0.9" />
    <path d="M30 34 C29 32, 29 29, 30.5 27 C32 29, 31 32, 30 34 Z" fill="var(--accent-gold)" />
    
    {/* Right Flame */}
    <path d="M70 35 C68 32, 68 27, 70.5 24 C73 27, 71.5 32, 70 35 Z" fill="var(--accent-red)" opacity="0.9" />
    <path d="M70 34 C69 32, 69 29, 70.5 27 C72 29, 71 32, 70 34 Z" fill="var(--accent-gold)" />
    
    {/* Center Top Flame */}
    <path d="M50 14 C48 10, 48 5, 50 1 C52 5, 52 10, 50 14 Z" fill="var(--accent-red)" opacity="0.95" />
    <path d="M50 13 C49 10, 49 7, 50 4 C51 7, 51 10, 50 13 Z" fill="var(--accent-gold)" />
  </svg>
);

// Kathakali Makeup inspired eye & pattern
export const KathakaliMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    {/* Outer frame */}
    <circle cx="50" cy="50" r="43" stroke="var(--border-color)" strokeWidth="0.5" />
    
    {/* Curved stylized eyebrow */}
    <path
      d="M15 45 C25 25, 45 28, 48 34"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Stylized eye */}
    <path
      d="M18 48 C24 38, 42 38, 46 48"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M18 48 C24 55, 42 55, 46 48"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Large pupil */}
    <circle cx="32" cy="47.5" r="4" fill="var(--text-deep)" />
    
    {/* Red and gold makeup accents (Chutti and eye detail) */}
    <path
      d="M10 52 C20 62, 38 65, 48 60 C53 58, 55 52, 53 45"
      stroke="var(--accent-green)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M14 56 C22 66, 36 68, 45 64"
      stroke="var(--accent-gold)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M32 58 C32 68, 38 78, 50 82"
      stroke="var(--accent-red)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="82" r="3" fill="var(--accent-red)" />
    
    {/* Decorative dots (Chutti line) */}
    <circle cx="15" cy="38" r="1.5" fill="var(--accent-gold)" />
    <circle cx="20" cy="34" r="1.5" fill="var(--accent-gold)" />
    <circle cx="26" cy="31" r="1.5" fill="var(--accent-gold)" />
    <circle cx="33" cy="29" r="1.5" fill="var(--accent-gold)" />
  </svg>
);

// Kerala Mural Lotus / Floral Composition
export const MuralFloralMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    {/* Guidelines */}
    <circle cx="50" cy="50" r="45" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3 3" />
    
    {/* Center Pistil/Core */}
    <circle cx="50" cy="50" r="7" fill="var(--bg-secondary)" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="4" fill="var(--accent-gold)" />
    
    {/* Main Lotus Petals */}
    {/* Top Petal */}
    <path d="M50 43 C45 30, 48 15, 50 10 C52 15, 55 30, 50 43 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--accent-red)" opacity="0.9" />
    <path d="M50 43 C47 35, 49 25, 50 20 C51 25, 53 35, 50 43 Z" fill="var(--accent-gold)" />
    
    {/* Bottom Petal */}
    <path d="M50 57 C45 70, 48 85, 50 90 C52 85, 55 70, 50 57 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--accent-red)" opacity="0.9" />
    
    {/* Left Petal */}
    <path d="M43 50 C30 45, 15 48, 10 50 C15 52, 30 55, 43 50 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--accent-red)" opacity="0.9" />
    
    {/* Right Petal */}
    <path d="M57 50 C70 45, 85 48, 90 50 C85 52, 70 55, 57 50 Z" stroke="currentColor" strokeWidth="1.5" fill="var(--accent-red)" opacity="0.9" />
    
    {/* Diagonal Petals */}
    <path d="M45 45 C34 34, 25 38, 20 40 C25 45, 38 52, 45 45 Z" stroke="currentColor" strokeWidth="1" fill="var(--bg-secondary)" />
    <path d="M55 45 C66 34, 75 38, 80 40 C75 45, 62 52, 55 45 Z" stroke="currentColor" strokeWidth="1" fill="var(--bg-secondary)" />
    <path d="M45 55 C34 66, 25 62, 20 60 C25 55, 38 48, 45 55 Z" stroke="currentColor" strokeWidth="1" fill="var(--bg-secondary)" />
    <path d="M55 55 C66 76, 75 62, 80 60 C75 55, 62 48, 55 55 Z" stroke="currentColor" strokeWidth="1" fill="var(--bg-secondary)" />
    
    {/* Organic Flourish Vines (Kerala mural-style scrolls) */}
    <path
      d="M10 50 C5 70, 20 85, 32 80 C24 75, 20 62, 25 52"
      stroke="var(--accent-green)"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M90 50 C95 30, 80 15, 68 20 C76 25, 80 38, 75 48"
      stroke="var(--accent-green)"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

// Flute (Oozhal) Motif
export const FluteMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    <circle cx="50" cy="50" r="42" stroke="var(--border-color)" strokeWidth="0.5" />
    
    {/* Diagonally oriented flute */}
    <g transform="rotate(-35 50 50)">
      {/* Flute Body */}
      <rect x="15" y="47" width="70" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
      
      {/* Blow hole */}
      <ellipse cx="23" cy="50" rx="1.5" ry="1" fill="var(--text-deep)" />
      
      {/* Play holes */}
      <circle cx="38" cy="50" r="1" fill="var(--text-deep)" />
      <circle cx="45" cy="50" r="1" fill="var(--text-deep)" />
      <circle cx="52" cy="50" r="1" fill="var(--text-deep)" />
      <circle cx="59" cy="50" r="1" fill="var(--text-deep)" />
      <circle cx="66" cy="50" r="1" fill="var(--text-deep)" />
      <circle cx="73" cy="50" r="1" fill="var(--text-deep)" />
      
      {/* Red & Gold thread ties at ends */}
      <rect x="17" y="47" width="2" height="6" fill="var(--accent-red)" />
      <rect x="81" y="47" width="2" height="6" fill="var(--accent-red)" />
      <rect x="19" y="47" width="1" height="6" fill="var(--accent-gold)" />
      <rect x="79" y="47" width="1" height="6" fill="var(--accent-gold)" />
      
      {/* Hanging tassels at the right end */}
      <path d="M82 50 C86 54, 88 62, 85 68" stroke="var(--accent-gold)" strokeWidth="0.75" />
      <path d="M82 52 C84 57, 85 64, 82 70" stroke="var(--accent-gold)" strokeWidth="0.75" />
      <circle cx="85" cy="68" r="1.5" fill="var(--accent-red)" />
      <circle cx="82" cy="70" r="1.5" fill="var(--accent-red)" />
    </g>
  </svg>
);

// Temple Ornament/Gong Motif
export const BrassOrnamentMotif = ({ className = '', size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`cultural-motif ${className}`}
  >
    <circle cx="50" cy="50" r="45" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3 3" />
    
    {/* Hanging chain */}
    <line x1="50" y1="5" x2="50" y2="30" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 2" />
    <circle cx="50" cy="22" r="1.5" fill="var(--accent-gold)" />
    <circle cx="50" cy="29" r="2.5" fill="var(--accent-gold)" stroke="currentColor" strokeWidth="0.75" />
    
    {/* Main brass frame */}
    <circle cx="50" cy="52" r="18" stroke="currentColor" strokeWidth="1.5" fill="var(--bg-secondary)" />
    <circle cx="50" cy="52" r="14" stroke="var(--accent-gold)" strokeWidth="1" />
    
    {/* Inner traditional motif (sun/star) */}
    <path
      d="M50 42 L52 48 L58 48 L53 52 L55 58 L50 54 L45 58 L47 52 L42 48 L48 48 Z"
      fill="var(--accent-red)"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    
    {/* Hanging bells */}
    <g transform="translate(50, 70)">
      {/* Central bell */}
      <path d="M-4 0 L-2 -8 L2 -8 L4 0 C4 2, -4 2, -4 0 Z" stroke="currentColor" strokeWidth="1" fill="var(--accent-gold)" />
      <circle cx="0" cy="2" r="1" fill="var(--text-deep)" />
    </g>
    <g transform="translate(36, 64)">
      {/* Left bell */}
      <path d="M-3 0 L-1.5 -6 L1.5 -6 L3 0 C3 1.5, -3 1.5, -3 0 Z" stroke="currentColor" strokeWidth="0.75" fill="var(--accent-gold)" />
      <circle cx="0" cy="1.5" r="0.75" fill="var(--text-deep)" />
    </g>
    <g transform="translate(64, 64)">
      {/* Right bell */}
      <path d="M-3 0 L-1.5 -6 L1.5 -6 L3 0 C3 1.5, -3 1.5, -3 0 Z" stroke="currentColor" strokeWidth="0.75" fill="var(--accent-gold)" />
      <circle cx="0" cy="1.5" r="0.75" fill="var(--text-deep)" />
    </g>
  </svg>
);
