import React from 'react';
import type { Mission } from '../../types';

interface MissionArtworkProps {
  type: Mission['type'];
  className?: string;
}

export const MissionArtwork: React.FC<MissionArtworkProps> = ({
  type,
  className = 'w-full max-w-sm h-22 sm:h-26 pixel-sharp',
}) => {
  switch (type) {
    case 'web':
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="20" y2="20" />
          {/* Browser Window Frame */}
          <rect fill="#1B1333" height="60" stroke="#38BDF8" strokeWidth="1" width="130" x="15" y="15" />
          {/* Browser Top Bar */}
          <rect fill="#130E28" height="10" width="130" x="15" y="15" />
          <circle cx="22" cy="20" fill="#F43F85" r="2" />
          <circle cx="28" cy="20" fill="#FBBF24" r="2" />
          <circle cx="34" cy="20" fill="#10B981" r="2" />
          {/* Search URL Bar */}
          <rect fill="#070410" height="6" width="60" x="42" y="17" />
          {/* Content Blocks */}
          <rect fill="#2E1C59" height="16" width="30" x="22" y="32" />
          <rect fill="#38BDF8" height="6" width="65" x="58" y="32" />
          <rect fill="#F472B6" height="4" width="50" x="58" y="42" />
          <rect fill="#1B1335" height="12" width="116" x="22" y="55" />
          <rect fill="#38BDF8" height="4" width="20" x="26" y="59" />
          <rect fill="#F43F85" height="4" width="20" x="50" y="59" />
          <rect fill="#FBBF24" height="4" width="20" x="74" y="59" />
        </svg>
      );

    case 'mobile':
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          {/* Mobile Phone Body */}
          <rect fill="#1A1236" height="74" rx="4" stroke="#F43F85" strokeWidth="1" width="46" x="57" y="8" />
          {/* Screen */}
          <rect fill="#080415" height="58" width="40" x="60" y="16" />
          {/* Speaker notch & button */}
          <rect fill="#F43F85" height="2" width="10" x="75" y="11" />
          <circle cx="80" cy="78" fill="#38BDF8" r="2" />
          {/* Map & Route Pin Graphic on Phone Screen */}
          <path d="M 66 30 Q 75 40, 85 32 T 94 48" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="75" cy="36" fill="#F43F85" r="3" />
          <circle cx="75" cy="36" fill="#FFFFFF" r="1" />
          <rect fill="#2A1B4E" height="10" width="34" x="63" y="58" />
          <rect fill="#FBBF24" height="3" width="14" x="66" y="62" />
          {/* Side Orbit Satellites */}
          <circle cx="28" cy="45" fill="#38BDF8" r="2" opacity="0.7" />
          <line stroke="#38BDF8" strokeDasharray="2 2" strokeWidth="0.5" x1="32" x2="55" y1="45" y2="45" />
          <circle cx="132" cy="45" fill="#F472B6" r="2" opacity="0.7" />
          <line stroke="#F472B6" strokeDasharray="2 2" strokeWidth="0.5" x1="128" x2="105" y1="45" y2="45" />
        </svg>
      );

    case 'data':
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          {/* Data Grid Radar Background */}
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="25" y2="25" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="50" y2="50" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="75" y2="75" />
          <line stroke="#231842" strokeWidth="1" x1="40" x2="40" y1="0" y2="90" />
          <line stroke="#231842" strokeWidth="1" x1="80" x2="80" y1="0" y2="90" />
          <line stroke="#231842" strokeWidth="1" x1="120" x2="120" y1="0" y2="90" />
          {/* Risk Alert Telemetry Wave */}
          <path
            d="M 10 65 L 40 60 L 65 40 L 90 68 L 115 25 L 140 35 L 155 20"
            fill="none"
            stroke="#F43F85"
            strokeWidth="2"
          />
          {/* Data Peak Nodes */}
          <circle cx="65" cy="40" fill="#38BDF8" r="3" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="115" cy="25" fill="#FBBF24" r="4" stroke="#F43F85" strokeWidth="1" />
          {/* Warning Beacon Badge */}
          <polygon points="115,12 119,20 111,20" fill="#FBBF24" />
          {/* Ground Sensor Track */}
          <rect fill="#1B1333" height="8" width="140" x="10" y="76" />
          <rect fill="#10B981" height="4" width="25" x="20" y="78" />
          <rect fill="#FBBF24" height="4" width="35" x="55" y="78" />
          <rect fill="#F43F85" height="4" width="45" x="95" y="78" />
        </svg>
      );

    case 'ecommerce':
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="20" y2="20" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="40" y2="40" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="60" y2="60" />
          <rect fill="#1B1333" height="14" stroke="#F43F85" strokeWidth="1" width="50" x="95" y="8" />
          <rect fill="#38BDF8" height="4" width="4" x="100" y="13" />
          <rect fill="#38BDF8" height="4" width="4" x="106" y="13" />
          <rect fill="#F472B6" height="6" width="18" x="120" y="12" />
          <rect fill="#2E1C59" height="6" width="140" x="10" y="46" />
          <rect fill="#150E28" height="26" width="140" x="10" y="52" />
          <rect fill="#1E293B" height="14" stroke="#38BDF8" strokeWidth="1" width="22" x="25" y="32" />
          <rect fill="#070410" height="8" width="16" x="28" y="35" />
          <rect fill="#38BDF8" height="2" width="5" x="30" y="37" />
          <rect fill="#F43F85" height="1" width="9" x="30" y="40" />
          <rect fill="#9333EA" height="18" stroke="#581C87" strokeWidth="1" width="22" x="62" y="34" />
          <rect fill="#F472B6" height="18" width="4" x="71" y="34" />
          <rect fill="#F472B6" height="3" width="22" x="62" y="41" />
          <rect fill="#1F163D" height="16" stroke="#4C1D95" strokeWidth="1" width="36" x="98" y="36" />
          <rect fill="#38BDF8" height="8" width="8" x="102" y="40" />
          <rect fill="#F43F85" height="8" width="8" x="114" y="40" />
          <rect fill="#0A0614" height="12" width="160" x="0" y="78" />
        </svg>
      );

    case 'delivery':
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          <circle cx="20" cy="15" fill="#F472B6" r="1" />
          <circle cx="80" cy="10" fill="#38BDF8" r="1.5" />
          <circle cx="140" cy="25" fill="#D8B4FE" r="1" />
          <rect fill="#1E163B" height="16" stroke="#38BDF8" strokeWidth="1" width="38" x="61" y="26" />
          <rect fill="#38BDF8" height="4" width="10" x="75" y="32" />
          <rect fill="#F43F85" height="6" width="16" x="72" y="46" />
          <rect fill="#38BDF8" height="4" width="4" x="64" y="44" />
          <rect fill="#38BDF8" height="4" width="4" x="92" y="44" />
          <rect fill="#160F2D" height="25" width="25" x="15" y="55" />
          <rect fill="#160F2D" height="35" width="30" x="45" y="45" />
          <rect fill="#160F2D" height="28" width="35" x="115" y="52" />
          <rect fill="#070410" height="10" width="160" x="0" y="80" />
        </svg>
      );

    case 'ai':
    default:
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 160 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#0C0819" height="90" width="160" x="0" y="0" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="30" y2="30" />
          <line stroke="#231842" strokeWidth="1" x1="0" x2="160" y1="60" y2="60" />
          <circle cx="80" cy="45" fill="#1B1333" r="22" stroke="#F43F85" strokeWidth="1.5" />
          <circle cx="80" cy="45" fill="#0A0614" r="14" stroke="#38BDF8" strokeWidth="1" />
          <rect fill="#F472B6" height="6" width="6" x="77" y="42" />
          <line stroke="#38BDF8" strokeWidth="1" x1="45" x2="60" y1="25" y2="35" />
          <line stroke="#F43F85" strokeWidth="1" x1="115" x2="100" y1="25" y2="35" />
          <rect fill="#38BDF8" height="6" width="6" x="40" y="22" />
          <rect fill="#F43F85" height="6" width="6" x="114" y="22" />
        </svg>
      );
  }
};
