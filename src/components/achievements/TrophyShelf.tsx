import React from 'react';
import type { Trophy } from '../../types';

interface TrophyShelfProps {
  trophies: Trophy[];
  activeIdx: number;
  onSelect: (index: number) => void;
  onHoverSound?: () => void;
}

export const TrophyShelf: React.FC<TrophyShelfProps> = ({
  trophies,
  activeIdx,
  onSelect,
  onHoverSound,
}) => {
  return (
    <div className="w-full bg-[#090616]/95 border border-purple-900/70 p-2 mb-1.5">
      <div className="flex items-center justify-between border-b border-purple-900/50 pb-1 mb-1.5 px-1">
        <span className="text-[8px] font-arcade text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
          <span>◆</span> ESTANTERÍA DE MEDALLAS DESBLOQUEADAS
        </span>
        <span className="text-[8px] font-mono text-purple-300/70">
          [ 0{trophies.length} / 0{trophies.length} COMPLETADOS ]
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {trophies.map((t, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={t.id}
              onClick={() => onSelect(idx)}
              onMouseEnter={onHoverSound}
              type="button"
              className={`p-2 flex items-center gap-2 text-left transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-gradient-to-b from-[#241544] to-[#140d29] border-2 border-arcade-magenta shadow-[0_0_12px_rgba(244,63,133,0.4)] scale-102 z-10'
                  : 'bg-[#110a22]/80 border border-purple-900/50 hover:border-purple-600 hover:bg-[#1a1133]'
              }`}
            >
              {/* Miniature Medal Icon */}
              <div className="text-xl shrink-0 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]">
                {t.icon}
              </div>

              <div className="flex flex-col min-w-0">
                <span className={`text-[7px] font-arcade ${isSelected ? 'text-pink-300' : 'text-purple-300/60'}`}>
                  [{idx + 1}] {t.tier}
                </span>
                <span className={`font-arcade text-[8px] sm:text-[9px] tracking-wider truncate ${isSelected ? 'text-white font-bold' : 'text-purple-200/80'}`}>
                  {t.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
