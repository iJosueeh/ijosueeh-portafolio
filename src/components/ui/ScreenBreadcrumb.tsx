import React from 'react';
import { playRetroBeep } from '../../utils/audio';

export interface ScreenBreadcrumbProps {
  backHref?: string;
  backLabel?: string;
  channelCode?: string;
  chapterLabel?: string;
  screenTitle?: string;
  statusLabel?: string;
  slotInfo?: string;
  maxWidthClass?: string;
}

export const ScreenBreadcrumb: React.FC<ScreenBreadcrumbProps> = ({
  backHref = '/modos',
  backLabel = 'VOLVER A MÓDULOS',
  channelCode,
  chapterLabel,
  screenTitle,
  statusLabel,
  slotInfo,
  maxWidthClass = 'w-full',
}) => {
  const code = channelCode || chapterLabel;
  const title = screenTitle || statusLabel || '';

  return (
    <div
      className={`${maxWidthClass} flex items-center justify-between mb-1.5 sm:mb-2 px-1 text-[10px] sm:text-xs font-mono select-none`}
    >
      {/* Back Link */}
      <a
        href={backHref}
        onClick={() => playRetroBeep('select')}
        onMouseEnter={() => playRetroBeep('hover')}
        className="text-purple-300 hover:text-arcade-pink flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer bg-[#130e24]/80 px-2 sm:px-2.5 py-1 border border-purple-900/60 text-[9px] sm:text-xs"
      >
        <span className="font-arcade text-[8px] sm:text-[9px]">&lt;</span>
        <span className="hidden sm:inline">{backLabel}</span>
        <span className="sm:hidden">{backLabel.startsWith('VOLVER A ') ? backLabel.replace('VOLVER A ', '') : backLabel}</span>
      </a>

      {/* Screen Title / Status Pill */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 text-purple-200/60">
        {code && (
          <span className="font-arcade text-pink-300 text-[8px] sm:text-[9px]">
            {code}
          </span>
        )}
        {title && (
          <span className="font-arcade text-arcade-cyan text-[7.5px] sm:text-[9px] bg-cyan-950/40 px-1.5 sm:px-2 py-0.5 border border-cyan-800/40 uppercase truncate max-w-[150px] sm:max-w-none">
            {title}
          </span>
        )}
        {slotInfo && (
          <span className="hidden sm:inline-block font-mono text-[9px] text-purple-300/70">
            {slotInfo}
          </span>
        )}
      </div>
    </div>
  );
};
