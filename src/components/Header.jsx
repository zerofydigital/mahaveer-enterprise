import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { openQuoteModal } from './QuoteModal';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-content">
          <p>India's Trusted Chiller Manufacturer Since 2010</p>
          <div className="header-contact">
            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className="phone-link">
              <Phone size={16} /> {import.meta.env.VITE_CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container header-main-content">
          <Link to="/" className="logo">
            <span className="logo-text-primary">MAHAVEER ENTERPRISE</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About Us</Link>
            
            <div className="nav-dropdown-container">
              <Link to="/products" className="nav-link" onClick={toggleMenu}>Products</Link>
              <div className="nav-dropdown">
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Chilling Plants</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Industrial Water Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Oil Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Online R.O Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Process Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Glycol Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>Water Chiller</Link>
                <Link to="/products" className="dropdown-link" onClick={toggleMenu}>AC Outdoor Unit Online Chiller</Link>
              </div>
            </div>

            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            <a href="#" className="btn btn-primary get-quote-btn" onClick={(e) => { e.preventDefault(); openQuoteModal(); toggleMenu(); }}>Get a Quote</a>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
