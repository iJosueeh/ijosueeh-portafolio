import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { MISSIONS_DATA } from '../data/missions';
import type { Mission, MissionChapter } from '../types';
import { ScreenBreadcrumb, NeoPixelCard } from './ui';
import { ChapterContent } from './mission-detail/ChapterContent';
import { ChapterVisualizer } from './mission-detail/ChapterVisualizer';
import { ChapterControls } from './mission-detail/ChapterControls';

export { MISSIONS_DATA };
export type { Mission as MissionData, MissionChapter };

interface MissionDetailProps {
  missionId?: string;
}

export const MissionDetail: React.FC<MissionDetailProps> = ({ missionId = 'jaldishop' }) => {
  const mission = MISSIONS_DATA[missionId] || MISSIONS_DATA.jaldishop;
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const { play } = useRetroAudio();

  const chapter = mission.chapters[currentChapter] || mission.chapters[0];
  const totalChapters = mission.chapters.length;

  const handleNext = () => {
    play('select');
    setCurrentChapter((prev) => (prev + 1) % totalChapters);
  };

  const handlePrev = () => {
    play('select');
    setCurrentChapter((prev) => (prev - 1 + totalChapters) % totalChapters);
  };

  const handleSelectChapter = (idx: number) => {
    play('select');
    setCurrentChapter(idx);
  };

  const handleBackToProjects = () => {
    play('select');
    navigateTo('/proyectos');
  };

  // Modern keyboard navigation hook
  useKeyboardNav({
    onArrowRight: handleNext,
    onEnter: handleNext,
    onArrowLeft: handlePrev,
    onEscape: handleBackToProjects,
    onNumber: (num) => {
      if (num >= 1 && num <= totalChapters) {
        handleSelectChapter(num - 1);
      }
    },
  });

  return (
    <main
      className="w-full max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-1 sm:py-3"
      data-purpose="mission-briefing-screen"
    >
      {/* Top Breadcrumb & Status */}
      <ScreenBreadcrumb
        backHref="/proyectos"
        backLabel="VOLVER A MISIONES"
        chapterLabel={`${mission.code} //`}
        statusLabel={mission.category}
      />

      {/* Main Neo-Pixel Sci-Fi Briefing Panel */}
      <NeoPixelCard
        className="p-3 sm:p-6 md:p-7"
        data-purpose="mission-briefing-card"
        viewTransitionName="neo-scifi-main-card"
      >
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-purple-900/60 pb-1.5 sm:pb-2.5 mb-2.5 sm:mb-4 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-arcade text-[8px] sm:text-[10px] text-arcade-cyan tracking-wider bg-cyan-950/30 px-2 sm:px-2.5 py-0.5 border border-cyan-500/40">
              CAPÍTULO 0{currentChapter + 1} // {chapter.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#090615] border border-emerald-500/80 px-2 sm:px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
            <span className="font-arcade text-[7.5px] sm:text-[9px] text-emerald-400 tracking-wider uppercase">
              ESTADO // {mission.status}
            </span>
          </div>
        </div>

        {/* Mission Main Title & Subtitle */}
        <div className="mb-2.5 sm:mb-4">
          <h1 className="font-arcade text-base sm:text-2xl lg:text-3xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
            {mission.title}
          </h1>
          <p className="font-mono text-[10px] sm:text-xs text-pink-300 tracking-widest uppercase font-bold mt-0.5 sm:mt-1">
            {mission.tagline}
          </p>
          <div className="h-0.5 w-14 sm:w-20 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-1 sm:mt-1.5" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 md:gap-7 items-center mb-3 sm:mb-5">
          {/* Left Column: Chapter Content & Stack */}
          <ChapterContent
            chapter={chapter}
            onHoverSound={() => play('hover')}
          />

          {/* Right Column: Terminal Monitor / Reusable Pixel Artwork */}
          <ChapterVisualizer missionType={mission.type} />
        </div>

        {/* Bottom Chapter Steps & Action Bar */}
        <ChapterControls
          chapters={mission.chapters}
          currentChapter={currentChapter}
          onSelectChapter={handleSelectChapter}
          onNext={handleNext}
          onBackToProjects={handleBackToProjects}
        />
      </NeoPixelCard>
    </main>
  );
};
