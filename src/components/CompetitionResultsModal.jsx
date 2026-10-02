import React, { useState, useMemo } from 'react';
import { X, Search, Trophy, Medal, Award, Sparkles, Filter } from 'lucide-react';
import { competitionResults } from '../data/competitionResults';

export const CompetitionResultsModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const departments = ['ALL', 'ECE', 'CIVIL', 'CSE', 'EEE', 'IC', 'MECH'];

  const categories = useMemo(() => {
    const cats = new Set(competitionResults.map(r => r.category));
    return ['ALL', ...Array.from(cats)];
  }, []);

  const filteredResults = useMemo(() => {
    return competitionResults.filter(comp => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesName = comp.eventName.toLowerCase().includes(query);
      const matchesCategory = comp.category.toLowerCase().includes(query);
      const matchesWinner = comp.winners.some(w => 
        w.name.toLowerCase().includes(query) || 
        w.dept.toLowerCase().includes(query)
      );
      const matchesSearch = !query || matchesName || matchesCategory || matchesWinner;

      // Department filter match
      const matchesDept = selectedDept === 'ALL' || comp.winners.some(w => {
        const d = w.dept.toUpperCase();
        if (selectedDept === 'CIVIL' && (d === 'CIVIL' || d === 'CE')) return true;
        if (selectedDept === 'MECH' && (d === 'MECH' || d === 'ME')) return true;
        if (selectedDept === 'EEE' && (d === 'EEE' || d === 'EE')) return true;
        return d === selectedDept;
      });

      // Category filter match
      const matchesCat = selectedCategory === 'ALL' || comp.category === selectedCategory;

      return matchesSearch && matchesDept && matchesCat;
    });
  }, [searchQuery, selectedDept, selectedCategory]);

  if (!isOpen) return null;

  const getPositionBadge = (pos) => {
    switch (pos) {
      case 1:
        return {
          label: '1st',
          icon: '🥇',
          color: '#D4AF37',
          bg: 'rgba(212, 175, 55, 0.12)',
          border: 'rgba(212, 175, 55, 0.35)'
        };
      case 2:
        return {
          label: '2nd',
          icon: '🥈',
          color: '#C0C0C0',
          bg: 'rgba(192, 192, 192, 0.12)',
          border: 'rgba(192, 192, 192, 0.35)'
        };
      case 3:
        return {
          label: '3rd',
          icon: '🥉',
          color: '#CD7F32',
          bg: 'rgba(205, 127, 50, 0.12)',
          border: 'rgba(205, 127, 50, 0.35)'
        };
      default:
        return {
          label: `${pos}th`,
          icon: '🏅',
          color: 'var(--text-muted)',
          bg: 'rgba(112, 92, 69, 0.1)',
          border: 'var(--border-color)'
        };
    }
  };

  const getDeptColor = (dept) => {
    const d = dept.toUpperCase();
    if (d === 'ECE') return { bg: 'rgba(158, 63, 50, 0.15)', text: '#9E3F32', border: 'rgba(158, 63, 50, 0.35)' };
    if (d === 'CSE') return { bg: 'rgba(52, 101, 164, 0.15)', text: '#2B5797', border: 'rgba(52, 101, 164, 0.35)' };
    if (d === 'CE' || d === 'CIVIL') return { bg: 'rgba(101, 115, 90, 0.18)', text: '#4B603A', border: 'rgba(101, 115, 90, 0.35)' };
    if (d === 'EEE' || d === 'EE') return { bg: 'rgba(181, 138, 69, 0.18)', text: '#8F6720', border: 'rgba(181, 138, 69, 0.4)' };
    if (d === 'MECH' || d === 'ME') return { bg: 'rgba(180, 80, 50, 0.15)', text: '#A84323', border: 'rgba(180, 80, 50, 0.35)' };
    if (d === 'IC') return { bg: 'rgba(120, 70, 150, 0.15)', text: '#6A378A', border: 'rgba(120, 70, 150, 0.35)' };
    return { bg: 'rgba(37, 32, 26, 0.08)', text: 'var(--text-deep)', border: 'var(--border-color)' };
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official Competition Results"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(21, 19, 17, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'resultsFadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes resultsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes resultsScaleUp {
          from { transform: scale(0.95) translateY(15px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}} />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92vh',
          backgroundColor: 'var(--bg-primary)',
          backgroundImage: 'url(/bg.png)',
          border: '2px solid var(--accent-gold)',
          borderRadius: '12px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 30px rgba(181, 138, 69, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'resultsScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1.5px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(158, 63, 50, 0.12)',
              border: '1px solid rgba(158, 63, 50, 0.35)',
              color: 'var(--accent-red)',
              padding: '3px 10px',
              borderRadius: '15px',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}>
              <Trophy size={11} color="var(--accent-gold)" />
              <span>Official Festival Results &bull; 113 Competitions</span>
            </div>

            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--text-deep)',
              lineHeight: 1.15
            }}>
              Competition Winners
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close results"
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-deep)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-red)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
              e.currentTarget.style.color = 'var(--text-deep)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Search & Filters Strip */}
        <div style={{
          padding: '16px 28px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            width: '100%'
          }}>
            <Search size={16} style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }} />
            <input
              type="text"
              placeholder="Search by competition name, winner student name, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-deep)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.75rem'
                }}
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Results List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {filteredResults.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'var(--text-muted)'
            }}>
              <Trophy size={40} style={{ opacity: 0.3, marginBottom: '12px' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '700' }}>
                No competition results found
              </div>
              <div style={{ fontSize: '0.82rem', marginTop: '6px' }}>
                Try adjusting your search query or department filter.
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {filteredResults.map((comp) => (
                <div
                  key={comp.id}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '10px',
                    padding: '16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(37, 32, 26, 0.05)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(181, 138, 69, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 32, 26, 0.05)';
                  }}
                >
                  <div>
                    {/* Category Tag */}
                    <div style={{
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: '800',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '6px'
                    }}>
                      {comp.category}
                    </div>

                    {/* Competition Name */}
                    <h3 style={{
                      margin: '0 0 14px 0',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: '800',
                      color: 'var(--text-deep)',
                      lineHeight: '1.25',
                      letterSpacing: '0.02em'
                    }}>
                      {comp.eventName}
                    </h3>

                    {/* Winners List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {comp.winners.map((winner, wIdx) => {
                        const badge = getPositionBadge(winner.position);
                        const deptStyle = getDeptColor(winner.dept);

                        return (
                          <div
                            key={wIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '6px 10px',
                              borderRadius: '6px',
                              backgroundColor: badge.bg,
                              border: `1px solid ${badge.border}`
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                              <span style={{ fontSize: '0.9rem' }}>{badge.icon}</span>
                              <span style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.84rem',
                                fontWeight: '700',
                                color: 'var(--text-deep)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}>
                                {winner.name}
                              </span>
                            </div>

                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.68rem',
                              fontWeight: '900',
                              letterSpacing: '0.08em',
                              padding: '2px 7px',
                              borderRadius: '4px',
                              backgroundColor: deptStyle.bg,
                              color: deptStyle.text,
                              border: `1px solid ${deptStyle.border}`,
                              flexShrink: 0
                            }}>
                              {winner.dept}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div style={{
          padding: '12px 28px',
          borderTop: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.72rem',
          color: 'var(--text-muted)'
        }}>
          <span>Showing {filteredResults.length} of {competitionResults.length} competition results</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--accent-gold)' }}>
            NSSCE AGAM'26 ARTS FESTIVAL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompetitionResultsModal;
