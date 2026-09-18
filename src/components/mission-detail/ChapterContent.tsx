import React from 'react';
import type { MissionChapter } from '../../types';

interface ChapterContentProps {
  chapter: MissionChapter;
  onHoverSound?: () => void;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, onHoverSound }) => {
  return (
    <div className="md:col-span-6 flex flex-col justify-between space-y-3.5">
      {/* Objective & Description */}
      <div className="space-y-1.5">
        <div className="text-[10px] font-arcade text-pink-300 tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-arcade-cyan">▶</span> {chapter.highlightLabel || 'DETALLE DE CAPÍTULO'}
        </div>
        <p className="text-xs sm:text-[13px] font-mono text-purple-100/90 leading-relaxed pl-3 border-l-2 border-arcade-magenta/60">
          {chapter.content}
        </p>
      </div>

      {/* Stack Tags */}
      {chapter.tags && (
        <div className="space-y-1.5">
          <div className="text-[9px] font-arcade text-purple-300/70 uppercase tracking-wider">
            MÓDULOS EQUIPADOS:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {chapter.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#170f2e] border border-purple-800/60 text-purple-200 text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Chapter Action Link */}
      {chapter.actionUrl && (
        <div className="pt-1">
          <a
            href={chapter.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onHoverSound}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1b1335] hover:bg-[#251a4a] border border-purple-900/80 hover:border-arcade-cyan text-purple-200 hover:text-white text-xs font-mono font-bold tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <span className="text-arcade-cyan font-bold">{chapter.actionIcon || '>'}</span>
            <span>{chapter.actionLabel || 'VER DETALLES'}</span>
          </a>
        </div>
      )}
    </div>
  );
};
