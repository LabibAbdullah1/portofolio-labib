import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

export const Layout = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  // Reaktif menggunakan useMotionTemplate agar gradient benar-benar ikut mouse
  const background = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.05), transparent 40%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
            className="absolute inset-0 z-10"
            style={{ background }}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};
