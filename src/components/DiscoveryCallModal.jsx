import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Shield, 
  ArrowRight
} from 'lucide-react';
import './DiscoveryCallModal.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function DiscoveryCallModal({ isOpen, onClose, initialData = {} }) {
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' or 'instant'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: 'Google Meet',
    timeSlot: 'Tomorrow Morning (9AM - 12PM)',
    projectSummary: initialData.summary || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError('');
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'f4f717b3-eaa8-4f1e-9139-39336e93074c';

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          platform: formData.platform,
          preferred_time: formData.timeSlot,
          message: formData.projectSummary,
          subject: `📅 DISCOVERY CALL REQUEST from ${formData.name}`,
          from_name: `${formData.name} (Discovery Call)`,
          replyto: formData.email
        })
      });

      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'Could not schedule call. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong while booking your call.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ascendancy Solutions! I'd like to book a 15-minute discovery call to discuss my digital project.`
  );
  const whatsappUrl = `https://wa.me/254715641618?text=${whatsappMessage}`;

  return (
    <div className="discovery-modal-overlay" onClick={onClose}>
      <div className="discovery-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="discovery-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {/* Modal Top Header */}
        <div className="discovery-header">
          <div className="discovery-badge">
            <span className="live-status-dot"></span>
            <span>SLOTS AVAILABLE THIS WEEK</span>
          </div>

          <h2 className="discovery-title">
            Book Your Free <span className="gradient-text-purple">15-Minute Strategy Call</span>
          </h2>
          <p className="discovery-subtitle">
            Zero pitch, pure value. Discuss your project goals, get technical architecture advice, and receive a rough cost & timeline estimate.
          </p>

          {/* Quick Choice Tabs */}
          <div className="discovery-tabs">
            <button 
              className={`discovery-tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              <Calendar size={16} />
              <span>Schedule Call</span>
            </button>
            <button 
              className={`discovery-tab-btn ${activeTab === 'instant' ? 'active' : ''}`}
              onClick={() => setActiveTab('instant')}
            >
              <MessageSquare size={16} />
              <span>1-Click Instant Connect</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        {activeTab === 'instant' ? (
          <div className="discovery-instant-pane">
            <div className="instant-option-card glass-card">
              <div className="instant-icon-wrap icon-cyan">
                <MessageSquare size={26} />
              </div>
              <div className="instant-details">
                <div className="instant-badge-row">
                  <span className="instant-badge fastest">FASTEST RESPONSE (~5 MIN)</span>
                </div>
                <h3>Chat & Call via WhatsApp</h3>
                <p>Connect immediately with our Senior Solutions Architect on WhatsApp for quick scoping or an instant audio/video chat.</p>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary instant-action-btn"
                >
                  <span>Open WhatsApp (+254 715 641 618)</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="instant-option-card glass-card">
              <div className="instant-icon-wrap icon-purple">
                <Phone size={26} />
              </div>
              <div className="instant-details">
                <div className="instant-badge-row">
                  <span className="instant-badge direct">DIRECT LINE</span>
                </div>
                <h3>Direct Phone Consultation</h3>
                <p>Available 24/7 for urgent project inquiries, RFP discussions, and immediate technical reviews.</p>
                <a 
                  href="tel:0715641618" 
                  className="btn-secondary instant-action-btn"
                >
                  <Phone size={18} />
                  <span>Call 0715641618 Now</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="discovery-schedule-pane">
            {submitted ? (
              <div className="discovery-success-box">
                <CheckCircle className="success-icon animate-float" size={54} />
                <h3>Discovery Call Booked!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. We have reserved your requested slot:
                </p>
                <div className="success-summary-pill">
                  <span>📅 {formData.timeSlot}</span>
                  <span>💻 {formData.platform}</span>
                </div>
                <p className="success-subtext">
                  A confirmation email with the meeting access link has been dispatched to <strong>{formData.email}</strong>.
                </p>
                <div className="success-actions">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                  >
                    <span>Also Connect via WhatsApp</span>
                    <ArrowRight size={16} />
                  </a>
                  <button onClick={onClose} className="btn-secondary">
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="discovery-form">
                {submitError && (
                  <div className="form-error-message" role="alert">
                    {submitError}
                  </div>
                )}

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Jane Doe" 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="jane@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Meeting Platform</label>
                    <select 
                      name="platform" 
                      value={formData.platform} 
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Google Meet">Google Meet (Video)</option>
                      <option value="Zoom">Zoom</option>
                      <option value="WhatsApp Call">WhatsApp Audio / Video</option>
                      <option value="Phone Call">Direct Phone Call</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Time Slot</label>
                    <select 
                      name="timeSlot" 
                      value={formData.timeSlot} 
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Urgent - Today ASAP">⚡ Urgent - Today ASAP</option>
                      <option value="Tomorrow Morning (9AM - 12PM)">Tomorrow Morning (9AM - 12PM)</option>
                      <option value="Tomorrow Afternoon (1PM - 5PM)">Tomorrow Afternoon (1PM - 5PM)</option>
                      <option value="Tomorrow Evening (6PM - 9PM)">Tomorrow Evening (6PM - 9PM)</option>
                      <option value="Later this Week">Later this Week (Flexible)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+254 7XX XXX XXX or your international number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">What is your project about? (Optional)</label>
                  <textarea 
                    name="projectSummary" 
                    rows="3" 
                    placeholder="Briefly describe what you're building, your target timeline, or main questions..." 
                    value={formData.projectSummary}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-primary discovery-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Confirm 15-Minute Strategy Call</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Value & Trust Guarantee Footer */}
        <div className="discovery-trust-footer">
          <div className="trust-pill">
            <Shield size={14} />
            <span>100% Free & No Obligation</span>
          </div>
          <div className="trust-pill">
            <Sparkles size={14} />
            <span>Actionable Technical Advice</span>
          </div>
          <div className="trust-pill">
            <Clock size={14} />
            <span>Strict 15-Min Focused Time</span>
          </div>
        </div>
      </div>
    </div>
  );
}
