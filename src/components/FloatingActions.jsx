import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { openQuoteModal } from './QuoteModal';
import './FloatingActions.css';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we scroll down, hide it. Scroll up, show it.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}`} 
        className="floating-whatsapp" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 2C8.273 2 2 8.273 2 16.002c0 2.473.65 4.872 1.884 6.962L2 29.998l7.218-1.895A13.924 13.924 0 0016.002 30c7.728 0 13.998-6.273 13.998-14.002C30 8.273 23.73 2 16.002 2zm0 25.642c-2.106 0-4.17-.565-5.98-1.638l-.427-.253-4.437 1.165 1.183-4.324-.277-.442A11.642 11.642 0 014.358 16.002C4.358 9.58 9.58 4.358 16.002 4.358 22.423 4.358 27.642 9.58 27.642 16.002c0 6.423-5.219 11.64-11.64 11.64zm6.388-8.73c-.35-.175-2.072-1.023-2.392-1.14-.32-.117-.554-.175-.788.175-.233.35-.904 1.14-1.108 1.373-.204.234-.408.263-.758.088-.35-.175-1.48-.545-2.82-1.74-1.04-.93-1.74-2.077-1.945-2.427-.204-.35-.022-.54.153-.714.157-.158.35-.408.525-.613.175-.204.233-.35.35-.583.117-.234.058-.438-.03-.613-.088-.175-.788-1.9-1.08-2.6-.28-.683-.565-.59-.788-.6-.204-.008-.438-.008-.67-.008-.234 0-.613.088-.934.438-.32.35-1.225 1.196-1.225 2.917 0 1.72 1.254 3.383 1.43 3.616.175.234 2.467 3.766 5.98 5.283.836.362 1.488.578 1.996.74.84.267 1.604.23 2.207.138.675-.102 2.072-.846 2.363-1.663.292-.817.292-1.517.204-1.663-.088-.146-.32-.234-.67-.408z" fill="#ffffff"/>
        </svg>
      </a>

      {/* Mobile Sticky Bar */}
      <div className={`mobile-sticky-bar ${isVisible ? '' : 'hidden'}`}>
        <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`} className="sticky-btn sticky-call">
          <Phone size={18} /> Call Now
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }}  className="sticky-btn sticky-quote"><FileText size={18} /> Request Quote</a>
      </div>
    </>
  );
}
