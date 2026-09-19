import React from 'react';
import type { PlanetaryStation } from '../../types';
import { playRetroBeep } from '../../utils/audio';

interface GalaxyRadarMapProps {
  stations: PlanetaryStation[];
  activeIdx: number;
  prevIdx: number;
  isFlying: boolean;
  onSelectStation: (idx: number) => void;
}

export const GalaxyRadarMap: React.FC<GalaxyRadarMapProps> = ({
  stations,
  activeIdx,
  prevIdx,
  isFlying,
  onSelectStation,
}) => {
  const currentStation = stations[activeIdx] || stations[0];

  const fromPlanet = stations[prevIdx] || stations[0];
  const toPlanet = stations[activeIdx] || stations[0];
  const deltaX = toPlanet.posX - fromPlanet.posX;
  const deltaY = toPlanet.posY - fromPlanet.posY;
  const flightAngle =
    deltaX !== 0 || deltaY !== 0
      ? Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90
      : 0;

  return (
    <div className="w-full h-[105px] sm:h-[130px] md:h-[155px] bg-[#070412]/95 border border-purple-900/70 relative overflow-hidden mb-1.5">
      {/* Spatial Holographic Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Coordinate Marks */}
      <div className="absolute top-1 left-2 text-[7px] sm:text-[8px] font-mono text-purple-400/60">
        [ SECTOR 04 // GALAXY COORD GRID ]
      </div>
      <div className="absolute top-1 right-2 text-[7px] sm:text-[8px] font-arcade text-arcade-cyan">
        {currentStation.status}
      </div>

      {/* Curved Hyperspace Flight Trajectory */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 18 55 Q 34 16 50 25 Q 66 32 82 55"
          fill="none"
          stroke="#a855f7"
          strokeDasharray="1.5 1.5"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <path
          d="M 18 55 Q 34 16 50 25 Q 66 32 82 55"
          fill="none"
          stroke="#f43f85"
          strokeWidth="0.3"
          opacity="0.4"
        />
      </svg>

      {/* 3 Interactive Planetary Orbit Stations */}
      {stations.map((st, idx) => {
        const isSelected = activeIdx === idx;
        return (
          <button
            key={st.id}
            onClick={() => onSelectStation(idx)}
            onMouseEnter={() => playRetroBeep('hover')}
            type="button"
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer group"
            style={{ left: `${st.posX}%`, top: `${st.posY}%` }}
          >
            {/* Target Reticle & Orbit Rings */}
            <div className="relative flex items-center justify-center">
              {isSelected && (
                <>
                  <div
                    className="absolute -inset-2.5 rounded-full border border-arcade-magenta animate-ping opacity-60"
                    style={{ borderColor: st.color }}
                  />
                  <div
                    className="absolute -inset-4 rounded-full border border-dashed border-arcade-cyan animate-spin opacity-50"
                    style={{ animationDuration: '8s' }}
                  />
                </>
              )}

              {/* Planet Pixel Core Artwork */}
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'scale-115 shadow-[0_0_15px_rgba(244,63,133,0.6)]'
                    : 'scale-90 opacity-70 group-hover:opacity-100 group-hover:scale-100'
                }`}
                style={{ backgroundColor: `${st.color}22`, border: `2px solid ${st.color}` }}
              >
                {st.illustration === 'genesis-planet' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 pixel-sharp" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" fill="#38bdf8" />
                    <circle cx="6" cy="6" r="2" fill="#0284c7" />
                    <circle cx="10" cy="9" r="1.5" fill="#0284c7" />
                    <ellipse cx="8" cy="8" rx="7" ry="2" stroke="#ffffff" strokeWidth="0.75" />
                  </svg>
                )}

                {st.illustration === 'orbital-station' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 pixel-sharp" viewBox="0 0 16 16" fill="none">
                    <rect x="5" y="5" width="6" height="6" fill="#f43f85" />
                    <rect x="7" y="2" width="2" height="12" fill="#f59e0b" />
                    <rect x="2" y="7" width="12" height="2" fill="#f59e0b" />
                    <circle cx="8" cy="8" r="1.5" fill="#ffffff" />
                  </svg>
                )}

                {st.illustration === 'gas-giant' && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 pixel-sharp" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" fill="#9333ea" />
                    <ellipse cx="8" cy="8" rx="8" ry="3" stroke="#f472b6" strokeWidth="0.8" transform="rotate(-20 8 8)" />
                    <path d="M 3 8 Q 8 6 13 8" stroke="#d8b4fe" strokeWidth="0.6" fill="none" />
                  </svg>
                )}
              </div>

              {/* Station Callsign Tag */}
              <div
                className={`absolute -bottom-4 whitespace-nowrap text-[7px] sm:text-[8px] font-arcade px-1 py-0.5 border ${
                  isSelected
                    ? 'bg-arcade-magenta text-white border-pink-300 font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-[#090514]/90 text-purple-300/80 border-purple-900/60'
                }`}
              >
                {st.name}
              </div>
            </div>
          </button>
        );
      })}

      {/* Animated 2D Hyperspace Rocket */}
      <div
        className={`absolute z-30 pointer-events-none transition-all duration-700 ease-out flex items-center justify-center ${
          isFlying ? 'scale-120' : 'scale-100'
        }`}
        style={{
          left: `${currentStation.posX}%`,
          top: `${currentStation.posY - 12}%`,
          transform: `translate(-50%, -50%) rotate(${flightAngle}deg)`,
        }}
      >
        <div className="relative">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 pixel-sharp drop-shadow-[0_0_8px_#f43f85]" viewBox="0 0 16 16" fill="none">
            <path d="M8 1 L11 7 L11 13 L8 15 L5 13 L5 7 Z" fill="#ffffff" />
            <path d="M7 3 H9 V7 H7 Z" fill="#f43f85" />
            <path d="M5 9 L2 12 L5 13 Z" fill="#38bdf8" />
            <path d="M11 9 L14 12 L11 13 Z" fill="#38bdf8" />
            <circle cx="8" cy="8" r="1.5" fill="#070410" />
          </svg>
        </div>
      </div>
    </div>
  );
};
