import React, { useState, useEffect } from 'react';
import { X, Award, User, Mail, GraduationCap, Phone, CheckCircle, Ticket, Copy, Calendar, MessageCircle, ExternalLink } from 'lucide-react';
import { eventCategories } from '../data/festData';

export const RegisterModal = ({ isOpen, onClose, initialCategoryId = '', initialEventId = '' }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dept: 'CS',
    year: '2nd Year',
    category: '',
    event: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  // Set initial selections if passed from other sections
  useEffect(() => {
    if (isOpen) {
      setForm({
        name: '',
        email: '',
        phone: '',
        dept: 'CS',
        year: '2nd Year',
        category: '',
        event: ''
      });
      setIsSubmitted(false);
      setIsSubmitting(false);
      setCopied(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Generate an elegant, unique classical volunteer ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `AGAM-VOL-${form.dept}-${randomNum}`;
    setTicketId(newId);
    setIsSubmitting(true);

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxjNVcs8bTo7Ir8D3DvgW0wWHYwtc4IrHJ9yZXSxm5WeG8y5Uepsplzfxst_DU9PrWKDw/exec';

    try {
      const formData = new URLSearchParams();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('rollNo', form.phone);
      formData.append('whatsapp', form.phone);
      formData.append('dept', form.dept);
      formData.append('year', form.year);
      formData.append('volunteerId', newId);

      // Send data to Google Apps Script webhook using URL-encoded form data
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });
    } catch (err) {
      console.error('Error submitting to Google Sheet:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
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
                Join Team AGAM '26
              </span>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.6rem', 
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                marginTop: '4px'
              }}>
                Call Out For Volunteers
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

              {/* WhatsApp Number */}
              <div>
                <label className="form-label">WhatsApp Number *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    placeholder="e.g. 9876543210"
                    className="form-input interactive-element"
                    data-cursor-text="WHATSAPP"
                  />
                  <Phone size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              {/* Department & Year of Study */}
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
                  <label className="form-label">Department *</label>
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

                <div style={{ flex: 1 }}>
                  <label className="form-label">Year of Study *</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={form.year}
                      onChange={(e) => setForm({...form, year: e.target.value})}
                      className="form-input interactive-element"
                      data-cursor-text="SELECT"
                      style={{ paddingLeft: '40px', appearance: 'none', height: '46px' }}
                    >
                      <option value="2nd Year">2nd Year (2)</option>
                      <option value="3rd Year">3rd Year (3)</option>
                      <option value="4th Year">4th Year (4)</option>
                    </select>
                    <Calendar size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-editorial btn-editorial-primary interactive-element"
              data-cursor-text="SUBMIT"
              style={{ width: '100%', marginTop: '30px', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
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
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
              Your application has been received! Please click the button below to join the official volunteer WhatsApp group.
            </p>

            {/* WhatsApp Group CTA Button */}
            <a
              href="https://chat.whatsapp.com/GZlnYw7dyCa0fxwMCSK8OS?s=sw&p=a&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-element"
              data-cursor-text="JOIN"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#25D366',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.25s ease',
                marginBottom: '25px',
                width: '100%',
                maxWidth: '400px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1eb954';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <MessageCircle size={18} />
              Join Official WhatsApp Group
              <ExternalLink size={14} />
            </a>

            {/* Brass style Ticket Card */}
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
                AGAM '26 — VOLUNTEER APPLICANT
              </span>

              <h4 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.15rem', 
                textTransform: 'uppercase',
                color: 'var(--text-deep)',
                margin: '8px 0 16px 0'
              }}>
                Fest Volunteer
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', borderBottom: '1px dashed var(--border-color)', padding: '12px 0', margin: '0 10px 6px 10px' }}>
                <div>Applicant: <strong>{form.name}</strong></div>
                <div>Department & Year: <strong>{form.dept} ({form.year})</strong></div>
                <div>WhatsApp: <strong>{form.phone}</strong></div>
              </div>

              <div style={{ marginTop: '14px', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                ✓ Application Logged
              </div>
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
