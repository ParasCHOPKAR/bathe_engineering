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
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Page Header */}
        <motion.div 
          initial="hidden" animate="show" variants={slideRight}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            Our Story & Legacy
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-cyan-500 mx-auto rounded-full mb-4 sm:mb-6 shadow-sm"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            Since 2005, Bathe Engineering Works has been at the forefront of delivering uncompromising quality and precision in the manufacturing sector.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start md:items-center mb-12 md:mb-20 px-2">
          
          {/* Left Column: Storytelling Text (Staggered) */}
          <motion.div 
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 sm:space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed order-2 md:order-1"
          >
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              <strong className="text-blue-900 font-extrabold text-base sm:text-lg md:text-xl">Bathe Engineering Works</strong> is a premier Small Scale Enterprise based in the industrial hub of Pune. We take immense pride in introducing ourselves as a trusted manufacturer of complex engineering works and bespoke components.
            </motion.p>
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              Our core expertise lies in the precise manufacturing of <span className="text-cyan-600 font-bold bg-cyan-50 px-1 rounded">Jigs, Fixtures, Auto turned components, and precision machinery parts.</span> We serve a wide array of industries across Pune, Satara, and beyond.
            </motion.p>
            <motion.p variants={item} className="text-sm sm:text-base md:text-lg">
              Over the decades, we have successfully executed major, high-tolerance orders from globally reputed companies and heavy industrial units. Our philosophy is simple: delivering qualitative, defect-free, and timely services to meet your exact dimensional requirements.
            </motion.p>
            <motion.div variants={item} className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 sm:p-6 rounded-xl shadow-lg text-white border-l-4 border-cyan-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10" aria-hidden="true"></div>
              <p className="italic font-medium relative z-10 text-blue-50 text-sm sm:text-base">
                "We don't just manufacture parts; we engineer trust. We invite you to place your requirements with us and experience the commitment of our esteemed organization firsthand."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Highlights with Hover Effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 md:order-2"
          >
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative group transition-all duration-300 hover:shadow-[0_8px_30px_rgb(6,182,212,0.1)] overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-xs sm:text-sm shadow-md">
                ISO 9001:2015 Approach
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 sm:mb-8 mt-4 sm:mt-2">Why Partner With Us?</h3>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  { title: "Precision & Quality", desc: "100% adherence to your drawings with micrometer accuracy." },
                  { title: "Timely Delivery", desc: "Optimized production cycles to strictly meet your deadlines." },
                  { title: "Expert Leadership", desc: "Guided by the extensive industry experience of Mr. Ganesh Bathe." },
                  { title: "Robust Infrastructure", desc: "2000 sq. ft. facility loaded with advanced CNC & Conventional setups." }
                ].map((point, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0 mt-0.5 text-sm">✓</div>
                    <div className="min-w-0">
                      <strong className="text-slate-800 block text-sm sm:text-base md:text-lg">{point.title}</strong>
                      <span className="text-slate-600 text-xs sm:text-sm leading-snug">{point.desc}</span>
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
          className="text-center bg-blue-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden mx-2"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" aria-hidden="true"></div>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 relative z-10">Ready to discuss your next project?</h4>
          <p className="text-sm sm:text-base md:text-lg text-cyan-100 max-w-3xl mx-auto font-medium relative z-10 mb-6 sm:mb-8 leading-relaxed px-2">
            We hope our set-up and legacy fulfill your requirements. We assure you our best services at all times. Waiting for your earliest reply.
          </p>
          <Link href="/contact" className="relative z-10 inline-block bg-cyan-500 text-blue-950 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-extrabold text-sm sm:text-base md:text-lg hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgb(6,182,212,0.4)] whitespace-nowrap">
            Contact Us Today
          </Link>
        </motion.div>

      </div>
    </div>
  );
}