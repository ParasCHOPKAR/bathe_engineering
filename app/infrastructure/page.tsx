"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function Infrastructure() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const facilityImages = [
    "/images/WhatsApp Image 2026-04-07 at 11.08.23 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.23.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.24.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.25.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.27.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.30.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.33.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.35.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.38.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.41.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.44.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.46.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.49.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.52.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.55.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.08.59.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.02.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.04.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.07.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.09.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.12.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.14.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.17.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.20.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.22.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.25.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.28.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.31.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.33.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.34.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.36.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.37 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.37.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.38 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.38.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.39 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.39 (2).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.39.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.40 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.40 (2).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.40.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.41 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.41.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.42 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.42 (2).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.42.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.43 (1).jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.43.jpeg",
    "/images/WhatsApp Image 2026-04-07 at 11.09.46.jpeg"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-6 tracking-tight">
            State-of-the-Art Infrastructure
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Our 2000 sq. ft. manufacturing facility is equipped with a comprehensive range of advanced CNC and conventional machinery to fulfill high-precision engineering requirements.
          </p>
        </motion.div>
        
        {/* SHOP FLOOR DETAILS - Highlight Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-3xl p-8 mb-16 shadow-2xl border-b-4 border-cyan-500 text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 border-b border-blue-700/50 pb-5 flex items-center gap-4">
            <span className="text-3xl bg-blue-900/50 p-2 rounded-lg">🏭</span> Facility Capacity & Power
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-50 text-lg font-medium">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="block text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">Built-up Area</span>
              2000 Sq. Ft. Shop Floor
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="block text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">Material Handling</span>
              Overhead Crane (2 Ton - 1 Nos)
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <span className="block text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">Energy Capacity</span>
              30 HP Power Available
            </div>
          </div>
        </motion.div>

        {/* MACHINERY CARDS */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* LATHES & CNC */}
          <motion.div 
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-extrabold text-blue-950 mb-8 flex items-center gap-4">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-cyan-100">⚙️</div>
              CNC & Lathe Machining
            </h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>CNC Turning center (LMW Model LX20 TL5) 200mm x 500mm L</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>CNC Turning center (ACE Micromatic Model jobber LM)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>4.5 ft & 8 ft Allgeard Lathe Machines (Make in England)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>7 ft Imported All Geard Lathe Machine (Spindle Bore 52mm)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>9 ft & 12 ft IMT Brand Standard Lathe Machines</span></li>
            </ul>
          </motion.div>

          {/* MILLING & OTHERS */}
          <motion.div 
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-2xl font-extrabold text-blue-950 mb-8 flex items-center gap-4">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-cyan-100">🔧</div>
              Milling, Press & Fabrication
            </h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>Milling Machine BFW Brand (X900 x Y350 x Z250)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>M1TR Machine with DRO (X1350 x Y375 x Z500)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>Hydraulic Press Machine (Capacity - 100 Ton)</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>Slotting Machine (600mm) & Power Band Saw</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>ESAB Welding Rectifiers, Arc & CO2 Machines</span></li>
              <li className="flex gap-4 items-start"><span className="text-cyan-500 font-bold text-xl leading-none">»</span> <span>Bench Drills (Up to 30mm) & Disc Grinders</span></li>
            </ul>
          </motion.div>
        </div>

        {/* --- PREMIUM MASONRY GALLERY SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-blue-950 flex items-center justify-center gap-3">
              <span className="text-4xl">📸</span> Visual Tour of Our Facility
            </h3>
            <p className="text-slate-500 mt-3 font-medium">A glimpse into our advanced machinery and shop floor</p>
          </div>
          
          {/* Masonry Layout Container */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
            {facilityImages.map((imagePath, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white"
              >
                <img
                  src={imagePath}
                  alt={`Manufacturing equipment detail ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full mb-1">
                      Shop Floor
                    </span>
                    <p className="text-white text-sm font-medium opacity-90 truncate">Equipment View</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* --- END GALLERY SECTION --- */}

        {/* INSTRUMENTS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[50px] border-cyan-500/10 rounded-full"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 border-[20px] border-blue-500/10 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold mb-10 text-cyan-400 flex items-center gap-4">
              <span className="bg-slate-800 p-3 rounded-2xl">📏</span> Quality Control Instruments
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-lg">
              <ul className="space-y-5">
                <li className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div> 
                  <span>Digital & Analogue Verniers (Up to 600mm, LC 0.01/0.02)</span>
                </li>
                <li className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div> 
                  <span>Micrometer Sets (0 to 300 mm, LC - 0.01 mm)</span>
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div> 
                  <span>Granite Surface Plate (Size: 1000 mm X 1000mm)</span>
                </li>
                <li className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div> 
                  <span>Height Gauges (300mm) & Bore Gauges (0 to 150mm)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}