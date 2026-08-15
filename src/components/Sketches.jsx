import React from 'react';

// Sepia ink-style sketch of a classical dancer (for left side of Events section)
export const DancerSketch = ({ className = '', size = 200, opacity = 0.22 }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 100 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Body outline in fine ink strokes */}
    {/* Head & Crown */}
    <path d="M50 20 C52 15, 48 15, 50 10 C51 7, 49 7, 50 5" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    <circle cx="50" cy="22" r="3" stroke="var(--text-muted)" strokeWidth="1" />
    <path d="M46 20 C42 16, 58 16, 54 20" stroke="var(--text-muted)" strokeWidth="0.75" />
    
    {/* Torso & Pose */}
    <path d="M50 25 L50 35 L45 50 L42 70" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M50 25 L50 35 L55 50 L58 70" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    
    {/* Left Arm extended in Mudra */}
    <path d="M47 28 C35 30, 25 35, 18 42 C16 44, 15 48, 18 50 C21 52, 23 48, 25 45" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    {/* Right Arm curved overhead (Alapadma mudra) */}
    <path d="M53 28 C62 25, 68 18, 64 12 C62 10, 58 12, 57 16" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    
    {/* Traditional Skirt (Plait details) */}
    <path d="M42 70 C30 80, 25 100, 22 120 C25 125, 75 125, 78 120 C75 100, 70 80, 58 70 Z" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 70 L35 120 M50 70 L50 122 M55 70 L65 120" stroke="var(--text-muted)" strokeWidth="0.75" strokeDasharray="2 2" />
    <path d="M30 85 C42 88, 58 88, 70 85" stroke="var(--text-muted)" strokeWidth="0.75" />
    <path d="M26 102 C42 106, 58 106, 74 102" stroke="var(--text-muted)" strokeWidth="0.75" />
    
    {/* Legs in Araimandi pose (bent knees) */}
    <path d="M42 70 L30 85 L42 95 L50 95" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M58 70 L70 85 L58 95 L50 95" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Ornaments details */}
    <circle cx="50" cy="27" r="1" fill="var(--accent-gold)" />
    <path d="M44 32 C46 34, 54 34, 56 32" stroke="var(--accent-gold)" strokeWidth="0.75" />
    <circle cx="50" cy="40" r="1.5" fill="var(--accent-red)" />
  </svg>
);

// Sepia ink-style sketch of a Chenda player (for right side of Leaderboard section)
export const ChendaPlayerSketch = ({ className = '', size = 200, opacity = 0.22 }) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 100 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Head & Traditional hair knot (Kudumi) */}
    <circle cx="50" cy="20" r="5" stroke="var(--text-muted)" strokeWidth="1.25" />
    <path d="M46 16 C42 12, 40 18, 45 20" stroke="var(--text-muted)" strokeWidth="1" />
    <path d="M50 25 L50 45" stroke="var(--text-muted)" strokeWidth="1.5" />
    
    {/* Chenda Drum (diagonal sling) */}
    <rect x="30" y="55" width="40" height="42" rx="2" transform="rotate(-15 50 76)" stroke="var(--text-muted)" strokeWidth="1.5" fill="var(--bg-secondary)" />
    {/* Straps and ropes */}
    <path d="M36 49 L46 87 M48 46 L58 84 M60 43 L70 81" stroke="var(--text-muted)" strokeWidth="0.75" />
    <line x1="33" y1="52" x2="71" y2="42" stroke="var(--text-muted)" strokeWidth="1.5" />
    <line x1="22" y1="91" x2="61" y2="81" stroke="var(--text-muted)" strokeWidth="1.5" />
    
    {/* Arms in striking pose */}
    {/* Right arm overhead with stick */}
    <path d="M54 32 C65 24, 75 22, 80 30 C82 33, 80 38, 72 45" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    <line x1="72" y1="45" x2="84" y2="52" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Left arm striking front */}
    <path d="M46 32 C35 35, 26 42, 28 48 C30 52, 36 50, 42 46" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    <line x1="42" y1="46" x2="52" y2="54" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Torso & Leg outlines */}
    <path d="M45 45 L38 90 L32 125" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    <path d="M55 45 L62 90 L68 125" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    <path d="M32 125 C35 127, 65 127, 68 125" stroke="var(--text-muted)" strokeWidth="1" />
  </svg>
);

// Sepia ink-style sketch of a female Veena player (for left side of Countdown section)
export const VeenaPlayerSketch = ({ className = '', size = 220, opacity = 0.22 }) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Head & Bun */}
    <circle cx="55" cy="22" r="5" stroke="var(--text-muted)" strokeWidth="1.25" />
    <circle cx="48" cy="22" r="3.5" fill="var(--text-muted)" /> {/* Hair Bun */}
    
    {/* Upper Body (Slightly tilted forward playing Veena) */}
    <path d="M55 27 C58 35, 62 45, 58 55" stroke="var(--text-muted)" strokeWidth="1.5" />
    <path d="M50 27 C46 32, 42 40, 46 50" stroke="var(--text-muted)" strokeWidth="1" />
    
    {/* The Veena (Diagonal, large round gourd at bottom left, smaller neck pointing top right) */}
    {/* Bottom Gourd (Kudam) */}
    <circle cx="28" cy="85" r="14" stroke="var(--text-muted)" strokeWidth="1.75" fill="var(--bg-secondary)" />
    <circle cx="28" cy="85" r="10" stroke="var(--border-gold)" strokeWidth="0.75" />
    
    {/* Neck/Fretboard (Dandi) */}
    <line x1="22" y1="88" x2="88" y2="40" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Top dragon head (Yali headpiece) */}
    <path d="M88 40 C94 36, 96 28, 92 25 C88 22, 84 28, 86 34" stroke="var(--text-muted)" strokeWidth="1.25" fill="var(--bg-primary)" />
    
    {/* Sitting Legs & Draped Saree */}
    <path d="M46 50 C38 60, 22 75, 15 95 C20 105, 95 105, 100 95 C90 75, 75 60, 58 55" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Left hand playing on frets */}
    <path d="M48 36 C44 42, 50 48, 55 46" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />
    
    {/* Right hand plucking gourd area */}
    <path d="M38 72 C32 75, 36 82, 40 80" stroke="var(--text-muted)" strokeWidth="1" strokeLinecap="round" />

    {/* Flowers on hair bun */}
    <circle cx="45" cy="17" r="1" fill="var(--accent-gold)" />
    <circle cx="48" cy="15" r="1" fill="var(--accent-gold)" />
  </svg>
);

// Sepia ink-style sketch of standing Theyyam with sword (for right side of Countdown section)
export const TheyyamDancerSketch = ({ className = '', size = 200, opacity = 0.22 }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 100 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Headpiece (Large semi-circular Theyyam crown) */}
    <path d="M15 52 C15 15, 85 15, 85 52" stroke="var(--text-muted)" strokeWidth="1.5" />
    <path d="M22 52 C22 25, 78 25, 78 52" stroke="var(--text-muted)" strokeWidth="0.75" />
    <path d="M28 52 C28 32, 72 32, 72 52" stroke="var(--text-muted)" strokeWidth="0.75" strokeDasharray="3 3" />
    
    {/* Headpiece spikes / details */}
    <path d="M50 15 L50 5 M35 20 L30 12 M65 20 L70 12 M23 32 L15 28 M77 32 L85 28" stroke="var(--text-muted)" strokeWidth="1" />
    
    {/* Face Mask details */}
    <circle cx="50" cy="55" r="7" stroke="var(--text-muted)" strokeWidth="1.25" fill="var(--bg-secondary)" />
    <path d="M47 53 C49 55, 51 55, 53 53" stroke="var(--accent-red)" strokeWidth="1" />
    <circle cx="50" cy="62" r="1.5" fill="var(--accent-red)" />
    
    {/* Body outline */}
    <path d="M50 62 L50 85 L44 110 L38 140" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M50 62 L50 85 L56 110 L62 140" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    
    {/* Left hand holding sword (diagonal blade) */}
    <path d="M43 70 C34 72, 28 68, 25 72" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />
    {/* Sword */}
    <line x1="25" y1="72" x2="10" y2="52" stroke="var(--text-muted)" strokeWidth="1.75" strokeLinecap="round" />
    <line x1="26" y1="70" x2="23" y2="74" stroke="var(--accent-gold)" strokeWidth="2.5" />
    
    {/* Right hand on hip */}
    <path d="M57 70 C65 72, 68 78, 66 84" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" />

    {/* Skirt bells / tassels */}
    <circle cx="44" cy="98" r="2.5" fill="var(--accent-gold)" />
    <circle cx="50" cy="100" r="2.5" fill="var(--accent-gold)" />
    <circle cx="56" cy="98" r="2.5" fill="var(--accent-gold)" />
  </svg>
);

// Sepia Theyyam Mask Sketch (for left side of Committee section)
export const TheyyamMaskSketch = ({ className = '', size = 200, opacity = 0.22 }) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 100 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Elaborate circular Theyyam headpiece */}
    <circle cx="50" cy="65" r="45" stroke="var(--text-muted)" strokeWidth="1.25" />
    <circle cx="50" cy="65" r="41" stroke="var(--border-gold)" strokeWidth="0.75" />
    
    {/* Fan details */}
    <path d="M50 20 L50 2 M18 50 L2 50 M82 50 L98 50 M28 32 L15 19 M72 32 L85 19 M28 98 L15 111 M72 98 L85 111" stroke="var(--text-muted)" strokeWidth="0.5" />
    
    {/* Mask / Face details */}
    <path d="M35 60 C35 48, 65 48, 65 60 C65 75, 35 75, 35 60 Z" fill="var(--bg-secondary)" stroke="var(--text-deep)" strokeWidth="1.5" />
    
    {/* Curved eyes and traditional painting layout */}
    <path d="M40 58 C43 55, 47 55, 50 58" stroke="var(--text-deep)" strokeWidth="1.5" />
    <path d="M50 58 C53 55, 57 55, 60 58" stroke="var(--text-deep)" strokeWidth="1.5" />
    <path d="M42 66 C45 68, 55 68, 58 66" stroke="var(--accent-red)" strokeWidth="1.5" />
    
    {/* Nose and mustache lines */}
    <path d="M50 58 L50 63" stroke="var(--text-deep)" strokeWidth="1" />
    <path d="M46 64 C48 62, 52 62, 54 64" stroke="var(--text-deep)" strokeWidth="1" />
    
    {/* Red details on ears */}
    <circle cx="32" cy="60" r="3" fill="var(--accent-red)" />
    <circle cx="68" cy="60" r="3" fill="var(--accent-red)" />
    <circle cx="32" cy="60" r="5" stroke="var(--accent-gold)" strokeWidth="0.75" />
    <circle cx="68" cy="60" r="5" stroke="var(--accent-gold)" strokeWidth="0.75" />
  </svg>
);

// Elegant floral trail layout (for top-right decoration in some sections)
export const GoldFloralSketch = ({ className = '', size = 150, opacity = 0.25 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity, pointerEvents: 'none' }}
  >
    {/* Swirling vine path */}
    <path d="M90 10 C70 12, 50 25, 45 45 C40 65, 25 80, 10 90" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" />
    <path d="M72 17 C60 22, 52 35, 55 48" stroke="var(--accent-gold)" strokeWidth="0.75" />
    <path d="M48 52 C35 55, 28 68, 30 80" stroke="var(--accent-gold)" strokeWidth="0.75" />

    {/* Stylized flowers */}
    {/* Flower 1 */}
    <circle cx="45" cy="45" r="4" fill="var(--bg-secondary)" stroke="var(--accent-red)" strokeWidth="1" />
    <path d="M45 38 L45 42 M45 48 L45 52 M38 45 L42 45 M48 45 L52 45" stroke="var(--accent-red)" strokeWidth="1" />
    
    {/* Flower 2 */}
    <circle cx="72" cy="17" r="3" fill="var(--bg-secondary)" stroke="var(--accent-red)" strokeWidth="0.75" />
    
    {/* Flower 3 */}
    <circle cx="30" cy="80" r="3" fill="var(--bg-secondary)" stroke="var(--accent-red)" strokeWidth="0.75" />
  </svg>
);
