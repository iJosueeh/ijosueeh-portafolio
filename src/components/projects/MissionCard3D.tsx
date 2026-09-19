import React from 'react';
import type { Mission } from '../../types';
import { NeoPixelCard, NeoPixelButton } from '../ui';
import { MissionArtwork } from './MissionArtwork';

interface MissionCard3DProps {
  mission: Mission;
  index: number;
  totalMissions: number;
  isCenter: boolean;
  transformStyle: string;
  opacityStyle: number;
  zIndex: number;
  onSelect: () => void;
  onEnterSound?: () => void;
}

export const MissionCard3D: React.FC<MissionCard3DProps> = ({
  mission,
  index,
  totalMissions,
  isCenter,
  transformStyle,
  opacityStyle,
  zIndex,
  onSelect,
  onEnterSound,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`absolute w-[94%] sm:w-[86%] md:w-[76%] max-w-[540px] px-1 sm:px-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${
        isCenter
          ? 'pointer-events-auto'
          : 'pointer-events-auto filter blur-[0.2px] hover:opacity-65'
      }`}
      style={{
        transform: transformStyle,
        opacity: opacityStyle,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
    >
      <NeoPixelCard
        variant="default"
        glowOnHover={isCenter}
        hasViewTransition={isCenter}
        className={`p-3.5 sm:p-4 md:p-5 transition-shadow duration-300 ${
          isCenter
            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(244,63,133,0.22)]'
            : 'shadow-none'
        }`}
        viewTransitionName={isCenter ? 'neo-scifi-main-card' : undefined}
      >
        {/* Mission Header Info */}
        <div className="flex items-center justify-between border-b border-purple-900/60 pb-1.5 mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-arcade-magenta animate-ping" />
            <span className="font-arcade text-[9px] sm:text-[10px] text-pink-300 tracking-wider">
              {mission.code} // {isCenter ? 'ACTIVA' : 'EN ESPERA'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-cyan-950/30 text-arcade-cyan border border-cyan-500/40 text-[8px] sm:text-[9px] font-arcade px-2 py-0.5 tracking-wider uppercase">
              {mission.category}
            </span>
            <span className="text-[11px] text-purple-300/60 font-mono">
              [ 0{index + 1} / 0{totalMissions} ]
            </span>
          </div>
        </div>

        {/* Mission Title */}
        <div className="mb-1.5">
          <h2 className="font-arcade text-base sm:text-xl md:text-2xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
            {mission.title}
          </h2>
          <div className="h-0.5 w-14 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-1" />
        </div>

        {/* Embedded 16-Bit Pixel Art Artwork */}
        <div
          className="w-full bg-[#090615] border border-purple-900/60 p-2 sm:p-2.5 mb-2 flex items-center justify-center relative overflow-hidden"
          data-purpose="pixel-illustration"
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px]" />

          <MissionArtwork type={mission.type} />

          <div className="absolute top-2 right-2 bg-[#0c081a]/95 border border-emerald-500/80 px-2 py-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
            <span className="text-[8px] sm:text-[9px] font-arcade text-emerald-400">
              {mission.status}
            </span>
          </div>
        </div>

        {/* Mission Brief Description */}
        <div className="mb-2">
          <div className="text-[8px] sm:text-[9px] font-arcade text-purple-200/80 mb-0.5 tracking-wider uppercase flex items-center gap-1.5">
            <span className="text-arcade-cyan">▶</span> OBJETIVO DE MISIÓN:
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-purple-100/90 leading-relaxed pl-2.5 border-l-2 border-arcade-magenta/50 line-clamp-2">
            {mission.objective}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
          <span className="text-[8px] font-arcade text-purple-300/70 mr-1 uppercase">
            STACK:
          </span>
          {mission.stack?.map((tech, sIdx) => (
            <span
              key={sIdx}
              className="bg-[#170f2e] border border-purple-800/60 text-purple-200 text-[8px] sm:text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <NeoPixelButton
            as="a"
            href={`/proyectos/${mission.id}`}
            variant="primary"
            soundEffect="start"
            className="flex-1 py-2 sm:py-2.5 text-[10px] sm:text-xs"
            onClick={(e) => {
              if (!isCenter) {
                e.preventDefault();
                onSelect();
              }
            }}
          >
            <span>▶</span>
            <span>VER MISIÓN</span>
            <span className="text-[9px] font-mono text-pink-200 ml-1 hidden sm:inline">
              [ENTER]
            </span>
          </NeoPixelButton>

          {Boolean(mission.githubUrl && mission.githubUrl.trim()) && (
            <NeoPixelButton
              as="a"
              href={mission.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              soundEffect="hover"
              onClick={(e) => e.stopPropagation()}
              className="py-2 sm:py-2.5 px-3 text-xs"
            >
              <span className="font-arcade text-[9px] text-arcade-pink">&gt;</span> GITHUB
            </NeoPixelButton>
          )}
        </div>
      </NeoPixelCard>
    </div>
  );
};
