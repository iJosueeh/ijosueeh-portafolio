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

  // Calculate 2D Rocket rotation angle based on flight direction
  const fromPlanet = stations[prevIdx] || stations[0];
  const toPlanet = stations[activeIdx] || stations[0];
  const deltaX = toPlanet.posX - fromPlanet.posX;
  const deltaY = toPlanet.posY - fromPlanet.posY;
  const flightAngle =
    deltaX !== 0 || deltaY !== 0
      ? Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90
      : 0;

  return (
    <div className="w-full h-[125px] sm:h-[145px] md:h-[160px] bg-[#070412]/95 border border-purple-900/70 relative overflow-hidden mb-1.5">
      {/* Spatial Holographic Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Coordinate Marks */}
      <div className="absolute top-1 left-2 text-[8px] font-mono text-purple-400/60">
        [ SECTOR 04 // GALAXY COORD GRID ]
      </div>
      <div className="absolute top-1 right-2 text-[8px] font-arcade text-arcade-cyan">
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
          strokeWidth="0.35"
          opacity="0.8"
        />
      </svg>

      {/* 3 PLANETARY BODIES */}
      {stations.map((st, idx) => {
        const isActive = activeIdx === idx;
        return (
          <button
            key={st.id}
            onClick={() => onSelectStation(idx)}
            onMouseEnter={() => playRetroBeep('hover')}
            type="button"
            className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer z-10 ${
              isActive
                ? 'scale-110 z-20'
                : 'opacity-75 hover:opacity-100 hover:scale-105'
            }`}
            style={{
              left: `${st.posX}%`,
              top: `${st.posY}%`,
            }}
          >
            {/* Planetary Artwork Miniature */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {isActive && (
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-40"
                  style={{ backgroundColor: st.color }}
                />
              )}

              {st.illustration === 'genesis-planet' && (
                <svg
                  className="w-full h-full pixel-sharp"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="14"
                    fill="#201138"
                    stroke="#d8b4fe"
                    strokeWidth="2"
                  />
                  <circle cx="28" cy="26" r="3" fill="#9333ea" />
                  <circle cx="38" cy="38" r="2.5" fill="#9333ea" />
                  <circle cx="24" cy="36" r="2" fill="#d8b4fe" />
                  <circle
                    cx="32"
                    cy="32"
                    r="13"
                    stroke="#c084fc"
                    strokeDasharray="3 3"
                  />
                </svg>
              )}

              {st.illustration === 'orbital-station' && (
                <svg
                  className="w-full h-full pixel-sharp"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="12"
                    fill="#0d1f38"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <rect x="25" y="25" width="14" height="14" fill="#0369a1" />
                  <line
                    x1="10"
                    y1="32"
                    x2="54"
                    y2="32"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <rect
                    x="12"
                    y="28"
                    width="6"
                    height="8"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <rect
                    x="46"
                    y="28"
                    width="6"
                    height="8"
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <circle cx="32" cy="32" r="2.5" fill="#f472b6" />
                </svg>
              )}

              {st.illustration === 'gas-giant' && (
                <svg
                  className="w-full h-full pixel-sharp"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="15"
                    fill="#1b1035"
                    stroke="#f43f85"
                    strokeWidth="2"
                  />
                  <circle cx="32" cy="32" r="10" fill="#f43f85" opacity="0.8" />
                  <ellipse
                    cx="32"
                    cy="32"
                    rx="24"
                    ry="5"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    transform="rotate(-20 32 32)"
                  />
                  <circle cx="30" cy="28" r="2.5" fill="#fce7f3" />
                </svg>
              )}
            </div>

            {/* Planet Label Capsule */}
            <div
              className={`px-1.5 py-0.5 border text-center shadow-sm flex flex-col items-center ${
                isActive
                  ? 'bg-[#1b1038] border-pink-300 text-white shadow-[0_0_8px_rgba(244,63,133,0.6)]'
                  : 'bg-[#0e0920]/90 border-purple-900/60 text-purple-300/80'
              }`}
            >
              <span className="font-arcade text-[7px] sm:text-[8px] tracking-wider uppercase">
                {st.name}
              </span>
              <span
                className={`font-mono text-[7px] sm:text-[8px] font-bold ${
                  isActive ? 'text-pink-300' : 'text-purple-400/60'
                }`}
              >
                {st.period}
              </span>
            </div>
          </button>
        );
      })}

      {/* 2D ANIMATED PIXEL ROCKET */}
      <div
        className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center"
        style={{
          left: `${currentStation.posX}%`,
          top: `${currentStation.posY - 14}%`,
        }}
      >
        {/* Status Reticle */}
        <div className="bg-[#0b071e]/95 border border-pink-300 px-1 py-0.5 text-[6px] sm:text-[7px] font-arcade text-pink-200 uppercase mb-0.5 shadow-[0_0_8px_rgba(244,63,133,0.8)] flex items-center gap-1 whitespace-nowrap">
          <span className="w-1 h-1 bg-arcade-magenta rounded-full animate-ping"></span>
          <span>{isFlying ? 'SALTO...' : 'ACOPLADO'}</span>
        </div>

        {/* Spaceship with Dynamic Angle Rotation & Plasma Flame */}
        <div
          className="relative flex items-center justify-center transition-transform duration-500"
          style={{
            transform: isFlying ? `rotate(${flightAngle}deg)` : 'rotate(0deg)',
          }}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 pixel-sharp filter drop-shadow-[0_0_6px_#38bdf8]"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 2 L22 10 L22 22 L16 28 L10 22 L10 10 Z"
              fill="#1e1338"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <path d="M16 4 L20 11 L16 16 L12 11 Z" fill="#f43f85" />
            <circle
              cx="16"
              cy="12"
              r="2.5"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="0.5"
            />
            <path
              d="M10 16 L4 24 L10 22 Z"
              fill="#9333ea"
              stroke="#d8b4fe"
              strokeWidth="1"
            />
            <path
              d="M22 16 L28 24 L22 22 Z"
              fill="#9333ea"
              stroke="#d8b4fe"
              strokeWidth="1"
            />
            <rect
              x="13"
              y="27"
              width="6"
              height="3"
              fill="#070410"
              stroke="#f472b6"
              strokeWidth="1"
            />
          </svg>

          {/* Plasma Engine Flame */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-1.5 h-2.5 bg-gradient-to-b from-arcade-cyan via-arcade-magenta to-transparent animate-bounce opacity-90 rounded-full blur-[0.5px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
