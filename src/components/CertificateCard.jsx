import React from 'react';
import { motion } from 'framer-motion';

export const CertificateCard = ({ title, issuer, date, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            // Fallback for missing images
            e.target.src = 'https://via.placeholder.com/400x300?text=Certificate';
            e.target.className = 'w-full h-full object-cover opacity-50';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-white group-hover:text-white transition-colors">
          {title}
        </h4>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{issuer}</span>
          <span className="text-[10px] text-neutral-600 font-mono">{date}</span>
        </div>
      </div>
    </motion.div>
  );
};
