"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Types for TypeScript
interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 40);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* TOP CONTACT BAR - Maroon & Gold Theme */}
      <div 
        className={`hidden lg:flex justify-between items-center px-8 bg-[#6A0D25] text-[#F5F5DC] text-xs font-medium tracking-wider z-50 relative overflow-hidden transition-all duration-500 ease-in-out ${
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2.5 opacity-100 border-b border-[#D4AF37]/30'
        }`}
      >
        <div className="flex items-center gap-6">
          <a href="mailto:batheengineeringworks@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
            <span className="group-hover:scale-125 transition-transform flex-shrink-0">✉️</span>
            <span>batheengineeringworks@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 text-[#D4AF37]">📍</span>
            <span>Pune, Maharashtra, 411046</span>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <a href="tel:+919881442416" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
            <span className="group-hover:scale-125 transition-transform animate-pulse flex-shrink-0">📞</span>
            <span>+91 9881442416</span>
          </a>
          <span className="text-[#D4AF37]/40">|</span>
          <span className="text-[#D4AF37] font-bold flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-ping flex-shrink-0"></div>
            <span>ISO 9001:2015 Certified</span>
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${scrolled ? 'top-4 pointer-events-none' : 'top-0 lg:top-10'}`}>
        <header 
          className={`mx-auto relative pointer-events-auto transition-all duration-500 ease-in-out ${
            scrolled 
              ? 'w-[92%] sm:w-[95%] max-w-6xl bg-[#6A0D25]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(106,13,37,0.3)] rounded-full border border-[#D4AF37]/20 py-2' 
              : 'w-full bg-[#6A0D25] shadow-md py-3 lg:py-4 border-b border-[#D4AF37]/20'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 h-full w-full">
            <div className="flex justify-between items-center h-full min-h-[50px] sm:min-h-[56px]">
              
              {/* LOGO & BRAND */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 z-50">
                {/* REMOVED: bg-white, rounded-full, border, and shadows */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden transition-all duration-300">
                  <Image 
                    src="/logo_final.png" 
                    alt="Bathe Engineering Works" 
                    fill
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                    priority
                  />
                </div>
                <div className="hidden sm:block overflow-hidden min-w-0">
                  <h1 className={`text-sm sm:text-lg md:text-xl font-black tracking-tight leading-tight transition-colors truncate ${scrolled ? 'text-white' : 'text-[#F5F5DC]'}`}>
                    BATHE ENGINEERING
                  </h1>
                  <p className="text-[0.6rem] sm:text-[0.7rem] text-[#D4AF37] font-bold tracking-widest uppercase mt-0 truncate">
                    Precision & Quality
                  </p>
                </div>
              </Link>

              {/* DESKTOP MENU */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  const isHovered = hoveredPath === link.path;
                  
                  return (
                    <Link 
                      key={link.name} 
                      href={link.path} 
                      onMouseEnter={() => setHoveredPath(link.path)}
                      onMouseLeave={() => setHoveredPath(null)}
                      className={`relative px-3 xl:px-4 py-2 font-bold text-xs xl:text-sm uppercase tracking-wider transition-colors duration-300 z-10 whitespace-nowrap ${
                        isActive ? 'text-[#D4AF37]' : isHovered ? 'text-white' : 'text-[#F5F5DC]/80'
                      }`}
                    >
                      {link.name}
                      
                      {isHovered && (
                        <motion.div 
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-white/10 rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      
                      {isActive && (
                        <motion.div 
                          layoutId="nav-active-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F97316] rounded-full shadow-[0_0_8px_#F97316]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
                
                {/* CTA BUTTON - Saffron Orange */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2 xl:ml-4 flex-shrink-0">
                  <Link 
                    href="/contact" 
                    className="relative group overflow-hidden bg-[#F97316] text-white px-5 xl:px-7 py-2 xl:py-2.5 rounded-full font-bold text-xs xl:text-sm tracking-wider uppercase shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.5)] transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                    <span>Get a Quote</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              </nav>

              {/* MOBILE MENU BUTTON */}
              <div className="lg:hidden flex items-center pr-1 flex-shrink-0 z-50">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 flex flex-col justify-center items-center bg-white/10 rounded-full text-[#F5F5DC] hover:bg-white/20 focus:outline-none transition-colors border border-[#D4AF37]/30"
                  aria-label="Toggle menu"
                >
                  <motion.span 
                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} 
                    className="w-5 h-0.5 bg-current block mb-1.5"
                  />
                  <motion.span 
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
                    className="w-5 h-0.5 bg-current block mb-1.5"
                  />
                  <motion.span 
                    animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} 
                    className="w-5 h-0.5 bg-current block"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 mt-2 lg:hidden origin-top z-40 px-4"
              >
                <div className="bg-[#6A0D25] border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden">
                  <div className="px-4 py-6 space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.path;
                      return (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          key={link.name}
                        >
                          <Link 
                            href={link.path} 
                            onClick={() => setIsOpen(false)} 
                            className={`block px-5 py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase transition-colors ${
                              isActive ? 'bg-[#F97316] text-white shadow-md' : 'text-[#F5F5DC] hover:bg-white/10 hover:text-[#D4AF37]'
                            }`}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="pt-4 mt-2 border-t border-white/10"
                    >
                      <Link 
                        href="/contact" 
                        onClick={() => setIsOpen(false)} 
                        className="flex justify-center items-center gap-2 w-full bg-[#F97316] text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all uppercase tracking-wider text-sm"
                      >
                        Get a Quote <span>→</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
      
      {/* SPACER */}
      <div className="h-[80px] lg:h-[120px] w-full bg-[#F5F5DC]"></div>
    </>
  );
}