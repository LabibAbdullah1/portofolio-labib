import React from 'react';

/**
 * Logo komponen untuk Labib Abdullah
 * Desain: Inisial "L" stylized dengan aksen garis diagonal geometric
 */
export const Logo = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Background rounded square */}
    <rect width="32" height="32" rx="8" fill="white" />

    {/* Letter L - vertical stroke */}
    <rect x="8" y="7" width="3.5" height="18" rx="1" fill="black" />

    {/* Letter L - horizontal stroke */}
    <rect x="8" y="21.5" width="12" height="3.5" rx="1" fill="black" />

    {/* Accent dot - top right, adds dynamism */}
    <circle cx="23" cy="9" r="2.5" fill="black" />

    {/* Accent line - diagonal element for modern feel */}
    <rect
      x="18.5"
      y="12"
      width="3"
      height="10"
      rx="1"
      fill="black"
      opacity="0.4"
    />
  </svg>
);

export default Logo;
