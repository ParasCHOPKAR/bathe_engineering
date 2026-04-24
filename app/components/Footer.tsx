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
    <footer className="relative bg-gradient-to-b from-[#3a0614] to-[#24040d] text-[#F5F5DC]/80 pt-20 pb-10 px-4 overflow-hidden border-t-[3px] border-[#D4AF37] group shadow-[0_-10px_40px_rgba(106,13,37,0.5)]">
      
      {/* SHUTTER EFFECT PANELS - Maroon Theme */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="absolute inset-0 flex z-0 pointer-events-none"
      >
        {[1, 2, 3].map((index) => (
          <motion.div 
            key={index}
            variants={shutterVariants}
            style={{ originY: 1 }}
            className="flex-1 bg-[#6A0D25] border-r border-[#D4AF37]/10 shadow-[0_0_50px_rgba(212,175,55,0.05)]"
          />
        ))}
      </motion.div>

      {/* Background Glowing Orb Effect - Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-[80px] rounded-full pointer-events-none z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10"
        style={{ perspective: "1000px" }}
      >
        
        {/* BRAND & LOGO */}
{/* BRAND & LOGO */}
        <motion.div variants={itemPopVariants} className="lg:col-span-4 flex flex-col items-start">
          
          {/* 3D Pop Logo Wrapper - Changed bg-white to bg-transparent */}
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5, z: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-transparent p-3 rounded-2xl mb-6 shadow-[0_10px_30px_rgba(212,175,55,0.15)] border border-[#D4AF37]/40 relative cursor-pointer group/logo"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-2xl blur-xl group-hover/logo:bg-[#F97316]/30 transition-all duration-500 transform translate-z-[-20px]"></div>
            <div className="relative w-20 h-20 bg-transparent rounded-lg" style={{ transform: "translateZ(10px)" }}>
              <Image 
                src="/logo_final_02.png" 
                alt="Bathe Engineering Works Logo" 
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Animated Text Effect */}
          <motion.h4 
            variants={textContainer}
            className="text-2xl sm:text-3xl font-black mb-4 tracking-tight flex flex-wrap drop-shadow-md"
          >
            {brandName.map((char, index) => (
              <motion.span 
                key={index} 
                variants={textLetter}
                className={index > 5 ? "text-[#D4AF37]" : "text-white"}
                style={{ display: "inline-block", marginRight: char === " " ? "8px" : "0px" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h4>

          <p className="text-sm text-[#F5F5DC]/70 mb-8 leading-relaxed font-medium max-w-sm">
            Committed to providing high-quality precision components, CNC machining, and state-of-the-art engineering solutions since 2005.
          </p>
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-wider shadow-md backdrop-blur-sm">ISO 9001:2015</motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} className="px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-wider shadow-md backdrop-blur-sm">MSME Verified</motion.div>
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={itemPopVariants} className="lg:col-span-2">
          <h4 className="text-white text-base font-bold mb-6 uppercase tracking-widest pb-2 inline-block relative overflow-hidden group/linkheader">
            Explore
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#F97316]" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1, duration: 0.5 }}
            />
          </h4>
          <ul className="space-y-4 text-sm font-bold">
            {['Home', 'About Us', 'Infrastructure', 'Contact'].map((item, i) => (
              <motion.li key={i} whileHover={{ x: 8 }}>
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className="flex items-center gap-3 text-[#F5F5DC]/80 hover:text-[#D4AF37] transition-colors duration-300 group/navitem"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6A0D25] border border-[#D4AF37]/50 group-hover/navitem:bg-[#F97316] transition-colors"></span> 
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT US */}
        <motion.div variants={itemPopVariants} className="lg:col-span-3">
          <h4 className="text-white text-base font-bold mb-6 uppercase tracking-widest pb-2 inline-block relative overflow-hidden">
            Get in Touch
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#F97316]" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1.1, duration: 0.5 }}
            />
          </h4>
          <div className="space-y-5 text-sm text-[#F5F5DC]/80 font-medium">
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 shrink-0">
                <span className="text-[#D4AF37] text-sm">👤</span>
              </div>
              <div>
                <strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-[10px]">Contact Person</strong> 
                <span className="text-white font-bold">Mr. Ganesh Bathe</span>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 shrink-0">
                <span className="text-[#D4AF37] text-sm">✉️</span>
              </div>
              <div>
                <strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-[10px]">Email Us</strong> 
                <a href="mailto:batheengineeringworks@gmail.com" className="hover:text-[#F97316] transition-colors block leading-tight">batheengineeringworks<br/>@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 shrink-0">
                <span className="text-[#D4AF37] text-sm">📞</span>
              </div>
              <div>
                <strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-[10px]">Call Us</strong> 
                <a href="tel:+919881442416" className="hover:text-[#F97316] transition-colors block">+91 9881442416</a>
                <a href="tel:+919673442416" className="hover:text-[#F97316] transition-colors block">+91 9673442416</a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ADDRESS */}
        <motion.div variants={itemPopVariants} className="lg:col-span-3">
          <h4 className="text-white text-base font-bold mb-6 uppercase tracking-widest pb-2 inline-block relative overflow-hidden">
            Facility Location
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-[#F97316]" 
              initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1.2, duration: 0.5 }}
            />
          </h4>
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }} 
            className="p-5 rounded-2xl bg-[#6A0D25]/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#6A0D25]/60 transition-all shadow-lg relative overflow-hidden group/address"
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#D4AF37]/10 rounded-full blur-xl group-hover/address:bg-[#F97316]/20 transition-colors"></div>
            <p className="text-sm leading-relaxed text-[#F5F5DC] font-medium flex items-start gap-3 relative z-10">
              <span className="mt-1 text-[#F97316] text-lg drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">📍</span>
              <span>
                <strong className="text-white block mb-2 font-bold">Bathe Engineering Works</strong>
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
        className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center relative z-10"
      >
        <p className="text-xs text-[#F5F5DC]/60 font-medium">
          © {new Date().getFullYear()} Bathe Engineering Works. All Rights Reserved.
        </p>
        
        {/* Animated Back to Top Button */}
        <motion.button 
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="mt-6 md:mt-0 flex items-center gap-3 text-xs font-bold text-[#D4AF37] uppercase tracking-wider hover:text-[#F97316] transition-colors group"
        >
          Back to Top 
          <span className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">
            <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path></svg>
          </span>
        </motion.button>
      </motion.div>

    </footer>
  );
}