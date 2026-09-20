import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';
import './ContactSection.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Development',
    budget: '$250 - $500',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'f4f717b3-eaa8-4f1e-9139-39336e93074c';

    if (!accessKey) {
      setSubmitError('Web3Forms access key is missing. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.');
      setIsSubmitting(false);
      return;
    }

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
          message: formData.message,
          service: formData.service,
          budget: formData.budget,
          subject: `New inquiry from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'The form could not be submitted. Please try again.');
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">GET IN TOUCH</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text-cyan">Extraordinary</span> Together
          </h2>
          <p className="section-desc">
            Ready to transform your business digital presence? Send us a message or request a consultation call today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column Contact Information */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-desc">
                Our strategic team is ready to discuss your goals, answer technical questions, and map out your project roadmap.
              </p>

              <div className="info-items-list">
                <div className="info-item">
                  <div className="info-icon-box icon-purple">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="info-label">Email Us</div>
                    <a href="mailto:hello@ascendancysolutions.com" className="info-value">
                      hello@ascendancysolutions.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box icon-cyan">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="info-label">Call / WhatsApp</div>
                    <a href="tel:+18005552723" className="info-value">
                      +1 (800) 555-ASCEND
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box icon-coral">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="info-label">Headquarters</div>
                    <div className="info-value">79 Madison Ave, New York, NY 10016</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box icon-purple">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="info-label">Business Hours</div>
                    <div className="info-value">Monday – Friday: 8:00 AM – 7:00 PM EST</div>
                  </div>
                </div>
              </div>

              <div className="consultation-callout">
                <Sparkles size={20} className="callout-sparkle" />
                <div>
                  <strong>Need Immediate Assistance?</strong>
                  <p>Book a direct 15-minute video call with our Technical Director.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              {submitted ? (
                <div className="form-success-state">
                  <CheckCircle className="success-icon animate-float" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our senior project lead has received your inquiry and will reach out to <strong>{formData.email}</strong> within 2 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Web Design & Development',
                        budget: '$250 - $500',
                        message: ''
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-heading">Send Us a Message</h3>

                  {submitError && (
                    <div className="form-error-message" role="alert">
                      {submitError}
                    </div>
                  )}

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
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
                        placeholder="john@company.com" 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Primary Service Interested In</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Web Design & Development">Website Design & Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="E-Commerce Storefronts">E-Commerce & Digital Storefronts</option>
                        <option value="Graphics Design & Branding">Graphics Design & Branding</option>
                        <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                        <option value="SEO & SEM Growth Marketing">SEO & Growth Marketing</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Estimated Budget Range</label>
                      <select 
                        name="budget" 
                        value={formData.budget} 
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Under $250">Under $250</option>
                        <option value="$250 - $500">$250 - $500</option>
                        <option value="$500 - $750">$500 - $750</option>
                        <option value="$750 - $1,000">$750 - $1,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Details & Requirements *</label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder="Tell us about your project goals, target audience, and key requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-primary form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message & Schedule Call</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
