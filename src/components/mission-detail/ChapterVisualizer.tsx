import React from 'react';
import type { Mission } from '../../types';
import { MissionArtwork } from '../projects/MissionArtwork';

interface ChapterVisualizerProps {
  missionType: Mission['type'];
}

export const ChapterVisualizer: React.FC<ChapterVisualizerProps> = ({ missionType }) => {
  return (
    <div className="md:col-span-6">
      <div className="w-full bg-[#090615] border border-purple-900/60 p-2.5 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px]" />

        {/* Terminal Monitor Top Bar */}
        <div className="w-full flex items-center justify-between pb-1.5 mb-1 border-b border-purple-900/40 z-10 text-[9px] font-mono text-purple-300/60">
          <span className="font-arcade text-[8px] text-pink-300/80">MONITOR // NÚCLEO</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400" />
            <span className="text-[8px] font-arcade text-emerald-400">SISTEMA // ONLINE</span>
          </div>
        </div>

        {/* Reusable Pixel Art SVG */}
        <MissionArtwork
          type={missionType}
          className="w-full max-w-sm h-32 sm:h-36 pixel-sharp z-10"
        />
      </div>
    </div>
  );
};
