import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';
import { Analytics } from '@vercel/analytics/react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Reset animations on route change
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('active', 'observed');
    });

    const observeElements = () => {
      const reveals = document.querySelectorAll('.reveal:not(.observed)');
      reveals.forEach((reveal) => {
        reveal.classList.add('observed');
        observer.observe(reveal);
        
        // Fallback for elements already in view
        setTimeout(() => {
          const rect = reveal.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            reveal.classList.add('active');
          }
        }, 100);
      });
    };

    observeElements();

    // Watch for dynamic DOM changes (e.g., switching tabs)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    const mainEl = document.querySelector('.main-content');
    if (mainEl) {
      mutationObserver.observe(mainEl, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

const pageTitles = {
  '/': 'Mahaveer Enterprise - Industrial Chiller Manufacturer',
  '/about': 'About Us - Mahaveer Enterprise',
  '/products': 'Products - Industrial Chillers | Mahaveer Enterprise',
  '/contact': 'Contact Us - Mahaveer Enterprise',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || 'Mahaveer Enterprise';
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTitle />
      <ScrollToTop />
      <ScrollReveal />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <QuoteModal />
      <Analytics />
    </Router>
  );
}

export default App;
