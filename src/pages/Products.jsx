import React, { useState, useEffect } from "react";
import { 
  Search, X, Check, CheckCircle, CheckCircle2, Droplets, Thermometer, 
  ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Phone, MessageCircle,
  Wind, ShieldCheck, SlidersHorizontal, Sparkles
} from "lucide-react";
import { useLocation } from 'react-router-dom';
import "./Products.css";
import { openQuoteModal } from "../utils/openQuoteModal";

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

import Img1_5TR_Front from "../assets/1.5 TR Process Chiller Front.jpeg";
import Img1_5TR_Side from "../assets/1.5 TR Process Chiller Side.jpeg";
import Img1_5TR_Angle from "../assets/1.5 TR Process Chiller Angle.jpeg";

import Img15TR_Front from "../assets/15 TR Open Type Compressor Process Chiller Front.jpeg";
import Img15TR_Comp from "../assets/15 TR Open Type Compressor Process Chiller Compressor.jpeg";

import Img25TR_Screw from "../assets/25 TR Air Cooled Screw Chiller.jpeg";
import Img50TR_AirScrew from "../assets/50 TR Air Cooled Screw Chiller.jpeg";
import Img50TR_WaterScrew from "../assets/50 TR Water Cooled Screw Chiller Dual System.jpeg";
import Img90TR_Screw from "../assets/90 TR Air Cooled Screw Chiller.jpeg";

const chillerProducts = [
  {
    id: 1,
    name: "1.5 TR Process Chiller",
    category: "Air Cooled",
    shortDescription: "Compact 1.5 TR air-cooled process chiller featuring an integrated 50 Ltr SS304 insulated water tank, top vertical condenser exhaust, and dual microcomputer temperature controllers.",
    description: `The 1.5 TR Process Chiller is an ultra-reliable, compact industrial cooling system specifically designed for machinery-side process cooling and precision temperature regulation. Delivering approximately 5.25 kW of nominal refrigeration, this unit incorporates an upward vertical discharge condenser fan configuration that directs warm exhaust air straight up away from operating personnel and adjacent machinery.

A hallmark feature of this process chiller is its integrated 50-liter heavy-gauge SS304 food-grade stainless steel internal water tank. Heavily insulated with high-density polyurethane foam (PUF), the reservoir prevents ambient heat gain and outer cabinet sweating while maintaining an ample thermal buffer for rapid pull-down under fluctuating batch or continuous thermal loads.

The intuitive operator control fascia features dual digital microcomputer controllers: one dedicated to precision process water temperature management and the second providing independent anti-freeze safeguard monitoring. Comprehensive visual indicators—including Pump-On, Compressor-On, Low Water Level alarm, and Anti-Freeze Fault interlock—provide real-time status at a glance. Equipped with an analog refrigerant pressure dial gauge, rotary control switches, and high-efficiency circulation pump, this chiller is the ideal plug-and-play cooling asset for high-precision manufacturing.`,
    features: [
      "Top Vertical Discharge Condenser Fan for Efficient Heat Dissipation",
      "Integrated 50-Liter Heavy-Duty SS304 Insulated Internal Water Tank",
      "Dual Digital Microprocessor PID Controllers (Temperature & Anti-Freeze)",
      "High-Efficiency Compressor with Anti-Vibration Internal Mounting",
      "Complete Safety Suite: Low Water Cut-Off, Anti-Freeze Alarm & Overload Relay",
      "Front-Fascia Analog Refrigerant High/Low Pressure Dial Gauge",
      "Perforated Ventilation Enclosure with Corrosion-Resistant Powder Coating"
    ],
    applications: [
      "Plastic Injection & Small Blow Moulding",
      "Fiber Laser Cutting & Precision Engraving",
      "Pharmaceutical & Chemical Pilot Reactors",
      "Printing, Packaging & Lamination Equipment",
      "CNC High-Speed Spindle & Wire EDM Cooling",
      "Laboratory & Scientific Analytical Instrumentation"
    ],
    tempRange: "5°C to 25°C",
    capacity: "1.5 TR",
    tankCapacity: "50 Ltr SS304",
    image: Img1_5TR_Front,
    images: [Img1_5TR_Front, Img1_5TR_Side, Img1_5TR_Angle]
  },
  {
    id: 2,
    name: "2 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    shortDescription: "Ultra-compact 2 TR air-cooled chiller designed for point-of-use machinery cooling, laboratory instrumentation, and space-constrained industrial setups.",
    description: `The 2 TR Air Cooled Water Chiller is an ultra-compact, modular process cooling unit developed for machine-side point-of-use installation. Generating approximately 7 kW of nominal cooling duty, it is the ideal thermal management solution for standalone machinery, analytical testing laboratories, and manufacturing spaces where running extensive central chilled water distribution loops is unfeasible.

Despite its compact footprint, this chiller integrates genuine industrial-grade componentry. An energy-efficient hermetic compressor delivers rapid chilling cycles with minimal power consumption and low starting current. Chilled water is maintained inside an integrated, sanitary SS304 stainless steel storage reservoir insulated with thick closed-cell insulation to prevent ambient thermal loss and external cabinet condensation. A high-efficiency built-in monoblock pump ensures consistent, pulsation-free coolant delivery directly into machinery water jackets.

The front operating panel features an intuitive digital thermostat with dual LED displays showing both actual water temperature and programmed setpoint. The entire skid is factory assembled, charged with eco-friendly refrigerant, and rigorously leak- and load-tested prior to dispatch. Standard quick-connect plumbing connections and accessible removable service panels make routine filter maintenance and system setup fast and effortless.`,
    features: [
      "Ultra-Compact Modular Footprint with Easy Machine-Side Integration",
      "Energy-Efficient Hermetic Compressor with Rapid Thermal Pull-Down",
      "Built-in Stainless Steel SS304 Reservoir & Monoblock Circulation Pump",
      "Digital Microprocessor Thermostat with Push-Button Setpoint Logic",
      "Low-Noise Axial Fan Assembly for Quiet Factory or Lab Operation",
      "Pre-Charged with Eco-Friendly Refrigerant for Instant Plug-and-Play Setup",
      "Tool-Free Removable Service Panels for Quick Cleaning & Maintenance"
    ],
    applications: [
      "CNC High-Speed Spindle & Wire EDM Machines",
      "Medical & Laboratory Analytical Instruments",
      "Fiber Laser Marking & Precision Engraving Systems",
      "Pharmaceutical Blister Packaging & Sealing Machines",
      "Bakery Dough Mixers & Craft Brewery Fermenters"
    ],
    tempRange: "5°C to 20°C",
    capacity: "2 TR",
    tankCapacity: "75 Ltr SS304",
    image: Img2TR,
    images: [Img2TR, Img2TR_2, Img2TR_3]
  },
  {
    id: 3,
    name: "2 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    shortDescription: "Compact 2 TR dedicated RO drinking water chiller with sanitary SS304 cooling coils, automatic temperature thermostat, and plug-and-play plumbing connections.",
    description: `The 2 TR RO Water Chiller is a compact, highly reliable chilling unit specifically designed for decentralized commercial drinking water installations, corporate offices, educational institutions, and boutique water refill kiosks. Working in tandem with commercial reverse osmosis filtration setups, it drops purified water down to an invigorating drinking temperature (5°C to 25°C), ready for instant dispensation or bottle refilling.

Because drinking water hygiene is vital, the entire fluid path—including the internal storage reservoir, immersion cooling coils, and plumbing fittings—is fabricated strictly from 100% food-grade SS304 stainless steel. This prevents any chemical alteration of pure drinking water, eliminates unpleasant metallic tastes, and stops microbial buildup or corrosion over years of continuous operation.

The refrigeration unit utilizes an energy-conserving hermetic compressor engineered with automatic thermal cycling. Once the water in the insulated storage tank reaches your programmed temperature, the thermostat automatically switches the compressor to standby, significantly reducing electric bills. Standard push-fit BSP water connections and regular single-phase electrical supply ensure effortless, plug-and-play inline installation right alongside your commercial RO filter.`,
    features: [
      "100% Certified Food-Grade SS304 Sanitary Water Contact Pathway",
      "Energy-Efficient Hermetic Compressor with Automatic Power-Save Cut-Off",
      "High-Density Polyurethane (PUF) Tank Insulation to Prevent Heat Gain",
      "Push-Fit BSP Water Plumbing Connections for Plug-and-Play Inline Setup",
      "Front-Mounted Digital Temperature Indicator with Easy Adjustment",
      "Ultra-Quiet Acoustic Design (<58 dB) Ideal for Indoor Commercial Spaces",
      "Compact Space-Saving Skid Designed to Fit Beside Commercial RO Units"
    ],
    applications: [
      "Commercial Offices & Corporate Cafeteria RO Water Dispensers",
      "School, College & University Campus Water Coolers",
      "Hotels, Restaurants, Bakeries & Commercial Kitchens",
      "Small Packaged RO Drinking Water Retail Outlets",
      "Gymnasiums, Fitness Centers & Healthcare Hydration Stations"
    ],
    tempRange: "5°C to 25°C",
    capacity: "2 TR",
    tankCapacity: "75 Ltr SS304",
    image: Img2TR_RO_Front,
    images: [Img2TR_RO_Front, Img2TR_RO_Side, Img2TR_RO_OpSide, Img2TR_RO_Back]
  },
  {
    id: 4,
    name: "3 TR Water Chiller (Outdoor Unit)",
    category: "RO Water Cooling",
    shortDescription: "All-weather 3 TR packaged outdoor chiller designed specifically for RO water cooling, featuring an acoustic weather-resistant enclosure and tropicalized condenser.",
    description: `The 3 TR Outdoor RO Water Chiller is an all-weather packaged cooling unit engineered specifically for open-air installation on rooftops, service terraces, or external utility yards. By placing the chilling equipment outdoors, commercial and institutional facilities free up valuable indoor shop floor area, eliminate indoor warm air discharge, and maintain a quiet, noise-free indoor working environment.

The unit is encased in a heavy-duty, IP-rated weatherproof cabinet made of galvanized mild steel treated with a multi-stage chemical wash and UV-resistant outdoor architectural powder coating. The condenser coil is protected by a blue-fin hydrophilic treatment that prevents fin corrosion from outdoor rain, dust, and coastal humidity. Low-noise axial condenser fan assemblies discharge hot exhaust air vertically upward, substantially mitigating perimeter noise.

Internally, the chiller features a dedicated reverse osmosis water cooling circuit constructed with sanitary food-grade SS304 stainless steel piping and an insulated holding tank. Equipped with automated ambient temperature compensation, freeze protection, low water level cut-offs, and an outdoor weather-sealed electrical panel, this system delivers dependable, year-round cooling through intense summer heatwaves, heavy downpours, and dusty environments.`,
    features: [
      "All-Weather IP-Rated Outdoor Cabinet with UV-Resistant Powder Finish",
      "Hydrophilic Blue-Fin Condenser Coating for Long-Term Weather Resistance",
      "Low-Noise Vertical Discharge Axial Condenser Fan Assembly",
      "Food-Grade SS304 Internal Water Reservoir & Pure Water Circulation Loop",
      "Automatic Freeze Protection & Low Water Level Safety Interlocks",
      "Weather-Sealed Outdoor Electrical Control Panel with Digital Readout",
      "Frees Up Valuable Indoor Factory Floor Space & Eliminates Indoor Heat"
    ],
    applications: [
      "Commercial & Institutional Rooftop RO Water Stations",
      "School, College & University Campus Drinking Water Systems",
      "Hospital & Healthcare Facility Pure Water Cooling",
      "Corporate Office Buildings, Commercial Hubs & Cafeterias",
      "Outdoor Packaged Commercial RO Purification Skids"
    ],
    tempRange: "5°C to 25°C",
    capacity: "3 TR",
    tankCapacity: "100 Ltr SS304",
    image: Img3TR,
    images: [Img3TR, Img3TR_2, Img3TR_3]
  },
  {
    id: 5,
    name: "5 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    shortDescription: "High-efficiency V-Type air-cooled chiller engineered with energy-saving scroll compressor, insulated SS304 tank, and microcomputer temperature control.",
    description: `The 5 TR Air Cooled Water Chiller is a high-efficiency industrial refrigeration system engineered to provide continuous, precision chilled water for heavy manufacturing and process cooling applications. Delivering approximately 17.5 kW of cooling capacity, this unit is built around an advanced V-Type air-cooled condenser configuration that maximizes heat exchange surface area while maintaining an ultra-compact footprint on your shop floor.

At the core of the system is an energy-conserving hermetic scroll compressor celebrated for its smooth operation, low acoustic levels, and exceptional coefficient of performance (COP). Process fluid is circulated through an integrated, food-grade SS304 stainless steel buffer tank encased in 50mm high-density polyurethane (PUF) insulation. This industrial insulation virtually eliminates standby thermal loss and prevents external cabinet sweating even in humid monsoon environments.

Designed specifically for continuous 24/7 industrial duty, the unit is protected by an intelligent microprocessor PID controller that maintains stable water temperatures within ±1°C of your target setpoint. Comprehensive safety interlocking—including high/low refrigerant pressure switches, compressor thermal overload relays, anti-freeze thermostat protection, and reverse-phase sequence monitoring—safeguards the equipment from electrical surges and process line interruptions.`,
    features: [
      "High Efficiency V-Type Copper-Aluminium Condenser",
      "Industrial Hermetic Scroll Compressor with Vibration Dampening",
      "Heavy-Duty SS304 Insulated Internal Water Tank (50mm PUF)",
      "Digital Microprocessor PID Temperature Controller (±1°C Accuracy)",
      "High-Head Centrifugal Stainless Steel Circulation Pump",
      "Comprehensive Safety: HP/LP Switches, Overload Relay & Anti-Freeze Cut-Off",
      "Corrosion-Resistant Powder Coated Mild Steel Outer Cabinet"
    ],
    applications: [
      "Plastic Injection & Blow Moulding",
      "CNC & High-Power Laser Cutting",
      "Pharmaceutical & Chemical Batch Cooling",
      "Printing & Lamination Machinery",
      "Die Casting & Induction Furnaces"
    ],
    tempRange: "5°C to 25°C",
    capacity: "5 TR",
    tankCapacity: "200 Ltr SS304",
    image: Img5TR_2,
    images: [Img5TR_2, Img5TR_3, Img5TR_4]
  },
  {
    id: 6,
    name: "5 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    shortDescription: "Heavy-duty 5 TR commercial RO water chiller featuring high-flow SS circulation piping, food-grade insulated reservoir, and continuous 24/7 cooling performance.",
    description: `The 5 TR RO Water Chiller is a commercial-grade water chilling unit engineered to handle steady cooling demands of 1,000 to 5,000+ liters per hour of reverse osmosis purified water. Designed specifically for commercial RO water bottling plants, institutional water distribution facilities, and beverage production units, it delivers unwavering cooling performance even during grueling summer operations.

The unit is engineered with an oversized, sanitary SS304 stainless steel fluid circuit that accommodates high flow rates without pressure drops or turbulent flow restrictions. The internal water tank is encased in 50mm high-density polyurethane (PUF) insulation, ensuring chilled water stays cold for hours with minimal compressor restarts. The cooling coils are fabricated from polished, food-grade stainless steel, completely eliminating the contamination risks associated with copper immersion coils in pure RO water environments.

Driven by a top-tier industrial scroll compressor and paired with high-efficiency air-cooled condenser coils, the system provides rapid thermal pull-down. The comprehensive electrical control panel includes an intuitive dual-display microcomputer controller showing real-time water temperature, manual/automatic operational switches, low water level interlock to safeguard the circulation pump, and dual refrigerant pressure gauges on the front fascia for rapid diagnostic checks.`,
    features: [
      "High-Flow Sanitary SS304 Water Circulation Piping & Buffer Reservoir",
      "Polished Food-Grade Stainless Steel Evaporator Cooling Coils",
      "Industrial Heavy-Duty Scroll Compressor for 24/7 Peak Operation",
      "50mm High-Density PUF Insulation Preventing Condensation & Energy Loss",
      "Integrated Low Water Cut-Off Switch to Prevent Dry Pump Running",
      "Dual Refrigerant High/Low Pressure Dial Gauges on Front Facia",
      "Heavy-Duty Powder-Coated Metal Casing with Multi-Point Access Panels"
    ],
    applications: [
      "Commercial Mineral & Packaged Drinking Water Bottling Lines",
      "Medium-Scale Beverage, Soft Drink & Syrup Cold-Filling",
      "Pharmaceutical Cleanroom Purified Water Systems",
      "Large Hospital & University Centralized RO Water Networks",
      "Food Processing & Bakery Bulk Water Chilling"
    ],
    tempRange: "5°C to 25°C",
    capacity: "5 TR",
    tankCapacity: "200 Ltr SS304",
    image: Img5TR_RO_Front,
    images: [Img5TR_RO_Front, Img5TR_RO_Side, Img5TR_RO_Back]
  },
  {
    id: 7,
    name: "7.5 TR Air Cooled Water Chiller",
    category: "Air Cooled",
    shortDescription: "Heavy-duty 7.5 TR air-cooled industrial chiller featuring dual axial cooling fans, high-torque scroll compressor, and multi-tier protection for high-heat manufacturing lines.",
    description: `The 7.5 TR Air Cooled Water Chiller delivers approximately 26.3 kW of nominal cooling capacity, engineered specifically for medium-to-heavy industrial facilities generating high thermal loads. Operating as a completely self-contained air-cooled packaged system, it dissipates heat directly into ambient air, eliminating the recurring maintenance, scale accumulation, water consumption, and chemical treatment costs associated with external cooling towers.

The refrigeration circuit is driven by a high-torque industrial scroll compressor engineered for continuous high-ambient performance. Dual high-velocity axial fans equipped with aerodynamically profiled sickle blades draw massive volumes of ambient air across deep-row copper-tube, slit-aluminium-fin condenser coils. This robust heat exchange geometry ensures rapid heat rejection without high-pressure tripping even during scorching summer heatwaves reaching up to 48°C.

Chilled process fluid is stored in a heavy-gauge SS304 stainless steel reservoir paired with high-efficiency submerged evaporator coils for instant thermal pull-down. The centralized digital console provides real-time LED temperature readouts, parameter adjustment, and automated error code diagnostics. Built-in protection routines—including anti-short cycling delay timers, crankcase heaters, phase failure preventers, and dual pressure gauges—ensure long-term operational peace of mind across rugged industrial shop floors.`,
    features: [
      "High-Torque Industrial Scroll Compressor with Internal Thermal Overload",
      "Twin Aerodynamic High-CFM Condenser Exhaust Fans",
      "SS304 Grade Heavy-Gauge Insulated Water Reservoir",
      "Digital Microcomputer Control Panel with Auto Error Diagnostics",
      "Submerged High-Efficiency Evaporator Coils for Rapid Heat Transfer",
      "Multi-Tier Safety Suite: Anti-Short Cycle, HP/LP Cut-Offs & Phase Interlock",
      "Rigid Powder-Coated Industrial Enclosure with Eye-Bolts for Safe Lifting"
    ],
    applications: [
      "Multi-Cavity Plastic Injection & Extrusion Lines",
      "Metal Anodizing & Electroplating Tanks",
      "Laser Welding & Plasma Cutting Equipment",
      "Dairy, Brewery & Commercial Beverage Processing",
      "Rubber Vulcanizing Presses & Processing Mills"
    ],
    tempRange: "5°C to 25°C",
    capacity: "7.5 TR",
    tankCapacity: "250 Ltr SS304",
    image: Img7_5TR,
    images: [Img7_5TR, Img7_5TR_3, Img7_5TR_4]
  },
  {
    id: 8,
    name: "7.5 TR Water Chiller",
    category: "Water Cooled",
    shortDescription: "High-efficiency water-cooled industrial chiller with shell-and-tube condenser, robust scroll compressor, and insulated SS tank for continuous high-load manufacturing.",
    description: `The 7.5 TR Water Cooled Industrial Chiller offers maximum thermodynamic cooling efficiency for manufacturing facilities equipped with an industrial cooling tower system. By leveraging water-cooling instead of air-cooling for condenser heat rejection, this system achieves lower condensing temperatures, resulting in 25% to 35% lower electrical power consumption per ton of refrigeration compared to air-cooled models.

At the core of the condenser circuit is a heavy-duty, cleanable shell-and-tube heat exchanger built with internally grooved, seamless copper tubes expanded into heavy carbon steel tube sheets. Removable cast-iron end-water heads allow mechanical cleaning, brushing, and descaling during annual maintenance without disturbing refrigerant piping. The cooling cycle is driven by a heavy-duty industrial scroll compressor featuring internal pressure bypass and smooth, vibration-free operation.

The process side is equipped with a heavily insulated SS304 stainless steel buffer reservoir and a high-efficiency evaporator capable of withstanding heavy thermal shocks and wide load variations. A microcomputer control panel displays water inlet/outlet temperatures, digital operating states, and fault alarms. Integrated safety interlocks—including water flow switches, high/low refrigerant pressure switches, anti-freeze thermostats, and motor overload relays—protect the chiller around the clock.`,
    features: [
      "High-Efficiency Cleanable Shell-and-Tube Water-Cooled Condenser",
      "Exceptional Thermodynamic Efficiency (25-35% Lower Power Draw vs Air-Cooled)",
      "Industrial Heavy-Duty Scroll Compressor for 24/7 Continuous Duty",
      "Heavy-Gauge SS304 Insulated Reservoir with High-Density PUF Insulation",
      "Removable Condenser End-Heads for Easy Periodic Tube Descaling",
      "Microprocessor Automation Panel with Precision Digital PID Logic",
      "Comprehensive Multi-Stage Electrical & Mechanical Safety Interlocks"
    ],
    applications: [
      "Heavy Plastic Injection, Blow Moulding & Extrusion Plants",
      "Continuous Chemical Reactors & Jacketed Mixing Tanks",
      "Metal Die-Casting & Aluminium Extrusion Cooling",
      "Rubber Mixing Mills & Vulcanizing Hydraulic Presses",
      "Centralized Industrial Chilled Water Distribution Networks"
    ],
    tempRange: "5°C to 25°C",
    capacity: "7.5 TR",
    tankCapacity: "250 Ltr SS304",
    image: Img7_5TR_New_Front,
    images: [Img7_5TR_New_Front, Img7_5TR_New_Side, Img7_5TR_New_Back]
  },
  {
    id: 9,
    name: "10 TR Water Chiller (RO Water Cooling)",
    category: "RO Water Cooling",
    shortDescription: "High-capacity 10 TR dedicated RO water chilling plant engineered with dual refrigeration circuits and food-grade stainless steel fluid path for commercial bottling plants.",
    description: `The 10 TR RO Water Chiller is a high-capacity industrial cooling plant engineered exclusively to handle high flow rates of purified Reverse Osmosis (RO) water in commercial water bottling, mineral water packaging, and food-grade beverage plants. Because membrane filtration generates treated water at elevated ambient temperatures, this specialized chilling plant drops high flow volumes down to chilled drinking temperatures (typically between 8°C and 15°C) prior to packaging or storage.

Because purified demineralized RO water is naturally aggressive toward brass and standard carbon steels, all wetted components—including internal heat exchange coils, buffer tank, pump impellers, and distribution manifolds—are fabricated strictly from certified food-grade SS304/SS316 stainless steel. This sanitary fluid pathway prevents corrosion, metallic dissolution, and microbial adhesion, maintaining 100% compliant drinking water purity.

To ensure uninterrupted plant productivity, the system incorporates dual independent refrigeration circuits. This multi-compressor design enables intelligent 50% / 100% capacity step-control based on real-time water draw, saving substantial electrical power during lower production hours while providing built-in operational redundancy. An advanced electronic control panel features dry-run pump safety interlocks, water flow sensors, digital temperature displays, and automated high/low pressure trip alarms.`,
    features: [
      "Dual Independent Refrigeration Circuits for 50%/100% Energy Load Staging",
      "100% Sanitary Food-Grade SS304/SS316 Wetted Fluid Pathway",
      "Heavy-Duty Submerged SS Cooling Coils for High-Volume Heat Transfer",
      "Dry-Run Pump Interlock to Prevent Circulation Failure & Component Damage",
      "Advanced Microcomputer Dashboard with Live Temperature Tracking",
      "Twin High-Velocity Condenser Exhaust Fans for Intense Ambient Cooling",
      "Oversized Water Piping Headers Accommodating High Continuous Flow Rates"
    ],
    applications: [
      "Commercial Packaged Drinking Water Bottling Plants",
      "Mineral Water Processing & Cold-Filling Lines",
      "Industrial Soft Drink, Juice & Syrup Blending Facilities",
      "Pharmaceutical Pure Water & WFI Cooling Loops",
      "Large-Scale Institutional & Campus Central Drinking Stations"
    ],
    tempRange: "5°C to 25°C",
    capacity: "10 TR",
    tankCapacity: "500 Ltr SS304",
    image: ImgOther,
    images: [ImgOther, ImgOther_2]
  },
  {
    id: 10,
    name: "15 TR Open Type Compressor Process Chiller",
    category: "Water Cooled",
    shortDescription: "Heavy-duty 15 TR open skid process chiller powered by an open-type reciprocating compressor, shell-and-tube heat exchanger, and dual-console electrical automation.",
    description: `The 15 TR Open Type Compressor Process Chiller is a rugged, industrial-grade process refrigeration skid engineered for continuous chemical, pharmaceutical, and high-load industrial fluid cooling applications. Built on a heavy structural steel channel chassis finished in high-visibility safety enamel, this unit delivers unmatched serviceability, mechanical durability, and thermal stability.

At the heart of the refrigeration circuit is an industrial open-type compressor directly driven by an external TEFC motor. Open-type architecture allows rapid on-site maintenance, valve servicing, and shaft seal inspections without opening the hermetic refrigerant shell, making it the preferred choice for continuous process facilities with dedicated maintenance teams. A heavy-duty vertical oil separator in safety red ensures maximum oil return and optimal compressor lubrication under continuous operation.

Thermal transfer is handled by an oversized, high-efficiency shell-and-tube heat exchanger prominently branded with the Mahaveer Enterprise seal of quality. The evaporator is wrapped in heavy closed-cell thermal insulation with an embossed vapor barrier. Dual centralized control panels on top of the skid provide separate electrical interlocks, digital temperature management, phase sequence protection, and emergency safety cut-offs for complete process security.`,
    features: [
      "High-Durability Open-Type Industrial Compressor for Rapid Field Servicing",
      "Heavy-Duty Shell-and-Tube Heat Exchanger with Removable Tube Bundles",
      "External Red Oil Separator for Reliable High-Load Lubrication Return",
      "Dual Enclosure Industrial Electrical Control Panels with Digital PID Logic",
      "Rigid Structural Channel Base Frame with Pre-Drilled Foundation Anchors",
      "Multi-Point Safety Cut-Offs: HP/LP Switches, Oil Pressure & Flow Interlocks",
      "Insulated Fluid Manifolds with Vibration-Damped Refrigerant Connections"
    ],
    applications: [
      "Chemical Batch Process Reactors & Jacketed Reaction Vessels",
      "Pharmaceutical Pure Fluid & Solvent Cooling Systems",
      "Continuous Metal Quenching & Anodizing Tanks",
      "Heavy Rubber & Polymer Processing Skids",
      "Industrial Central Process Chilled Water Loops"
    ],
    tempRange: "5°C to 25°C",
    capacity: "15 TR",
    tankCapacity: "Shell & Tube Exchanger",
    image: Img15TR_Front,
    images: [Img15TR_Front, Img15TR_Comp]
  },
  {
    id: 11,
    name: "25 TR Air Cooled Screw Chiller",
    category: "Air Cooled",
    isScrewChiller: true,
    shortDescription: "High-performance 25 TR air-cooled screw chiller featuring a semi-hermetic twin-screw compressor, dual high-efficiency V-bank condenser fans, and digital touch controller.",
    description: `The 25 TR Air Cooled Screw Chiller delivers approximately 87.5 kW of high-reliability refrigeration capacity, engineered specifically for commercial and industrial facilities requiring continuous precision cooling without the operating overhead of cooling towers. Featuring advanced twin-rotor screw compression technology, it delivers superior part-load efficiency, low mechanical vibration, and quiet acoustic performance.

The refrigeration circuit is driven by a state-of-the-art semi-hermetic twin-screw compressor with continuous step or stepless slide valve capacity modulation (25%-50%-75%-100%). This ensures the chiller precisely tracks dynamic factory thermal loads, substantially curtailing kilowatt-hour consumption during off-peak shifts. Dual aerodynamically profiled high-CFM axial exhaust fans discharge heat vertically upward across high-surface-area V-block copper-tube, slit-aluminium-fin condenser coils.

Process fluid is chilled through a high-efficiency shell-and-tube direct-expansion evaporator with internal baffles and closed-cell elastomeric insulation. An intuitive microprocessor touchscreen controller displays system pressures, suction/discharge temperatures, active capacity percentage, and automated alarm histories. Built-in electrical protections include motor winding temperature sensors, phase monitor, reverse-rotation preventer, and high/low refrigerant safety switches.`,
    features: [
      "Semi-Hermetic Twin-Rotor Screw Compressor with Stepped/Stepless Modulation",
      "Dual High-CFM Axial Condenser Exhaust Fans with Aerodynamic Discharge Cowls",
      "High-Efficiency Shell-and-Tube Direct-Expansion Chilled Water Evaporator",
      "Microcomputer Touch Screen Control Console with Live Diagnostics",
      "Electronic Expansion Valve (EEV) for Precise Superheat & Load Tracking",
      "Anti-Corrosion Treated Heavy-Gauge Industrial Steel Enclosure",
      "Comprehensive Electrical Protection Suite with Integrated Phase Monitor"
    ],
    applications: [
      "Large-Scale Plastic Injection, Blow Moulding & Film Extrusion",
      "Commercial HVAC & Central Building Air Conditioning",
      "Brewery Fermentation & Dairy Cold-Chain Processing",
      "Pharmaceutical Cleanroom Environmental Cooling Loops",
      "High-Capacity CNC & Industrial Laser Centers"
    ],
    tempRange: "5°C to 20°C",
    capacity: "25 TR",
    tankCapacity: "Shell & Tube Cooler",
    image: Img25TR_Screw,
    images: [Img25TR_Screw]
  },
  {
    id: 12,
    name: "50 TR Air Cooled Screw Chiller",
    category: "Air Cooled",
    isScrewChiller: true,
    shortDescription: "Heavy industrial 50 TR air-cooled screw chiller with multi-fan V-block condensers, semi-hermetic twin screw compressor, and intelligent PLC touch automation.",
    description: `The 50 TR Air Cooled Screw Chiller is a high-tonnage industrial refrigeration plant providing approximately 175 kW of nominal cooling duty. Engineered for mission-critical manufacturing facilities and heavy continuous process lines, this packaged outdoor system eliminates water consumption and chemical maintenance by dissipating intense thermal loads directly into ambient air.

The chiller is built around an industrial semi-hermetic screw compressor with high-precision ground rotors that deliver high volumetric efficiency and exceptional seasonal coefficient of performance (SEER). Multiple high-efficiency axial exhaust fans with protective wire guards work in conjunction with modular V-bank condenser coils to optimize airflow across deep-row heat exchange fins, ensuring dependable operation even under peak summer conditions up to 50°C ambient.

The chilled water circuit utilizes a heavy-gauge shell-and-tube cooler with cleanable tube bundles and comprehensive thermal insulation. An advanced industrial PLC system with touch screen interface provides automated multi-stage capacity control, real-time diagnostic logging, and building management system (BMS) protocol integration (RS485/Modbus).`,
    features: [
      "High-Capacity Semi-Hermetic Screw Compressor with Precision Rotor Geometry",
      "Modular Multi-Fan V-Block Condenser Architecture for Maximum Heat Rejection",
      "Direct Expansion Shell-and-Tube Cooler with High-Density Thermal Wrap",
      "Intelligent PLC Touch Screen Interface with Automated Step Modulation",
      "Tropicalized Outdoor Coil Design Operating up to 50°C Ambient Temperatures",
      "BMS Communication Ready (Modbus / RS485 Interface Protocols)",
      "Heavy-Duty Base Skid with Lifting Eyes and Vibration-Damping Mounts"
    ],
    applications: [
      "Automotive Component Die-Casting & Stamping Lines",
      "Large Plastic Extrusion & High-Speed Multi-Cavity Moulding",
      "Commercial Beverage Packaging & Cold Pasteurization Plants",
      "Chemical Synthesis & Bulk API Pharmaceutical Production",
      "District & Central Industrial Process Cooling Loops"
    ],
    tempRange: "5°C to 20°C",
    capacity: "50 TR",
    tankCapacity: "Shell & Tube Evaporator",
    image: Img50TR_AirScrew,
    images: [Img50TR_AirScrew]
  },
  {
    id: 13,
    name: "50 TR Water Cooled Screw Chiller (Dual System 25+25 TR)",
    category: "Water Cooled",
    isScrewChiller: true,
    shortDescription: "High-efficiency 50 TR water-cooled screw chiller featuring dual independent 25+25 TR refrigeration circuits for complete redundancy, flooded shell-and-tube vessels, and multi-cabinet controls.",
    description: `The 50 TR Water Cooled Screw Chiller Dual System (25+25 TR) represents the pinnacle of thermodynamic process efficiency and plant reliability for facilities with existing cooling towers. By dividing the 50 TR total capacity across two completely independent 25 TR refrigeration circuits, this system guarantees 100% operational redundancy: if one circuit undergoes scheduled maintenance, the second circuit continues cooling at full capacity without shutting down production.

Each circuit is driven by a high-efficiency semi-hermetic screw compressor featuring internal oil separators, crankcase heaters, and multi-stage capacity control. Condenser heat rejection is managed through heavy-duty, cleanable shell-and-tube water-cooled condensers constructed with seamless internally grooved copper tubes. The dual-vessel design achieves 30% to 40% lower electrical power consumption per ton of refrigeration compared to air-cooled equivalents.

The chiller skid features three separate control enclosures with prominent Mahaveer Enterprise branding: dual motor starter power enclosures and a centralized digital microcomputer PLC touch console. Real-time digital instrumentation monitors water inlet/outlet temperatures, differential refrigerant pressures, pump interlocks, and safety trip diagnostics.`,
    features: [
      "Dual Independent 25+25 TR Circuits for Maximum Power Staging & 100% Redundancy",
      "Ultra-High Thermodynamic Efficiency (30-40% Lower Electrical Consumption)",
      "Dual Heavy-Duty Cleanable Shell-and-Tube Water-Cooled Condensers",
      "Flooded Shell-and-Tube Evaporator for Maximum Heat Transfer Coefficients",
      "Triple Control Console Architecture with Centralized PLC Touch Interface",
      "Independent Refrigerant Circuits with Separate Expansion & Safety Valves",
      "Heavy Industrial Skid Frame Engineered for Rugged 24/7 Manufacturing Plants"
    ],
    applications: [
      "Continuous Heavy Chemical Synthesis & Polymerization Reactors",
      "Multi-Machine Plastic Injection Moulding Plants with Cooling Towers",
      "Commercial Breweries, Distilleries & Dairy Processing Facilities",
      "Aluminium Extrusion, Anodizing & Metal Smelting Systems",
      "Pharmaceutical Bulk Drug & API Cleanroom HVAC Chilled Water Loops"
    ],
    tempRange: "5°C to 20°C",
    capacity: "50 TR (25+25 TR Dual)",
    tankCapacity: "Dual Shell & Tube Vessels",
    image: Img50TR_WaterScrew,
    images: [Img50TR_WaterScrew]
  },
  {
    id: 14,
    name: "90 TR Air Cooled Screw Chiller",
    category: "Air Cooled",
    isScrewChiller: true,
    shortDescription: "High-tonnage 90 TR air-cooled industrial screw chiller plant with 6 high-CFM axial fans, multi-stage V-coil banks, heavy-gauge shell-and-tube cooler, and PLC automation.",
    description: `The 90 TR Air Cooled Screw Chiller is a massive, high-capacity central cooling plant delivering approximately 315 kW of refrigeration duty. Designed for heavy manufacturing campuses, district cooling infrastructure, and large industrial facilities where cooling tower water makeup is unavailable or impractical, this self-contained packaged plant operates completely independently of water supplies.

The refrigeration system features high-efficiency industrial screw compressors paired with multi-circuit refrigeration loops. Six top-mounted, high-velocity axial condenser fans discharge warm exhaust vertically upward across massive V-type copper-tube aluminum-fin condenser banks. Wire-mesh safety cages enclose the heat rejection sections to protect coils from debris while allowing maximum aerodynamic airflow.

A massive, heavy-wall shell-and-tube direct expansion evaporator is positioned at the base of the skid, complete with flanged process connections for high-flow primary and secondary water distribution. The centralized automation console with full-color touch screen provides intelligent multi-stage lead-lag compressor control, automated runtime balancing, remote telemetry connectivity, and advanced predictive maintenance logging.`,
    features: [
      "Massive 90 TR (315 kW) Packaged Air-Cooled Central Chilling Plant",
      "Six High-Velocity Aerodynamic Axial Exhaust Fans with Safety Mesh Enclosures",
      "Multi-Circuit High-Surface-Area V-Bank Air Cooled Condenser Modules",
      "Large-Bore Flanged Shell-and-Tube Evaporator for High Continuous Water Flow",
      "Intelligent PLC Touch Controller with Automated Lead-Lag Runtime Balancing",
      "BMS Protocol Compatibility for Central Facility Remote Monitoring",
      "Heavy-Duty Structural Base Frame with Dedicated Crane Lifting Eyes"
    ],
    applications: [
      "Heavy Manufacturing Campuses & Multi-Building Industrial Parks",
      "Large-Scale Plastic Processing & High-Throughput Extrusion Lines",
      "Commercial Central HVAC for Hospitals, Shopping Malls & Tech Parks",
      "Massive Food Cold-Storage, Dairy & Beverage Bottling Plants",
      "Continuous Metal Casting, Rolling Mills & Heavy Metallurgy"
    ],
    tempRange: "5°C to 20°C",
    capacity: "90 TR",
    tankCapacity: "Flanged Shell & Tube Cooler",
    image: Img90TR_Screw,
    images: [Img90TR_Screw]
  }
];

const categories = ["All", "Air Cooled", "Water Cooled", "RO Water Cooling", "Screw Chillers"];

export default function Products() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(location.state?.category || "All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state?.category]);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
      setIsDescExpanded(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [selectedProduct]);

  const filteredProducts = chillerProducts.filter(product => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(term) ||
      (product.capacity && product.capacity.toLowerCase().includes(term)) ||
      (product.tankCapacity && product.tankCapacity.toLowerCase().includes(term)) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(term));
    const matchesCategory = 
      activeCategory === "All" || 
      product.category === activeCategory ||
      (activeCategory === "Screw Chillers" && (product.isScrewChiller || product.name.toLowerCase().includes("screw")));
    return matchesSearch && matchesCategory;
  });

  const categoryCounts = {
    "All": chillerProducts.length,
    "Air Cooled": chillerProducts.filter(p => p.category === "Air Cooled").length,
    "Water Cooled": chillerProducts.filter(p => p.category === "Water Cooled").length,
    "RO Water Cooling": chillerProducts.filter(p => p.category === "RO Water Cooling").length,
    "Screw Chillers": chillerProducts.filter(p => p.isScrewChiller || p.name.toLowerCase().includes("screw")).length,
  };

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

      <div className="container products-main-container">
        {/* Modern Industrial Toolbar */}
        <div className="products-toolbar-card">
          <div className="toolbar-top-row">
            {/* Search Input with Clear Button */}
            <div className="toolbar-search-wrapper">
              <Search className="toolbar-search-icon" size={18} />
              <input
                type="text"
                placeholder="Search by model, capacity (e.g. 5 TR, 7.5 TR), or application..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="toolbar-search-input"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  className="toolbar-search-clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick Sizing CTA & Results Count */}
            <div className="toolbar-actions">
              <div className="toolbar-results-count">
                Showing <strong>{filteredProducts.length}</strong> of {chillerProducts.length} Models
              </div>
              <button
                type="button"
                className="btn-toolbar-custom"
                onClick={() => openQuoteModal("Custom Chiller Sizing Inquiry")}
              >
                <span>Request Custom Sizing</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Category Filter Tabs with Model Counts */}
          <div className="toolbar-categories-row">
            <div className="category-tabs-group">
              {categories.map(cat => {
                const count = categoryCounts[cat] || 0;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`cat-tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat === "Air Cooled" && <Wind size={15} />}
                    {cat === "Water Cooled" && <Droplets size={15} />}
                    {cat === "RO Water Cooling" && <Sparkles size={15} />}
                    {cat === "All" && <SlidersHorizontal size={15} />}
                    <span>{cat === "All" ? "All Chillers" : cat}</span>
                    <span className="cat-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-catalog-grid">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-catalog-card"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Showcase Stage - Full Machine Visible Without Cropping */}
              <div className="card-stage-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-stage-image"
                  loading="lazy"
                />
                
                {/* Floating Badges on Card Stage */}
                <div className="card-badge-top-left">
                  <span className="card-type-pill">
                    {product.category.includes("Air") ? <Wind size={12} /> : <Droplets size={12} />}
                    {product.category}
                  </span>
                </div>

                <div className="card-badge-top-right">
                  <span className="card-tonnage-pill">{product.capacity}</span>
                </div>

                <div className="card-badge-bottom-bar">
                  <span className="card-feature-pill">
                    <CheckCircle2 size={12} />
                    100% Load Tested
                  </span>
                  {product.images && product.images.length > 1 && (
                    <span className="card-angles-pill">
                      {product.images.length} Views
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body-content">
                <h3 className="card-product-title">{product.name}</h3>
                <p className="card-product-desc">
                  {product.shortDescription || (product.description ? product.description.slice(0, 130) + '...' : '')}
                </p>

                {/* Visible Micro Specs Matrix */}
                <div className="card-specs-matrix">
                  <div className="card-spec-box">
                    <span className="spec-meta-label">Capacity</span>
                    <span className="spec-meta-value">{product.capacity}</span>
                  </div>
                  <div className="card-spec-box">
                    <span className="spec-meta-label">Temp Range</span>
                    <span className="spec-meta-value">{product.tempRange}</span>
                  </div>
                  <div className="card-spec-box">
                    <span className="spec-meta-label">Water Tank</span>
                    <span className="spec-meta-value">{product.tankCapacity || "SS-304 Insulated"}</span>
                  </div>
                  <div className="card-spec-box">
                    <span className="spec-meta-label">Controller</span>
                    <span className="spec-meta-value">Digital PID</span>
                  </div>
                </div>

                {/* Application Highlights */}
                {product.applications && product.applications.length > 0 && (
                  <div className="card-app-tags">
                    <span className="app-tag-lead">Applications:</span>
                    <span className="app-tag-item">{product.applications[0]}</span>
                    {product.applications[1] && (
                      <span className="app-tag-item">{product.applications[1]}</span>
                    )}
                    {product.applications.length > 2 && (
                      <span className="app-tag-more">+{product.applications.length - 2} more</span>
                    )}
                  </div>
                )}

                {/* Card B2B Action Footer */}
                <div className="card-action-footer">
                  <button
                    type="button"
                    className="btn-card-primary"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <span>Specifications</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    className="btn-card-quote"
                    title={`Request Quote for ${product.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openQuoteModal(product.name);
                    }}
                  >
                    Get Quote
                  </button>
                  <a
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi Mahaveer Enterprise, I want to inquire about the ${product.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card-whatsapp"
                    title="Inquire on WhatsApp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className="no-products-state">
              <SlidersHorizontal size={48} className="no-products-icon" />
              <h3>No Chillers Found Matching Criteria</h3>
              <p>Try searching for a different tonnage, application or reset your filter.</p>
              <button
                type="button"
                className="btn btn-secondary mt-4"
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-drag-pill"></div>
            <div className="modal-header-sticky">
              <button 
                type="button"
                className="modal-close" 
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Left Column: Industrial Product Showcase Stage */}
              <div className="modal-gallery-container">
                <div className="modal-image-stage">
                  <img 
                    src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="modal-stage-img"
                  />

                  {/* Photo Counter Pill */}
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <div className="gallery-counter-badge">
                      <span>{currentImageIndex + 1}</span> / <span>{selectedProduct.images.length}</span>
                    </div>
                  )}

                  {/* Glassmorphic Navigation Arrows */}
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <>
                      <button 
                        type="button"
                        className="gallery-nav prev" 
                        onClick={prevImage}
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button 
                        type="button"
                        className="gallery-nav next" 
                        onClick={nextImage}
                        aria-label="Next image"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails Bar */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className="modal-thumbnails-container">
                    <div className="modal-thumbnails">
                      {selectedProduct.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`thumbnail-card ${currentImageIndex === idx ? "active" : ""}`}
                          onClick={() => setCurrentImageIndex(idx)}
                          aria-label={`View photo ${idx + 1}`}
                        >
                          <img src={img} alt="" className="thumbnail-img" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engineering Quality Assurances (Desktop Left Column) */}
                <div className="gallery-assurance-card desktop-assurance">
                  <div className="assurance-header">
                    <ShieldCheck size={16} className="assurance-header-icon" />
                    <span>Manufacturing Assurance</span>
                  </div>
                  <div className="assurance-list">
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>100% Factory Full-Load Tested</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>ISO 9001:2015 Quality Standards</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>1-Year Comprehensive Warranty</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>Pan-India Commissioning & Support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-info">
                <span className="modal-badge">{selectedProduct.category}</span>
                <h2 className="modal-title">{selectedProduct.name}</h2>

                {/* Capacity, Temp Range & Water Tank */}
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
                  {selectedProduct.tankCapacity && (
                    <div className="spec-item modal-spec-tank">
                      <ShieldCheck size={20} className="text-primary" />
                      <div>
                        <span className="spec-label">Water Tank</span>
                        <span className="spec-value">{selectedProduct.tankCapacity}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Action Buttons - Directly Visible Without Scrolling */}
                <div className="modal-direct-actions">
                  <button 
                    type="button"
                    className="btn btn-primary modal-primary-cta" 
                    onClick={(e) => { e.preventDefault(); openQuoteModal(selectedProduct.name); }}
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="modal-sub-actions">
                    <a 
                      href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi Mahaveer Enterprise, I would like to inquire about the ${selectedProduct.name}.`)}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="btn modal-action-btn modal-whatsapp-btn"
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle size={17} />
                      <span>WhatsApp</span>
                    </a>

                    <a 
                      href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}
                      className="btn modal-action-btn modal-call-btn"
                      title="Call Sales Expert"
                    >
                      <Phone size={17} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Engineering Quality Assurances (Mobile Prominent Trust Badge) */}
                <div className="gallery-assurance-card mobile-assurance">
                  <div className="assurance-header">
                    <ShieldCheck size={16} className="assurance-header-icon" />
                    <span>Manufacturing Assurance</span>
                  </div>
                  <div className="assurance-list">
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>100% Factory Full-Load Tested</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>ISO 9001:2015 Quality Standards</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>1-Year Comprehensive Warranty</span>
                    </div>
                    <div className="assurance-item">
                      <CheckCircle size={13} className="check-icon" />
                      <span>Pan-India Commissioning & Support</span>
                    </div>
                  </div>
                </div>

                {/* Product Overview with Collapsible Read More */}
                <div className="modal-desc-section">
                  <h4 className="modal-section-heading">Product Overview & Engineering</h4>
                  <div className="modal-desc-wrapper">
                    {(() => {
                      const paragraphs = selectedProduct.description ? selectedProduct.description.split('\n\n') : [];
                      const visibleParagraphs = isDescExpanded ? paragraphs : paragraphs.slice(0, 1);
                      return (
                        <>
                          {visibleParagraphs.map((paragraph, idx) => (
                            <p key={idx} className="modal-desc-paragraph">{paragraph}</p>
                          ))}
                          {paragraphs.length > 1 && (
                            <button
                              type="button"
                              className="btn-read-more"
                              onClick={() => setIsDescExpanded(!isDescExpanded)}
                            >
                              {isDescExpanded ? (
                                <>
                                  <span>Show Less</span>
                                  <ChevronUp size={16} />
                                </>
                              ) : (
                                <>
                                  <span>Read Full Engineering Details ({paragraphs.length - 1} more paragraphs)</span>
                                  <ChevronDown size={16} />
                                </>
                              )}
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="modal-features">
                  <h4 className="modal-section-heading">Technical Specifications</h4>
                  <ul>
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <Check size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Applications */}
                {selectedProduct.applications && selectedProduct.applications.length > 0 && (
                  <div className="modal-applications">
                    <h4 className="modal-section-heading">Recommended Industrial Applications</h4>
                    <div className="application-tags">
                      {selectedProduct.applications.map((app, idx) => (
                        <span key={idx} className="app-tag">{app}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Custom Sizing Assistance Bar */}
                <div className="modal-bottom-assistance">
                  <div className="assistance-info">
                    <strong>Need customized tonnage or custom piping?</strong>
                    <span>Our design team customizes chiller skids for exact thermal loads.</span>
                  </div>
                  <button 
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={(e) => { e.preventDefault(); openQuoteModal(`Custom Specs - ${selectedProduct.name}`); }}
                  >
                    Custom Sizing Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
