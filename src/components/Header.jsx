import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { openQuoteModal } from '../utils/openQuoteModal';
import logoEmblem from '../assets/logo-emblem.png';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductsDropdownOpen((prev) => !prev);
  };

  // Close menu and dropdown whenever route/path changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menu when viewport is resized to desktop width (> 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      {/* Top utility contact bar */}
      <div className="header-top">
        <div className="container header-top-content">
          <p className="header-top-tagline">India's Trusted Chiller Manufacturer Since 2010</p>
          <div className="header-contact">
            <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className="phone-link">
              <Phone size={15} /> {import.meta.env.VITE_CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header Bar */}
      <div className="header-main">
        <div className="container header-main-content">
          <Link to="/" className="logo" aria-label="Mahaveer Enterprise Home" onClick={closeMenu}>
            <img src={logoEmblem} alt="Mahaveer Enterprise Logo" className="header-logo-img" />
            <div className="logo-text-group">
              <span className="logo-title">MAHAVEER ENTERPRISE</span>
              <span className="logo-tagline">Industrial Chiller Solutions</span>
            </div>
          </Link>
          
          {/* Backdrop overlay for mobile drawer */}
          <div 
            className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} 
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Navigation drawer / menu */}
          <nav 
            className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
            aria-label="Main Navigation"
          >
            <div className="nav-links-wrapper">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              
              {/* Products Dropdown container */}
              <div 
                className={`nav-dropdown-container ${isProductsDropdownOpen ? 'dropdown-expanded' : ''}`}
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 1024) setIsProductsDropdownOpen(false);
                }}
              >
                <div className="nav-dropdown-trigger-row">
                  <NavLink 
                    to="/products" 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                    onClick={closeMenu}
                  >
                    Products
                  </NavLink>
                  <button 
                    type="button" 
                    className={`dropdown-chevron-btn ${isProductsDropdownOpen ? 'open' : ''}`}
                    onClick={toggleProductsDropdown}
                    aria-label="Toggle products categories submenu"
                    aria-expanded={isProductsDropdownOpen}
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
                
                <div className="nav-dropdown">
                  <Link 
                    to="/products" 
                    state={{ category: "All" }} 
                    className="dropdown-link dropdown-link-all" 
                    onClick={closeMenu}
                  >
                    All Products
                  </Link>
                  <Link 
                    to="/products" 
                    state={{ category: "Air Cooled" }} 
                    className="dropdown-link" 
                    onClick={closeMenu}
                  >
                    Air Cooled Chillers
                  </Link>
                  <Link 
                    to="/products" 
                    state={{ category: "Water Cooled" }} 
                    className="dropdown-link" 
                    onClick={closeMenu}
                  >
                    Water Cooled Chillers
                  </Link>
                  <Link 
                    to="/products" 
                    state={{ category: "RO Water Cooling" }} 
                    className="dropdown-link" 
                    onClick={closeMenu}
                  >
                    RO Water Cooling
                  </Link>
                  <Link 
                    to="/products" 
                    state={{ category: "Screw Chillers" }} 
                    className="dropdown-link" 
                    onClick={closeMenu}
                  >
                    Screw Chillers
                  </Link>
                </div>
              </div>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </div>

            <div className="nav-actions-wrapper">
              <a 
                href="#" 
                className="btn btn-primary get-quote-btn" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  closeMenu();
                  openQuoteModal(); 
                }}
              >
                Get a Quote
              </a>
              
              {/* Mobile Drawer Quick Contact info */}
              <div className="mobile-drawer-footer">
                <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className="mobile-drawer-phone" onClick={closeMenu}>
                  <Phone size={15} /> {import.meta.env.VITE_CONTACT_PHONE_DISPLAY}
                </a>
                <span className="mobile-drawer-hours">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </nav>
          
          {/* Mobile hamburger toggle button */}
          <button 
            type="button"
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}
