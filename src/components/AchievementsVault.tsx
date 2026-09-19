import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { TROPHIES_DATA } from '../data/achievements';
import type { Trophy } from '../types';
import { ScreenBreadcrumb, NeoPixelCard, NeoPixelButton } from './ui';
import { TrophyPedestal } from './achievements/TrophyPedestal';
import { TrophyShelf } from './achievements/TrophyShelf';

export const AchievementsVault: React.FC = () => {
  const trophies: Trophy[] = TROPHIES_DATA;
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const { play } = useRetroAudio();

  const handleSelect = (idx: number) => {
    play('coin');
    setActiveIdx(idx);
  };

  const handleNext = () => {
    play('coin');
    setActiveIdx((prev) => (prev + 1) % trophies.length);
  };

  const handlePrev = () => {
    play('coin');
    setActiveIdx((prev) => (prev - 1 + trophies.length) % trophies.length);
  };

  // Modern keyboard navigation hook
  useKeyboardNav({
    onArrowRight: handleNext,
    onArrowLeft: handlePrev,
    onEnter: () => {
      play('start');
      navigateTo('/contacto');
    },
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
    onNumber: (num) => {
      if (num >= 1 && num <= trophies.length) {
        handleSelect(num - 1);
      }
    },
  });

  const currentTrophy = trophies[activeIdx] || trophies[0];

  return (
    <main
      className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center select-none py-1"
      data-purpose="achievements-vault-screen"
    >
      {/* Top Breadcrumb & Status */}
      <ScreenBreadcrumb
        backHref="/modos"
        backLabel="VOLVER A MÓDULOS"
        chapterLabel="CH-05 //"
        statusLabel="BÓVEDA DE TROFEOS & MEDALLAS"
      />

      {/* Main Neo-Pixel Sci-Fi Vault Showcase Container */}
      <NeoPixelCard>
        {/* Central Holographic Trophy Pedestal */}
        <TrophyPedestal trophy={currentTrophy} />

        {/* Bottom Trophy Shelf */}
        <TrophyShelf
          trophies={trophies}
          activeIdx={activeIdx}
          onSelect={handleSelect}
          onHoverSound={() => play('hover')}
        />

        {/* Bottom Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-1.5 gap-2">
          {/* Stepper Dots */}
          <div className="flex items-center gap-2">
            <div className="font-arcade text-[9px] text-purple-300/70 tracking-wider">
              TROFEO <span className="text-pink-300 font-bold">0{activeIdx + 1}</span> / 0{trophies.length}
            </div>
            <div className="flex items-center gap-1.5">
              {trophies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-2.5 h-2.5 transition-all cursor-pointer ${
                    idx === activeIdx
                      ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                      : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
                  }`}
                  type="button"
                  aria-label={`Seleccionar trofeo ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Action Navigation */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <NeoPixelButton
              variant="secondary"
              soundEffect="hover"
              onClick={handleNext}
              className="text-[10px] sm:text-xs flex-1 sm:flex-initial min-h-[38px] sm:min-h-0"
            >
              <span>SIGUIENTE TROFEO</span>
              <span className="font-mono text-[9px] hidden sm:inline">[▶]</span>
            </NeoPixelButton>

            <NeoPixelButton
              as="a"
              href="/contacto"
              variant="primary"
              soundEffect="start"
              className="text-[10px] sm:text-xs flex-1 sm:flex-initial min-h-[38px] sm:min-h-0"
            >
              <span>CANAL DE CONTACTO</span>
              <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">[ENTER]</span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};
