import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-4 footer-content">
        
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo">
            <span style={{color: "var(--accent)"}}>MAHAVEER ENTERPRISE</span>
          </h3>
          <p className="footer-desc">
            One Stop Cooling Solution For Every Industry. India's trusted chiller manufacturer since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><ChevronRight size={16} className="text-accent" /> Home</Link></li>
            <li><Link to="/about"><ChevronRight size={16} className="text-accent" /> About Us</Link></li>
            <li><Link to="/products"><ChevronRight size={16} className="text-accent" /> Our Products</Link></li>
            <li><Link to="/contact"><ChevronRight size={16} className="text-accent" /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={20} />
              <span>135 VR Industrial Park, Singarva Kathwada Road, Singarva Ahmedabad Gujarat 382430</span>
            </li>
            <li>
              <Phone size={20} />
              <span>{import.meta.env.VITE_CONTACT_PHONE_DISPLAY}</span>
            </li>
            <li>
              <Mail size={20} />
              <span><a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} style={{color: 'inherit', textDecoration: 'none'}}>{import.meta.env.VITE_CONTACT_EMAIL}</a></span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <h3>Working Hours</h3>
          <ul className="footer-contact">
            <li>
              <Clock size={20} />
              <span>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Closed</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Mahaveer Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
