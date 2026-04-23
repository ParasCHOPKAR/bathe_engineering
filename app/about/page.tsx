"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function About() {
  // Stagger animation for list items
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  // Slide animation for header
  const slideRight: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Page Header */}
        <motion.div 
          initial="hidden" animate="show" variants={slideRight}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#6A0D25] mb-4 sm:mb-6 tracking-tight leading-tight uppercase">
            Our Story & Legacy
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-[#F97316] mx-auto rounded-full mb-4 sm:mb-6 shadow-sm"></div>
          <p className="text-base sm:text-lg md:text-xl text-[#14532D]/90 max-w-3xl mx-auto font-bold leading-relaxed px-2">
            Since 2005, Bathe Engineering Works has been at the forefront of delivering uncompromising quality and precision in the manufacturing sector.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start md:items-center mb-12 md:mb-20 px-2">
          
          {/* Left Column: Storytelling Text (Staggered) */}
          <motion.div 
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 sm:space-y-6 text-[#14532D]/80 text-base sm:text-lg leading-relaxed order-2 md:order-1 font-medium"
          >
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              <strong className="text-[#6A0D25] font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">Bathe Engineering Works</strong> is a premier Small Scale Enterprise based in the industrial hub of Pune. We take immense pride in introducing ourselves as a trusted manufacturer of complex engineering works and bespoke components.
            </motion.p>
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              Our core expertise lies in the precise manufacturing of <span className="text-[#F97316] font-bold bg-[#F97316]/10 px-1.5 py-0.5 rounded border border-[#F97316]/20">Jigs, Fixtures, Auto turned components, and precision machinery parts.</span>  We serve a wide array of industries across Pune, Satara, and beyond.
            </motion.p>
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              Over the decades, we have successfully executed major, high-tolerance orders from globally reputed companies and heavy industrial units. Our philosophy is simple: delivering qualitative, defect-free, and timely services to meet your exact dimensional requirements. 
            </motion.p>
            <motion.div variants={item} className="bg-gradient-to-br from-[#4a081a] to-[#6A0D25] p-4 sm:p-6 rounded-xl shadow-xl text-white border-l-4 border-[#D4AF37] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[60px] opacity-20 transform translate-x-10 -translate-y-10" aria-hidden="true"></div>
              <p className="italic font-medium relative z-10 text-[#F5F5DC]/90 text-sm sm:text-base tracking-wide">
                "We don't just manufacture parts; we engineer trust. We invite you to place your requirements with us and experience the commitment of our esteemed organization firsthand."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Highlights with Hover Effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 md:order-2"
          >
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-[#D4AF37]/30 relative group transition-all duration-300 hover:shadow-2xl hover:border-[#D4AF37] overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#6A0D25] px-3 sm:px-6 py-1.5 sm:py-2 rounded-bl-2xl rounded-tr-2xl font-black uppercase tracking-wider text-xs sm:text-sm shadow-md">
                ISO 9001:2015 Approach
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#6A0D25] mb-6 sm:mb-8 mt-4 sm:mt-2 uppercase tracking-wide">Why Partner With Us?</h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  { title: "Precision & Quality", desc: "100% adherence to your drawings with micrometer accuracy." },
                  { title: "Timely Delivery", desc: "Optimized production cycles to strictly meet your deadlines." },
                  { title: "Expert Leadership", desc: "Guided by the extensive industry experience of Mr. Ganesh Bathe." },
                  { title: "Robust Infrastructure", desc: "2000 sq. ft. facility loaded with advanced CNC & Conventional setups." }
                ].map((point, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#6A0D25] flex items-center justify-center font-black shrink-0 mt-0.5 text-sm shadow-sm">✓</div>
                    <div className="min-w-0">
                      <strong className="text-[#14532D] block text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">{point.title}</strong>
                      <span className="text-[#14532D]/70 font-medium text-xs sm:text-sm leading-snug">{point.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#6A0D25] to-[#4a081a] rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_10px_40px_rgba(106,13,37,0.4)] relative overflow-hidden mx-2 border border-[#D4AF37]/20"
        >
          <div className="absolute inset-0 bg-[#D4AF37] opacity-5 mix-blend-overlay" aria-hidden="true"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#D4AF37] mb-3 sm:mb-4 relative z-10 uppercase tracking-widest">
            Ready to discuss your next project?
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F5DC]/90 max-w-3xl mx-auto font-medium relative z-10 mb-6 sm:mb-8 leading-relaxed px-2">
            We hope our set-up and legacy fulfill your requirements. We assure you our best services at all times. Waiting for your earliest reply.
          </p>
          <Link href="/contact" className="relative z-10 inline-block bg-[#F97316] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base md:text-lg hover:bg-[#EA580C] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] whitespace-nowrap uppercase tracking-widest border-2 border-transparent hover:border-[#D4AF37]">
            Contact Us Today
          </Link>
        </motion.div>

      </div>
    </div>
  );
}