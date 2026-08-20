import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Headphones, Wrench, Award, CheckCircle, PenTool, Factory, Activity, Truck, Beaker, Coffee, Box, Cog, Zap, Building } from 'lucide-react';
import { openQuoteModal } from '../components/QuoteModal';
import './Home.css';
import VideoHero from '../assets/hero bg video.mp4';

import Img5TR from '../assets/Other Chiller Front.jpeg';
import Img7_5TR from '../assets/7.5 TR Front Side.png';
import Img2TR from '../assets/2 TR Front Side.jpeg';



function AnimatedNumber({ end, suffix = "", textValue = null }) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (textValue) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const duration = 2000;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [end, hasAnimated, textValue]);

  if (textValue) {
    return <span>{textValue}{suffix && <span className="text-primary">{suffix}</span>}</span>;
  }

  return (
    <span ref={elementRef}>
      {count}
      {suffix && <span className="text-primary">{suffix}</span>}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('why-us');

  return (
    <div className="home-page">
      {/* Massive Hero Section */}
      <section className="hero">
        
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src={VideoHero} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <span className="hero-label">INDUSTRIAL TEMPERATURE CONTROL</span>
            <h1 className="hero-title">
              Precision<br />
              <span className="text-primary">Chiller Systems</span>
            </h1>
            <p className="hero-subtitle">
              Engineered for extreme reliability. We design and manufacture high-capacity cooling solutions for continuous industrial applications across India.
            </p>
            <div className="hero-actions">
              <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }}  className="btn btn-primary">Get a Quote <ArrowRight size={18} /></a>
              <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}`} target="_blank" rel="noreferrer" className="btn btn-outline">
                Talk to Our Engineers
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={Img2TR} alt="Industrial Cooling System" className="hero-img" />
            <div className="hero-floating-card">
              <div className="icon-wrap"><CheckCircle size={20} /></div>
              <div className="text-wrap">
                <strong>15+ Years</strong>
                <span>Manufacturing Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Ticker Strip */}
      <div className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={1000} suffix="+" /></span>
            <span className="stat-text">INSTALLATIONS ACROSS INDIA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={1200} suffix="TR" /></span>
            <span className="stat-text">MAX COOLING CAPACITY</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={15} suffix="+" /></span>
            <span className="stat-text">STATES SERVED</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"><AnimatedNumber end={24} suffix="/7" /></span>
            <span className="stat-text">SERVICE SUPPORT</span>
          </div>
        </div>

      </div>

      {/* Industries We Serve */}
      <section className="section section-bg">
        <div className="container text-center">
          <div className="section-header center">
            <span className="section-eyebrow">GLOBAL REACH</span>
            <h2 className="section-title">Industries We Serve</h2>
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
      </section>

      

      

      {/* Featured Products Snippet */}
      <section className="section text-center">
        <div className="container">
          <div className="section-header center">
            <span className="section-eyebrow">OUR PRODUCT RANGE</span>
            <h2 className="section-title">Industrial Cooling Solutions</h2>
          </div>

          <div className="grid grid-cols-3 mt-12">
            <div className="product-card-home">
              <div className="product-image-home" style={{ backgroundImage: `url(${Img5TR})` }}>
              </div>
              <div className="product-card-home-content">
                <h3>5 TR Air Cooled Water Chiller</h3>
                <p>Heavy-duty performance for massive thermal loads.</p>
                <div className="product-specs-hover">
                  <span>Cap: 5TR - 1000TR</span> | <span>Temp: -5°C to 25°C</span>
                </div>
                <Link to="/products" className="arrow-link">View Specifications <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="product-card-home">
              <div className="product-image-home" style={{ backgroundImage: `url(${Img7_5TR})` }}>
              </div>
              <div className="product-card-home-content">
                <h3>7.5 TR Air Cooled Water Chiller</h3>
                <p>Zero water wastage with maximum thermal efficiency.</p>
                <div className="product-specs-hover">
                  <span>Cap: 1TR - 200TR</span> | <span>Temp: 0°C to 30°C</span>
                </div>
                <Link to="/products" className="arrow-link">View Specifications <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="product-card-home">
              <div className="product-image-home" style={{ backgroundImage: `url(${Img2TR})` }}>
              </div>
              <div className="product-card-home-content">
                <h3>2 TR Air Cooled Water Chiller</h3>
                <p>Continuous uninterrupted cooling for automation.</p>
                <div className="product-specs-hover">
                  <span>Precision: ±1°C</span> | <span>Continuous Duty</span>
                </div>
                <Link to="/products" className="arrow-link">View Specifications <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Merged Why Us / Process Section */}
      <section className="section section-bg reveal" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div className="section-header center mb-8">
            <span className="section-eyebrow">THE MAHAVEER DIFFERENCE</span>
            <h2 className="section-title">Why Partner With Us?</h2>
          </div>

          <div className="tab-container">
            <div className="segmented-control">
              <button 
                className={`segment-btn ${activeTab === 'why-us' ? 'active' : ''}`} 
                onClick={() => setActiveTab('why-us')}
              >
                Our Advantages
              </button>
              <button 
                className={`segment-btn ${activeTab === 'process' ? 'active' : ''}`} 
                onClick={() => setActiveTab('process')}
              >
                Our Process
              </button>
            </div>
          </div>

          <div className="tab-content mt-10">
            {activeTab === 'why-us' && (
              <div className="usp-section fade-in">
                <div className="grid grid-cols-4 usp-grid">
                  <div className="usp-card">
                    <div className="usp-icon-wrapper"><Settings size={32} /></div>
                    <h3>Custom Engineering</h3>
                    <p>Systems tailored exactly to your facility's specific thermal load and environmental constraints.</p>
                  </div>
                  <div className="usp-card">
                    <div className="usp-icon-wrapper"><Award size={32} /></div>
                    <h3>Proven Reliability</h3>
                    <p>Heavy-duty compressors and industrial-grade components built for 24/7 continuous operation.</p>
                  </div>
                  <div className="usp-card">
                    <div className="usp-icon-wrapper"><Wrench size={32} /></div>
                    <h3>Easy Maintenance</h3>
                    <p>Designed with serviceability in mind, minimizing downtime and reducing total cost of ownership.</p>
                  </div>
                  <div className="usp-card">
                    <div className="usp-icon-wrapper"><Headphones size={32} /></div>
                    <h3>Rapid Support</h3>
                    <p>Dedicated nationwide technical team ready to deploy for preventative maintenance and emergency support.</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'process' && (
              <div className="process-section fade-in text-center">
                <div className="process-timeline">
                  <div className="process-step">
                    <div className="process-icon"><PenTool size={28} /></div>
                    <h4>Design</h4>
                    <p>Custom thermal engineering</p>
                  </div>
                  <div className="process-connector"></div>
                  <div className="process-step">
                    <div className="process-icon"><Factory size={28} /></div>
                    <h4>Fabrication</h4>
                    <p>In-house manufacturing</p>
                  </div>
                  <div className="process-connector"></div>
                  <div className="process-step">
                    <div className="process-icon"><Activity size={28} /></div>
                    <h4>Testing/FAT</h4>
                    <p>Rigorous quality checks</p>
                  </div>
                  <div className="process-connector"></div>
                  <div className="process-step">
                    <div className="process-icon"><Truck size={28} /></div>
                    <h4>Installation</h4>
                    <p>On-site deployment</p>
                  </div>
                  <div className="process-connector"></div>
                  <div className="process-step">
                    <div className="process-icon"><Headphones size={28} /></div>
                    <h4>Support</h4>
                    <p>24/7 lifetime service</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Client Marquee - Hidden for now */}

      {/* Call to Action */}
      <section className="section cta-section reveal">
        <div className="cta-overlay"></div>
        <div className="container text-center cta-content">
          <h2 className="cta-title">Let's Design Your Cooling Solution</h2>
          <p className="cta-desc">Connect with our engineering team to evaluate your facility's thermal load requirements and get a customized proposal.</p>
          <div className="cta-buttons mt-8">
            <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }}  className="btn btn-primary">Get a Quote <ArrowRight size={18} /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(); }} className="btn btn-outline" style={{ marginLeft: '1rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
              Request a Technical Site Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
