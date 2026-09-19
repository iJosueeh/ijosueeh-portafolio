import React from 'react';
import type { Trophy } from '../../types';
import { TrophyArtwork } from './TrophyArtwork';

interface TrophyPedestalProps {
  trophy: Trophy;
}

export const TrophyPedestal: React.FC<TrophyPedestalProps> = ({ trophy }) => {
  return (
    <div className="w-full bg-[#080515]/95 border border-purple-900/70 p-2 sm:p-3 relative overflow-hidden mb-1.5 sm:mb-2">
      {/* Spatial Radial Aura */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f85_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-center relative z-10">
        {/* Left Holographic Trophy Cylinder (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-1.5 sm:p-2 bg-[#0c071e]/90 border border-purple-800/50 relative">
          {/* Tier Badge */}
          <div
            className="absolute top-1.5 left-1.5 px-1.5 py-0.5 text-[7px] sm:text-[8px] font-arcade border uppercase font-bold"
            style={{
              color: trophy.tierColor,
              borderColor: trophy.tierColor,
              backgroundColor: trophy.tierBg,
            }}
          >
            TIER // {trophy.tier}
          </div>

          <div className="absolute top-1.5 right-1.5 text-[7px] sm:text-[8px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="hidden sm:inline">DESBLOQUEADO</span>
          </div>

          {/* Holographic Pedestal Light Beam + Trophy Pixel Artwork */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center my-0.5 sm:my-1">
            {/* Rotating Holographic Aura */}
            <div
              className="absolute inset-0 rounded-full animate-pulse opacity-30 blur-sm"
              style={{ backgroundColor: trophy.tierColor }}
            />

            {/* Pedestal Bottom Base Rings */}
            <div className="absolute bottom-0.5 w-18 sm:w-24 h-3 sm:h-5 border border-purple-500/60 rounded-[100%] bg-purple-950/40" />
            <div className="absolute bottom-2 sm:bottom-3 w-12 sm:w-16 h-2 sm:h-3 border border-arcade-magenta/80 rounded-[100%]" />

            {/* Pixel Art Trophy Artwork */}
            <TrophyArtwork type={trophy.type} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>

          {/* Rarity & Registry Tag */}
          <div className="text-[7px] sm:text-[8px] font-mono font-bold text-pink-300 mt-0.5">
            {trophy.rarity}
          </div>
        </div>

        {/* Right Telemetry Details (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between space-y-1.5 sm:space-y-2">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-arcade text-[7px] sm:text-[9px] text-arcade-cyan bg-cyan-950/40 px-1.5 sm:px-2 py-0.5 border border-cyan-800/40 uppercase">
                {trophy.category}
              </span>
              <span className="font-mono text-[7px] sm:text-[9px] text-purple-300/70">
                [{trophy.date}]
              </span>
            </div>
            <h1 className="font-arcade text-sm sm:text-base md:text-xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
              {trophy.title}
            </h1>
            <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-0.5 sm:mt-1" />
          </div>

          {/* Description */}
          <p className="text-[10px] sm:text-xs font-mono text-purple-100/90 leading-relaxed pl-2 sm:pl-2.5 border-l-2 border-arcade-magenta/60">
            {trophy.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 bg-[#0e0920]/80 p-1.5 sm:p-2 border border-purple-900/50">
            {trophy.stats.map((stat, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-[6px] sm:text-[7px] font-arcade text-arcade-cyan uppercase truncate">{stat.label}</span>
                <span className="text-[8px] sm:text-[10px] font-mono text-white font-bold truncate">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
