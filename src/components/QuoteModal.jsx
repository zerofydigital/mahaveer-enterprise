import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import './QuoteModal.css';

export const openQuoteModal = (productName = '') => {
  window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { productName } }));
};

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    product: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      if (e.detail && e.detail.productName) {
        setFormData(prev => ({ ...prev, product: e.detail.productName }));
      } else {
        setFormData(prev => ({ ...prev, product: 'General Inquiry' }));
      }
    };
    window.addEventListener('open-quote-modal', handleOpen);
    return () => window.removeEventListener('open-quote-modal', handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Enforce limits
    if (name === 'name' && value.length > 50) return;
    if (name === 'email' && value.length > 100) return;
    if (name === 'requirement' && value.length > 500) return;

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
    
    // Validation
    const newErrors = {};
    const hasTags = (str) => /<[^>]*>|script/i.test(str);

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (hasTags(formData.name)) {
      newErrors.name = 'Invalid characters detected';
    } else if (!/^[a-zA-Z\s\.,'-]+$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name (letters only)';
    }
    
    // Only accept genuine Indian 10-digit mobile numbers
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    } else if (/^(\d)\1{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a genuine phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (hasTags(formData.email)) {
      newErrors.email = 'Invalid characters detected';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please provide your cooling requirements';
    } else if (hasTags(formData.requirement)) {
      newErrors.requirement = 'HTML or Script tags are not allowed';
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
      console.log('Quote Request submitted:', data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormData({ name: '', email: '', phone: '', requirement: '', product: '' });
        setErrors({});
      }, 3000);
    })
    .catch(error => {
      console.error('Error submitting quote request:', error);
      alert("Failed to submit request. Please try again.");
    });
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="quote-modal-content" onClick={e => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        
        <div className="quote-modal-header">
          <h2>Request a Quote</h2>
          <p>Fill out the form below and our engineering team will get back to you shortly.</p>
        </div>

        {isSubmitted ? (
          <div className="quote-success-message">
            <div className="success-icon"><Send size={48} /></div>
            <h3>Request Sent!</h3>
            <p>Thank you for your interest. We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-form" noValidate>
            <div className="form-group">
              <label htmlFor="quote-name">Full Name *</label>
              <input 
                type="text" 
                id="quote-name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="quote-email">Email Address</label>
                <input 
                  type="email" 
                  id="quote-email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="quote-phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="quote-phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="quote-req">Cooling Requirement / Product Interest *</label>
              <textarea 
                id="quote-req" 
                name="requirement" 
                rows="3" 
                required
                value={formData.requirement}
                onChange={handleChange}
                className={`form-control ${errors.requirement ? 'is-invalid' : ''}`}
                  placeholder="Briefly describe your application and capacity needs..."
                ></textarea>
                {errors.requirement && <span className="error-text">{errors.requirement}</span>}
              </div>
            
            <button type="submit" className="btn btn-primary w-full submit-btn">
              Get Quote <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
