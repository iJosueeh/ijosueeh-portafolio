import React from 'react';
import type { PlanetaryStation } from '../../types';

interface StationTelemetryPodsProps {
  station: PlanetaryStation;
}

export const StationTelemetryPods: React.FC<StationTelemetryPodsProps> = ({
  station,
}) => {
  return (
    <div className="w-full bg-[#090616]/95 border border-purple-900/80 p-2 sm:p-2.5 relative mb-1.5">
      {/* Top Reticle Bar: Active Station Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-purple-900/60 pb-1 mb-1.5 gap-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-arcade text-[7px] sm:text-[9px] text-arcade-cyan bg-cyan-950/50 px-1.5 sm:px-2 py-0.5 border border-cyan-800/50">
            {station.sectorNumber} // {station.period}
          </span>
          <span className="font-arcade text-[8px] sm:text-xs text-white uppercase tracking-wider font-bold">
            {station.role}
          </span>
        </div>
        <div className="text-[7px] sm:text-[9px] font-mono text-pink-300 font-bold">
          {station.environment}
        </div>
      </div>

      {/* 3 Tactical Pods: responsive flex-col on mobile, grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 sm:gap-2">
        {/* Pod 1: Bitácora de Expedición */}
        <div className="bg-[#120b29]/90 border border-purple-900/60 p-1.5 sm:p-2 flex flex-col justify-between">
          <div>
            <div className="text-[7px] sm:text-[8px] font-arcade text-arcade-cyan uppercase mb-0.5 sm:mb-1 flex items-center gap-1">
              <span>▶</span> BITÁCORA DE SECTOR
            </div>
            <p className="text-[9px] sm:text-[11px] font-mono text-purple-100/90 leading-relaxed">
              {station.description}
            </p>
          </div>
          <div className="text-[7px] sm:text-[8px] font-mono text-purple-400/60 mt-1 pt-0.5 border-t border-purple-900/40">
            {station.planetType}
          </div>
        </div>

        {/* Pod 2: Logros de Impacto Técnico */}
        <div className="bg-[#120b29]/90 border border-purple-900/60 p-1.5 sm:p-2 flex flex-col justify-between">
          <div>
            <div className="text-[7px] sm:text-[8px] font-arcade text-pink-300 uppercase mb-0.5 sm:mb-1 flex items-center gap-1">
              <span>✦</span> LOGROS EN PRODUCCIÓN
            </div>
            <div className="space-y-0.5 text-[9px] sm:text-[11px] font-mono text-purple-100/90">
              {station.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-1 leading-tight">
                  <span className="text-arcade-magenta text-[7px] sm:text-[8px] mt-0.5">▪</span>
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[7px] sm:text-[8px] font-mono text-emerald-400 mt-1 pt-0.5 border-t border-purple-900/40 font-bold">
            ESTADO: VERIFICADO & COMPLETADO
          </div>
        </div>

        {/* Pod 3: Módulos & Propulsión Stack */}
        <div className="bg-[#120b29]/90 border border-purple-900/60 p-1.5 sm:p-2 flex flex-col justify-between">
          <div>
            <div className="text-[7px] sm:text-[8px] font-arcade text-arcade-lavender uppercase mb-0.5 sm:mb-1 flex items-center gap-1">
              <span>⚙</span> MÓDULOS & STACK
            </div>
            <div className="flex flex-wrap gap-1">
              {station.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[#1c133a] border border-purple-800/70 text-purple-200 text-[7px] sm:text-[9px] font-mono font-bold px-1 sm:px-1.5 py-0.5 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="text-[7px] sm:text-[8px] font-mono text-arcade-cyan mt-1 pt-0.5 border-t border-purple-900/40">
            {station.coordinates}
          </div>
        </div>
      </div>
    </div>
  );
};
