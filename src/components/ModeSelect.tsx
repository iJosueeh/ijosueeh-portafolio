import React, { useState } from 'react';
import { playRetroBeep } from '../utils/audio';
import { navigateTo } from '../utils/navigation';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { MODES_DATA } from '../data/modes';
import { NeoPixelCard, ScreenBreadcrumb, NeoPixelButton } from './ui';
import type { ModeItem } from '../types';

export const ModeSelect: React.FC = () => {
  const modes: ModeItem[] = MODES_DATA;
  const [selectedIdx, setSelectedIdx] = useState<number>(1); // Default to Proyectos (CH-02)

  const activeMode = modes[selectedIdx] || modes[0];

  const handleSelect = (index: number) => {
    playRetroBeep('select');
    setSelectedIdx(index);
  };

  const handleExecute = () => {
    playRetroBeep('start');
    navigateTo(activeMode.href);
  };

  // Keyboard navigation
  useKeyboardNav({
    onNumberKey: (index) => {
      if (index >= 0 && index < modes.length) {
        handleSelect(index);
      }
    },
    onNext: () => {
      playRetroBeep('hover');
      setSelectedIdx((prev) => (prev + 1) % modes.length);
    },
    onPrev: () => {
      playRetroBeep('hover');
      setSelectedIdx((prev) => (prev - 1 + modes.length) % modes.length);
    },
    onEnter: handleExecute,
    onEscape: () => {
      playRetroBeep('select');
      navigateTo('/');
    },
  });

  return (
    <main
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-2 sm:py-3"
      data-purpose="mode-select-screen"
    >
      {/* 1. Breadcrumb Bar */}
      <ScreenBreadcrumb
        backHref="/"
        backLabel="VOLVER AL TRIPULANTE"
        channelCode="SLOTS:"
        screenTitle="06/06 DISPONIBLES"
      />

      {/* Screen Title */}
      <div
        className="flex items-center justify-center space-x-2.5 mb-2 sm:mb-4"
        data-purpose="section-header"
      >
        <span className="text-arcade-cyan text-xs md:text-sm">◆</span>
        <h1 className="font-arcade text-pink-300 text-xs sm:text-sm md:text-base tracking-widest text-center uppercase glow-magenta">
          SELECCIONA UN MÓDULO
        </h1>
        <span className="text-arcade-cyan text-xs md:text-sm">◆</span>
      </div>

      {/* 2. Primary Neo-Pixel Sci-Fi Panel */}
      <NeoPixelCard
        className="p-4 sm:p-5 md:p-6"
        data-purpose="arcade-modal-container"
      >
        {/* Upper Strip */}
        <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-purple-900/50 text-[10px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="bg-arcade-magenta text-white font-arcade px-2 py-0.5 font-bold text-[9px] shadow-[2px_2px_0px_#500724]">
              MENÚ ESPACIAL
            </span>
            <span className="font-mono text-arcade-cyan text-[10px] font-semibold">
              // SELECCIÓN DE RUTA
            </span>
          </div>
          <div className="hidden sm:flex items-center text-[10px] font-mono text-purple-300/70">
            [ USA TECLADO ◀ ▶ O CLICK ]
          </div>
        </div>

        {/* 3x2 Mode Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-3"
          data-purpose="modes-grid"
        >
          {modes.map((mode, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  if (selectedIdx === idx) {
                    handleExecute();
                  } else {
                    handleSelect(idx);
                  }
                }}
                onDoubleClick={handleExecute}
                onMouseEnter={() => playRetroBeep('hover')}
                type="button"
                className={`group relative flex flex-col text-left p-3 sm:p-3.5 transition-all duration-150 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#241744] to-[#160f2d] border-2 border-arcade-magenta shadow-[0_0_15px_rgba(244,63,133,0.35)] scale-[1.015]'
                    : 'bg-[#150f29]/80 border border-purple-900/40 hover:border-purple-600/60 hover:bg-[#1c1437]'
                }`}
              >
                {/* Micro corner tabs for active state */}
                {isSelected && (
                  <>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-arcade-magenta"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-arcade-cyan"></div>
                  </>
                )}

                {/* Top Code & Index */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-arcade text-[9px] sm:text-[10px] ${
                      isSelected
                        ? 'text-pink-300 flex items-center'
                        : 'text-arcade-cyan'
                    }`}
                  >
                    {isSelected && (
                      <span className="animate-arcade-blink mr-1">▶</span>
                    )}
                    {isSelected ? 'ACTIVO' : mode.code}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      isSelected ? 'text-pink-300 font-bold' : 'text-purple-300/50'
                    }`}
                  >
                    {mode.index}
                  </span>
                </div>

                {/* Pixel Icon Box */}
                <div
                  className={`w-9 h-9 mb-2.5 flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-purple-950/60 border-arcade-magenta text-pink-300 shadow-[inset_0_0_8px_rgba(244,63,133,0.3)]'
                      : 'bg-[#1a1233] border-purple-900/50 text-purple-300/60 group-hover:text-white group-hover:border-purple-500'
                  }`}
                >
                  {mode.icon === 'user' && <span className="text-base">👤</span>}
                  {mode.icon === 'rocket' && <span className="text-base">🚀</span>}
                  {mode.icon === 'tech' && <span className="text-base">⚡</span>}
                  {mode.icon === 'journey' && <span className="text-base">🗺️</span>}
                  {mode.icon === 'trophy' && <span className="text-base">🏆</span>}
                  {mode.icon === 'comms' && <span className="text-base">📡</span>}
                </div>

                {/* Mode Titles */}
                <span
                  className={`font-arcade text-[11px] sm:text-xs tracking-wider ${
                    isSelected ? 'text-pink-200 glow-magenta' : 'text-slate-200'
                  }`}
                >
                  {mode.title}
                </span>
                <span
                  className={`font-mono text-[9px] sm:text-[10px] mt-0.5 truncate ${
                    isSelected ? 'text-pink-300/90' : 'text-purple-200/60'
                  }`}
                >
                  {mode.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Detail & Action Box */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/60 to-transparent mb-3"></div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-0.5">
          {/* Mode Description Box */}
          <div className="flex-1 bg-[#0c081a]/90 border border-purple-900/50 p-2.5 sm:p-3">
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-1.5 h-1.5 bg-arcade-cyan shadow-[0_0_4px_#38bdf8]"></span>
              <span className="font-arcade text-arcade-cyan text-[8px] sm:text-[9px] uppercase tracking-wider">
                MÓDULO: {activeMode.title}
              </span>
            </div>
            <p className="font-mono text-[11px] sm:text-xs text-purple-100/90 leading-relaxed">
              {activeMode.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 flex items-center">
            <NeoPixelButton
              href={activeMode.href}
              variant="primary"
              soundType="start"
              className="w-full sm:w-auto px-6 py-3"
            >
              ▶ EXPLORAR MÓDULO
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};

