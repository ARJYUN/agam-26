import React, { useState, useMemo } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { eventCategories } from '../data/festData';
import { Award, Calendar, MapPin, Receipt, Search, ArrowLeft, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { competitionResults, findEventResult } from '../data/competitionResults';

export const AllEventsPage = ({ onOpenResultsModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Navigate back to home section
  const handleBackToHome = () => {
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build list of all 33 competition result items
  const competitionEvents = useMemo(() => {
    return competitionResults.map(comp => ({
      id: comp.id,
      title: comp.eventName,
      desc: `Official cultural fest competition under ${comp.category}.`,
      categoryId: comp.categoryId,
      categoryName: comp.category,
      rules: [],
      isOfficialResult: true,
      resultData: comp
    }));
  }, []);

  // Flatten events and inject category details
  const allEvents = useMemo(() => {
    const eventsList = [];
    eventCategories.forEach(category => {
      category.events.forEach(event => {
        eventsList.push({
          ...event,
          categoryId: category.id,
          categoryName: category.name
        });
      });
    });
    return eventsList;
  }, []);

  // Filter events based on search query and category tab
  const filteredEvents = useMemo(() => {
    const listToFilter = selectedFilter === 'results' ? competitionEvents : allEvents;
    
    return listToFilter.filter(event => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        event.title.toLowerCase().includes(query) ||
        event.desc.toLowerCase().includes(query) ||
        (event.resultData && event.resultData.winners.some(w => 
          w.name.toLowerCase().includes(query) || 
          w.dept.toLowerCase().includes(query)
        ));
      
      const matchesFilter = selectedFilter === 'all' || selectedFilter === 'results' || event.categoryId === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [allEvents, competitionEvents, searchQuery, selectedFilter]);

  return (
    <section 
      id="all-events-section" 
      className="section-wrapper bg-paper-light"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px',
        position: 'relative'
      }}
    >
      {/* Editorial Page Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 5 }}>
        
        {/* Back navigation */}
        <button 
          onClick={handleBackToHome}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            marginBottom: '30px',
            transition: 'color 0.3s'
          }}
          className="interactive-element"
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderLeft: '4px solid var(--accent-gold)',
          paddingLeft: '20px',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--text-deep)',
            margin: '0 0 10px 0',
            lineHeight: '1'
          }}>
            Festival Events
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            margin: 0,
            maxWidth: '600px',
            lineHeight: '1.5'
          }}>
            Explore the complete line-up of competitions, creative challenges, and stages. Search and view official declared results below.
          </p>

          {onOpenResultsModal && (
            <button
              onClick={onOpenResultsModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '15px',
                padding: '9px 18px',
                borderRadius: '25px',
                backgroundColor: 'rgba(212, 175, 55, 0.12)',
                border: '1.5px solid var(--accent-gold)',
                color: 'var(--text-deep)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 2px 10px rgba(212, 175, 55, 0.15)'
              }}
              className="interactive-element"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                e.currentTarget.style.color = '#1E1B18';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.12)';
                e.currentTarget.style.color = 'var(--text-deep)';
              }}
            >
              <Trophy size={14} style={{ color: 'var(--accent-gold)' }} /> View Official Results Sheet (33 Declared)
            </button>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          padding: '20px',
          marginBottom: '40px',
          boxShadow: 'var(--shadow-editorial)'
        }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '15px', color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="Search events by title, winner student, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 15px 14px 45px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-deep)',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          {/* Filter Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <button 
              onClick={() => setSelectedFilter('all')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedFilter === 'all' ? 'var(--accent-red)' : 'var(--border-color)',
                backgroundColor: selectedFilter === 'all' ? 'var(--accent-red)' : 'var(--bg-primary)',
                color: selectedFilter === 'all' ? 'var(--bg-primary)' : 'var(--text-deep)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              className="interactive-element"
            >
              All Events ({allEvents.length})
            </button>

            {/* Dedicated Results Filter Tab */}
            <button 
              onClick={() => setSelectedFilter('results')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                fontWeight: '800',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: selectedFilter === 'results' ? 'var(--accent-gold)' : 'rgba(212, 175, 55, 0.4)',
                backgroundColor: selectedFilter === 'results' ? 'var(--accent-gold)' : 'rgba(212, 175, 55, 0.12)',
                color: selectedFilter === 'results' ? '#1E1B18' : 'var(--text-deep)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s'
              }}
              className="interactive-element"
            >
              <Trophy size={12} style={{ color: selectedFilter === 'results' ? '#1E1B18' : 'var(--accent-gold)' }} />
              Results Declared ({competitionResults.length})
            </button>

            {eventCategories.map(category => (
              <button 
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: selectedFilter === category.id ? 'var(--accent-red)' : 'var(--border-color)',
                  backgroundColor: selectedFilter === category.id ? 'var(--accent-red)' : 'var(--bg-primary)',
                  color: selectedFilter === category.id ? 'var(--bg-primary)' : 'var(--text-deep)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                className="interactive-element"
              >
                {category.name} ({category.events.length})
              </button>
            ))}
          </div>
        </div>

        {/* Filter Results Status */}
        {searchQuery && (
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '20px'
          }}>
            Found {filteredEvents.length} results matching "{searchQuery}"
          </div>
        )}

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px'
          }} className="all-events-grid">
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 768px) {
                .all-events-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
              @media (min-width: 1100px) {
                .all-events-grid {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}} />

            {filteredEvents.map((event, index) => {
              const result = event.resultData || findEventResult(event.title, event.id);

              return (
                <ScrollReveal key={event.id || index} delay={index * 40}>
                  <div style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid',
                    borderColor: result ? 'rgba(212, 175, 55, 0.45)' : 'var(--border-color)',
                    borderRadius: '4px',
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: result ? '0 4px 20px rgba(212, 175, 55, 0.08)' : 'var(--shadow-editorial)',
                    transition: 'var(--transition-smooth)',
                    position: 'relative',
                    minWidth: 0
                  }}
                  className="interactive-element"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = result ? 'rgba(212, 175, 55, 0.45)' : 'var(--border-color)';
                    e.currentTarget.style.transform = 'none';
                  }}
                  >
                    <div>
                      {/* Category Label Tag & Result Badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.55rem',
                          fontWeight: '800',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-gold)',
                          display: 'inline-block',
                          backgroundColor: 'var(--bg-secondary)',
                          padding: '4px 8px',
                          borderRadius: '2px'
                        }}>
                          {event.categoryName}
                        </span>

                        {result && (
                          <span style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.6rem',
                            fontWeight: '800',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#9E7812',
                            backgroundColor: 'rgba(212, 175, 55, 0.15)',
                            border: '1px solid rgba(212, 175, 55, 0.4)',
                            padding: '3px 8px',
                            borderRadius: '12px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <Trophy size={11} style={{ color: '#D4AF37' }} /> Result Declared
                          </span>
                        )}
                      </div>

                      {/* Event Title */}
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        color: 'var(--text-deep)',
                        margin: '0 0 10px 0',
                        lineHeight: '1.25',
                        wordBreak: 'break-word',
                        overflowWrap: 'anywhere'
                      }}>
                        {event.title}
                      </h3>

                      {/* Event Description */}
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.5',
                        margin: '0 0 16px 0',
                        wordBreak: 'break-word',
                        overflowWrap: 'anywhere'
                      }}>
                        {event.desc}
                      </p>

                      {/* Official Winners Podium Box */}
                      {result && result.winners && result.winners.length > 0 && (
                        <div style={{
                          backgroundColor: 'rgba(212, 175, 55, 0.06)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          borderRadius: '4px',
                          padding: '12px 14px',
                          marginBottom: '16px'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '8px',
                            paddingBottom: '6px',
                            borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
                          }}>
                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '0.65rem',
                              fontWeight: '800',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: 'var(--accent-gold)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px'
                            }}>
                              <Trophy size={12} /> Winners
                            </span>
                            {onOpenResultsModal && (
                              <button
                                onClick={onOpenResultsModal}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: '0.65rem',
                                  color: 'var(--accent-red)',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                  padding: 0,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '3px'
                                }}
                              >
                                View Sheet <ExternalLink size={10} />
                              </button>
                            )}
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {result.winners.map((winner, wIdx) => {
                              const medal = winner.position === 1 ? '🥇 1st' : winner.position === 2 ? '🥈 2nd' : '🥉 3rd';
                              return (
                                <div key={wIdx} style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  fontSize: '0.8rem',
                                  padding: '2px 0'
                                }}>
                                  <span style={{ fontWeight: '600', color: 'var(--text-deep)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <span style={{ fontSize: '0.75rem', minWidth: '38px' }}>{medal}</span>
                                    {winner.name}
                                  </span>
                                  <span style={{
                                    fontSize: '0.62rem',
                                    fontWeight: '800',
                                    fontFamily: 'var(--font-mono, monospace)',
                                    backgroundColor: 'rgba(37, 32, 26, 0.06)',
                                    border: '1px solid var(--border-color)',
                                    padding: '2px 6px',
                                    borderRadius: '8px',
                                    color: 'var(--accent-red)'
                                  }}>
                                    {winner.dept}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Rules list */}
                      {event.rules && event.rules.length > 0 && (
                        <div style={{
                          borderTop: '1px solid var(--border-color)',
                          paddingTop: '12px',
                          marginBottom: '15px'
                        }}>
                          <span style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.6rem',
                            fontWeight: '800',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--text-deep)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            marginBottom: '6px'
                          }}>
                            <ShieldCheck size={11} style={{ color: 'var(--accent-gold)' }} /> Key Rules
                          </span>
                          <ul style={{
                            margin: 0,
                            paddingLeft: '15px',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            lineHeight: '1.4'
                          }}>
                            {event.rules.slice(0, 3).map((rule, idx) => (
                              <li key={idx} style={{ marginBottom: '4px' }}>{rule}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>


                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            border: '1px dashed var(--border-color)',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem'
          }}>
            No events found matching your search filters. Try selecting another category tab or clearing the search.
          </div>
        )}
      </div>
    </section>
  );
};
export default AllEventsPage;
