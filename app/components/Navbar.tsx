"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Types define kiye for TypeScript build
interface NavLink {
  name: string;
  path: string;
}

// Nav links ko component se bahar rakha taaki har render pe naya array na bane
const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  // TS automatically infers boolean and string | null types
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  
  const pathname = usePathname();

  // Scroll event listener (Safe for Next.js SSR)
  useEffect(() => {
    const handleScroll = () => {
      // Only run on client side
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 40);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Jab mobile menu open ho toh background scroll disable karna (Optional but good UX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* TOP CONTACT BAR - Industrial Corporate Look (Hidden on small screens) */}
      <div 
        className={`hidden lg:flex justify-between items-center px-8 bg-blue-950 text-cyan-50 text-xs font-medium tracking-wider z-50 relative overflow-hidden transition-all duration-500 ease-in-out ${
          scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="flex items-center gap-6">
          <a href="mailto:batheengineeringworks@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <span className="group-hover:scale-125 transition-transform flex-shrink-0">✉️</span>
            <span>batheengineeringworks@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0">📍</span>
            <span>Pune, Maharashtra, 411046</span>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <a href="tel:+919881442416" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <span className="group-hover:scale-125 transition-transform animate-pulse flex-shrink-0">📞</span>
            <span>+91 9881442416</span>
          </a>
          <span className="text-blue-700">|</span>
          <span className="text-cyan-400 font-bold flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping flex-shrink-0"></div>
            <span>ISO 9001:2015 Certified</span>
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR - Floating Glass Pill Effect */}
      <div className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${scrolled ? 'top-4 pointer-events-none' : 'top-0 lg:top-8'}`}>
        <header 
          className={`mx-auto relative pointer-events-auto transition-all duration-500 ease-in-out ${
            scrolled 
              ? 'w-[92%] sm:w-[95%] max-w-6xl bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(37,99,235,0.15)] rounded-full border border-white/60 py-2' 
              : 'w-full bg-white shadow-md py-3 lg:py-4'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 h-full w-full">
            <div className="flex justify-between items-center h-full min-h-[50px] sm:min-h-[56px]">
              
              {/* LOGO & BRAND */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 z-50">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden rounded-full bg-white shadow-sm border-2 border-blue-50 group-hover:border-blue-100 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="Bathe Engineering Works Logo" 
                    fill
                    className="object-contain p-1.5 transform group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                    priority
                  />
                </div>
                {/* Logo Text - Hidden on very small mobile to prevent overlap */}
                <div className="hidden sm:block overflow-hidden min-w-0">
                  <h1 className="text-sm sm:text-lg md:text-xl font-black text-blue-950 tracking-tight leading-tight group-hover:text-blue-700 transition-colors truncate">
                    BATHE ENGINEERING
                  </h1>
                  <p className="text-[0.6rem] sm:text-[0.7rem] text-cyan-600 font-bold tracking-widest uppercase mt-0 truncate">
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
                        isActive ? 'text-blue-700' : isHovered ? 'text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      {link.name}
                      
                      {isHovered && (
                        <motion.div 
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-blue-50/80 rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      
                      {isActive && (
                        <motion.div 
                          layoutId="nav-active-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
                
                {/* CTA BUTTON */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2 xl:ml-4 flex-shrink-0">
                  <Link 
                    href="/contact" 
                    className="relative group overflow-hidden bg-gradient-to-r from-blue-700 to-blue-600 text-white px-5 xl:px-7 py-2 xl:py-2.5 rounded-full font-bold text-xs xl:text-sm tracking-wider uppercase shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    <span>Get a Quote</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              </nav>

              {/* MOBILE MENU HAMBURGER BUTTON */}
              <div className="lg:hidden flex items-center pr-1 flex-shrink-0 z-50">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 flex flex-col justify-center items-center bg-blue-50/50 rounded-full text-blue-900 hover:bg-blue-100 focus:outline-none transition-colors border border-blue-100"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  <motion.span 
                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} 
                    className="w-5 h-0.5 bg-current block mb-1.5 transition-transform"
                  />
                  <motion.span 
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
                    className="w-5 h-0.5 bg-current block mb-1.5 transition-opacity"
                  />
                  <motion.span 
                    animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} 
                    className="w-5 h-0.5 bg-current block transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU DROPDOWN - Properly Absolute Positioned */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 mt-2 lg:hidden origin-top z-40"
              >
                <div className="mx-auto w-full bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_40px_rgb(0,0,0,0.15)] rounded-2xl overflow-hidden">
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
                              isActive ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-900'
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
                      className="pt-4 mt-2 border-t border-slate-100"
                    >
                      <Link 
                        href="/contact" 
                        onClick={() => setIsOpen(false)} 
                        className="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:from-blue-600 hover:to-blue-500 transition-all uppercase tracking-wider text-sm"
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
      
      {/* PERFECT SPACER - Prevents content from hiding behind the fixed navbar */}
      <div className="h-[76px] lg:h-[110px] w-full"></div>
    </>
  );
}