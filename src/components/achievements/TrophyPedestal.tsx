import React from 'react';
import type { Trophy } from '../../types';
import { TrophyArtwork } from './TrophyArtwork';

interface TrophyPedestalProps {
  trophy: Trophy;
}

export const TrophyPedestal: React.FC<TrophyPedestalProps> = ({ trophy }) => {
  return (
    <div className="w-full bg-[#080515]/95 border border-purple-900/70 p-3 relative overflow-hidden mb-2">
      {/* Spatial Radial Aura */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f85_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center relative z-10">
        {/* Left Holographic Trophy Cylinder (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-2 bg-[#0c071e]/90 border border-purple-800/50 relative">
          {/* Tier Badge */}
          <div
            className="absolute top-2 left-2 px-2 py-0.5 text-[8px] font-arcade border uppercase font-bold"
            style={{
              color: trophy.tierColor,
              borderColor: trophy.tierColor,
              backgroundColor: trophy.tier,
            }}
          >
            TIER // {trophy.tier}
          </div>

          <div className="absolute top-2 right-2 text-[8px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            <span>DESBLOQUEADO</span>
          </div>

          {/* Holographic Pedestal Light Beam + Trophy Pixel Artwork */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center my-1">
            {/* Rotating Holographic Aura */}
            <div
              className="absolute inset-0 rounded-full animate-pulse opacity-30 blur-sm"
              style={{ backgroundColor: trophy.tierColor }}
            />

            {/* Pedestal Bottom Base Rings */}
            <div className="absolute bottom-1 w-24 h-5 border border-purple-500/60 rounded-[100%] bg-purple-950/40" />
            <div className="absolute bottom-3 w-16 h-3 border border-arcade-magenta/80 rounded-[100%]" />

            {/* Pixel Art Trophy Artwork */}
            <TrophyArtwork type={trophy.type} />
          </div>

          {/* Rarity & Registry Tag */}
          <div className="text-[8px] font-mono font-bold text-pink-300 mt-0.5">
            {trophy.rarity}
          </div>
        </div>

        {/* Right Telemetry Details (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-arcade text-[8px] sm:text-[9px] text-arcade-cyan bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 uppercase">
                {trophy.category}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-purple-300/70">
                [{trophy.date}]
              </span>
            </div>
            <h1 className="font-arcade text-base sm:text-lg md:text-xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
              {trophy.title}
            </h1>
            <div className="h-0.5 w-16 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-1" />
          </div>

          {/* Description */}
          <p className="text-[11px] sm:text-xs font-mono text-purple-100/90 leading-relaxed pl-2.5 border-l-2 border-arcade-magenta/60">
            {trophy.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 bg-[#0e0920]/80 p-2 border border-purple-900/50">
            {trophy.stats.map((stat, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-[7px] font-arcade text-arcade-cyan uppercase">{stat.label}</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-white font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
