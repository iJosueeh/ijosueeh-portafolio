import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { CAREER_STATIONS } from '../data/career';
import { NeoPixelCard, ScreenBreadcrumb } from './ui';
import { GalaxyRadarMap } from './career/GalaxyRadarMap';
import { StationTelemetryPods } from './career/StationTelemetryPods';
import { SectorControls } from './career/SectorControls';

export const CareerStarMap: React.FC = () => {
  const stations = CAREER_STATIONS;

  const [activeIdx, setActiveIdx] = useState<number>(2);
  const [prevIdx, setPrevIdx] = useState<number>(2);
  const [isFlying, setIsFlying] = useState<boolean>(false);
  const { play } = useRetroAudio();

  const currentStation = stations[activeIdx] || stations[0];

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    play('select');
    setPrevIdx(activeIdx);
    setIsFlying(true);
    setActiveIdx(idx);

    setTimeout(() => {
      setIsFlying(false);
      play('hover');
    }, 600);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % stations.length;
    handleSelect(next);
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + stations.length) % stations.length;
    handleSelect(prev);
  };

  // Keyboard Navigation: [1-3] Sectors, [Arrows] Navigate, [Enter] Achievements, [Escape] Exit
  useKeyboardNav({
    onNumberKey: (index) => {
      if (index >= 0 && index < stations.length) {
        handleSelect(index);
      }
    },
    onNext: handleNext,
    onPrev: handlePrev,
    onEnter: () => {
      play('start');
      navigateTo('/logros');
    },
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
  });

  return (
    <main
      className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center select-none"
      data-purpose="career-galaxy-screen"
    >
      {/* 1. Breadcrumb */}
      <ScreenBreadcrumb
        backHref="/modos"
        channelCode="CH-04 //"
        screenTitle="RADAR GALÁCTICO DE EXPEDICIONES"
      />

      {/* 2. Main Galaxy Stage Container */}
      <NeoPixelCard
        className="p-2.5 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Interactive Radar Map */}
        <GalaxyRadarMap
          stations={stations}
          activeIdx={activeIdx}
          prevIdx={prevIdx}
          isFlying={isFlying}
          onSelectStation={handleSelect}
        />

        {/* Mission Telemetry Pods (Bitácora, Logros, Stack) */}
        <StationTelemetryPods station={currentStation} />

        {/* Bottom Stepper & Action Controls */}
        <SectorControls
          totalSectors={stations.length}
          activeIdx={activeIdx}
          onSelectSector={handleSelect}
          onNextSector={handleNext}
        />
      </NeoPixelCard>
    </main>
  );
};

