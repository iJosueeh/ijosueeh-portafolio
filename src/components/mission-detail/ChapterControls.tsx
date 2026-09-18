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
    <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-3 gap-3">
      {/* Chapter Step Indicators */}
      <div className="flex items-center gap-3">
        <div className="font-arcade text-[9px] text-purple-300/70 tracking-wider">
          CAPÍTULO <span className="text-pink-300 font-bold">0{currentChapter + 1}</span> / 0{totalChapters}
        </div>
        <div className="flex items-center gap-1.5">
          {chapters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectChapter(idx)}
              aria-label={`Ir a capítulo ${idx + 1}`}
              className={`w-2.5 h-2.5 transition-all cursor-pointer ${
                idx === currentChapter
                  ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                  : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBackToProjects}
          className="text-[10px] font-mono text-purple-300/70 hover:text-white transition-colors cursor-pointer"
        >
          ESC // MISIONES
        </button>

        <NeoPixelButton
          variant="primary"
          soundEffect="select"
          onClick={onNext}
          className="py-2.5 px-5 text-xs"
        >
          <span>{currentChapter === totalChapters - 1 ? 'REINICIAR' : 'SIGUIENTE'} [ENTER]</span>
          <span className="font-bold">→</span>
        </NeoPixelButton>
      </div>
    </div>
  );
};
