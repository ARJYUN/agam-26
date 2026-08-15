import React, { useState } from 'react';
import { FloatingCorner } from './FloatingCorner';

import { ScrollReveal } from './ScrollReveal';
import { teamMembers } from '../data/festData';
import { User, Shield, Users, Palette, Briefcase, Monitor } from 'lucide-react';

// A premium, stylized vector line-art avatar representing classical editorial portrait drawings
const ArtisticAvatar = ({ seedId, gender = 'male' }) => {
  const colors = [
    { bg: '#E8E1CE', line: 'var(--text-deep)', accent: 'var(--accent-red)' },
    { bg: '#F1EBDD', line: 'var(--text-deep)', accent: 'var(--accent-gold)' },
    { bg: '#E2DEC9', line: 'var(--text-deep)', accent: 'var(--accent-green)' },
  ];
  const theme = colors[seedId % colors.length];

  return (
    <svg width="100%" height="100%" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="140" fill={theme.bg} rx="2" />
      <circle cx="60" cy="70" r="38" stroke="rgba(112, 92, 69, 0.12)" strokeWidth="0.75" />
      
      {/* Hair styling */}
      {seedId % 2 === 0 ? (
        <path d="M30 60 C30 32, 90 32, 90 60 C90 64, 86 60, 83 58 C78 55, 42 55, 37 58 C34 60, 30 64, 30 60 Z" fill={theme.line} opacity="0.9" />
      ) : (
        <g>
          <circle cx="60" cy="26" r="8" fill={theme.accent} opacity="0.8" />
          <path d="M28 62 C28 32, 92 32, 92 62 C92 85, 85 98, 85 110 L35 110 C35 98, 28 85, 28 62 Z" fill={theme.line} opacity="0.95" />
        </g>
      )}

      {/* Head and features */}
      <path d="M48 90 C48 102, 72 102, 72 90" stroke={theme.line} strokeWidth="1.5" />
      <path d="M44 75 C44 90, 47 94, 60 94 C73 94, 76 90, 76 75 C76 58, 44 58, 44 75 Z" fill={theme.bg} stroke={theme.line} strokeWidth="1.5" />
      <circle cx="53" cy="72" r="1.5" fill={theme.line} />
      <circle cx="67" cy="72" r="1.5" fill={theme.line} />
      <path d="M60 70 L60 80 L58 80" stroke={theme.line} strokeWidth="1" />
      <path d="M55 85 C57 87, 63 87, 65 85" stroke={theme.accent} strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="42" cy="78" r="2" fill={theme.accent} />
      <circle cx="78" cy="78" r="2" fill={theme.accent} />
    </svg>
  );
};

export const OrganizingTeam = () => {
  const [activeGroup, setActiveGroup] = useState('student'); // Default student coordinators
  const [viewAll, setViewAll] = useState(false);

  // Circular groups layout definition matching screenshot
  const committeeGroups = [
    { id: 'patron', label: 'Chief Patron', icon: <Shield size={18} /> },
    { id: 'faculty', label: 'Faculty Coordinators', icon: <User size={18} /> },
    { id: 'student', label: 'Student Coordinators', icon: <Users size={18} /> },
    { id: 'tech', label: 'Tech Team', icon: <Monitor size={18} /> },
    { id: 'design', label: 'Design & Media Team', icon: <Palette size={18} /> },
    { id: 'management', label: 'Management & Logistics', icon: <Briefcase size={18} /> }
  ];

  const filteredMembers = viewAll 
    ? teamMembers 
    : teamMembers.filter(member => member.group === activeGroup);

  return (
    <section 
      id="team" 
      className="section-wrapper bg-paper-dark" 
      style={{ 
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Background Theyyam mask sketch on bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '-10px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img src="/17.png" alt="decorative left" style={{ 
          width: '260px', 
          opacity: 0.7,
          marginRight: '20px'
        }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        
        {/* Header Titles */}
        <ScrollReveal>
          <div className="editorial-heading-block" style={{ textAlign: 'center', margin: '0 auto 50px auto' }}>
            <span className="editorial-tagline">The minds behind AGAM</span>
            <h2 className="editorial-title" style={{ fontSize: '2.5rem', letterSpacing: '0.08em' }}>The Committee</h2>
            <div className="ornamental-divider" style={{ margin: '15px 0' }}>
              <div className="ornamental-divider-motif">
                <span />
                <span className="accent" />
                <span />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Circular Categories Row */}
        <ScrollReveal delay={100}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto 60px auto'
          }} className="committee-categories-row">
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 768px) {
                .committee-categories-row {
                  grid-template-columns: repeat(6, 1fr) !important;
                }
              }
            `}} />

            {committeeGroups.map((group) => {
              const isActive = activeGroup === group.id && !viewAll;

              return (
                <div 
                  key={group.id}
                  onClick={() => {
                    setViewAll(false);
                    setActiveGroup(group.id);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  className="interactive-element"
                  data-cursor-text="SELECT"
                >
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    border: isActive ? '2px solid var(--accent-gold)' : '1px solid var(--border-color-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isActive ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                    color: isActive ? 'var(--accent-red)' : 'var(--text-muted)',
                    boxShadow: isActive ? '0 4px 10px rgba(181, 138, 69, 0.15)' : 'none',
                    transition: 'all 0.3s'
                  }}>
                    {group.icon}
                  </div>
                  
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.62rem',
                    fontWeight: '800',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-deep)',
                    lineHeight: '1.3'
                  }}>
                    {group.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Selected Category Members Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          maxWidth: '900px',
          margin: '0 auto 40px auto'
        }} className="committee-grid">
          
          <style dangerouslySetInnerHTML={{__html: `
            /* Clean visual grid structure */
            .committee-grid > div {
              transition: var(--transition-smooth);
            }
          `}} />

          {filteredMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 80}>
              <div 
                className="interactive-element team-tile"
                data-cursor-text="VIEW"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  padding: '15px 15px 25px 15px',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-editorial)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '18px',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(181, 138, 69, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-editorial)';
                }}
              >
                {/* Decorative corner pin */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
                }} />

                {/* Avatar Outline container (Artistic Frame) */}
                <div style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color-dark)',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '4px',
                  boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    border: '1px dashed var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-primary)'
                  }}>
                    <ArtisticAvatar seedId={member.id} />
                  </div>
                </div>

                {/* Member Text details */}
                <div style={{ width: '100%', position: 'relative' }}>
                  {/* Small decorative line */}
                  <div style={{
                    width: '30px',
                    height: '1px',
                    backgroundColor: 'var(--accent-gold)',
                    margin: '0 auto 12px auto'
                  }} />
                  
                  <h4 style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-deep)',
                    fontStyle: 'italic',
                    marginBottom: '4px'
                  }}>
                    {member.name}
                  </h4>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {member.role}
                  </p>
                  <span style={{
                    fontSize: '0.65rem',
                    color: 'var(--accent-red)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '800',
                    letterSpacing: '0.1em',
                    marginTop: '6px',
                    display: 'inline-block',
                    padding: '3px 8px',
                    border: '1px solid rgba(158, 63, 50, 0.2)',
                    borderRadius: '10px'
                  }}>
                    {member.dept}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All toggle action button */}
        <ScrollReveal delay={300}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => setViewAll(!viewAll)}
              className="btn-editorial btn-editorial-secondary interactive-element"
              data-cursor-text={viewAll ? "BACK" : "ALL TEAM"}
              style={{ padding: '12px 30px', fontSize: '0.75rem' }}
            >
              {viewAll ? 'Back to Committee Groups' : 'Meet The Team'}
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
export default OrganizingTeam;
