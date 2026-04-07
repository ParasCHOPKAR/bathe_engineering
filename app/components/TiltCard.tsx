"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse position ko rotation angles mein transform karte hain
  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Spring animations se smooth effect dete hain
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Center se mouse ki position calculate karte hain (-0.5 to 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    // Mouse hatne par card wapas normal ho jayega
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d", // 3D effect ke liye zaroori hai
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {children}
      </div>
      {/* Dynamic light effect jab card tilt hota hai */}
      <motion.div
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)",
          opacity: useTransform(x, [-0.5, 0.5], [0, 0.6]),
          translateX: useTransform(x, [-0.5, 0.5], ["-50%", "50%"]),
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    </motion.div>
  );
}