import React from 'react';

export const Schedule = () => {
  const scheduleData = [
    { time: '09:30 AM', event: 'Fest Inauguration & Theyyam' },
    { time: '10:30 AM', event: 'Canvas of Dreams: Live Art' },
    { time: '12:00 PM', event: 'Theatrical Showcase' },
    { time: '01:30 PM', event: 'Rhythm & Soul: Classical Dance' },
    { time: '03:00 PM', event: 'Uninked: Spoken Word' },
    { time: '04:30 PM', event: 'Frames & Focus: Indie Films' },
    { time: '06:00 PM', event: 'Vogue: The Fashion Walk' },
    { time: '07:30 PM', event: 'Neon Nights: DJ Performance' },
    { time: '09:00 PM', event: 'Crescendo: Pro-Show Band' },
  ];

  return (
    <section className="schedule-section">
      <div className="schedule-overlay">
        <div className="schedule-content">
          <h2 className="schedule-title">SCHEDULE</h2>

          <div className="schedule-divider">
            <div className="schedule-divider-line"></div>
            <svg className="schedule-star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor" />
            </svg>
            <div className="schedule-divider-line"></div>
          </div>

          <div className="timeline-container">
            {/* The continuous flowing line down the center */}
            <div className="continuous-flow-line"></div>

            {scheduleData.map((item, index) => (
              <div className="timeline-item" key={index} style={{ animationDelay: `${index * 0.4}s` }}>
                <div className="timeline-time" style={{ animationDelay: `${index * 0.4 + 0.1}s` }}>{item.time}</div>
                <div className="timeline-center">
                  <div className="timeline-dot" style={{ animationDelay: `${index * 0.4 + 0.2}s` }}></div>
                </div>
                <div className="timeline-event" style={{ animationDelay: `${index * 0.4 + 0.3}s` }}>{item.event}</div>
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
          max-width: 800px;
          margin: 0 auto;
        }

        .schedule-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .schedule-title {
          font-family: var(--font-editorial);
          font-size: clamp(3rem, 8vw, 5.5rem);
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
          margin: 10px 0 50px 0;
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

        .timeline-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 500px;
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
          transform: translateX(-50%);
          transform-origin: top;
          z-index: 1;
          opacity: 0.3;
          animation: flowDown 3.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
          padding-bottom: 30px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        /* Staggered text fade ins */
        .timeline-time, .timeline-event {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUpText 0.5s ease forwards;
        }

        @keyframes fadeUpText {
          to {
            opacity: 0.9;
            transform: translateY(0);
          }
        }

        .timeline-time {
          flex: 1;
          text-align: right;
          padding-right: 25px;
          font-family: var(--font-editorial);
          font-weight: 700;
          font-size: clamp(0.9rem, 2.5vw, 1.15rem);
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
          animation: popDot 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes popDot {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .timeline-event {
          flex: 1;
          text-align: left;
          padding-left: 25px;
          font-family: var(--font-editorial);
          font-weight: 700;
          font-size: clamp(0.9rem, 2.5vw, 1.15rem);
          padding-top: 2px;
        }

        /* Subtle horizontal separators like in the image */
        .timeline-item::before {
          content: '';
          position: absolute;
          bottom: 14px;
          left: 15%;
          width: 28%;
          height: 1px;
          background-color: currentColor;
          opacity: 0.2;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          bottom: 14px;
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
            padding-right: 15px;
          }
          .timeline-event {
            padding-left: 15px;
          }
          .timeline-item::before {
            left: 5%;
            width: 35%;
          }
          .timeline-item::after {
            right: 5%;
            width: 35%;
          }
        }
      `}} />
    </section>
  );
};
