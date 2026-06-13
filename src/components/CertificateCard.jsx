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
            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23111111' width='400' height='300'/%3E%3Ctext fill='%23444444' font-family='monospace' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECertificate%3C/text%3E%3C/svg%3E`;
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
