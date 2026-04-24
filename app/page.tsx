"use client";

import Link from "next/link";
import TiltCard from "./components/TiltCard";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const coreCompetencies = [
  {
    name: "Jigs & Fixtures",
    description:
      "Precision designed and manufactured as per specifications to ensure flawless production lines.",
  },
  {
    name: "CNC Turning Components",
    description:
      "Accurate machining for complex and simple jobs with high repeatability and tight tolerances.",
  },
  {
    name: "Auto Turned Components",
    description:
      "High-volume production with consistent quality, ideal for continuous assembly operations.",
  },
  {
    name: "Precision Components",
    description:
      "Specialized engineering solutions requiring meticulous attention to detail and finish.",
  },
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
    description:
      "100% inspection policy with advanced measuring instruments like digital verniers and micrometers.",
  },
  {
    title: "Timely Delivery",
    description:
      "Optimized production schedules and inventory management to ensure you get your components on time, every time.",
  },
  {
    title: "Experienced Workforce",
    description:
      "Our shop floor is operated by highly skilled machinists and engineers with decades of industry expertise.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Efficient manufacturing processes allow us to offer premium precision engineering at cost-effective rates.",
  },
];

const clients = [
  { name: "Solcon", logo: "/solcon.jpeg" },
  { name: "VH Group", logo: "/vhgroup.jpeg" },
  { name: "T India", logo: "/tindia.jpeg" },
  { name: "kalyaniForge", logo: "/kalyaniforge.jpeg" },
  { name: "cyclo", logo: "/cyclo.jpeg" },
];

export default function Home() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

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
    <div className="overflow-hidden bg-[#F5F5DC]">
      
      {/* =========================================
          UPDATED MODERN HERO SECTION
          ========================================= */}
      {/* Added pb-32 to ensure content isn't hidden behind the stats card */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#24040d] pt-20 pb-32 px-4">
        
        {/* 1. Engineering Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3715_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3715_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

        {/* 2. Modern Glowing Orbs for Depth */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6A0D25] blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[#F97316]/20 blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[50%] h-[40%] rounded-full bg-[#D4AF37]/15 blur-[120px] pointer-events-none z-0"></div>

        {/* 3. Hero Content (Elevated z-index) */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-20 w-full">
          
          {/* Modern Glassmorphism Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <div className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></div>
            <span className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-widest uppercase">
              ISO 9001:2015 Compliant Approach
            </span>
          </motion.div>

          {/* High-Contrast Modern Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-white drop-shadow-lg"
          >
            Precision <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F97316] to-[#D4AF37] animate-gradient-x">
              Engineering
            </span>
            <br /> & Job Works
          </motion.h1>

          {/* Elegant Subtext */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl text-[#F5F5DC]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4"
          >
            M/S. Bathe Engineering Works specializes in manufacturing
            high-precision Jigs, Fixtures, Auto turned and CNC components for
            major industrial players across Pune & Satara.
          </motion.p>

          {/* Modern Button Group */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto px-4 sm:px-0 relative z-30"
          >
            {/* Primary Glowing Action Button */}
            <Link href="/infrastructure" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#F97316] rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative w-full sm:w-auto bg-[#F97316] text-white px-8 py-4 rounded-xl font-black text-sm md:text-base hover:bg-[#EA580C] transition-all transform group-hover:-translate-y-1 uppercase tracking-widest border border-white/10 shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                Explore Facility
              </button>
            </Link>

            {/* Secondary Glass Outline Button */}
            <Link href="/contact" className="group relative w-full sm:w-auto">
              <button className="relative w-full sm:w-auto bg-black/40 backdrop-blur-md border-[2px] border-[#D4AF37]/80 text-[#D4AF37] px-8 py-4 rounded-xl font-bold text-sm md:text-base hover:bg-[#D4AF37] hover:text-[#6A0D25] transition-all transform hover:-translate-y-1 uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Request a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          REST OF THE PAGE 
          ========================================= */}

      {/* QUICK STATS */}
      <section className="bg-white py-10 md:py-12 shadow-lg relative z-40 -mt-16 mx-4 sm:mx-8 md:mx-auto max-w-6xl rounded-2xl border border-[#D4AF37]/20">
        <div className="px-2 md:px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-x divide-slate-100">
          {[
            { label: "Year Established", value: "2005" },
            { label: "Sq. Ft. Facility", value: "2000" },
            { label: "Machine Assets", value: "15+" },
            { label: "Quality Assurance", value: "100%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              custom={index}
              className="px-2"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#6A0D25]">
                {stat.value}
              </p>
              <p className="text-[#14532D] font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm mt-2 md:mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="py-16 md:py-20 px-4 bg-[#FFF5EC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
            className="w-full md:w-1/2"
          >
            <div className="w-16 h-1.5 bg-[#D4AF37] rounded-full mb-6 mx-auto md:mx-0"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#6A0D25] mb-6 leading-tight text-center md:text-left">
              Delivering Excellence in <br className="hidden sm:block" /> Every
              Micro-Millimeter.
            </h3>
            <p className="text-[#14532D]/90 font-medium text-base md:text-lg mb-6 leading-relaxed text-center md:text-left">
              For over a decade, Bathe Engineering Works has been at the
              forefront of providing exceptional job work services. Our
              commitment to utilizing advanced machinery—from CNC turning
              centers to robust conventional lathes and milling machines—ensures
              that every component meets rigorous industrial standards.
            </p>
            <p className="text-[#14532D]/90 font-medium text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
              Whether it's a single prototype or a high-volume production run,
              we partner with our clients to transform their technical drawings
              into tangible, high-performance parts.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/about"
                className="text-[#F97316] font-bold text-base md:text-lg hover:text-[#EA580C] flex items-center gap-2 transition uppercase tracking-wider"
              >
                Read our full story <span className="text-xl">→</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="bg-[#6A0D25] h-40 sm:h-48 rounded-2xl p-4 sm:p-6 flex flex-col justify-end shadow-xl border border-[#D4AF37]/30">
              <span className="text-3xl sm:text-4xl mb-2">⚙️</span>
              <span className="font-black tracking-wider uppercase text-[#D4AF37] text-sm sm:text-base">
                Precision
              </span>
            </div>
            <div className="bg-[#14532D] h-40 sm:h-48 rounded-2xl mt-6 sm:mt-8 p-4 sm:p-6 flex flex-col justify-end shadow-xl border border-[#D4AF37]/30">
              <span className="text-3xl sm:text-4xl mb-2">🛠️</span>
              <span className="font-black tracking-wider uppercase text-[#D4AF37] text-sm sm:text-base">
                Durability
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE COMPETENCIES SECTION */}
      <section
        id="services"
        className="py-16 md:py-24 px-4 bg-[#F5F5DC] relative border-y border-[#D4AF37]/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#6A0D25] mb-6 tracking-tight">
              Our Core Competencies
            </h3>
            <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
            <p className="text-[#14532D]/90 max-w-2xl mx-auto font-medium text-base md:text-lg px-2">
              Equipped to deliver high-quality components and tooling solutions
              tailored to your strict drawings and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreCompetencies.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                custom={index}
                className="h-full"
              >
                <TiltCard className="bg-white p-6 md:p-8 rounded-2xl border border-[#D4AF37]/30 h-full cursor-pointer hover:bg-[#FFF5EC] hover:border-[#D4AF37] transition-all flex flex-col shadow-md hover:shadow-xl">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center mb-6 md:mb-8 text-xl md:text-2xl font-black border border-[#D4AF37]/40">
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#14532D] mb-3 md:mb-4 tracking-tight leading-tight">
                    {comp.name}
                  </h4>
                  <p className="text-[#14532D]/70 font-medium text-sm leading-relaxed flex-grow">
                    {comp.description}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / TRUSTED BY SECTION */}
      <section className="py-16 bg-[#FFF5EC] border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl sm:text-4xl font-black text-[#6A0D25] mb-3">
            Trusted By Industry Leaders
          </h3>
          <p className="text-[#14532D] text-sm sm:text-base font-bold uppercase tracking-wider mb-10">
            Delivering excellence to top manufacturing companies.
          </p>

          <div className="flex items-center justify-center bg-white rounded-full px-10 py-6 shadow-sm border border-[#D4AF37]/20">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={100}
                  className="h-[70px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-16 md:py-20 px-4 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-black text-[#6A0D25] mb-10 md:mb-12"
          >
            Industries We Serve
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className="bg-white p-4 sm:p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-[#D4AF37]/20 hover:border-[#D4AF37] flex flex-col items-center justify-center aspect-square sm:aspect-auto"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-[#14532D] text-xs sm:text-sm text-center uppercase tracking-wide">
                  {industry.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & CONTACT */}
      <section className="py-16 md:py-20 px-4 bg-[#FFF5EC] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
            >
              <h3 className="text-3xl md:text-4xl font-black text-[#6A0D25] mb-6 text-center lg:text-left">
                Why Partner With Us?
              </h3>
              <p className="text-[#14532D] font-medium text-base md:text-lg mb-8 text-center lg:text-left">
                We don't just manufacture parts; we build partnerships based on
                trust, reliability, and superior craftsmanship.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 border border-[#D4AF37]/50">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[#14532D] mb-2 uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[#14532D]/80 text-sm md:text-base font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
              className="mt-8 lg:mt-0"
            >
              <div className="relative max-w-md mx-auto lg:max-w-full">
                <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 opacity-20"></div>
                <div className="bg-[#6A0D25] rounded-3xl p-6 sm:p-8 md:p-10 relative text-white shadow-2xl border border-[#D4AF37]/30">
                  <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-[#D4AF37] text-center sm:text-left uppercase tracking-wider">
                    Request Manufacturing Support
                  </h4>
                  <p className="text-[#F5F5DC]/90 mb-6 sm:mb-8 text-sm sm:text-base text-center sm:text-left font-medium">
                    Send us your engineering drawings (CAD/PDF) and
                    specifications. Our technical team will review and provide a
                    detailed quotation promptly.
                  </p>
                  
                  <div className="bg-[#4a081a] p-4 sm:p-6 rounded-xl border border-[#D4AF37]/20 text-center sm:text-left">
                    <p className="text-xs sm:text-sm text-[#D4AF37] uppercase font-bold tracking-widest mb-2">
                      Direct Contact
                    </p>
                    <p className="text-lg sm:text-2xl font-black mb-1 text-[#F97316]">
                      +91 9881442416
                    </p>
                    <p className="text-[#F5F5DC] font-medium text-sm sm:text-base break-words">
                      batheengineeringworks@gmail.com
                    </p>
                  </div>
                  
                  <Link href="/contact" className="block mt-6">
                    <button className="w-full bg-[#F97316] text-white py-3 sm:py-4 rounded-xl font-black uppercase tracking-widest text-base sm:text-lg hover:bg-[#EA580C] hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300">
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