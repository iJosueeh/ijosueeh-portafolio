import React from 'react';
import type { Trophy } from '../../types';

interface TrophyArtworkProps {
  type: Trophy['type'];
  className?: string;
}

export const TrophyArtwork: React.FC<TrophyArtworkProps> = ({ type, className = 'w-16 h-16 sm:w-20 sm:h-20' }) => {
  switch (type) {
    case 'architecture':
      return (
        <svg className={`${className} pixel-sharp z-10 filter drop-shadow-[0_0_12px_#f43f85]`} viewBox="0 0 32 32" fill="none">
          <path d="M8 6 H24 V16 C24 20 20 22 16 22 C12 22 8 20 8 16 Z" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
          <path d="M10 8 H22 V14 C22 18 18 20 16 20 C14 20 10 18 10 14 Z" fill="#f59e0b" />
          <path d="M4 8 H8 V12 H4 Z" fill="#fbbf24" />
          <path d="M24 8 H28 V12 H24 Z" fill="#fbbf24" />
          <rect x="14" y="22" width="4" height="4" fill="#d97706" />
          <rect x="10" y="26" width="12" height="4" fill="#1e1338" stroke="#f43f85" strokeWidth="1" />
          <circle cx="16" cy="13" r="2.5" fill="#f43f85" />
        </svg>
      );

    case 'performance':
      return (
        <svg className={`${className} pixel-sharp z-10 filter drop-shadow-[0_0_12px_#38bdf8]`} viewBox="0 0 32 32" fill="none">
          <path d="M16 2 L28 8 L24 24 L16 30 L8 24 L4 8 Z" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M18 6 L10 16 H16 L14 26 L22 14 H16 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.5" />
        </svg>
      );

    case 'production':
      return (
        <svg className={`${className} pixel-sharp z-10 filter drop-shadow-[0_0_12px_#fbbf24]`} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" fill="#1e1338" stroke="#fbbf24" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="14" ry="4" stroke="#f472b6" strokeWidth="1" transform="rotate(-30 16 16)" />
          <path d="M16 7 L20 13 L18 21 L14 21 L12 13 Z" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="16" cy="13" r="1.5" fill="#38bdf8" />
        </svg>
      );

    case 'fullstack':
    default:
      return (
        <svg className={`${className} pixel-sharp z-10 filter drop-shadow-[0_0_12px_#d8b4fe]`} viewBox="0 0 32 32" fill="none">
          <polygon points="16,2 20,11 30,12 22,19 25,29 16,23 7,29 10,19 2,12 12,11" fill="#7c3aed" stroke="#d8b4fe" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="4.5" fill="#d8b4fe" />
          <circle cx="16" cy="16" r="2" fill="#070410" />
        </svg>
      );
  }
};
