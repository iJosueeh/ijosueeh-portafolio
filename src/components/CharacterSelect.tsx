import React from 'react';
import { playRetroBeep } from '../utils/audio';
import { PILOT_DATA } from '../data/pilot';
import { NeoPixelCard, NeoPixelButton } from './ui';

export const CharacterSelect: React.FC = () => {
  return (
    <main
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-2 sm:py-3"
      data-purpose="character-select-screen"
    >
      {/* Title Prompt: Neo-Pixel Sci-Fi Header */}
      <div className="mb-2 sm:mb-4 md:mb-5 text-center" data-purpose="arcade-selection-prompt">
        <div className="inline-flex items-center space-x-2.5 text-[10px] sm:text-xs md:text-sm font-arcade text-pink-300 tracking-widest uppercase">
          <span aria-hidden="true" className="text-arcade-cyan text-[10px] sm:text-xs">◆</span>
          <h2 className="tracking-widest inline text-[10px] sm:text-xs md:text-sm font-arcade">SELECCIONA TU TRIPULANTE</h2>
          <span aria-hidden="true" className="text-arcade-cyan text-[10px] sm:text-xs">◆</span>
        </div>
      </div>

      {/* Main Neo-Pixel Sci-Fi Card */}
      <NeoPixelCard
        className="p-3.5 sm:p-6 md:p-8"
        data-purpose="player-profile-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-6 md:gap-8 items-center">
          {/* Left Column: Pixel Art Character Portrait Frame */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[125px] sm:max-w-[180px] md:max-w-[230px] relative bg-arcade-panel/90 border-2 border-purple-900/60 p-1.5 sm:p-2 shadow-[4px_4px_0px_#000000]">
              {/* Badge: P1 LISTO */}
              <div className="absolute -top-2.5 left-2 z-20 bg-gradient-to-r from-arcade-magenta to-pink-500 text-white font-arcade text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 tracking-wider uppercase font-bold border border-purple-950 shadow-[2px_2px_0px_#000000] select-none">
                {PILOT_DATA.status}
              </div>

              {/* Portrait Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0618] border border-purple-800/40">
                <img
                  alt={`Retrato oficial del tripulante ${PILOT_DATA.name}`}
                  className="w-full h-full object-cover pixel-sharp transition-transform duration-300 hover:scale-105"
                  src={PILOT_DATA.avatar}
                  width={480}
                  height={640}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0618] via-transparent to-transparent opacity-35 pointer-events-none"></div>
              </div>

              {/* Card Meta */}
              <div className="mt-2 flex items-center justify-between px-1 text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-300">
                <span className="text-pink-300 font-bold font-arcade text-[8px] sm:text-[9px]">REGISTRO</span>
                <span className="text-arcade-cyan font-mono font-bold bg-[#0d091e] px-1.5 py-0.5 border border-purple-800/40">{PILOT_DATA.callsign}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Character Details */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-2.5 sm:space-y-4 md:space-y-5 text-left">
            {/* Category Indicator Tag */}
            <div className="flex items-center space-x-2 sm:space-x-2.5 flex-wrap gap-y-1">
              <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-xs font-arcade tracking-widest text-white bg-arcade-magenta font-bold shadow-[2px_2px_0px_#500724] select-none">
                {PILOT_DATA.code}
              </span>
              <span className="text-arcade-cyan font-mono text-xs font-bold select-none">///</span>
              <span className="font-mono text-[9px] sm:text-xs text-purple-200 tracking-widest uppercase font-semibold bg-purple-950/50 border border-purple-700/50 px-2 py-0.5">
                CLASE: {PILOT_DATA.classType}
              </span>
              <span aria-hidden="true" className="hidden sm:inline-block w-1.5 h-1.5 bg-arcade-magenta animate-arcade-blink"></span>
            </div>

            {/* Character Name & Role Hierarchy */}
            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-arcade tracking-wider text-pink-100 uppercase leading-tight border-b-2 border-purple-900/60 pb-1 inline-block">
                {PILOT_DATA.name}
              </h1>
              <div className="pt-0.5 flex flex-col space-y-0.5">
                <p className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-wider text-pink-300 uppercase">
                  {PILOT_DATA.role}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm font-sans font-medium tracking-wide text-purple-200/80 uppercase">
                  {PILOT_DATA.subRole}
                </p>
              </div>
            </div>

            {/* Specialization Badge */}
            <div className="pt-0.5">
              <div className="inline-flex items-center space-x-2 bg-cyan-950/25 border border-cyan-500/40 px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-[2px_2px_0px_#000]">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-arcade-cyan shadow-[0_0_6px_#38bdf8]"></span>
                <span className="text-[10px] sm:text-xs font-mono text-cyan-300 tracking-wider font-semibold">
                  ■ ESPECIALIZACIÓN: {PILOT_DATA.specialization}
                </span>
              </div>
            </div>

            {/* CTA & Social Links */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-5">
              <NeoPixelButton
                href="/modos"
                variant="primary"
                soundType="start"
                className="min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs md:text-sm"
                data-purpose="arcade-start-cta"
              >
                ▶ INICIAR MISIÓN
              </NeoPixelButton>

              <div className="flex items-center space-x-2.5 sm:space-x-3 font-mono text-[10px] sm:text-xs tracking-wider" data-purpose="arcade-social-links">
                {PILOT_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    onMouseEnter={() => playRetroBeep('hover')}
                    className="group min-h-[44px] text-purple-200/80 hover:text-white transition-colors flex items-center bg-arcade-panel/90 px-2.5 sm:px-3 py-2 border border-purple-900/60 hover:border-arcade-cyan shadow-[2px_2px_0px_#000]"
                    href={social.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${social.name} de Josué (se abre en una nueva pestaña)`}
                  >
                    <span aria-hidden="true" className="text-arcade-pink mr-1 font-arcade text-[8px] sm:text-[9px]">&gt;</span>
                    <span className="font-medium">{social.name}</span>
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 ml-1 text-arcade-cyan opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};

