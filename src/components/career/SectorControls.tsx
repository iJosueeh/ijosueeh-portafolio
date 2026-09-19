import React from 'react';
import { playRetroBeep } from '../../utils/audio';

interface SectorControlsProps {
  totalSectors: number;
  activeIdx: number;
  onSelectSector: (idx: number) => void;
  onNextSector: () => void;
}

export const SectorControls: React.FC<SectorControlsProps> = ({
  totalSectors,
  activeIdx,
  onSelectSector,
  onNextSector,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-1.5 gap-2 w-full">
      {/* Planet Stepper Dots */}
      <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2">
        <div className="font-arcade text-[8px] sm:text-[9px] text-purple-300/70 tracking-wider">
          SECTOR <span className="text-pink-300 font-bold">0{activeIdx + 1}</span> / 0{totalSectors}
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSectors }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSector(idx)}
              className={`w-2.5 h-2.5 transition-all cursor-pointer ${
                idx === activeIdx
                  ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                  : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
              }`}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Action Navigation */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={onNextSector}
          onMouseEnter={() => playRetroBeep('hover')}
          className="neo-pixel-btn py-1.5 px-3 bg-[#1b1335] hover:bg-[#251a4a] text-purple-200 hover:text-white font-mono text-[10px] sm:text-xs border border-purple-900/80 cursor-pointer flex items-center justify-center gap-1 flex-1 sm:flex-initial min-h-[38px] sm:min-h-0"
          type="button"
        >
          <span>SIGUIENTE SECTOR</span>
          <span className="font-mono text-[9px] hidden sm:inline">[▶]</span>
        </button>

        <a
          href="/logros"
          onClick={() => playRetroBeep('start')}
          onMouseEnter={() => playRetroBeep('hover')}
          className="neo-pixel-btn py-1.5 px-3 sm:px-4 bg-gradient-to-r from-arcade-magenta to-[#e11d48] hover:from-[#f43f85] hover:to-[#fb7185] text-white font-arcade text-[9px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 border border-pink-300/80 cursor-pointer shadow-[3px_3px_0px_#500724] flex-1 sm:flex-initial min-h-[38px] sm:min-h-0"
        >
          <span>▶</span>
          <span>VER LOGROS</span>
          <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">[ENTER]</span>
        </a>
      </div>
    </div>
  );
};
