import React, { useState } from "react";
import { playRetroBeep } from "../utils/audio";
import { navigateTo } from "../utils/navigation";
import { useKeyboardNav } from "../hooks/useKeyboardNav";
import { MODES_DATA } from "../data/modes";
import {
  NeoPixelCard,
  ScreenBreadcrumb,
  NeoPixelButton,
  PixelIcon,
} from "./ui";
import type { ModeItem } from "../types";

export const ModeSelect: React.FC = () => {
  const modes: ModeItem[] = MODES_DATA;
  const [selectedIdx, setSelectedIdx] = useState<number>(1);

  const activeMode = modes[selectedIdx] || modes[0];

  const handleSelect = (index: number) => {
    playRetroBeep("select");
    setSelectedIdx(index);
  };

  const handleExecute = () => {
    playRetroBeep("start");
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
      playRetroBeep("hover");
      setSelectedIdx((prev) => (prev + 1) % modes.length);
    },
    onPrev: () => {
      playRetroBeep("hover");
      setSelectedIdx((prev) => (prev - 1 + modes.length) % modes.length);
    },
    onEnter: handleExecute,
    onEscape: () => {
      playRetroBeep("select");
      navigateTo("/");
    },
  });

  return (
    <main
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-2 sm:py-4 px-2 select-none"
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
        className="flex items-center justify-center space-x-2 mb-2 sm:mb-3.5"
        data-purpose="section-header"
      >
        <span className="text-arcade-cyan text-[10px] sm:text-xs">◆</span>
        <h1 className="font-arcade text-pink-300 text-[11px] sm:text-xs md:text-sm tracking-widest text-center uppercase glow-magenta">
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
        <div className="flex items-center justify-between pb-2 sm:pb-3 mb-2.5 sm:mb-4 border-b border-purple-900/50 text-[9px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="bg-arcade-magenta text-white font-arcade px-2 py-0.5 font-bold text-[8px] sm:text-[9px] shadow-[2px_2px_0px_#500724]">
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
          className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3.5 mb-3 sm:mb-4"
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
                onMouseEnter={() => playRetroBeep("hover")}
                type="button"
                className={`group relative flex flex-col justify-between text-left p-3 sm:p-3.5 transition-all duration-150 focus:outline-none cursor-pointer border-2 min-h-[110px] sm:min-h-[125px] ${
                  isSelected
                    ? "bg-gradient-to-b from-[#251747] to-[#150e2d] border-arcade-magenta shadow-[0_0_12px_rgba(244,63,133,0.35)]"
                    : "bg-[#140e28]/85 border-purple-900/40 hover:border-purple-600/60 hover:bg-[#1a1236]"
                }`}
              >
                {/* Micro corner tabs for active state */}
                {isSelected && (
                  <>
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-arcade-magenta" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-arcade-cyan" />
                  </>
                )}

                {/* Top Code & Index - fixed layout to avoid any jitter */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`font-arcade text-[8px] sm:text-[9px] tracking-wider ${
                      isSelected ? "text-pink-300 font-bold" : "text-arcade-cyan"
                    }`}
                  >
                    {mode.code}
                  </span>
                  <div className="flex items-center gap-1">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 bg-arcade-magenta animate-pulse" />
                    )}
                    <span
                      className={`text-[9px] sm:text-xs font-mono font-bold ${
                        isSelected
                          ? "text-pink-300"
                          : "text-purple-400/50"
                      }`}
                    >
                      {mode.index}
                    </span>
                  </div>
                </div>

                {/* Pixel Icon Box & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] min-h-[36px] sm:min-h-[40px] flex items-center justify-center shrink-0 border transition-colors ${
                      isSelected
                        ? "bg-purple-950/70 border-arcade-magenta text-pink-300 shadow-[inset_0_0_8px_rgba(244,63,133,0.35)]"
                        : "bg-[#181132] border-purple-900/60 text-purple-300/70 group-hover:text-white group-hover:border-purple-500"
                    }`}
                  >
                    <PixelIcon name={mode.icon} size={20} />
                  </div>

                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h2
                      className={`font-arcade text-[9.5px] sm:text-[11.5px] md:text-xs uppercase tracking-wide truncate ${
                        isSelected ? "text-white font-bold" : "text-slate-200"
                      }`}
                    >
                      {mode.title}
                    </h2>
                    <p className="font-mono text-[7.5px] sm:text-[8.5px] text-purple-300/70 truncate uppercase mt-0.5">
                      {mode.subtitle}
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-1.5 border-t border-purple-900/40 flex items-center justify-between text-[7.5px] sm:text-[8.5px] font-mono">
                  <span
                    className={`${isSelected ? "text-arcade-magenta font-semibold" : "text-purple-400/60"}`}
                  >
                    {mode.badge}
                  </span>
                  <span
                    className={`${isSelected ? "text-arcade-cyan font-bold" : "text-purple-300/40"}`}
                  >
                    {isSelected ? "▶ LISTO" : ">>"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Selected Telemetry & Confirm Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/50 pt-2.5 sm:pt-3 gap-2.5">
          <div className="flex items-center space-x-2 text-[8px] sm:text-[9px] font-mono w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-purple-300/70">DESTINO:</span>
            <span className="font-arcade text-pink-300 font-bold text-[8.5px] sm:text-[10px]">
              {activeMode.title}
            </span>
            <span className="text-arcade-cyan font-mono text-[8px] sm:text-[9px] bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 hidden sm:inline-block">
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
              <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">
                [ENTER]
              </span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};
