import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { MISSIONS_LIST } from '../data/missions';
import type { Mission } from '../types';
import { ScreenBreadcrumb } from './ui';
import { MissionCard3D } from './projects/MissionCard3D';

export const ProjectsCarousel: React.FC = () => {
  const missions: Mission[] = MISSIONS_LIST;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { play } = useRetroAudio();

  const handlePrev = () => {
    play('select');
    setActiveIndex((prev) => (prev - 1 + missions.length) % missions.length);
  };

  const handleNext = () => {
    play('select');
    setActiveIndex((prev) => (prev + 1) % missions.length);
  };

  const handleAction = (mission: Mission) => {
    play('start');
    navigateTo(`/proyectos/${mission.id}`);
  };

  // Modern keyboard navigation hook
  useKeyboardNav({
    onArrowLeft: handlePrev,
    onArrowRight: handleNext,
    onEnter: () => handleAction(missions[activeIndex]),
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
    onNumber: (num) => {
      if (num >= 1 && num <= missions.length) {
        play('select');
        setActiveIndex(num - 1);
      }
    },
  });

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  // Circular distance for 3D Ring
  const getCircularDiff = (index: number) => {
    const N = missions.length;
    let diff = (index - activeIndex) % N;
    if (diff < -Math.floor(N / 2)) diff += N;
    if (diff > Math.floor(N / 2)) diff -= N;
    return diff;
  };

  return (
    <main
      className="w-full max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-1 sm:py-2 select-none"
      data-purpose="mission-select-screen"
    >
      {/* Top Breadcrumb Bar */}
      <ScreenBreadcrumb
        backHref="/modos"
        backLabel="VOLVER A MÓDULOS"
        chapterLabel="MISIONES:"
        statusLabel={`0${missions.length} DISPONIBLES`}
        maxWidthClass="max-w-4xl"
      />

      {/* Screen Title */}
      <div
        className="flex items-center justify-center space-x-2.5 mb-1.5 sm:mb-2"
        data-purpose="section-header"
      >
        <span className="text-arcade-cyan text-xs md:text-sm">◆</span>
        <h1 className="font-arcade text-pink-300 text-xs sm:text-sm md:text-base tracking-widest text-center uppercase glow-magenta">
          SELECCIONA UNA MISIÓN
        </h1>
        <span className="text-arcade-cyan text-xs md:text-sm">◆</span>
      </div>

      {/* 3D Ring Carousel Stage with Navigation Arrows */}
      <div
        className="w-full relative flex items-center justify-center py-1 sm:py-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          onMouseEnter={() => play('hover')}
          aria-label="Misión Anterior"
          className="absolute left-0 sm:left-2 z-30 w-9 h-10 sm:w-11 sm:h-11 bg-[#1b1335]/95 hover:bg-arcade-magenta border-2 border-purple-900/90 hover:border-pink-300 text-pink-300 hover:text-white font-arcade text-xs flex items-center justify-center transition-all active:translate-y-0.5 neo-pixel-btn cursor-pointer shadow-[3px_3px_0px_#000] shrink-0"
          type="button"
        >
          ◀
        </button>

        {/* 3D Ring Viewport Container */}
        <div className="w-full max-w-4xl relative flex items-center justify-center min-h-[410px] sm:min-h-[435px] [perspective:1200px] overflow-visible">
          {missions.map((mission, idx) => {
            const diff = getCircularDiff(idx);
            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            let transformStyle = '';
            let opacityStyle = 0;
            let zIndex = 0;

            if (isCenter) {
              transformStyle = 'translateX(0%) scale(1) translateZ(0px)';
              opacityStyle = 1;
              zIndex = 20;
            } else if (isLeft) {
              transformStyle = 'translateX(-40%) scale(0.85) rotateY(10deg) translateZ(-60px)';
              opacityStyle = 0.45;
              zIndex = 10;
            } else if (isRight) {
              transformStyle = 'translateX(40%) scale(0.85) rotateY(-10deg) translateZ(-60px)';
              opacityStyle = 0.45;
              zIndex = 10;
            } else {
              transformStyle = 'translateX(0%) scale(0.7) translateZ(-200px)';
              opacityStyle = 0;
              zIndex = 0;
            }

            return (
              <MissionCard3D
                key={mission.id}
                mission={mission}
                index={idx}
                totalMissions={missions.length}
                isCenter={isCenter}
                transformStyle={transformStyle}
                opacityStyle={opacityStyle}
                zIndex={zIndex}
                onSelect={() => {
                  if (!isCenter) {
                    play('select');
                    setActiveIndex(idx);
                  }
                }}
              />
            );
          })}
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          onMouseEnter={() => play('hover')}
          aria-label="Misión Siguiente"
          className="absolute right-0 sm:right-2 z-30 w-9 h-10 sm:w-11 sm:h-11 bg-[#1b1335]/95 hover:bg-arcade-magenta border-2 border-purple-900/90 hover:border-pink-300 text-pink-300 hover:text-white font-arcade text-xs flex items-center justify-center transition-all active:translate-y-0.5 neo-pixel-btn cursor-pointer shadow-[3px_3px_0px_#000] shrink-0"
          type="button"
        >
          ▶
        </button>
      </div>

      {/* Pagination Indicator */}
      <div
        className="flex flex-col items-center gap-1 mt-1"
        data-purpose="pagination-indicator"
      >
        <div className="flex items-center gap-2">
          {missions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                play('select');
                setActiveIndex(idx);
              }}
              aria-label={`Ir a misión ${idx + 1}`}
              className={`w-2.5 h-2.5 transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                  : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
              }`}
            />
          ))}
        </div>
        <div className="font-mono text-[10px] text-purple-300/60 tracking-widest">
          MISIÓN <span className="text-pink-300 font-bold">0{activeIndex + 1}</span> DE{' '}
          <span className="text-purple-300/80">0{missions.length}</span>
        </div>
      </div>
    </main>
  );
};
