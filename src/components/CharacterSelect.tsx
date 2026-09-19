import React from 'react';
import { playRetroBeep } from '../utils/audio';
import { PILOT_DATA } from '../data/pilot';
import { NeoPixelCard, NeoPixelButton } from './ui';

export const CharacterSelect: React.FC = () => {
  return (
    <main
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-1 sm:py-3 px-1 sm:px-2"
      data-purpose="character-select-screen"
    >
      {/* Title Prompt */}
      <div className="mb-1.5 sm:mb-3 md:mb-4 text-center" data-purpose="arcade-selection-prompt">
        <div className="inline-flex items-center space-x-2 text-[9px] sm:text-xs md:text-sm font-arcade text-pink-300 tracking-widest uppercase">
          <span aria-hidden="true" className="text-arcade-cyan text-[9px] sm:text-xs">◆</span>
          <h2 className="tracking-widest inline text-[9px] sm:text-xs md:text-sm font-arcade">SELECCIONA TU TRIPULANTE</h2>
          <span aria-hidden="true" className="text-arcade-cyan text-[9px] sm:text-xs">◆</span>
        </div>
      </div>

      {/* Main Neo-Pixel Sci-Fi Card */}
      <NeoPixelCard
        className="p-3 sm:p-5 md:p-8"
        data-purpose="player-profile-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 md:gap-8 items-center">
          {/* Left Column: Pixel Art Character Portrait Frame */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[110px] sm:max-w-[170px] md:max-w-[220px] relative bg-arcade-panel/90 border-2 border-purple-900/60 p-1.5 sm:p-2 shadow-[3px_3px_0px_#000000]">
              {/* Badge: P1 LISTO */}
              <div className="absolute -top-2 left-1.5 sm:left-2 z-20 bg-gradient-to-r from-arcade-magenta to-pink-500 text-white font-arcade text-[7px] sm:text-[9px] px-1.5 py-0.5 sm:px-2.5 sm:py-1 tracking-wider uppercase font-bold border border-purple-950 shadow-[2px_2px_0px_#000000] select-none">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0618] via-transparent to-transparent opacity-35 pointer-events-none" />
              </div>

              {/* Card Meta */}
              <div className="mt-1 sm:mt-1.5 flex items-center justify-between px-0.5 text-[8px] sm:text-[10px] font-mono tracking-widest text-slate-300">
                <span className="text-pink-300 font-bold font-arcade text-[7px] sm:text-[8px]">REGISTRO</span>
                <span className="text-arcade-cyan font-mono font-bold bg-[#0d091e] px-1 py-0.5 border border-purple-800/40">{PILOT_DATA.callsign}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Character Details */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-2 sm:space-y-3.5 md:space-y-4 text-left">
            {/* Category Indicator Tag */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 flex-wrap gap-y-1">
              <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-arcade tracking-widest text-white bg-arcade-magenta font-bold shadow-[2px_2px_0px_#500724] select-none">
                {PILOT_DATA.code}
              </span>
              <span className="text-arcade-cyan font-mono text-[10px] sm:text-xs font-bold select-none">///</span>
              <span className="font-mono text-[8px] sm:text-[10px] md:text-xs text-purple-200 tracking-widest uppercase font-semibold bg-purple-950/50 border border-purple-700/50 px-1.5 py-0.5">
                CLASE: {PILOT_DATA.classType}
              </span>
            </div>

            {/* Character Name & Role Hierarchy */}
            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-arcade tracking-wider text-pink-100 uppercase leading-tight border-b-2 border-purple-900/60 pb-0.5 inline-block">
                {PILOT_DATA.name}
              </h1>
              <div className="pt-0.5 flex flex-col space-y-0.5">
                <p className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-wider text-pink-300 uppercase">
                  {PILOT_DATA.role}
                </p>
                <p className="text-[9px] sm:text-[11px] md:text-xs font-sans font-medium tracking-wide text-purple-200/80 uppercase">
                  {PILOT_DATA.subRole}
                </p>
              </div>
            </div>

            {/* Specialization Badge */}
            <div className="pt-0.5">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-cyan-950/25 border border-cyan-500/40 px-2 sm:px-2.5 py-1 shadow-[2px_2px_0px_#000]">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-arcade-cyan shadow-[0_0_6px_#38bdf8]" />
                <span className="text-[8px] sm:text-[10px] md:text-xs font-mono text-cyan-300 tracking-wider font-semibold line-clamp-1">
                  ■ ESPECIALIZACIÓN: {PILOT_DATA.specialization}
                </span>
              </div>
            </div>

            {/* CTA & Social Links */}
            <div className="pt-1.5 sm:pt-2.5 flex flex-wrap items-center gap-2 sm:gap-3">
              <NeoPixelButton
                href="/modos"
                variant="primary"
                soundType="start"
                className="w-full sm:w-auto min-h-[40px] sm:min-h-[44px] px-4 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-xs"
                data-purpose="arcade-start-cta"
              >
                ▶ INICIAR MISIÓN
              </NeoPixelButton>

              <div className="flex items-center gap-2 font-mono text-[9px] sm:text-xs tracking-wider w-full sm:w-auto" data-purpose="arcade-social-links">
                {PILOT_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    onMouseEnter={() => playRetroBeep('hover')}
                    className="flex-1 sm:flex-initial min-h-[38px] sm:min-h-[40px] text-purple-200/80 hover:text-white transition-colors flex items-center justify-center bg-arcade-panel/90 px-2.5 sm:px-3 py-1.5 border border-purple-900/60 hover:border-arcade-cyan shadow-[2px_2px_0px_#000]"
                    href={social.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${social.name} de Josué (se abre en una nueva pestaña)`}
                  >
                    <span aria-hidden="true" className="text-arcade-pink mr-1 font-arcade text-[7px] sm:text-[8px]">&gt;</span>
                    <span className="font-medium text-[9px] sm:text-[10px]">{social.name}</span>
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 ml-1 text-arcade-cyan opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all inline"
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
