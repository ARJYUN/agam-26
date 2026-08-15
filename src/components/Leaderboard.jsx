import React, { useState } from 'react';
import { ChendaPlayerSketch } from './Sketches';
import { ScrollReveal } from './ScrollReveal';
import { departmentStandings } from '../data/festData';
import { Award, ChevronDown, ChevronUp, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const Leaderboard = () => {
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);
  const [expandedDept, setExpandedDept] = useState(null);

  // Podiums: Ranks 1, 2, 3
  const firstRank = departmentStandings.find(d => d.rank === '01') || departmentStandings[0];
  const secondRank = departmentStandings.find(d => d.rank === '02') || departmentStandings[1];
  const thirdRank = departmentStandings.find(d => d.rank === '03') || departmentStandings[2];

  // Sidebar: Ranks 4 to 8
  const sidebarStandings = departmentStandings.filter(d => parseInt(d.rank, 10) >= 4);

  const toggleExpand = (deptId) => {
    if (expandedDept === deptId) {
      setExpandedDept(null);
    } else {
      setExpandedDept(deptId);
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} style={{ color: 'var(--accent-green)' }} />;
      case 'down':
        return <TrendingDown size={14} style={{ color: 'var(--accent-red)' }} />;
      default:
        return <Minus size={14} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />;
    }
  };

  return (
    <section 
      id="leaderboard" 
      className="section-wrapper bg-paper-light" 
      style={{ 
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Background sketch of a Chenda drummer on the right side */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '10px',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <img src="/12.png" alt="decorative right" style={{ width: '280px', opacity: 0.8 }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        
        {/* Header Title */}
        <ScrollReveal>
          <div className="editorial-heading-block" style={{ textAlign: 'center', margin: '0 auto 60px auto' }}>
            <span className="editorial-tagline">Rankings that inspire, Performance that speaks</span>
            <h2 className="editorial-title" style={{ fontSize: '2.5rem', letterSpacing: '0.08em' }}>Department Leaderboard</h2>
            <div className="ornamental-divider" style={{ margin: '15px 0' }}>
              <div className="ornamental-divider-motif">
                <span />
                <span className="accent" />
                <span />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Podiums and Sidebar Grid Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          alignItems: 'center'
        }} className="leaderboard-grid-wrapper">
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 992px) {
              .leaderboard-grid-wrapper {
                flex-direction: row !important;
                justify-content: space-between !important;
                align-items: flex-end !important;
              }
              .podiums-container {
                flex: 1.3 !important;
                width: auto !important;
              }
              .sidebar-list-container {
                flex: 0.9 !important;
                width: auto !important;
                align-self: flex-end !important;
              }
            }
          `}} />

          {/* Podiums (Left Column on Desktop) */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '15px',
            width: '100%',
            maxWidth: '600px',
            marginBottom: '20px',
            position: 'relative'
          }} className="podiums-container">
            
            {/* RANK 2 (Silver Podium) */}
            <ScrollReveal delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130px' }}>
                {/* Wreath Badge */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  color: 'var(--text-deep)',
                  backgroundColor: 'var(--bg-secondary)',
                  marginBottom: '12px',
                  boxShadow: 'var(--shadow-editorial)',
                  position: 'relative'
                }}>
                  {/* Small wreath leaves lines */}
                  <div style={{ position: 'absolute', inset: '-3px', borderRadius: '50%', border: '1px dashed var(--border-color)' }} />
                  2
                </div>
                {/* Department Info */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-deep)' }}>
                  {secondRank.dept}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-red)', margin: '4px 0 10px 0' }}>
                  {secondRank.points} <span style={{ fontSize: '0.65rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>PTS</span>
                </div>
                {/* Pedestal Box */}
                <div style={{
                  width: '100%',
                  height: '110px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color-dark)',
                  borderBottom: 'none',
                  borderRadius: '3px 3px 0 0',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '5px', left: '5px', right: '5px', bottom: 0,
                    border: '1px dashed var(--border-color)',
                    borderBottom: 'none'
                  }} />
                  <Award size={18} style={{ color: 'var(--text-muted)', opacity: 0.4 }} />
                </div>
              </div>
            </ScrollReveal>

            {/* RANK 1 (Gold Center Podium - Taller) */}
            <ScrollReveal delay={50}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px', zIndex: 2 }}>
                {/* Gold Laurel Badge */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '2px solid var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  color: 'var(--text-deep)',
                  backgroundColor: 'var(--bg-secondary)',
                  marginBottom: '12px',
                  boxShadow: '0 4px 15px rgba(181, 138, 69, 0.15)',
                  position: 'relative'
                }}>
                  {/* Leaf loops outline */}
                  <div style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', border: '1px solid var(--accent-gold)', opacity: 0.6 }} />
                  1
                </div>
                {/* Department Info */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '900', color: 'var(--text-deep)' }}>
                  {firstRank.dept}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--accent-red)', margin: '4px 0 10px 0' }}>
                  {firstRank.points} <span style={{ fontSize: '0.7rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>PTS</span>
                </div>
                {/* Pedestal Box (Taller) */}
                <div style={{
                  width: '100%',
                  height: '160px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '2px solid var(--accent-gold)',
                  borderBottom: 'none',
                  borderRadius: '3px 3px 0 0',
                  boxShadow: 'var(--shadow-editorial)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '5px', left: '5px', right: '5px', bottom: 0,
                    border: '1px dashed var(--accent-gold)',
                    borderBottom: 'none',
                    opacity: 0.6
                  }} />
                  <Award size={24} style={{ color: 'var(--accent-gold)', opacity: 0.7 }} />
                </div>
              </div>
            </ScrollReveal>

            {/* RANK 3 (Bronze Podium) */}
            <ScrollReveal delay={250}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130px' }}>
                {/* Wreath Badge */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: 'var(--text-deep)',
                  backgroundColor: 'var(--bg-secondary)',
                  marginBottom: '12px',
                  boxShadow: 'var(--shadow-editorial)',
                  position: 'relative'
                }}>
                  <div style={{ position: 'absolute', inset: '-3px', borderRadius: '50%', border: '1px dashed var(--border-color)' }} />
                  3
                </div>
                {/* Department Info */}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-deep)' }}>
                  {thirdRank.dept}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-red)', margin: '4px 0 10px 0' }}>
                  {thirdRank.points} <span style={{ fontSize: '0.65rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>PTS</span>
                </div>
                {/* Pedestal Box (Lower) */}
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color-dark)',
                  borderBottom: 'none',
                  borderRadius: '3px 3px 0 0',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '5px', left: '5px', right: '5px', bottom: 0,
                    border: '1px dashed var(--border-color)',
                    borderBottom: 'none'
                  }} />
                  <Award size={18} style={{ color: 'var(--text-muted)', opacity: 0.4 }} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Table list Ranks 4-8 (Right Column on Desktop) */}
          <div style={{
            width: '100%',
            maxWidth: '450px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '2px',
            boxShadow: 'var(--shadow-editorial)',
            padding: '25px',
            zIndex: 3
          }} className="sidebar-list-container">
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              fontWeight: '800',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-deep)',
              borderBottom: '2px solid var(--border-color-dark)',
              paddingBottom: '10px',
              marginBottom: '15px'
            }}>
              Rank standings
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sidebarStandings.map((deptRow) => {
                const isExpanded = expandedDept === deptRow.dept;

                return (
                  <div key={deptRow.dept} style={{ borderBottom: '1px dashed var(--border-color)', paddingBottom: '6px' }}>
                    <div 
                      onClick={() => toggleExpand(deptRow.dept)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                      }}
                      className="interactive-element"
                      data-cursor-text="DETAILS"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '800', color: 'var(--text-muted)', minWidth: '20px' }}>
                          {deptRow.rank}
                        </span>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--text-deep)' }}>
                          {deptRow.dept}
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ fontWeight: '700', color: 'var(--text-deep)' }}>
                          {deptRow.points}
                        </span>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          {getTrendIcon(deptRow.trend)}
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable detailed events list */}
                    {isExpanded && (
                      <div style={{
                        padding: '10px 10px 5px 35px',
                        animation: 'fadeInDown 0.3s ease-out',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)'
                      }}>
                        <style dangerouslySetInnerHTML={{__html: `
                          @keyframes fadeInDown {
                            from { opacity: 0; transform: translateY(-10px); }
                            to { opacity: 1; transform: translateY(0); }
                          }
                        `}} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {deptRow.breakdown.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span>{item.event}</span>
                              <strong>+{item.points}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* View Full Leaderboard toggle button */}
        <ScrollReveal delay={300}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button 
              onClick={() => setShowFullLeaderboard(!showFullLeaderboard)}
              className="btn-editorial btn-editorial-secondary interactive-element"
              data-cursor-text="EXPAND"
              style={{ padding: '12px 30px', fontSize: '0.75rem' }}
            >
              {showFullLeaderboard ? 'Close Standing View' : 'View Full Leaderboard'}
            </button>
          </div>
        </ScrollReveal>

        {/* Full standing popover drawer overlay */}
        {showFullLeaderboard && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(37, 32, 26, 0.4)',
            backdropFilter: 'blur(3px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '600px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '3px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              padding: '30px',
              position: 'relative'
            }}>
              <button 
                onClick={() => setShowFullLeaderboard(false)}
                style={{
                  position: 'absolute', right: '20px', top: '20px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-deep)'
                }}
              >
                Close &times;
              </button>

              <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.4rem', marginBottom: '20px' }}>
                Complete Standings
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto', paddingRight: '10px' }}>
                {departmentStandings.map((deptRow) => (
                  <div key={deptRow.dept} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <span><strong>{deptRow.rank}</strong></span>
                      <span>{deptRow.name} ({deptRow.dept})</span>
                    </div>
                    <span><strong>{deptRow.points} PTS</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
export default Leaderboard;
