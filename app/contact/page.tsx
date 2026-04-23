"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// 3D Animated Gear Component (Premium Theme adjusted)
const Animated3DGear = () => (
  <motion.div 
    className="absolute -top-20 -right-20 w-96 h-96 opacity-40 pointer-events-none z-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
  >
    <motion.div 
      className="w-full h-full border-[40px] border-dashed border-[#D4AF37]/30 rounded-full"
      animate={{ rotateX: [20, -20, 20], rotateY: [20, -20, 20] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ boxShadow: "inset 0 0 30px rgba(212,175,55,0.1), 0 0 30px rgba(212,175,55,0.1)" }}
    />
    {/* Inner Gear */}
    <motion.div 
      className="absolute inset-16 border-[20px] border-dotted border-[#F97316]/40 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

export default function Contact() {
  const formVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 }
    })
  };

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-20 px-4 relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* 3D Machinery Elements in Background */}
      <Animated3DGear />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F97316]/10 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20, rotateX: 90 }} 
          animate={{ opacity: 1, y: 0, rotateX: 0 }} 
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
          style={{ perspective: "1000px" }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A0D25] to-[#4a081a] mb-6 tracking-tight drop-shadow-sm uppercase">
            Contact & Corporate Profile
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#F97316] to-[#D4AF37] mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <p className="text-lg text-[#14532D]/90 max-w-2xl mx-auto font-bold tracking-wide">
            Reach out to us for quotations, precision engineering inquiries, and manufacturing partnerships.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-12 mb-20 perspective-1000">
          
          {/* LEFT: CONTACT INFO & FORM (Clean White 3D Card) */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, rotateY: -15, x: -50 }} 
              animate={{ opacity: 1, rotateY: 0, x: 0 }} 
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
              className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(106,13,37,0.08)] border border-[#D4AF37]/30 relative hover:shadow-2xl transition-all duration-300 hover:border-[#D4AF37]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-3xl font-black text-[#6A0D25] mb-8 border-b border-[#D4AF37]/30 pb-4 flex items-center gap-3 uppercase tracking-wide" style={{ transform: "translateZ(30px)" }}>
                <span className="text-[#D4AF37] drop-shadow-md">📝</span> Send us an Inquiry
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} style={{ transform: "translateZ(20px)" }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible">
                    <label className="block text-sm font-black text-[#14532D] mb-2 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#F5F5DC]/50 border border-[#D4AF37]/40 text-[#6A0D25] placeholder-[#14532D]/40 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:bg-white outline-none transition-all shadow-sm font-medium" placeholder="Enter your name" />
                  </motion.div>
                  <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible">
                    <label className="block text-sm font-black text-[#14532D] mb-2 uppercase tracking-wider">Company Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-[#F5F5DC]/50 border border-[#D4AF37]/40 text-[#6A0D25] placeholder-[#14532D]/40 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:bg-white outline-none transition-all shadow-sm font-medium" placeholder="Your organization" />
                  </motion.div>
                </div>
                <motion.div custom={3} variants={formVariants} initial="hidden" animate="visible">
                  <label className="block text-sm font-black text-[#14532D] mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-[#F5F5DC]/50 border border-[#D4AF37]/40 text-[#6A0D25] placeholder-[#14532D]/40 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:bg-white outline-none transition-all shadow-sm font-medium" placeholder="batheengineeringworks@gmail.com" />
                </motion.div>
                <motion.div custom={4} variants={formVariants} initial="hidden" animate="visible">
                  <label className="block text-sm font-black text-[#14532D] mb-2 uppercase tracking-wider">Requirement Details</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-[#F5F5DC]/50 border border-[#D4AF37]/40 text-[#6A0D25] placeholder-[#14532D]/40 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] focus:bg-white outline-none transition-all resize-none shadow-sm font-medium" placeholder="Describe your precision manufacturing needs..."></textarea>
                </motion.div>
                <motion.div custom={5} variants={formVariants} initial="hidden" animate="visible">
                  <button className="w-full relative overflow-hidden group bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-black py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_10px_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 uppercase tracking-widest border-2 border-transparent hover:border-[#D4AF37]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Submit Requirement <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* RIGHT: REGISTRATION & DIRECT INFO */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dark Maroon Contrast Card for Direct Contact */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }} 
              animate={{ opacity: 1, rotateY: 0, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, z: 20 }}
              className="bg-gradient-to-br from-[#6A0D25] via-[#590a1f] to-[#4a081a] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden border border-[#D4AF37]/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-[60px] opacity-20"></div>
              
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3 border-b border-[#D4AF37]/30 pb-4 uppercase tracking-widest" style={{ transform: "translateZ(20px)" }}>
                <span className="text-[#D4AF37] drop-shadow-md">📞</span> Direct Contact
              </h3>
              
              <div className="space-y-6 text-[#F5F5DC]/90 font-medium" style={{ transform: "translateZ(10px)" }}>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/5 border border-[#D4AF37]/30 rounded-xl group-hover:bg-[#F97316]/20 transition-colors drop-shadow-md">👤</span> 
                  <span><strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-xs">Person:</strong> Mr. Ganesh Bathe</span>
                </p>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/5 border border-[#D4AF37]/30 rounded-xl group-hover:bg-[#F97316]/20 transition-colors drop-shadow-md">📱</span> 
                  <span><strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-xs">Mobile:</strong> +91 9881442416 <br/> <span className="text-[#F97316] font-bold">+91 9673442416</span></span>
                </p>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/5 border border-[#D4AF37]/30 rounded-xl group-hover:bg-[#F97316]/20 transition-colors drop-shadow-md">✉️</span> 
                  <span className="text-sm"><strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-xs">Email:</strong> batheengineeringworks<br/>@gmail.com</span>
                </p>
                <p className="flex items-start gap-4 group">
                  <span className="p-3 bg-white/5 border border-[#D4AF37]/30 rounded-xl group-hover:bg-[#F97316]/20 transition-colors drop-shadow-md mt-1">🏭</span> 
                  <span><strong className="text-[#D4AF37] block mb-1 uppercase tracking-wider text-xs">Factory Address:</strong> Jambhale Patil Bag, Sr. no 1/1, shop no. 09, Dattanagar jambhulwadi road, Near Dari Pul, Pune - 411046</span>
                </p>
              </div>
            </motion.div>

            {/* Light Corporate Info Card */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }} 
              animate={{ opacity: 1, rotateY: 0, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05, z: 20 }}
              className="bg-white p-8 rounded-3xl border-t-[4px] border-[#D4AF37] shadow-xl relative border border-[#D4AF37]/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl font-black text-[#6A0D25] mb-6 uppercase tracking-wide" style={{ transform: "translateZ(20px)" }}>Corporate Information</h3>
              <ul className="space-y-4 text-sm text-[#14532D]/90" style={{ transform: "translateZ(10px)" }}>
                <li className="flex justify-between items-center py-3 border-b border-[#D4AF37]/20">
                  <span className="font-bold text-[#14532D]">Firm Status</span> <span className="bg-[#D4AF37]/10 text-[#6A0D25] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#D4AF37]/40">Proprietorship</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-[#D4AF37]/20">
                  <span className="font-bold text-[#14532D]">Established</span> <span className="font-black text-[#6A0D25]">14/06/2005</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-[#D4AF37]/20">
                  <span className="font-bold text-[#14532D]">GST / Sales Tax</span> <span className="font-mono text-[#6A0D25] font-bold bg-[#F5F5DC] px-2 py-1 rounded border border-[#D4AF37]/30">27AJGPB1887K1ZZ</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-[#D4AF37]/20">
                  <span className="font-bold text-[#14532D]">Udyog Aadhaar</span> <span className="font-mono text-[#6A0D25] font-bold bg-[#F5F5DC] px-2 py-1 rounded border border-[#D4AF37]/30">[Aadhaar Redacted]</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span className="font-bold text-[#14532D]">Bankers</span> <span className="text-right font-black text-[#6A0D25]">Bank of Baroda <br/> IDBI Bank</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

       {/* GOOGLE MAP SECTION (Premium Gold/Maroon Frame) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.8, type: "spring" }} 
          viewport={{ once: true }}
          className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-[#D4AF37]/30"
        >
          <div className="flex items-center gap-3 mb-6 px-2">
            <span className="text-4xl animate-bounce drop-shadow-md">📍</span>
            <h3 className="text-2xl font-black text-[#6A0D25] uppercase tracking-wide">Find Us on Map</h3>
          </div>
          
          {/* Map Frame */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 relative group shadow-inner">
            <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-[#D4AF37]/50 transition-all z-10 rounded-2xl"></div>
            {/* GOOGLE MAPS EMBED LINK */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.734267499427!2d73.8444983!3d18.4312678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac92a101b45%3A0x6bba30a2f5ab48fb!2sJambhulwadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}