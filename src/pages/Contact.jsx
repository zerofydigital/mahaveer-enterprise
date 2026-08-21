import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Enforce limits
    if (name === 'name' && value.length > 50) return;
    if (name === 'email' && value.length > 100) return;
    if (name === 'message' && value.length > 500) return;

    // Phone number strict validation: only digits, max 10
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    const hasTags = (str) => /<[^>]*>|script/i.test(str);
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (hasTags(formData.name)) {
      newErrors.name = 'Invalid characters detected';
    } else if (!/^[a-zA-Z\s\.,'-]+$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name (letters only)';
    }
    
    // Only accept genuine Indian 10-digit mobile numbers (starting with 6-9)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    } else if (/^(\d)\1{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a genuine phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (hasTags(formData.email)) {
      newErrors.email = 'Invalid characters detected';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message';
    } else if (hasTags(formData.message)) {
      newErrors.message = 'HTML or Script tags are not allowed';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL}`, {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert("Failed to submit form. Please try again.");
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our experts for customized cooling solutions</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-cols-2 contact-grid">
          
          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-intro">
              Whether you need a new industrial chiller, require maintenance, or want to discuss a custom cooling requirement, our team is ready to assist you.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-box"><MapPin size={24} /></div>
                <div>
                  <h3>Head Office & Factory</h3>
                  <p>135 VR Industrial Park, Singarva Kathwada Road, Singarva Ahmedabad Gujarat 382430</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box"><Phone size={24} /></div>
                <div>
                  <h3>Phone Number</h3>
                  <p>{import.meta.env.VITE_CONTACT_PHONE_DISPLAY}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box"><Mail size={24} /></div>
                <div>
                  <h3>Email Address</h3>
                  <p><a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} style={{color: 'inherit', textDecoration: 'none'}}>{import.meta.env.VITE_CONTACT_EMAIL}</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon-box"><Clock size={24} /></div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM to 7:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              {isSubmitted ? (
                <div className="success-message">
                  <p>Thank you for your enquiry. Our team will get back to you shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Requirement / Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full submit-btn">
                    Submit Enquiry <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="map-section">
        {/* Using a placeholder iframe for the map. For real implementation, replace with actual Google Maps embed link for the address */}
        <iframe 
          title="Mahaveer Enterprise Location"
          src="https://maps.google.com/maps?q=23.0489619,72.7021779&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
