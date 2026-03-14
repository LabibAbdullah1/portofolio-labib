import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the lagging effect
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    const isClickable = 
      target.tagName === 'BUTTON' || 
      target.tagName === 'A' || 
      target.closest('button') || 
      target.closest('a') ||
      target.getAttribute('data-cursor') === 'pointer';
    
    setIsHovering(!!isClickable);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
        style={{ cursor: 'none' }}
      >
        {/* Outer Ring */}
        <motion.div
          className={cn(
            "fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 -ml-4 -mt-4 mix-blend-difference transition-transform duration-300",
            isHovering ? "scale-150 border-white bg-white/10" : "scale-100"
          )}
          style={{
            x: cursorX,
            y: cursorY,
          }}
        />
        
        {/* Inner Dot */}
        <motion.div
          className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full -ml-0.5 -mt-0.5 mix-blend-difference"
          style={{
            x: mouseX,
            y: mouseY,
          }}
        />
      </div>
      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};
