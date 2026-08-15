import React from 'react';

// Generates an organic, fibrous torn-paper edge to divide layout sections
// with realistic physical paper-overlapping shadow effects.
export const TornPaperBorder = ({ isBottom = false, fill = 'var(--bg-primary)', bg = 'var(--bg-secondary)', height = 24 }) => {
  // Rough, random-looking jagged lines stretching across 1200px
  const pathD = isBottom 
    ? "M0 0 L1200 0 L1200 8 L1185 6 L1170 10 L1155 5 L1140 12 L1125 7 L1110 9 L1095 6 L1080 11 L1065 4 L1050 10 L1035 6 L1020 8 L1005 5 L990 11 L975 6 L960 9 L945 5 L930 12 L915 7 L900 10 L885 6 L870 9 L855 5 L840 11 L825 6 L810 9 L795 5 L780 12 L765 7 L750 9 L735 6 L720 10 L705 5 L690 12 L675 7 L660 9 L645 6 L630 11 L615 4 L600 10 L585 6 L570 9 L555 5 L540 11 L525 6 L510 9 L495 5 L480 12 L465 7 L450 9 L435 6 L420 10 L405 5 L390 12 L375 7 L360 9 L345 6 L330 11 L315 4 L300 10 L285 6 L270 9 L255 5 L240 11 L225 6 L210 9 L195 5 L180 12 L165 7 L150 9 L135 6 L120 10 L105 5 L90 12 L75 7 L60 9 L45 6 L30 11 L15 5 L0 8 Z"
    : "M0 24 L1200 24 L1200 16 L1185 18 L1170 14 L1155 19 L1140 12 L1125 17 L1110 15 L1095 18 L1080 13 L1065 20 L1050 14 L1035 18 L1020 16 L1005 19 L990 13 L975 18 L960 15 L945 19 L930 12 L915 17 L900 14 L885 18 L870 15 L855 19 L840 13 L825 18 L810 15 L795 19 L780 12 L765 17 L750 15 L735 18 L720 14 L705 19 L690 12 L675 17 L660 15 L645 18 L630 13 L615 20 L600 14 L585 18 L570 15 L555 19 L540 13 L525 18 L510 15 L495 19 L480 12 L465 17 L450 15 L435 18 L420 14 L405 19 L390 12 L375 17 L360 15 L345 18 L330 13 L315 20 L300 14 L285 18 L270 15 L255 19 L240 13 L225 18 L210 15 L195 19 L180 12 L165 17 L150 15 L135 18 L120 14 L105 19 L90 12 L75 17 L60 15 L45 18 L30 13 L15 19 L0 16 Z";

  return (
    <div style={{
      position: 'absolute',
      left: 0,
      right: 0,
      [isBottom ? 'bottom' : 'top']: '-1px',
      height: `${height}px`,
      width: '100%',
      overflow: 'visible',
      zIndex: 10,
      pointerEvents: 'none',
      backgroundColor: 'transparent'
    }}>
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          fill: fill,
          filter: isBottom 
            ? 'drop-shadow(0px 4px 4px rgba(37, 32, 26, 0.22))' 
            : 'drop-shadow(0px -4px 4px rgba(37, 32, 26, 0.22))'
        }}
      >
        <path d={pathD} />
      </svg>
    </div>
  );
};
export default TornPaperBorder;
