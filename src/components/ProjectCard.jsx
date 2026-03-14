import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ id, title, description, tags, image, date, collaborators, deployLink, githubLink, span = "col-span-1" }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const div = cardRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <Link 
      to={`/project/${id}`}
      className={`block relative group h-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:bg-white/[0.05] ${span}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      )}

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
          opacity,
        }}
      />
      
      <div className="relative z-20 p-8 flex flex-col h-full bg-black/40 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest text-white/60 border border-white/10 px-2 py-0.5 rounded-full bg-white/5">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">{date}</span>
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-2 mb-6">
            {description}
          </p>

          <div className="flex items-center justify-between mt-auto">
             <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    <span className="text-xs font-mono">Source</span>
                  </a>
                )}
                {deployLink && deployLink !== "=" && (
                  <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    <span className="text-xs font-mono">Live</span>
                  </a>
                )}
             </div>
             
             {collaborators?.length > 1 && (
               <div className="text-[10px] text-neutral-500 italic">
                 Team Project
               </div>
             )}
          </div>
        </div>
        
        {/* Animated Corner Border */}
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
            <div className="absolute top-4 right-4 w-px h-3 bg-white/20 group-hover:bg-white/40 transition-colors" />
            <div className="absolute top-4 right-4 w-3 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
        </div>
      </div>
    </Link>
  );
};