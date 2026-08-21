import React, { useState, useEffect } from "react";
import { Search, X, Check, Droplets, Thermometer, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Products.css";
import { openQuoteModal } from "../components/QuoteModal";

// Importing images
import Img5TR_2 from "../assets/Different Chiller Front.jpeg";
import Img5TR_3 from "../assets/Different Chiller Side.jpeg";
import Img5TR_4 from "../assets/Different Chiller Back And Side.jpeg";

import Img7_5TR from "../assets/7.5 TR Front.jpeg";
import Img7_5TR_3 from "../assets/7.5 TR Front Side.png";
import Img7_5TR_4 from "../assets/7.5 TR Back.jpeg";

import Img2TR from "../assets/2 TR Front Side.jpeg";
import Img2TR_2 from "../assets/2 TR Chiller Side.jpeg";
import Img2TR_3 from "../assets/2 TR Chiller SIde Opp.jpeg";
import Img2TR_4 from "../assets/2 TR Chiller Template.jpeg";

import ImgOther from "../assets/10 tr water chiller for Ro water cooling Front.jpeg";
import ImgOther_2 from "../assets/10 tr water chiller for Ro water cooling Back.jpeg";

import Img3TR from "../assets/3 tr water chiller in outdoor unit for Ro water cooling Front.jpeg";
import Img3TR_2 from "../assets/3 tr water chiller in outdoor unit for Ro water cooling Side.jpeg";
import Img3TR_3 from "../assets/3 tr water chiller in outdoor unit for Ro water cooling Back.jpeg";

import Img7_5TR_New_Front from "../assets/7.5 Water Chiller Front.jpeg";
import Img7_5TR_New_Side from "../assets/7.5 Water Chiller side.jpeg";
import Img7_5TR_New_Back from "../assets/7.5 Water Chiller Back.jpeg";

import Img2TR_RO_Front from "../assets/2 tr water chiller for Ro water cooling Front.jpeg";
import Img2TR_RO_Side from "../assets/2 tr water chiller for Ro water cooling Side.jpeg";
import Img2TR_RO_OpSide from "../assets/2 tr water chiller for Ro water cooling op side.jpeg";
import Img2TR_RO_Back from "../assets/2 tr water chiller for Ro water cooling Back.jpeg";

import Img5TR_RO_Front from "../assets/5tr water chiller for Ro water cooling Front.jpeg";
import Img5TR_RO_Side from "../assets/5tr water chiller for Ro water cooling Side.jpeg";
import Img5TR_RO_Back from "../assets/5tr water chiller for Ro water cooling Back.jpeg";

const chillerProducts = [
  {
    id: 1,
    name: "5 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    description: "High efficiency V-Type condenser chiller with SS304 insulated water tank and compact design.",
    features: ["High Efficiency V-Type Condenser", "Low Noise & Energy Efficient Fans", "SS304 Insulated Water Tank", "Digital Temperature Controller", "Powder Coated MS Body"],
    tempRange: "5°C to 25°C",
    capacity: "5 TR",
    image: Img5TR_2,
    images: [Img5TR_2, Img5TR_3, Img5TR_4]
  },
  {
    id: 2,
    name: "7.5 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    description: "Powerful cooling performance with Scroll type compressor and Air-Cooled condenser. Suitable for plastic injection, laser cutting, and food industry.",
    features: ["High Pressure & Low Pressure Protection", "Compressor Overload Protection", "Anti Short-Cycle Compressor Delay", "Multiple Protection Functions"],
    tempRange: "5°C to 25°C",
    capacity: "7.5 TR",
    image: Img7_5TR,
    images: [Img7_5TR, Img7_5TR_3, Img7_5TR_4]
  },
  {
    id: 3,
    name: "2 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    description: "Compact and robust 2 TR cooling solution designed for optimal performance in tight spaces.",
    features: ["Compact Footprint", "High Efficiency Compressors", "User-friendly Control Panel", "Easy Maintenance"],
    tempRange: "5°C to 20°C",
    capacity: "2 TR",
    image: Img2TR,
    images: [Img2TR, Img2TR_2, Img2TR_3]
  },
  {
    id: 4,
    name: "10 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    description: "High-capacity 10 TR water chiller designed for intensive RO water cooling applications.",
    features: ["Ideal for RO Water Cooling", "High Capacity", "Continuous Operation", "Reliable Performance"],
    tempRange: "5°C to 25°C",
    capacity: "10 TR",
    image: ImgOther,
    images: [ImgOther, ImgOther_2]
  },
  {
    id: 5,
    name: "3 TR Water Chiller (Outdoor Unit)",
    category: "RO Water Cooling",
    description: "3 TR water chiller designed in an outdoor unit specifically for RO water cooling applications.",
    features: ["Outdoor Unit Design", "Ideal for RO Water Cooling", "Weather Resistant", "High Efficiency Cooling"],
    tempRange: "5°C to 25°C",
    capacity: "3 TR",
    image: Img3TR,
    images: [Img3TR, Img3TR_2, Img3TR_3]
  },
  {
    id: 6,
    name: "7.5 TR Water Chiller",
    category: "Water Cooled",
    description: "High-performance 7.5 TR water chiller engineered for demanding industrial processes.",
    features: ["High Performance Cooling", "Durable Build", "Energy Efficient", "Industrial Grade Components"],
    tempRange: "5°C to 25°C",
    capacity: "7.5 TR",
    image: Img7_5TR_New_Front,
    images: [Img7_5TR_New_Front, Img7_5TR_New_Side, Img7_5TR_New_Back]
  },
  {
    id: 7,
    name: "2 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    description: "Compact and efficient 2 TR water chiller specially designed for RO water cooling systems.",
    features: ["Optimized for RO Systems", "Compact Design", "Energy Efficient", "Reliable Operation"],
    tempRange: "5°C to 25°C",
    capacity: "2 TR",
    image: Img2TR_RO_Front,
    images: [Img2TR_RO_Front, Img2TR_RO_Side, Img2TR_RO_OpSide, Img2TR_RO_Back]
  },
  {
    id: 8,
    name: "5 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    description: "Robust 5 TR water chiller optimized for large-scale RO water cooling setups.",
    features: ["Optimized for RO Systems", "Heavy Duty Design", "Energy Efficient", "Reliable Operation"],
    tempRange: "5°C to 25°C",
    capacity: "5 TR",
    image: Img5TR_RO_Front,
    images: [Img5TR_RO_Front, Img5TR_RO_Side, Img5TR_RO_Back]
  }
];

const categories = ["All", "Air Cooled", "Water Cooled", "RO Water Cooling", "Heavy Duty"];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [selectedProduct]);

  const filteredProducts = chillerProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Industrial Chiller Range</h1>
          <p className="page-subtitle">Explore our complete range of precision temperature control systems designed for manufacturing reliability.</p>
        </div>
      </div>

      <div className="container section">
        <div className="products-controls">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 products-grid mt-12">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-card reveal"
              onClick={() => setSelectedProduct(product)}
            >
              <div
                className="product-card-image"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <span className="product-category-badge">{product.category}</span>
                <div className="product-card-hover-specs">
                  <div><strong>Capacity:</strong> {product.capacity}</div>
                  <div><strong>Range:</strong> {product.tempRange}</div>
                </div>
              </div>
              <div className="product-card-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc-short">{product.description.substring(0, 75)}...</p>
                <div className="product-card-footer">
                  <span className="text-primary font-semibold text-sm">View Specifications</span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={24} />
            </button>

            <div className="modal-body">
              <div className="modal-gallery-container">
                <div
                  className="modal-image"
                  style={{ backgroundImage: `url(${selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image})` }}
                >
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <>
                      <button className="gallery-nav prev" onClick={prevImage}><ChevronLeft size={24} /></button>
                      <button className="gallery-nav next" onClick={nextImage}><ChevronRight size={24} /></button>
                    </>
                  )}
                </div>
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className="modal-thumbnails">
                    {selectedProduct.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumbnail ${currentImageIndex === idx ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <span className="modal-badge">{selectedProduct.category}</span>
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-desc">{selectedProduct.description}</p>

                <div className="modal-specs">
                  <div className="spec-item">
                    <Droplets size={20} className="text-primary" />
                    <div>
                      <span className="spec-label">Capacity</span>
                      <span className="spec-value">{selectedProduct.capacity}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <Thermometer size={20} className="text-primary" />
                    <div>
                      <span className="spec-label">Temp Range</span>
                      <span className="spec-value">{selectedProduct.tempRange}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-features">
                  <h4>Technical Specifications</h4>
                  <ul>
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <Check size={16} className="text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a href="#" onClick={(e) => { e.preventDefault(); openQuoteModal(selectedProduct.name); }}  className="btn btn-primary w-full text-center block" style={{ display: 'block' }}>Get a Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
