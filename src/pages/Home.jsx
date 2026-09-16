import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Settings, Headphones, Wrench, Award, CheckCircle, CheckCircle2, Check,
  PenTool, Factory, Activity, Truck, Beaker, Coffee, Box, Cog, Zap, Building,
  ChevronLeft, ChevronRight, Wind, Droplets, Sparkles, ShieldCheck, Phone
} from 'lucide-react';
import { openQuoteModal } from '../utils/openQuoteModal';
import './Home.css';
import VideoHero from '../assets/hero bg video.mp4';

// Machine showcase images
import ImgAirCooled from '../assets/7.5 TR Front Side.png';
import ImgWaterCooled from '../assets/7.5 Water Chiller Front.jpeg';
import ImgScrewChiller from '../assets/25 TR Air Cooled Screw Chiller.jpeg';
import ImgROChiller from '../assets/10 tr water chiller for Ro water cooling Front.jpeg';
import Img2TR from '../assets/2 TR Front Side.jpeg';
import Img5TR from '../assets/Different Chiller Front.jpeg';
import Img7_5TR from '../assets/7.5 TR Front Side.png';

const heroSlides = [
  {
    id: "air-cooled",
    category: "Air Cooled",
    tabTitle: "Air Cooled Chillers",
    tabCapacity: "1.5 – 90 TR",
    eyebrow: "INDUSTRIAL TEMPERATURE CONTROL",
    titlePrefix: "Heavy-Duty",
    titleHighlight: "Air Cooled Chillers",
    subtitle: "Engineered for harsh ambient conditions up to 50°C. Zero cooling water loss, dual sickle-blade axial fans, and rapid thermal pull-down for 24/7 continuous manufacturing.",
    specs: [
      { label: "Capacity Range", value: "1.5 TR – 90 TR" },
      { label: "Temp Precision", value: "5°C to 25°C (±1°C)" },
      { label: "Internal Tank", value: "SS304 Insulated" },
      { label: "Best For", value: "Plastics, Lasers, CNC" },
    ],
    image: ImgAirCooled,
    badgeType: "Air Cooled Series",
    badgeCapacity: "1.5 – 90 TR",
    floatingCard: {
      number: "15+ Years",
      label: "Proven Reliability"
    },
    primaryCtaText: "Explore Air Cooled",
    primaryCtaLink: "/products",
    primaryCtaState: { category: "Air Cooled" },
    quoteTopic: "Air Cooled Chiller Inquiry"
  },
  {
    id: "water-cooled",
    category: "Water Cooled",
    tabTitle: "Water Cooled Chillers",
    tabCapacity: "7.5 – 50 TR",
    eyebrow: "MAXIMUM THERMODYNAMIC EFFICIENCY",
    titlePrefix: "Industrial",
    titleHighlight: "Water Cooled Chillers",
    subtitle: "Cleanable shell-and-tube condensers engineered for facilities with cooling towers. Delivers 30% to 40% lower electrical power consumption per ton of refrigeration.",
    specs: [
      { label: "Capacity Range", value: "7.5 TR – 50 TR" },
      { label: "Power Savings", value: "Up to 40% Lower kW" },
      { label: "Condenser", value: "Cleanable Shell & Tube" },
      { label: "Best For", value: "Pharma, Chemical, Moulding" },
    ],
    image: ImgWaterCooled,
    badgeType: "Water Cooled Series",
    badgeCapacity: "7.5 – 50 TR",
    floatingCard: {
      number: "40% Power Save",
      label: "vs Standard Air-Cooled"
    },
    primaryCtaText: "Explore Water Cooled",
    primaryCtaLink: "/products",
    primaryCtaState: { category: "Water Cooled" },
    quoteTopic: "Water Cooled Chiller Inquiry"
  },
  {
    id: "screw-chillers",
    category: "Screw Chillers",
    tabTitle: "Screw Chillers",
    tabCapacity: "25 – 90 TR",
    eyebrow: "CONTINUOUS MISSION-CRITICAL PLANTS",
    titlePrefix: "High-Capacity",
    titleHighlight: "Screw Chillers",
    subtitle: "Semi-hermetic twin-screw compressors with stepless slide valve capacity modulation (25%–100%) and intelligent PLC touch automation for large factory campuses.",
    specs: [
      { label: "Capacity Range", value: "25 TR – 90 TR" },
      { label: "Modulation", value: "25% - 100% Stepless" },
      { label: "Automation", value: "Intelligent PLC Touch" },
      { label: "Best For", value: "Central HVAC & Heavy Plants" },
    ],
    image: ImgScrewChiller,
    badgeType: "Screw Plant Series",
    badgeCapacity: "25 – 90 TR",
    floatingCard: {
      number: "Intelligent PLC",
      label: "Stepless Capacity Control"
    },
    primaryCtaText: "Explore Screw Chillers",
    primaryCtaLink: "/products",
    primaryCtaState: { category: "Screw Chillers" },
    quoteTopic: "Screw Chiller Inquiry"
  },
  {
    id: "ro-cooling",
    category: "RO Water Cooling",
    tabTitle: "RO Water Chillers",
    tabCapacity: "2 – 10 TR",
    eyebrow: "FOOD-GRADE SANITARY COOLING",
    titlePrefix: "SS304 Certified",
    titleHighlight: "RO Water Chillers",
    subtitle: "100% sanitary stainless steel fluid circuits engineered for continuous pure water cooling in commercial bottling plants, beverage packaging, and cleanrooms.",
    specs: [
      { label: "Capacity Range", value: "2 TR – 10 TR" },
      { label: "Fluid Contact", value: "100% Food-Grade SS304" },
      { label: "Output Flow", value: "1,000 – 5,000+ LPH" },
      { label: "Best For", value: "Bottling Plants & Pure RO" },
    ],
    image: ImgROChiller,
    badgeType: "RO Sanitary Series",
    badgeCapacity: "2 – 10 TR",
    floatingCard: {
      number: "100% SS304",
      label: "Food-Grade Pure Contact"
    },
    primaryCtaText: "Explore RO Chillers",
    primaryCtaLink: "/products",
    primaryCtaState: { category: "RO Water Cooling" },
    quoteTopic: "RO Water Chiller Inquiry"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance timer (6 seconds per slide)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="home-page">
      {/* Creative Interactive Hero Slider Section */}
      <section 
        className="hero hero-slider-section"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Cinematic Video Background with Industrial Overlay */}
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src={VideoHero} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>

        {/* Main Content Stage */}
        <div className="container hero-content">
          <div className="hero-text-wrapper" key={`text-${currentSlide}`}>
            {/* Corporate Trust Tag */}
            <div className="hero-trust-tag">
              <ShieldCheck size={14} className="trust-icon" />
              <span>ISO 9001:2015 CERTIFIED • OEM CHILLER MANUFACTURER</span>
            </div>

            <h1 className="hero-title">
              {currentSlideData.titlePrefix}{" "}
              <span className="hero-title-accent">{currentSlideData.titleHighlight}</span>
            </h1>

            <p className="hero-subtitle">
              {currentSlideData.subtitle}
            </p>

            {/* Industrial Technical Highlights Matrix */}
            <div className="hero-specs-row">
              {currentSlideData.specs.map((spec, i) => (
                <div key={i} className="hero-spec-card">
                  <span className="hero-spec-val">{spec.value}</span>
                  <span className="hero-spec-lbl">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* Corporate Action Buttons */}
            <div className="hero-actions">
              <button 
                type="button"
                onClick={() => openQuoteModal(currentSlideData.quoteTopic)}
                className="btn btn-primary hero-btn-primary"
              >
                Request Technical Quote <ArrowRight size={18} />
              </button>
              <Link 
                to={currentSlideData.primaryCtaLink} 
                state={currentSlideData.primaryCtaState}
                className="btn btn-outline hero-btn-secondary"
              >
                {currentSlideData.primaryCtaText}
              </Link>
            </div>

            {/* Fast B2B Direct Trust Markers */}
            <div className="hero-trust-bullets">
              <span className="trust-bullet-item"><Check size={13} className="bullet-icon" /> Factory Direct OEM Pricing</span>
              <span className="trust-bullet-item"><Check size={13} className="bullet-icon" /> Pan-India On-Site Support</span>
              <span className="trust-bullet-item"><Check size={13} className="bullet-icon" /> Custom Engineering</span>
            </div>
          </div>

          {/* Machine Visual Showcase Stage */}
          <div className="hero-visual" key={`visual-${currentSlide}`}>
            <div className="hero-showcase-stage">
              {/* Product Stage Console Card */}
              <div className="showcase-console-card">
                {/* Console Top Bar */}
                <div className="console-header">
                  <div className="console-status">
                    <span className="status-live-dot"></span>
                    <span className="status-text">OEM FACTORY VERIFIED</span>
                  </div>
                  <div className="console-capacity-pill">
                    {currentSlideData.badgeCapacity}
                  </div>
                </div>

                {/* Chiller Machine Display Window */}
                <div className="console-viewport">
                  <div className="console-ambient-glow"></div>
                  <img 
                    src={currentSlideData.image} 
                    alt={currentSlideData.titleHighlight} 
                    className="hero-img" 
                  />
                </div>

                {/* Console Bottom Specification Strip */}
                <div className="console-footer">
                  <div className="console-footer-item">
                    <span className="footer-label">SERIES</span>
                    <strong className="footer-val">{currentSlideData.badgeType}</strong>
                  </div>
                  <div className="console-footer-divider"></div>
                  <div className="console-footer-item">
                    <span className="footer-label">BENCHMARK</span>
                    <strong className="footer-val text-accent">{currentSlideData.floatingCard.number}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Product Navigation Bar */}
        <div className="hero-slider-dock">
          <div className="container hero-dock-container">
            {/* Category Segmented Tabs */}
            <div className="hero-dock-tabs">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`hero-dock-tab ${isActive ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`View ${slide.tabTitle}`}
                  >
                    <div className="tab-progress-track">
                      {isActive && isAutoPlaying && <div className="tab-progress-fill"></div>}
                      {isActive && !isAutoPlaying && <div className="tab-progress-fill paused"></div>}
                    </div>
                    <div className="tab-content-inner">
                      <span className="tab-icon">
                        {slide.category.includes("Air") && <Wind size={15} />}
                        {slide.category.includes("Water") && <Droplets size={15} />}
                        {slide.category.includes("Screw") && <Cog size={15} />}
                        {slide.category.includes("RO") && <Sparkles size={15} />}
                      </span>
                      <div className="tab-text-group">
                        <span className="tab-title">{slide.tabTitle}</span>
                        <span className="tab-sub">{slide.tabCapacity}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slide Navigation & Counter */}
            <div className="hero-dock-controls">
              <button 
                type="button" 
                className="hero-dock-arrow-btn" 
                onClick={goToPrevSlide} 
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="hero-dock-counter">
                <span className="counter-current">0{currentSlide + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">0{heroSlides.length}</span>
              </div>
              <button 
                type="button" 
                className="hero-dock-arrow-btn" 
                onClick={goToNextSlide} 
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
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
              <div className="product-image-home">
                <img src={Img2TR} alt="2 TR Air Cooled Water Chiller" className="product-home-img" loading="lazy" />
                <span className="home-card-badge-type">Air Cooled</span>
                <span className="home-card-badge-tonnage">2 TR</span>
              </div>
              <div className="product-card-home-content">
                <h3>2 TR Air Cooled Water Chiller</h3>
                <p>Ultra-compact continuous uninterrupted cooling for CNC, laser, and automation setups.</p>
                <div className="product-home-specs-grid">
                  <div><span className="spec-sub">Cap:</span> <strong>2 TR (7 kW)</strong></div>
                  <div><span className="spec-sub">Temp:</span> <strong>5°C to 20°C</strong></div>
                  <div><span className="spec-sub">Tank:</span> <strong>SS304 Insulated</strong></div>
                  <div><span className="spec-sub">Control:</span> <strong>PID Micro</strong></div>
                </div>
                <div className="product-home-card-actions">
                  <Link to="/products" className="btn-home-card-specs">View Specs <ArrowRight size={14} /></Link>
                  <button type="button" className="btn-home-card-quote" onClick={() => openQuoteModal("2 TR Air Cooled Water Chiller")}>Quick Quote</button>
                </div>
              </div>
            </div>

            <div className="product-card-home">
              <div className="product-image-home">
                <img src={Img5TR} alt="5 TR Air Cooled Water Chiller" className="product-home-img" loading="lazy" />
                <span className="home-card-badge-type">Air Cooled</span>
                <span className="home-card-badge-tonnage">5 TR</span>
              </div>
              <div className="product-card-home-content">
                <h3>5 TR Air Cooled Water Chiller</h3>
                <p>Heavy-duty performance for massive thermal loads and industrial machinery.</p>
                <div className="product-home-specs-grid">
                  <div><span className="spec-sub">Cap:</span> <strong>5 TR (17.5 kW)</strong></div>
                  <div><span className="spec-sub">Temp:</span> <strong>5°C to 25°C</strong></div>
                  <div><span className="spec-sub">Tank:</span> <strong>SS304 Insulated</strong></div>
                  <div><span className="spec-sub">Control:</span> <strong>PID Micro</strong></div>
                </div>
                <div className="product-home-card-actions">
                  <Link to="/products" className="btn-home-card-specs">View Specs <ArrowRight size={14} /></Link>
                  <button type="button" className="btn-home-card-quote" onClick={() => openQuoteModal("5 TR Air Cooled Water Chiller")}>Quick Quote</button>
                </div>
              </div>
            </div>

            <div className="product-card-home">
              <div className="product-image-home">
                <img src={Img7_5TR} alt="7.5 TR Air Cooled Water Chiller" className="product-home-img" loading="lazy" />
                <span className="home-card-badge-type">Air Cooled</span>
                <span className="home-card-badge-tonnage">7.5 TR</span>
              </div>
              <div className="product-card-home-content">
                <h3>7.5 TR Air Cooled Water Chiller</h3>
                <p>Zero water wastage with dual high-CFM axial fans and maximum thermal efficiency.</p>
                <div className="product-home-specs-grid">
                  <div><span className="spec-sub">Cap:</span> <strong>7.5 TR (26.3 kW)</strong></div>
                  <div><span className="spec-sub">Temp:</span> <strong>5°C to 25°C</strong></div>
                  <div><span className="spec-sub">Tank:</span> <strong>SS304 Insulated</strong></div>
                  <div><span className="spec-sub">Control:</span> <strong>PID Micro</strong></div>
                </div>
                <div className="product-home-card-actions">
                  <Link to="/products" className="btn-home-card-specs">View Specs <ArrowRight size={14} /></Link>
                  <button type="button" className="btn-home-card-quote" onClick={() => openQuoteModal("7.5 TR Air Cooled Water Chiller")}>Quick Quote</button>
                </div>
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
