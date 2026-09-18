import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { LOADOUT_SLOTS } from '../data/skills';
import { NeoPixelCard, ScreenBreadcrumb, NeoPixelButton } from './ui';
import { SlotTabs } from './skills/SlotTabs';
import { ModuleChipsList } from './skills/ModuleChipsList';
import { ModuleTelemetryConsole } from './skills/ModuleTelemetryConsole';

export const SkillsLoadout: React.FC = () => {
  const [activeSlotIdx, setActiveSlotIdx] = useState<number>(0);
  const [selectedModuleIdx, setSelectedModuleIdx] = useState<number>(0);
  const { play } = useRetroAudio();

  const activeSlot = LOADOUT_SLOTS[activeSlotIdx] || LOADOUT_SLOTS[0];
  const selectedModule =
    activeSlot.modules[selectedModuleIdx] || activeSlot.modules[0];

  const handleSelectSlot = (slotIdx: number) => {
    play('select');
    setActiveSlotIdx(slotIdx);
    setSelectedModuleIdx(0);
  };

  const handleSelectModule = (modIdx: number) => {
    play('hover');
    setSelectedModuleIdx(modIdx);
  };

  // Keyboard Navigation: [1-4] Slots, [Arrows] Navigate, [Enter] Start, [Escape] Exit
  useKeyboardNav({
    onNumberKey: (index) => {
      if (index >= 0 && index < LOADOUT_SLOTS.length) {
        handleSelectSlot(index);
      }
    },
    onNext: () => {
      play('select');
      setActiveSlotIdx((prev) => (prev + 1) % LOADOUT_SLOTS.length);
      setSelectedModuleIdx(0);
    },
    onPrev: () => {
      play('select');
      setActiveSlotIdx(
        (prev) => (prev - 1 + LOADOUT_SLOTS.length) % LOADOUT_SLOTS.length
      );
      setSelectedModuleIdx(0);
    },
    onEnter: () => {
      play('start');
      navigateTo('/proyectos');
    },
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
  });

  return (
    <main
      className="w-full max-w-5xl lg:max-w-6xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-1 sm:py-2 select-none"
      data-purpose="skills-arsenal-screen"
    >
      {/* 1. Breadcrumb */}
      <ScreenBreadcrumb
        backHref="/modos"
        channelCode="CH-03 //"
        screenTitle="ARSENAL DE EQUIPAMIENTO"
      />

      {/* 2. Main Neo-Pixel Sci-Fi Arsenal Frame */}
      <NeoPixelCard data-purpose="arsenal-deck-card">
        {/* Slot Selector Tabs */}
        <SlotTabs
          slots={LOADOUT_SLOTS}
          activeSlotIdx={activeSlotIdx}
          onSelectSlot={handleSelectSlot}
        />

        {/* Main Arsenal Grid (Chips List + Telemetry Console) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch mb-2.5">
          <ModuleChipsList
            modules={activeSlot.modules}
            selectedModuleIdx={selectedModuleIdx}
            accentColor={activeSlot.color}
            slotIcon={activeSlot.icon}
            onSelectModule={handleSelectModule}
          />

          <ModuleTelemetryConsole module={selectedModule} />
        </div>

        {/* Bottom Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-2 gap-2">
          <div className="flex items-center space-x-2 text-[9px] font-mono text-purple-300/70">
            <span>ATAJOS:</span>
            <span className="bg-[#1b1335] px-1.5 py-0.5 border border-purple-900 text-pink-300">[1-4] RANURAS</span>
            <span className="bg-[#1b1335] px-1.5 py-0.5 border border-purple-900 text-arcade-cyan">[▲▼] CHIPS</span>
            <span className="bg-[#1b1335] px-1.5 py-0.5 border border-purple-900 text-purple-200">[ESC] SALIR</span>
          </div>

          <div className="flex items-center gap-2.5">
            <NeoPixelButton
              href="/proyectos"
              variant="primary"
              soundType="start"
              icon={<span>▶</span>}
            >
              VER MISIONES EN VIVO [ENTER]
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};

