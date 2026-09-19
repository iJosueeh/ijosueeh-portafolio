import React from 'react';
import type { MissionChapter } from '../../types';
import { NeoPixelButton } from '../ui';

interface ChapterControlsProps {
  chapters: MissionChapter[];
  currentChapter: number;
  onSelectChapter: (index: number) => void;
  onNext: () => void;
  onBackToProjects: () => void;
}

export const ChapterControls: React.FC<ChapterControlsProps> = ({
  chapters,
  currentChapter,
  onSelectChapter,
  onNext,
  onBackToProjects,
}) => {
  const totalChapters = chapters.length;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-2.5 sm:pt-3 gap-2.5 sm:gap-3 w-full">
      {/* Chapter Step Indicators */}
      <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3">
        <div className="font-arcade text-[8px] sm:text-[9px] text-purple-300/70 tracking-wider">
          CAPÍTULO <span className="text-pink-300 font-bold">0{currentChapter + 1}</span> / 0{totalChapters}
        </div>
        <div className="flex items-center gap-1.5">
          {chapters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectChapter(idx)}
              aria-label={`Ir a capítulo ${idx + 1}`}
              className={`w-3 h-3 sm:w-2.5 sm:h-2.5 transition-all cursor-pointer ${
                idx === currentChapter
                  ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                  : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={onBackToProjects}
          className="text-[9px] sm:text-[10px] font-mono text-purple-300/70 hover:text-white transition-colors cursor-pointer py-1 px-2 border border-transparent hover:border-purple-800 flex items-center gap-1"
        >
          <span className="font-arcade text-[8px]">&lt;</span>
          <span className="hidden sm:inline">ESC // </span>
          <span>MISIONES</span>
        </button>

        <NeoPixelButton
          variant="primary"
          soundEffect="select"
          onClick={onNext}
          className="flex-1 sm:flex-initial py-2 sm:py-2.5 px-4 sm:px-5 text-[10px] sm:text-xs min-h-[38px] sm:min-h-[44px]"
        >
          <span>{currentChapter === totalChapters - 1 ? 'REINICIAR' : 'SIGUIENTE'}</span>
          <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">[ENTER]</span>
          <span className="font-bold">→</span>
        </NeoPixelButton>
      </div>
    </div>
  );
};
