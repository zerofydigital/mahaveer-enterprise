import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { openQuoteModal } from '../utils/openQuoteModal';
import logoEmblem from '../assets/logo-emblem.png';
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
          <Link to="/" className="logo" aria-label="Mahaveer Enterprise Home">
            <img src={logoEmblem} alt="Mahaveer Enterprise Logo" className="header-logo-img" />
            <div className="logo-text-group">
              <span className="logo-title">MAHAVEER ENTERPRISE</span>
              <span className="logo-tagline">Industrial Chiller Solutions</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>About Us</NavLink>
            
            <div className="nav-dropdown-container">
              <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>Products</NavLink>
              <div className="nav-dropdown">
                <Link to="/products" state={{ category: "Air Cooled" }} className="dropdown-link" onClick={toggleMenu}>Air Cooled Chillers</Link>
                <Link to="/products" state={{ category: "Water Cooled" }} className="dropdown-link" onClick={toggleMenu}>Water Cooled Chillers</Link>
                <Link to="/products" state={{ category: "RO Water Cooling" }} className="dropdown-link" onClick={toggleMenu}>RO Water Cooling</Link>
                <Link to="/products" state={{ category: "Screw Chillers" }} className="dropdown-link" onClick={toggleMenu}>Screw Chillers</Link>
              </div>
            </div>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>Contact</NavLink>
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
