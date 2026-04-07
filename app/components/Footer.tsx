"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Footer() {
  // 1. Shutter Effect Variants (Background panels opening)
  const shutterVariants: Variants = {
    hidden: { scaleY: 1 },
    visible: { 
      scaleY: 0, 
      transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1], staggerChildren: 0.1 } 
    }
  };

  // 2. 3D Pop Container Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, perspective: 1000 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  // 3. 3D Item Pop Variants
  const itemPopVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  // 4. Text Reveal Variants (Letter by letter)
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.6 } }
  };
  
  const textLetter: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 10 } }
  };

  // Back to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const brandName = "BATHE ENGINEERING".split("");

  return (
    <footer className="relative bg-[#0b1120] text-slate-300 pt-20 pb-10 px-4 overflow-hidden border-t-2 border-blue-900/50 group">
      
      {/* SHUTTER EFFECT PANELS */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="absolute inset-0 flex z-0 pointer-events-none"
      >
        {[1, 2, 3].map((index) => (
          <motion.div 
            key={index}
            variants={shutterVariants}
            style={{ originY: 1 }} // Bottom se top ki taraf gayab hoga
            className="flex-1 bg-slate-900 border-r border-blue-900/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
          />
        ))}
      </motion.div>

      {/* Background Glowing Orb Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10"
        style={{ perspective: "1000px" }}
      >
        
        {/* BRAND & LOGO (Takes 4 columns) */}
        <motion.div variants={itemPopVariants} className="lg:col-span-4 flex flex-col items-start">
          
          {/* 3D Pop Logo Wrapper */}
          <motion.div 
            whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10, z: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-white/5 p-2 rounded-xl mb-6 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgb(6,182,212,0.2)] inline-block relative cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-cyan-500/30 rounded-xl blur-lg group-hover:bg-cyan-400/50 transition-all duration-500 transform translate-z-[-10px]"></div>
            <div className="relative w-16 h-16 bg-white rounded-lg p-1 shadow-inner" style={{ transform: "translateZ(20px)" }}>
              <Image 
                src="/logo.png" 
                alt="Bathe Engineering Works Logo" 
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Animated Text Effect */}
          <motion.h4 
            variants={textContainer}
            className="text-2xl font-extrabold mb-3 tracking-tight flex flex-wrap"
          >
            {brandName.map((char, index) => (
              <motion.span 
                key={index} 
                variants={textLetter}
                className={index > 5 ? "text-cyan-400" : "text-white"}
                style={{ display: "inline-block", marginRight: char === " " ? "8px" : "0px" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h4>

          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Committed to providing high-quality precision components, CNC machining, and state-of-the-art engineering solutions since 2005.
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded text-xs font-bold text-cyan-400 uppercase tracking-wider shadow-lg">ISO 9001:2015</motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} className="px-3 py-1 bg-blue-900/40 border border-blue-800 rounded text-xs font-bold text-cyan-400 uppercase tracking-wider shadow-lg">MSME Verified</motion.div>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={itemPopVariants} className="lg:col-span-2">
          <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-b border-blue-900/50 pb-2 inline-block relative overflow-hidden">
            Explore
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-cyan-400" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1, duration: 0.5 }}
            />
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            {['Home', 'About Us', 'Infrastructure', 'Contact'].map((item, i) => (
              <motion.li key={i} whileHover={{ x: 10, scale: 1.02, color: "#22d3ee" }}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="flex items-center gap-2 text-slate-400 transition-colors duration-300"
                >
                  <span className="text-cyan-600/80 text-xs">▹</span> {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT US */}
        <motion.div variants={itemPopVariants} className="lg:col-span-3">
          <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-b border-blue-900/50 pb-2 inline-block relative overflow-hidden">
            Get in Touch
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-cyan-400" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1.1, duration: 0.5 }}
            />
          </h4>
          <div className="space-y-4 text-sm text-slate-400">
            <motion.p whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-3 group cursor-default">
              <span className="mt-1 text-cyan-400 text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">👤</span> 
              <span><strong className="text-slate-200 block mb-0.5">Contact Person</strong> Mr. Ganesh Bathe</span>
            </motion.p>
            <motion.p whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-3 group">
              <span className="mt-1 text-cyan-400 text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">✉️</span> 
              <span><strong className="text-slate-200 block mb-0.5">Email Us</strong> <a href="mailto:batheengineeringworks@gmail.com" className="hover:text-cyan-300 transition-colors">batheengineeringworks@gmail.com</a></span>
            </motion.p>
            <motion.p whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-3 group">
              <span className="mt-1 text-cyan-400 text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">📞</span> 
              <span><strong className="text-slate-200 block mb-0.5">Call Us</strong> <a href="tel:+919881442416" className="hover:text-cyan-300 transition-colors">+91 9881442416</a> <br/> <a href="tel:+919673442416" className="hover:text-cyan-300 transition-colors">+91 9673442416</a></span>
            </motion.p>
          </div>
        </motion.div>

        {/* ADDRESS */}
        <motion.div variants={itemPopVariants} className="lg:col-span-3">
          <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest border-b border-blue-900/50 pb-2 inline-block relative overflow-hidden">
            Facility Location
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-cyan-400" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1.2, duration: 0.5 }}
            />
          </h4>
          <motion.div whileHover={{ scale: 1.02, z: 10 }} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-lg">
            <p className="text-sm leading-relaxed text-slate-400 flex items-start gap-3">
              <span className="mt-1 text-cyan-400 text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-bounce">📍</span>
              <span>
                Jambhale Patil Bag,<br/>
                Sr. no 1/1, shop no. 09<br/>
                Dattanagar jambhulwadi road,<br/>
                Near Dari Pul, jambhulwadi.<br/>
                Taluka- Haveli, Dist- Pune, 411046
              </span>
            </p>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* BOTTOM BAR WITH BACK TO TOP */}
      <motion.div 
        variants={itemPopVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center relative z-10"
      >
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Bathe Engineering Works. All Rights Reserved.
        </p>
        
        {/* Animated Back to Top Button */}
        <motion.button 
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-wider hover:text-cyan-300 transition-colors group"
        >
          Back to Top 
          <span className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300">
            <svg className="w-4 h-4 text-cyan-500 group-hover:text-blue-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
          </span>
        </motion.button>
      </motion.div>

    </footer>
  );
}