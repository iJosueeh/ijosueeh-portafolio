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
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-1 sm:py-3 px-1 sm:px-2 select-none"
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
        className="flex items-center justify-center space-x-2 mb-1.5 sm:mb-3"
        data-purpose="section-header"
      >
        <span className="text-arcade-cyan text-[10px] sm:text-xs">◆</span>
        <h1 className="font-arcade text-pink-300 text-[10px] sm:text-xs md:text-sm tracking-widest text-center uppercase glow-magenta">
          SELECCIONA UN MÓDULO
        </h1>
        <span className="text-arcade-cyan text-[10px] sm:text-xs">◆</span>
      </div>

      {/* 2. Primary Neo-Pixel Sci-Fi Panel */}
      <NeoPixelCard
        className="p-3 sm:p-5 md:p-6"
        data-purpose="arcade-modal-container"
      >
        {/* Upper Strip */}
        <div className="flex items-center justify-between pb-1.5 sm:pb-2.5 mb-2 sm:mb-3.5 border-b border-purple-900/50 text-[9px] sm:text-xs">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="bg-arcade-magenta text-white font-arcade px-1.5 sm:px-2 py-0.5 font-bold text-[8px] sm:text-[9px] shadow-[2px_2px_0px_#500724]">
              MENÚ ESPACIAL
            </span>
            <span className="font-mono text-arcade-cyan text-[9px] sm:text-[10px] font-semibold">
              // SELECCIÓN DE RUTA
            </span>
          </div>
          <div className="hidden sm:flex items-center text-[10px] font-mono text-purple-300/70">
            [ USA TECLADO ◀ ▶ O CLICK ]
          </div>
        </div>

        {/* 3x2 Mode Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2.5 mb-2 sm:mb-3"
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
                className={`group relative flex flex-col text-left p-2 sm:p-3 transition-all duration-150 focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#241744] to-[#160f2d] border-2 border-arcade-magenta shadow-[0_0_12px_rgba(244,63,133,0.35)] scale-[1.01]'
                    : 'bg-[#150f29]/80 border border-purple-900/40 hover:border-purple-600/60 hover:bg-[#1c1437]'
                }`}
              >
                {/* Micro corner tabs for active state */}
                {isSelected && (
                  <>
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-arcade-magenta" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-arcade-cyan" />
                  </>
                )}

                {/* Top Code & Index */}
                <div className="flex items-center justify-between w-full mb-1 sm:mb-1.5">
                  <span
                    className={`font-arcade text-[8px] sm:text-[9px] ${
                      isSelected
                        ? 'text-pink-300 flex items-center'
                        : 'text-arcade-cyan'
                    }`}
                  >
                    {isSelected && (
                      <span className="animate-arcade-blink mr-0.5">▶</span>
                    )}
                    {isSelected ? 'ACTIVO' : mode.code}
                  </span>
                  <span
                    className={`text-[9px] sm:text-xs font-mono ${
                      isSelected ? 'text-pink-300 font-bold' : 'text-purple-300/50'
                    }`}
                  >
                    {mode.index}
                  </span>
                </div>

                {/* Pixel Icon Box & Title */}
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? 'bg-purple-950/60 border-arcade-magenta text-pink-300 shadow-[inset_0_0_8px_rgba(244,63,133,0.3)]'
                        : 'bg-[#1a1233] border-purple-900/50 text-purple-300/60 group-hover:text-white group-hover:border-purple-500'
                    }`}
                  >
                    {mode.icon === 'user' && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 13c0-2.5 2.5-4 5-4s5 1.5 5 4v1H3v-1z" />
                      </svg>
                    )}
                    {mode.icon === 'rocket' && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1c-2 2-3 5-3 8l-3 2v2l3-1 1 3h2l1-3 3 1v-2l-3-2c0-3-1-6-3-8zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                      </svg>
                    )}
                    {mode.icon === 'tech' && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M9 1L3 9h5l-1 6 6-8H8l1-6z" />
                      </svg>
                    )}
                    {mode.icon === 'journey' && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1 3l4-2 6 2 4-2v12l-4 2-6-2-4 2V3zm5 0v10l4 1.3V4.3L6 3z" />
                      </svg>
                    )}
                    {mode.icon === 'trophy' && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4 2H1v4c0 1.5 1 3 3 3h1v2H3v2h10v-2h-2V9h1c2 0 3-1.5 3-3V2h-3v2h1v2c0 .8-.5 1.5-1.5 1.5H11V2H5v4.5H3.5C2.7 6.5 2.2 5.8 2.2 5V4H4V2z" />
                      </svg>
                    )}
                    {(mode.icon === 'chat' || mode.icon === 'comms') && (
                      <svg className="w-4 h-4 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M7 1h2v4H7V1zm-4 5h2v4H3V6zm8 0h2v4h-2V6zM5 11h6v2H5v-2zm2 2h2v3H7v-3z" />
                      </svg>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2
                      className={`font-arcade text-[9px] sm:text-[11px] md:text-xs uppercase tracking-wide truncate ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {mode.title}
                    </h2>
                    <p className="font-mono text-[7px] sm:text-[8px] text-purple-300/60 truncate uppercase">
                      {mode.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-auto pt-1 border-t border-purple-900/30 flex items-center justify-between text-[7px] sm:text-[8px] font-mono">
                  <span className={`${isSelected ? 'text-arcade-magenta' : 'text-purple-400/60'}`}>
                    {mode.badge}
                  </span>
                  <span className={`${isSelected ? 'text-arcade-cyan font-bold' : 'text-purple-300/40'}`}>
                    &gt;&gt;
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Selected Telemetry & Confirm Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/50 pt-2 gap-2">
          <div className="flex items-center space-x-2 text-[8px] sm:text-[9px] font-mono w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-purple-300/70">DESTINO:</span>
            <span className="font-arcade text-pink-300 font-bold text-[8px] sm:text-[9px]">
              {activeMode.title}
            </span>
            <span className="text-arcade-cyan font-mono text-[8px] sm:text-[9px] bg-cyan-950/40 px-1.5 py-0.5 border border-cyan-800/40 hidden sm:inline-block">
              {activeMode.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <NeoPixelButton
              onClick={handleExecute}
              variant="primary"
              soundType="start"
              className="w-full sm:w-auto min-h-[38px] sm:min-h-[42px] px-4 sm:px-6 text-[9px] sm:text-xs"
            >
              <span>▶</span>
              <span>EJECUTAR MÓDULO</span>
              <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">[ENTER]</span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};
