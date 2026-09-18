import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';

export const HeaderHUD: React.FC = () => {
  const [credits, setCredits] = useState<number>(1);
  const { isEnabled, toggleMute, play } = useRetroAudio();

  const addCredit = () => {
    play('coin');
    setCredits((prev) => prev + 1);
  };



  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 py-2 sm:py-2.5 px-4 sm:px-6 md:px-8 border-b border-arcade-border/60 bg-[#161226]/60 backdrop-blur-md shrink-0" data-purpose="arcade-header">
      {/* Left: Player Level / Status Pill */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-arcade-panel border border-arcade-border px-2.5 py-1 text-[11px] sm:text-xs font-mono tracking-widest text-slate-200 shadow-[2px_2px_0px_#000]">
          <span className="w-2 h-2 bg-arcade-magenta inline-block"></span>
          <span className="text-arcade-pink font-semibold">NIV.</span>
          <span className="font-bold text-white">08</span>
        </div>
        <div className="hidden sm:flex items-center text-[10px] font-mono text-arcade-cyan uppercase tracking-widest bg-cyan-950/30 border border-cyan-800/40 px-2 py-0.5">
          <span className="text-cyan-400 mr-1">✦</span>EN ÓRBITA<span className="text-cyan-400 ml-1">✦</span>
        </div>
      </div>

      {/* Center: Brand Identity */}
      <div className="flex items-center space-x-1 font-mono uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base font-bold">
        <span className="text-pink-300 font-arcade text-[11px] sm:text-xs md:text-sm soft-glow-pink">IJOSUEEH</span>
        <span className="w-1.5 sm:w-2 h-3 sm:h-4 bg-arcade-magenta animate-arcade-blink inline-block ml-0.5"></span>
      </div>

      {/* Right: Sound toggle & Credits Button */}
      <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-mono">
        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          title={isEnabled ? 'Silenciar Efectos 8-Bit' : 'Activar Efectos 8-Bit'}
          className="bg-arcade-panel hover:bg-[#251b47] border border-arcade-border px-2 py-1 text-purple-200/70 hover:text-white transition-colors flex items-center gap-1 text-[10px] sm:text-[11px] cursor-pointer"
        >
          <span>{isEnabled ? '🔊' : '🔇'}</span>
          <span className="hidden md:inline font-mono">{isEnabled ? 'SFX ON' : 'SFX OFF'}</span>
        </button>

        {/* Interactive Insert Coin Button */}
        <button
          onClick={addCredit}
          className="bg-arcade-surface hover:bg-arcade-panel border border-arcade-border px-2.5 py-1 text-slate-200 text-[10px] sm:text-[11px] tracking-widest shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="text-arcade-cyan font-medium group-hover:text-arcade-pink transition-colors">CRÉDITOS:</span>
          <span className="font-arcade text-[9px] sm:text-[10px] text-white bg-slate-950 px-1.5 py-0.5 border border-purple-900/50">
            {credits.toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] text-arcade-gold hidden lg:inline">+ COIN</span>
        </button>
      </div>
    </header>
  );
};
