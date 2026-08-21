import React from 'react';
import { CheckCircle, User, Activity, Coffee, Box, Beaker, Zap, Cog, Building, ArrowRight } from 'lucide-react';
import { openQuoteModal } from '../components/QuoteModal';
import './About.css';

import ImgAbout2 from '../assets/10 tr water chiller for Ro water cooling Front.jpeg';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Mahaveer Enterprise</h1>
          <p className="page-subtitle">India's trusted industrial chiller manufacturer since 2010</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-cols-2 about-main-grid">
          <div className="about-content">
            <h2 className="section-title">Our Story</h2>
            <p className="about-text">
              Established in the year 2010, Mahaveer Enterprise has emerged as a leading manufacturer and supplier of a wide range of Industrial Chillers. Based in Ahmedabad, Gujarat, we have built a reputation for delivering high-quality, reliable, and energy-efficient cooling solutions to diverse industries across India.
            </p>
            <p className="about-text">
              Our state-of-the-art manufacturing facility at VR Industrial Park is equipped with the latest technology and machinery, allowing us to engineer products that meet the highest international standards. We believe in continuous innovation and customer-centric design.
            </p>
            
            <div className="mission-vision mt-6">
              <div className="mv-box">
                <h3>Our Mission</h3>
                <p>To provide innovative, energy-efficient, and reliable cooling solutions that empower industries to operate at their highest potential.</p>
              </div>
              <div className="mv-box">
                <h3>Our Vision</h3>
                <p>To be the globally recognized leader in industrial refrigeration by consistently exceeding customer expectations through quality and service.</p>
              </div>
            </div>
          </div>
          
          <div className="about-founder-wrapper">
            <div className="founder-card">
               {/* FOUNDER PHOTO PLACEHOLDER: Replace this placeholder div with real photo when available, e.g. <img src="/path/to/founder.jpg" alt="Founder & CEO" className="founder-image" /> */}
               <div className="founder-avatar-placeholder">
                 <User size={64} className="founder-avatar-icon" />
                 <span className="founder-avatar-label">Leadership</span>
               </div>
               <div className="founder-info">
                 <h3>Founder & CEO</h3>
                 <p>Leading with a vision to revolutionize industrial cooling through innovation and unwavering commitment to quality since 2010.</p>
               </div>
            </div>
            <img src={ImgAbout2} alt="Manufacturing" className="img-accent" style={{ zIndex: -1, opacity: 0.5, right: '-10%', left: 'auto', bottom: '-10%', border: 'none' }} />
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="section section-bg">
        <div className="container text-center">
          <div className="section-header center">
            <span className="section-eyebrow">GLOBAL REACH</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle mt-2">Providing customized cooling solutions for every sector</p>
          </div>
          
          <div className="industries-grid mt-12">
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Box size={32} /></div>
              <h4>Plastics & Moulding</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Activity size={32} /></div>
              <h4>Pharmaceutical</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Coffee size={32} /></div>
              <h4>Food & Beverage</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Beaker size={32} /></div>
              <h4>Chemical</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Zap size={32} /></div>
              <h4>Laser & CNC</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Cog size={32} /></div>
              <h4>Metal & Engineering</h4>
            </div>
            <div className="industry-card-new">
              <div className="industry-icon-wrapper"><Building size={32} /></div>
              <h4>HVAC & Building</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Call to Action */}
      <section className="section cta-section reveal">
        <div className="cta-overlay"></div>
        <div className="container text-center cta-content">
          <h2 className="cta-title">Need a Custom Cooling Solution for Your Industry?</h2>
          <p className="cta-desc">Talk to our thermal engineers to evaluate your facility requirements and get a tailor-made proposal.</p>
          <div className="cta-buttons mt-8">
            <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }} className="btn btn-primary">
              Get a Quote <ArrowRight size={18} />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }} className="btn btn-outline" style={{ marginLeft: '1rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
              Request a Technical Site Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
