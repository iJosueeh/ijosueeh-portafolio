import React from 'react';
import type { LoadoutSlot } from '../../types';
import { playRetroBeep } from '../../utils/audio';

interface SlotTabsProps {
  slots: LoadoutSlot[];
  activeSlotIdx: number;
  onSelectSlot: (index: number) => void;
}

export const SlotTabs: React.FC<SlotTabsProps> = ({
  slots,
  activeSlotIdx,
  onSelectSlot,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mb-3 border-b border-purple-900/60 pb-2.5">
      {slots.map((slot, sIdx) => {
        const isActive = activeSlotIdx === sIdx;
        return (
          <button
            key={slot.id}
            onClick={() => onSelectSlot(sIdx)}
            onMouseEnter={() => playRetroBeep('hover')}
            type="button"
            className={`p-2 flex flex-col text-left transition-all cursor-pointer relative ${
              isActive
                ? 'bg-gradient-to-b from-[#251545] to-[#150e2a] border-2 border-pink-300 shadow-[0_0_12px_rgba(244,63,133,0.3)]'
                : 'bg-[#110b24]/90 border border-purple-900/60 hover:border-purple-600/80 hover:bg-[#1a1236]'
            }`}
          >
            {isActive && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-arcade-magenta"></div>
            )}
            <div className="flex items-center justify-between w-full mb-0.5">
              <span className={`text-[8px] font-arcade ${isActive ? 'text-pink-300' : 'text-purple-300/60'}`}>
                [{sIdx + 1}] {slot.slotNumber}
              </span>
              <span className="text-xs">{slot.icon}</span>
            </div>
            <div
              className={`font-arcade text-[9px] sm:text-[10px] tracking-wider truncate ${
                isActive ? 'text-white font-bold' : 'text-purple-200/80'
              }`}
            >
              {slot.title}
            </div>
          </button>
        );
      })}
    </div>
  );
};
