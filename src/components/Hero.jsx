import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left"
        >
          {/* Left Side: Content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-yellow-500" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Building the <br />
              <span className="shimmer-text">Future of Web</span>
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto md:mx-0">
              Fullstack Developer & UI Specialist engineering high-performance, 
              visually stunning digital platforms with a focus on scale and user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
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
          </div>

          {/* Right Side: Profile Image */}
          <div className="flex-shrink-0 relative">
            {/* Enhanced Atmospheric Glow */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 aspect-square bg-blue-500/10 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />
            
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2.5rem] border border-white/10 p-2 bg-white/[0.03] backdrop-blur-sm group rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl overflow-hidden">
              <div className="w-full h-full rounded-[2rem] overflow-hidden">
                <img 
                  src="/images/profil.png" 
                  alt="Labib Abdullah" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl flex items-center justify-center -rotate-12 animate-bounce shadow-2xl z-20">
               <span className="text-xl">🚀</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10 delay-700" />
    </section>
  );
};