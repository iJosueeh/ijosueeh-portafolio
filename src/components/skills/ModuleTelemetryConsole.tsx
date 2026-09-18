import React from 'react';
import type { TechModule } from '../../types';

interface ModuleTelemetryConsoleProps {
  module: TechModule;
}

export const ModuleTelemetryConsole: React.FC<ModuleTelemetryConsoleProps> = ({
  module,
}) => {
  return (
    <div className="md:col-span-7 flex flex-col justify-between bg-[#0b071d]/95 border border-purple-900/70 p-3 sm:p-4 relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none"></div>

      {/* Telemetry Header */}
      <div>
        <div className="flex items-center justify-between border-b border-purple-900/50 pb-1.5 mb-2">
          <span className="font-arcade text-[8px] sm:text-[9px] text-arcade-cyan bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40">
            CHIP // {module.category}
          </span>
          <div className="flex items-center gap-1.5 bg-[#070410] px-2 py-0.5 border border-emerald-500/60">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse"></span>
            <span className="font-arcade text-[8px] text-emerald-400">{module.tag}</span>
          </div>
        </div>

        {/* Module Name & Level */}
        <div className="flex items-baseline justify-between mb-1.5">
          <h2 className="font-arcade text-base sm:text-lg text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
            {module.name}
          </h2>
          <div className="font-arcade text-xs text-pink-300">
            DOMINIO: {module.level}%
          </div>
        </div>
        <div className="h-0.5 w-14 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mb-2"></div>

        {/* Module Technical Description */}
        <p className="text-[11px] sm:text-xs font-mono text-purple-100/90 leading-relaxed pl-2.5 border-l-2 border-arcade-magenta/60 mb-3">
          {module.description}
        </p>
      </div>

      {/* Technical Specs & Metrics Grid */}
      <div className="space-y-1.5 mb-3">
        <div className="text-[8px] font-arcade text-purple-300/70 uppercase">
          ESPECIFICACIONES TÉCNICAS:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {module.specs.map((spec, sIdx) => (
            <div key={sIdx} className="bg-[#140e2b] border border-purple-900/60 p-1.5 flex flex-col">
              <span className="text-[8px] font-arcade text-arcade-cyan">{spec.label}</span>
              <span className="text-[10px] font-mono text-white font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Associated Missions / Projects */}
      <div className="border-t border-purple-900/50 pt-2 flex flex-wrap items-center gap-1.5">
        <span className="text-[8px] font-arcade text-purple-300/70 mr-1 uppercase">
          MISIONES APLICADAS:
        </span>
        {module.missions.map((m, mIdx) => (
          <span
            key={mIdx}
            className="bg-[#1f143d] border border-pink-500/40 text-pink-200 text-[8px] sm:text-[9px] font-mono font-bold px-2 py-0.5"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};
