import React, { useEffect, useRef, useState } from 'react';

export const Schedule = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const daysSchedule = [
    {
      dayName: 'Day 1',
      date: 'Sep 17',
      title: 'Inauguration & Heritage',
      events: [
        { time: '09:30 AM', event: 'Fest Inauguration & Theyyam Performance' },
        { time: '10:00 AM', event: 'Mural Sketching (Traditional)' },
        { time: '11:00 AM', event: 'Classical Solo (Vocal - Stage 3)' },
        { time: '12:00 PM', event: 'Monoact Dramatics (Stage 3)' },
        { time: '01:30 PM', event: 'Creative Writing Spot Contest' },
        { time: '02:00 PM', event: 'Folk Dance Extravaganza (Main Stage)' },
        { time: '05:00 PM', event: 'Chenda Melam & Cultural Procession' },
        { time: '07:30 PM', event: 'Acoustic Unplugged Night' }
      ]
    },
    {
      dayName: 'Day 2',
      date: 'Sep 18',
      title: 'Theatrics & Expression',
      events: [
        { time: '10:00 AM', event: 'Canvas of Dreams: Live Painting' },
        { time: '11:00 AM', event: 'Vakya: Elocution (Library Hall)' },
        { time: '01:30 PM', event: 'Clay Modeling & Organic Sculpting' },
        { time: '03:00 PM', event: 'Nukkad Natak (Street Play - OAT)' },
        { time: '05:00 PM', event: 'Theatrical Drama Showcase' },
        { time: '07:30 PM', event: 'Folk Fusion Symphony' }
      ]
    },
    {
      dayName: 'Day 3',
      date: 'Sep 19',
      title: 'Rhythms & Visual Arts',
      events: [
        { time: '10:00 AM', event: 'Classical Dance Solo (Stage 2 - Mudra)' },
        { time: '11:30 AM', event: 'Uninked: Spoken Word Poetry' },
        { time: '02:00 PM', event: 'Spot Photography Review' },
        { time: '04:00 PM', event: 'Frames & Focus: Indie Short Films' },
        { time: '06:00 PM', event: 'Battle of the Bands (Rock & Fusion - OAT)' },
        { time: '08:30 PM', event: 'Beatboxing & Electronic Rhythm Jam' }
      ]
    },
    {
      dayName: 'Day 4',
      date: 'Sep 20',
      title: 'Grand Finale & Star Pro-Show',
      events: [
        { time: '10:30 AM', event: 'All-Department Showcase & Finals' },
        { time: '01:30 PM', event: 'Short Film Screening & Awards' },
        { time: '04:00 PM', event: 'Vogue: The Cultural Fashion Walk' },
        { time: '06:00 PM', event: 'Valedictory & Grand Trophy Presentation' },
        { time: '07:30 PM', event: 'Neon Nights: DJ Performance' },
        { time: '09:00 PM', event: 'Crescendo: Pro-Show Star Band' }
      ]
    }
  ];

  const currentDay = daysSchedule[activeDayIndex];

  return (
    <section className="schedule-section" ref={sectionRef}>
      <div className="schedule-overlay">
        <div className="schedule-content">
          <span className="schedule-badge">September 17 &bull; 18 &bull; 19 &bull; 20, 2026</span>
          <h2 className="schedule-title">SCHEDULE</h2>
          
          <div className="schedule-divider">
            <div className="schedule-divider-line"></div>
            <svg className="schedule-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor" />
            </svg>
            <div className="schedule-divider-line"></div>
          </div>

          {/* 4 Days Selection Tabs */}
          <div className="schedule-days-tabs">
            {daysSchedule.map((d, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayIndex(idx)}
                className={`schedule-day-btn interactive-element ${activeDayIndex === idx ? 'active' : ''}`}
                data-cursor-text={d.date}
              >
                <span className="day-name">{d.dayName}</span>
                <span className="day-date">{d.date}</span>
              </button>
            ))}
          </div>

          <div className="schedule-day-header">
            <span className="schedule-day-theme">{currentDay.title}</span>
          </div>

          <div className={`timeline-container ${isVisible ? 'is-visible' : ''}`} key={activeDayIndex}>
            {/* The continuous flowing line down the center */}
            <div className="continuous-flow-line"></div>

            {currentDay.events.map((item, index) => (
              <div className="timeline-item" key={`${activeDayIndex}-${index}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="timeline-time" style={{ animationDelay: `${index * 0.15 + 0.05}s` }}>{item.time}</div>
                <div className="timeline-center">
                  <div className="timeline-dot" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}></div>
                </div>
                <div className="timeline-event" style={{ animationDelay: `${index * 0.15 + 0.15}s` }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .schedule-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-image: url('/shedule.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          color: #ab865f; /* Goldish brown */
          z-index: 2;
        }

        @media (max-width: 768px) {
          .schedule-section {
            background-image: url('/shedulem.png');
            padding: 80px 15px;
          }
        }

        .schedule-overlay {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .schedule-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .schedule-badge {
          font-family: var(--font-display);
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 800;
          color: currentColor;
          opacity: 0.9;
          margin-bottom: 8px;
        }

        .schedule-title {
          font-family: var(--font-editorial);
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 500;
          letter-spacing: 0.1em;
          margin: 0;
          text-align: center;
          text-transform: uppercase;
        }

        .schedule-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          width: 100%;
          max-width: 250px;
          margin: 10px 0 30px 0;
        }

        .schedule-divider-line {
          flex: 1;
          height: 1px;
          background-color: currentColor;
          opacity: 0.5;
        }

        .schedule-star {
          width: 20px;
          height: 20px;
          opacity: 0.8;
        }

        /* 4-Day Tab Controls */
        .schedule-days-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .schedule-day-btn {
          background: rgba(171, 134, 95, 0.08);
          border: 1px solid rgba(171, 134, 95, 0.35);
          color: currentColor;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          transition: all 0.3s var(--ease-editorial);
        }

        .schedule-day-btn:hover {
          background: rgba(171, 134, 95, 0.2);
          border-color: currentColor;
          transform: translateY(-2px);
        }

        .schedule-day-btn.active {
          background: rgba(171, 134, 95, 0.35);
          border-color: currentColor;
          box-shadow: 0 0 15px rgba(171, 134, 95, 0.3);
          transform: scale(1.04);
        }

        .schedule-day-btn .day-name {
          font-family: var(--font-display);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 800;
          opacity: 0.8;
        }

        .schedule-day-btn .day-date {
          font-family: var(--font-editorial);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .schedule-day-header {
          margin-bottom: 35px;
          text-align: center;
        }

        .schedule-day-theme {
          font-family: var(--font-display);
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: currentColor;
          opacity: 0.85;
          border-bottom: 1px dashed rgba(171, 134, 95, 0.4);
          padding-bottom: 6px;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 540px;
          position: relative;
        }

        /* Continuous Flowing Line Animation */
        .continuous-flow-line {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 50%;
          width: 2px;
          background-color: currentColor;
          transform: translateX(-50%) scaleY(0);
          transform-origin: top;
          z-index: 1;
          opacity: 0.3;
        }
        
        .is-visible .continuous-flow-line {
          animation: flowDown 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes flowDown {
          0% { transform: translateX(-50%) scaleY(0); }
          100% { transform: translateX(-50%) scaleY(1); }
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          padding-bottom: 26px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        /* Staggered text fade ins */
        .timeline-time, .timeline-event {
          opacity: 0;
          transform: translateY(8px);
        }
        
        .is-visible .timeline-time, 
        .is-visible .timeline-event {
          animation: fadeUpText 0.4s ease forwards;
        }

        @keyframes fadeUpText {
          to {
            opacity: 0.95;
            transform: translateY(0);
          }
        }

        .timeline-time {
          flex: 1;
          text-align: right;
          padding-right: 25px;
          font-family: var(--font-editorial);
          font-weight: 700;
          font-size: clamp(0.85rem, 2.5vw, 1.1rem);
          padding-top: 2px;
        }

        .timeline-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: currentColor;
          position: relative;
          z-index: 2;
          margin-top: 6px;
          box-shadow: 0 0 10px currentColor;
          
          /* Pop animation */
          opacity: 0;
          transform: scale(0);
        }
        
        .is-visible .timeline-dot {
          animation: popDot 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes popDot {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .timeline-event {
          flex: 1.2;
          text-align: left;
          padding-left: 25px;
          font-family: var(--font-editorial);
          font-weight: 700;
          font-size: clamp(0.85rem, 2.5vw, 1.1rem);
          padding-top: 2px;
        }

        /* Subtle horizontal separators */
        .timeline-item::before {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 15%;
          width: 28%;
          height: 1px;
          background-color: currentColor;
          opacity: 0.2;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          bottom: 12px;
          right: 15%;
          width: 28%;
          height: 1px;
          background-color: currentColor;
          opacity: 0.2;
        }
        
        .timeline-item:last-child::before,
        .timeline-item:last-child::after {
          display: none;
        }

        @media (max-width: 600px) {
          .timeline-time {
            padding-right: 12px;
          }
          .timeline-event {
            padding-left: 12px;
          }
          .timeline-item::before {
            left: 5%;
            width: 35%;
          }
          .timeline-item::after {
            right: 5%;
            width: 35%;
          }
          .schedule-days-tabs {
            gap: 8px;
          }
          .schedule-day-btn {
            padding: 6px 12px;
          }
        }
      `}} />
    </section>
  );
};

export default Schedule;
