import React from 'react';
import type { TechModule } from '../../types';

interface ModuleChipsListProps {
  modules: TechModule[];
  selectedModuleIdx: number;
  accentColor: string;
  slotIcon: string;
  onSelectModule: (index: number) => void;
}

export const ModuleChipsList: React.FC<ModuleChipsListProps> = ({
  modules,
  selectedModuleIdx,
  accentColor,
  slotIcon,
  onSelectModule,
}) => {
  return (
    <div className="md:col-span-5 flex flex-col justify-between space-y-1.5 bg-[#090616]/90 border border-purple-900/60 p-2.5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-900/50 pb-1.5 mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs">{slotIcon}</span>
          <span className="font-arcade text-[9px] text-pink-300 tracking-wider">
            MÓDULOS EQUIPADOS
          </span>
        </div>
        <span className="text-[9px] font-mono text-arcade-cyan font-bold">
          0{modules.length} CHIPS
        </span>
      </div>

      {/* Chips List */}
      <div className="flex flex-col space-y-1.5">
        {modules.map((mod, mIdx) => {
          const isSelected = selectedModuleIdx === mIdx;
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mIdx)}
              type="button"
              className={`group w-full p-2 text-left flex flex-col transition-all cursor-pointer ${
                isSelected
                  ? 'bg-purple-950/70 border-2 border-arcade-magenta shadow-[0_0_10px_rgba(244,63,133,0.3)] translate-x-1'
                  : 'bg-[#130d29]/70 border border-purple-900/40 hover:border-purple-600 hover:bg-[#1a1236]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-arcade text-[8px] ${
                      isSelected ? 'text-pink-300' : 'text-purple-300/50'
                    }`}
                  >
                    {isSelected ? '▶' : '▪'}
                  </span>
                  <span
                    className={`font-arcade text-[9px] sm:text-[10px] ${
                      isSelected ? 'text-white font-bold' : 'text-purple-200'
                    }`}
                  >
                    {mod.name}
                  </span>
                </div>
                <span className="font-arcade text-[8px] text-arcade-cyan">
                  {mod.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-[#070410] border border-purple-900/80 p-px">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${mod.level}%`,
                    backgroundColor: isSelected ? accentColor : '#a855f7',
                    boxShadow: isSelected ? `0 0 6px ${accentColor}` : 'none',
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-[8px] font-mono text-purple-300/50 pt-1 text-center">
        [ SELECCIONA UN CHIP PARA VER TELEMETRÍA ]
      </div>
    </div>
  );
};
