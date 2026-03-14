import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-32 pb-24 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-yellow-500" />
          <span>Available for new opportunities</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Building the <br />
          <span className="shimmer-text">Future of Web</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed">
          Fullstack Developer & UI Specialist engineering high-performance, 
          visually stunning digital platforms with a focus on scale and user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact"
            className="px-10 py-4 bg-black text-white font-bold rounded-2xl border border-white/10 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 backdrop-blur-xl"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10 delay-700" />
    </section>
  );
};