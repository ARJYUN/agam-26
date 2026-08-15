import React, { useState, useEffect } from 'react';
import { X, Award, User, Mail, GraduationCap, FileText, CheckCircle, Ticket, Copy } from 'lucide-react';
import { eventCategories } from '../data/festData';

export const RegisterModal = ({ isOpen, onClose, initialCategoryId = '', initialEventId = '' }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rollNo: '',
    dept: 'CS',
    category: '',
    event: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  // Set initial selections if passed from other sections
  useEffect(() => {
    if (isOpen) {
      setForm(prev => ({
        ...prev,
        category: initialCategoryId || eventCategories[0]?.id || '',
        event: initialEventId || (initialCategoryId 
          ? eventCategories.find(c => c.id === initialCategoryId)?.events[0]?.id 
          : eventCategories[0]?.events[0]?.id) || ''
      }));
      setIsSubmitted(false);
      setCopied(false);
    }
  }, [isOpen, initialCategoryId, initialEventId]);

  // Update selected event options when category changes
  const handleCategoryChange = (catId) => {
    const selectedCat = eventCategories.find(c => c.id === catId);
    setForm(prev => ({
      ...prev,
      category: catId,
      event: selectedCat?.events[0]?.id || ''
    }));
  };

  const selectedCategoryEvents = eventCategories.find(c => c.id === form.category)?.events || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rollNo) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Generate an elegant, unique classical ticket ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`AGAM-26-${form.dept}-${randomNum}`);
    setIsSubmitted(true);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(37, 32, 26, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.25s ease-out'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        width: '100%',
        maxWidth: '550px',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(37, 32, 26, 0.25)',
        overflow: 'hidden',
        animation: 'scaleIn 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
      }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .form-input {
            width: 100%;
            padding: 12px 14px 12px 40px;
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-family: var(--font-sans);
            font-size: 0.9rem;
            color: var(--text-deep);
            outline: none;
            transition: border-color 0.3s;
          }
          .form-input:focus {
            border-color: var(--accent-gold);
          }
          .form-label {
            font-family: var(--font-display);
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            font-weight: 700;
            color: var(--text-deep);
            margin-bottom: 6px;
            display: block;
          }
        `}} />

        {/* Ornament Border Line at very top */}
        <div style={{ height: '4px', backgroundColor: 'var(--accent-red)' }} />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-deep)',
            cursor: 'pointer',
            zIndex: 10
          }}
          className="interactive-element"
          data-cursor-text="CLOSE"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          /* REGISTRATION FORM */
          <form onSubmit={handleSubmit} style={{ padding: '40px' }}>
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.7rem', 
                letterSpacing: '0.25em', 
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                fontWeight: '700'
              }}>
                Entry Pass
              </span>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.6rem', 
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                marginTop: '4px'
              }}>
                Fest Registration
              </h3>
              <div className="ornamental-divider" style={{ margin: '15px 0 0 0' }}>
                <div className="ornamental-divider-motif">
                  <span />
                  <span className="accent" />
                  <span />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name */}
              <div>
                <label className="form-label">Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="Enter your name"
                    className="form-input interactive-element"
                    data-cursor-text="NAME"
                  />
                  <User size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="form-label">Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="Enter college email"
                    className="form-input interactive-element"
                    data-cursor-text="EMAIL"
                  />
                  <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              {/* Roll No & Dept */}
              <div style={{ display: 'flex', gap: '20px' }} className="form-row-container">
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 500px) {
                    .form-row-container {
                      flex-direction: column !important;
                      gap: 20px !important;
                    }
                  }
                `}} />
                <div style={{ flex: 1 }}>
                  <label className="form-label">Roll Number / ID *</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      required
                      value={form.rollNo}
                      onChange={(e) => setForm({...form, rollNo: e.target.value})}
                      placeholder="e.g. AM.EN.U4CSE"
                      className="form-input interactive-element"
                      data-cursor-text="ROLL NO"
                    />
                    <FileText size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  </div>
                </div>

                <div style={{ flex: 0.8 }}>
                  <label className="form-label">Department</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={form.dept}
                      onChange={(e) => setForm({...form, dept: e.target.value})}
                      className="form-input interactive-element"
                      data-cursor-text="SELECT"
                      style={{ paddingLeft: '40px', appearance: 'none', height: '46px' }}
                    >
                      <option value="CS">CS</option>
                      <option value="EC">EC</option>
                      <option value="EE">EE</option>
                      <option value="CE">CE</option>
                      <option value="ME">ME</option>
                      <option value="IC">IC</option>
                    </select>
                    <GraduationCap size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  </div>
                </div>
              </div>

              {/* Category & Event Selectors */}
              <div style={{ display: 'flex', gap: '20px' }} className="form-row-container">
                <div style={{ flex: 1 }}>
                  <label className="form-label">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="form-input interactive-element"
                    data-cursor-text="SELECT"
                    style={{ paddingLeft: '15px', height: '46px' }}
                  >
                    {eventCategories.map((c) => (
                      <option key={c.id} value={c.id}>{c.shortName}</option>
                    ))}
                  </select>
                </div>

                <div style={{ flex: 1.2 }}>
                  <label className="form-label">Select Event</label>
                  <select
                    value={form.event}
                    onChange={(e) => setForm({...form, event: e.target.value})}
                    className="form-input interactive-element"
                    data-cursor-text="SELECT"
                    style={{ paddingLeft: '15px', height: '46px' }}
                  >
                    {selectedCategoryEvents.map((e) => (
                      <option key={e.id} value={e.id}>{e.title.split(' (')[0]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn-editorial btn-editorial-primary interactive-element"
              data-cursor-text="SUBMIT"
              style={{ width: '100%', marginTop: '30px' }}
            >
              Submit Registration
            </button>
          </form>
        ) : (
          /* SUCCESS PASS TICKET */
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--accent-green)', marginBottom: '15px' }}>
              <CheckCircle size={48} />
            </div>
            
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.4rem', 
              textTransform: 'uppercase',
              color: 'var(--text-deep)',
              marginBottom: '8px'
            }}>
              Registration Successful!
            </h3>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '30px' }}>
              Your stage is booked. Show this ticket code at the venue check-in.
            </p>

            {/* Brass style Ticket Ticket card */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '2px solid var(--accent-gold)',
              borderRadius: '4px',
              padding: '24px 20px',
              position: 'relative',
              boxShadow: 'var(--shadow-editorial)',
              overflow: 'hidden',
              margin: '0 auto 30px auto',
              maxWidth: '400px'
            }}>
              {/* Ticket cutouts on the sides */}
              <div style={{ position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '50%', borderRight: '1.5px solid var(--accent-gold)' }} />
              <div style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '50%', borderLeft: '1.5px solid var(--accent-gold)' }} />
              
              {/* Ticket inner border line */}
              <div style={{
                position: 'absolute',
                top: '5px',
                left: '5px',
                right: '5px',
                bottom: '5px',
                border: '1px dashed var(--accent-gold)',
                opacity: 0.6,
                pointerEvents: 'none'
              }} />

              {/* Ticket Details */}
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '0.65rem', 
                letterSpacing: '0.2em', 
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                fontWeight: '700'
              }}>
                AGAM '26 — OFFICIAL PASS
              </span>

              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.15rem', 
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                margin: '8px 0 16px 0'
              }}>
                {eventCategories.find(c => c.id === form.category)?.events.find(e => e.id === form.event)?.title.split(' (')[0]}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', borderBottom: '1px dashed var(--border-color)', padding: '12px 0', margin: '0 10px 16px 10px' }}>
                <div>Participant: <strong>{form.name}</strong></div>
                <div>Department: <strong>{form.dept}</strong> (Roll: {form.rollNo})</div>
                <div>Venue: <strong>{eventCategories.find(c => c.id === form.category)?.events.find(e => e.id === form.event)?.venue}</strong></div>
              </div>

              {/* Ticket ID Box */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '8px 15px', borderRadius: '2px' }}>
                <Ticket size={14} style={{ color: 'var(--accent-gold)' }} />
                <code style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-deep)', letterSpacing: '0.05em' }}>
                  {ticketId}
                </code>
                <button 
                  onClick={handleCopyTicket}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  className="interactive-element"
                  data-cursor-text="COPY"
                >
                  <Copy size={13} style={{ color: copied ? 'var(--accent-green)' : 'currentColor' }} />
                </button>
              </div>
              {copied && <div style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontWeight: 'bold', marginTop: '4px' }}>Copied to clipboard!</div>}
            </div>

            <button
              onClick={onClose}
              className="btn-editorial btn-editorial-secondary interactive-element"
              data-cursor-text="CLOSE"
              style={{ width: '150px' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default RegisterModal;
