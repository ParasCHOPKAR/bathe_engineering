"use client";

import Link from 'next/link';
import TiltCard from './components/TiltCard';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

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

// Naya Clients Data Add Kiya Gaya Hai
const clients = [
  { name: "Tata Motors", logo: "/images/clients/tata.png" }, // Apne actual logo path se replace karein
  { name: "Mahindra", logo: "/images/clients/mahindra.png" },
  { name: "Bharat Forge", logo: "/images/clients/bharat-forge.png" },
  { name: "L&T", logo: "/images/clients/lt.png" },
  { name: "Bajaj Auto", logo: "/images/clients/bajaj.png" },
  { name: "Godrej", logo: "/images/clients/godrej.png" }
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

  // Naya marquee animation variant clients ke liye
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 md:py-28 px-4 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4fd1c5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.div
            initial="hidden" animate="visible" custom={0} variants={fadeIn}
            className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-6"
          >
            ISO 9001:2015 Compliant Approach
          </motion.div>
          
          <motion.h2
            initial="hidden" animate="visible" custom={1} variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
          >
            Precision Engineering <br className="hidden md:block"/> & Job Works
          </motion.h2>

          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeIn}
            className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-medium px-2"
          >
            M/S. Bathe Engineering Works specializes in manufacturing high-precision Jigs, Fixtures, Auto turned and CNC components for major industrial players across Pune & Satara.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" custom={3} variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link href="/infrastructure" className="group relative w-full sm:w-auto flex justify-center">
              <div className="absolute inset-0 bg-cyan-400 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-200"></div>
              <button className="relative w-full sm:w-auto bg-cyan-500 text-blue-950 px-8 py-4 rounded-lg font-extrabold text-base md:text-lg hover:bg-cyan-400 transition transform hover:-translate-y-1 shadow-xl">
                Explore Our Facility
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto flex justify-center">
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/20 transition transform hover:-translate-y-1 shadow-xl">
                Request a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-white py-10 md:py-12 border-b border-slate-200 shadow-sm relative z-20 -mt-8 mx-4 sm:mx-8 md:mx-auto max-w-6xl rounded-2xl">
        <div className="px-2 md:px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-x divide-slate-100">
          {[ 
            { label: "Year Established", value: "2005" }, 
            { label: "Sq. Ft. Facility", value: "2000" }, 
            { label: "Machine Assets", value: "15+" }, 
            { label: "Quality Assurance", value: "100%" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} custom={index}
              className="px-2"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800">{stat.value}</p>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm mt-2 md:mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}
            className="w-full md:w-1/2"
          >
            <div className="w-16 h-1.5 bg-cyan-500 rounded-full mb-6 mx-auto md:mx-0"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 leading-tight text-center md:text-left">
              Delivering Excellence in <br className="hidden sm:block"/> Every Micro-Millimeter.
            </h3>
            <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed text-center md:text-left">
              For over a decade, Bathe Engineering Works has been at the forefront of providing exceptional job work services. Our commitment to utilizing advanced machinery—from CNC turning centers to robust conventional lathes and milling machines—ensures that every component meets rigorous industrial standards.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Whether it's a single prototype or a high-volume production run, we partner with our clients to transform their technical drawings into tangible, high-performance parts.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about" className="text-cyan-600 font-bold text-base md:text-lg hover:text-cyan-700 flex items-center gap-2 transition">
                Read our full story <span className="text-xl">→</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2}
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="bg-blue-100 h-40 sm:h-48 rounded-2xl p-4 sm:p-6 flex flex-col justify-end shadow-inner">
              <span className="text-3xl sm:text-4xl mb-2">⚙️</span>
              <span className="font-bold text-blue-900 text-sm sm:text-base">Precision</span>
            </div>
            <div className="bg-slate-200 h-40 sm:h-48 rounded-2xl mt-6 sm:mt-8 p-4 sm:p-6 flex flex-col justify-end shadow-inner">
              <span className="text-3xl sm:text-4xl mb-2">🛠️</span>
              <span className="font-bold text-slate-800 text-sm sm:text-base">Durability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION */}
      <section id="services" className="py-16 md:py-24 px-4 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Core Competencies</h3>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-base md:text-lg px-2">
              Equipped to deliver high-quality components and tooling solutions tailored to your strict drawings and specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreCompetencies.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} custom={index}
                className="h-full"
              >
                <TiltCard className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 h-full cursor-pointer hover:bg-slate-800 transition-colors flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6 md:mb-8 text-xl md:text-2xl font-black border border-cyan-500/30">
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">{comp.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{comp.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW CLIENTS / TRUSTED BY SECTION */}
      <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h3 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3"
            >
              Trusted By Industry Leaders
            </motion.h3>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}
              className="text-slate-500 text-sm sm:text-base font-medium"
            >
              Delivering excellence to top manufacturing and engineering companies.
            </motion.p>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden flex items-center h-32 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 sm:before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 sm:after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
            <motion.div 
              className="flex gap-8 sm:gap-16 items-center w-max"
              variants={marqueeVariants}
              animate="animate"
            >
              {/* Double the array for seamless looping */}
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex flex-col items-center justify-center gap-3 w-32 sm:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                  {/* Fallback to text if image not found, ideal for placeholder */}
                  <div className="h-12 w-full relative flex items-center justify-center bg-slate-50 rounded p-2">
                    {client.logo ? (
                      // Add actual images when available in your public folder
                      // <Image src={client.logo} alt={client.name} fill className="object-contain" />
                      <span className="font-black text-slate-400 text-lg uppercase tracking-wider">{client.name.substring(0,3)}</span>
                    ) : (
                      <span className="font-bold text-slate-400">{client.name}</span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-slate-600 text-center uppercase tracking-wider">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-10 md:mb-12"
          >
            Industries We Serve
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={index}
                className="bg-white p-4 sm:p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-slate-100 flex flex-col items-center justify-center aspect-square sm:aspect-auto"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{industry.icon}</div>
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm text-center">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={1}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 text-center lg:text-left">Why Partner With Us?</h3>
              <p className="text-slate-600 text-base md:text-lg mb-8 text-center lg:text-left">
                We don't just manufacture parts; we build partnerships based on trust, reliability, and superior craftsmanship.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
                    <div className="mt-1 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={2} className="mt-8 lg:mt-0">
              <div className="relative max-w-md mx-auto lg:max-w-full">
                <div className="absolute inset-0 bg-blue-900 rounded-3xl transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 opacity-10"></div>
                <div className="bg-blue-950 rounded-3xl p-6 sm:p-8 md:p-10 relative text-white shadow-2xl">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400 text-center sm:text-left">Request Manufacturing Support</h4>
                  <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base text-center sm:text-left">
                    Send us your engineering drawings (CAD/PDF) and specifications. Our technical team will review and provide a detailed quotation promptly.
                  </p>
                  <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700 text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-slate-400 uppercase font-bold tracking-wider mb-2">Direct Contact</p>
                    <p className="text-lg sm:text-xl font-bold mb-1">+91 9881442416</p>
                    <p className="text-cyan-400 text-sm sm:text-base break-words">batheengineeringworks@gmail.com</p>
                  </div>
                  <Link href="/contact" className="block mt-6">
                    <button className="w-full bg-cyan-500 text-blue-950 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-400 transition">
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