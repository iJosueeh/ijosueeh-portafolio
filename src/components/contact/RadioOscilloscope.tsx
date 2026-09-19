import React from 'react';
import { CONTACT_CONFIG } from '../../data/contact';

export const RadioOscilloscope: React.FC = () => {
  return (
    <div className="bg-[#0f0a24] border border-purple-900/60 p-1.5 sm:p-2 text-center relative overflow-hidden">
      <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] font-mono text-arcade-cyan mb-0.5">
        <span>FREQ: {CONTACT_CONFIG.frequency}</span>
        <span className="text-pink-300">ENLACE ACTIVO</span>
      </div>

      {/* Animated Pixel Radio Waveform SVG */}
      <svg className="w-full h-5 sm:h-7 pixel-sharp" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="M 0 10 Q 12 2, 25 10 T 50 10 T 75 10 T 100 10"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
          className="animate-pulse"
        />
        <path
          d="M 0 10 Q 12 18, 25 10 T 50 10 T 75 10 T 100 10"
          fill="none"
          stroke="#f43f85"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>

      <div className="text-[6.5px] sm:text-[7px] font-mono text-purple-300/60 mt-0.5">
        [ RESPUESTA: {CONTACT_CONFIG.estimatedResponseTime} ]
      </div>
    </div>
  );
};
