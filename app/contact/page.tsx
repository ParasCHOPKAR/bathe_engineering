"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// 3D Animated Gear Component (Light Theme adjusted)
const Animated3DGear = () => (
  <motion.div 
    className="absolute -top-20 -right-20 w-96 h-96 opacity-40 pointer-events-none z-0"
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
  >
    <motion.div 
      className="w-full h-full border-[40px] border-dashed border-blue-200 rounded-full"
      animate={{ rotateX: [20, -20, 20], rotateY: [20, -20, 20] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ boxShadow: "inset 0 0 30px rgba(37,99,235,0.1), 0 0 30px rgba(37,99,235,0.1)" }}
    />
    {/* Inner Gear */}
    <motion.div 
      className="absolute inset-16 border-[20px] border-dotted border-cyan-300 rounded-full"
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
    <div className="bg-slate-50 min-h-screen py-20 px-4 relative overflow-hidden">
      
      {/* 3D Machinery Elements in Background */}
      <Animated3DGear />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/10 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20, rotateX: 90 }} 
          animate={{ opacity: 1, y: 0, rotateX: 0 }} 
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
          style={{ perspective: "1000px" }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-600 mb-6 tracking-tight drop-shadow-sm">
            Contact & Corporate Profile
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
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
              className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(37,99,235,0.08)] border border-blue-50 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-3xl font-extrabold text-blue-950 mb-8 border-b border-slate-100 pb-4 flex items-center gap-3" style={{ transform: "translateZ(30px)" }}>
                <span className="text-blue-600">📝</span> Send us an Inquiry
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} style={{ transform: "translateZ(20px)" }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible">
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="Enter your name" />
                  </motion.div>
                  <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible">
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Company Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="Your organization" />
                  </motion.div>
                </div>
                <motion.div custom={3} variants={formVariants} initial="hidden" animate="visible">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-sm" placeholder="batheengineeringworks@gmail.com" />
                </motion.div>
                <motion.div custom={4} variants={formVariants} initial="hidden" animate="visible">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Requirement Details</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none shadow-sm" placeholder="Describe your precision manufacturing needs..."></textarea>
                </motion.div>
                <motion.div custom={5} variants={formVariants} initial="hidden" animate="visible">
                  <button className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-700 to-blue-600 text-white font-extrabold py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-1">
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
            
            {/* Dark Blue Contrast Card for Direct Contact */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }} 
              animate={{ opacity: 1, rotateY: 0, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, z: 20 }}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden border border-blue-700/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 rounded-full blur-[50px] opacity-20"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-blue-700/50 pb-4" style={{ transform: "translateZ(20px)" }}>
                <span className="text-cyan-400">📞</span> Direct Contact
              </h3>
              
              <div className="space-y-6 text-blue-100" style={{ transform: "translateZ(10px)" }}>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/10 border border-white/10 rounded-xl group-hover:bg-cyan-500/30 transition-colors">👤</span> 
                  <span><strong className="text-white block mb-1">Person:</strong> Mr. Ganesh Bathe</span>
                </p>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/10 border border-white/10 rounded-xl group-hover:bg-cyan-500/30 transition-colors">📱</span> 
                  <span><strong className="text-white block mb-1">Mobile:</strong> +91 9881442416 <br/> <span className="text-cyan-300">+91 9673442416</span></span>
                </p>
                <p className="flex items-center gap-4 group">
                  <span className="p-3 bg-white/10 border border-white/10 rounded-xl group-hover:bg-cyan-500/30 transition-colors">✉️</span> 
                  <span className="text-sm"><strong className="text-white block mb-1">Email:</strong> batheengineeringworks<br/>@gmail.com</span>
                </p>
                <p className="flex items-start gap-4 group">
                  <span className="p-3 bg-white/10 border border-white/10 rounded-xl group-hover:bg-cyan-500/30 transition-colors mt-1">🏭</span> 
                  <span><strong className="text-white block mb-1">Factory Address:</strong> Jambhale Patil Bag, Sr. no 1/1, shop no. 09, Dattanagar jambhulwadi road, Near Dari Pul, Pune - 411046</span>
                </p>
              </div>
            </motion.div>

            {/* Light Corporate Info Card */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }} 
              animate={{ opacity: 1, rotateY: 0, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05, z: 20 }}
              className="bg-white p-8 rounded-3xl border-t-4 border-blue-600 shadow-xl relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl font-extrabold text-blue-950 mb-6" style={{ transform: "translateZ(20px)" }}>Corporate Information</h3>
              <ul className="space-y-4 text-sm text-slate-600" style={{ transform: "translateZ(10px)" }}>
                <li className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-bold text-slate-800">Firm Status</span> <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">Proprietorship</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-bold text-slate-800">Established</span> <span className="font-medium text-slate-900">14/06/2005</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-bold text-slate-800">GST / Sales Tax</span> <span className="font-mono text-blue-700 font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">27AJGPB1887K1ZZ</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-bold text-slate-800">Udyog Aadhaar</span> <span className="font-mono text-blue-700 font-bold bg-slate-50 px-2 py-1 rounded border border-slate-100">MH26B0141696</span>
                </li>
                <li className="flex justify-between items-center py-3">
                  <span className="font-bold text-slate-800">Bankers</span> <span className="text-right font-medium text-slate-900">Bank of Baroda <br/> IDBI Bank</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

       {/* GOOGLE MAP SECTION (Clean White Frame) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.8, type: "spring" }} 
          viewport={{ once: true }}
          className="bg-white p-4 md:p-6 rounded-3xl shadow-[0_15px_40px_rgba(37,99,235,0.1)] border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-6 px-2">
            <span className="text-4xl animate-bounce drop-shadow-md">📍</span>
            <h3 className="text-2xl font-extrabold text-blue-950">Find Us on Map</h3>
          </div>
          
          {/* Map Frame */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-200 relative group shadow-inner">
            <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-blue-500/30 transition-all z-10 rounded-2xl"></div>
            {/* YAHAN REAL GOOGLE MAPS EMBED LINK DAALA HAI */}
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