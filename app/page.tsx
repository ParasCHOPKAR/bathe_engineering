"use client";

import Link from 'next/link';
import TiltCard from './components/TiltCard';
import { motion, Variants } from 'framer-motion';

const coreCompetencies = [
  { name: "Jigs & Fixtures", description: "Precision designed and manufactured as per specifications to ensure flawless production lines." },
  { name: "CNC Turning Components", description: "Accurate machining for complex and simple jobs with high repeatability and tight tolerances." },
  { name: "Auto Turned Components", description: "High-volume production with consistent quality, ideal for continuous assembly operations." },
  { name: "Precision Components", description: "Specialized engineering solutions requiring meticulous attention to detail and finish." },
];

const industriesServed = [
  { icon: "🚗", name: "Automotive" },
  { icon: "🏭", name: "Heavy Engineering" },
  { icon: "⚡", name: "Electrical & Electronics" },
  { icon: "🚜", name: "Agriculture Equipment" },
  { icon: "⚙️", name: "Custom Machinery" },
  { icon: "🛠️", name: "Tooling & Fabrication" },
];

const whyChooseUs = [
  { 
    title: "Uncompromising Quality", 
    description: "100% inspection policy with advanced measuring instruments like digital verniers and micrometers." 
  },
  { 
    title: "Timely Delivery", 
    description: "Optimized production schedules and inventory management to ensure you get your components on time, every time." 
  },
  { 
    title: "Experienced Workforce", 
    description: "Our shop floor is operated by highly skilled machinists and engineers with decades of industry expertise." 
  },
  { 
    title: "Competitive Pricing", 
    description: "Efficient manufacturing processes allow us to offer premium precision engineering at cost-effective rates." 
  }
];

export default function Home() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 px-4 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4fd1c5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.div
            initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
          >
            ISO 9001:2015 Compliant Approach
          </motion.div>
          
          <motion.h2
            initial="hidden" animate="visible" custom={1} variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
          >
            Precision Engineering <br className="hidden md:block"/> & Job Works
          </motion.h2>

          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeIn}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            M/S. Bathe Engineering Works specializes in manufacturing high-precision Jigs, Fixtures, Auto turned and CNC components for major industrial players across Pune & Satara.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" custom={3} variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/infrastructure" className="group relative w-full sm:w-auto flex justify-center">
              <div className="absolute inset-0 bg-cyan-400 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-200"></div>
              <button className="relative w-full sm:w-auto bg-cyan-500 text-blue-950 px-8 py-4 rounded-lg font-extrabold text-lg hover:bg-cyan-400 transition transform hover:-translate-y-1 shadow-xl">
                Explore Our Facility
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto flex justify-center">
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition transform hover:-translate-y-1 shadow-xl">
                Request a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-white py-12 border-b border-slate-200 shadow-sm relative z-20 -mt-8 mx-4 sm:mx-8 md:mx-auto max-w-6xl rounded-2xl">
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          {[ 
            { label: "Year Established", value: "2005" }, 
            { label: "Sq. Ft. Facility", value: "2000" }, 
            { label: "Machine Assets", value: "15+" }, 
            { label: "Quality Assurance", value: "100%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} custom={index}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-blue-800">{stat.value}</p>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}
            className="md:w-1/2"
          >
            <div className="w-16 h-1.5 bg-cyan-500 rounded-full mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight">
              Delivering Excellence in <br/> Every Micro-Millimeter.
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              For over a decade, Bathe Engineering Works has been at the forefront of providing exceptional job work services. Our commitment to utilizing advanced machinery—from CNC turning centers to robust conventional lathes and milling machines—ensures that every component meets rigorous industrial standards.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether it's a single prototype or a high-volume production run, we partner with our clients to transform their technical drawings into tangible, high-performance parts.
            </p>
            <Link href="/about" className="text-cyan-600 font-bold text-lg hover:text-cyan-700 flex items-center gap-2 transition">
              Read our full story <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            {/* Visual representation blocks instead of images to keep code self-contained */}
            <div className="bg-blue-100 h-48 rounded-2xl p-6 flex flex-col justify-end shadow-inner">
              <span className="text-4xl mb-2">⚙️</span>
              <span className="font-bold text-blue-900">Precision</span>
            </div>
            <div className="bg-slate-200 h-48 rounded-2xl mt-8 p-6 flex flex-col justify-end shadow-inner">
              <span className="text-4xl mb-2">🛠️</span>
              <span className="font-bold text-slate-800">Durability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION */}
      <section id="services" className="py-24 px-4 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Core Competencies</h3>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
              Equipped to deliver high-quality components and tooling solutions tailored to your strict drawings and specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCompetencies.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} custom={index}
              >
                <TiltCard className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 h-full cursor-pointer hover:bg-slate-800 transition-colors">
                  <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-8 text-2xl font-black border border-cyan-500/30">
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">{comp.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{comp.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-12"
          >
            Industries We Serve
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={index}
                className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-slate-100"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="font-bold text-slate-800 text-sm">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6">Why Partner With Us?</h3>
              <p className="text-slate-600 text-lg mb-8">
                We don't just manufacture parts; we build partnerships based on trust, reliability, and superior craftsmanship.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-900 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
                <div className="bg-blue-950 rounded-3xl p-10 relative text-white shadow-2xl">
                  <h4 className="text-2xl font-bold mb-6 text-cyan-400">Request Manufacturing Support</h4>
                  <p className="text-slate-300 mb-8">
                    Send us your engineering drawings (CAD/PDF) and specifications. Our technical team will review and provide a detailed quotation promptly.
                  </p>
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-2">Direct Contact</p>
                    <p className="text-xl font-bold mb-1">+91 (Your Number)</p>
                    <p className="text-cyan-400">batheengineering@example.com</p>
                  </div>
                  <Link href="/contact">
                    <button className="w-full mt-6 bg-cyan-500 text-blue-950 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 transition">
                      Contact Us Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}