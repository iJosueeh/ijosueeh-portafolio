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
        className="text-purple-300 hover:text-arcade-pink flex items-center gap-1.5 transition-colors cursor-pointer bg-[#130e24]/80 px-2.5 py-1 border border-purple-900/60"
      >
        <span className="font-arcade text-[9px]">&lt;</span> {backLabel}
      </a>

      {/* Screen Title / Status Pill */}
      <div className="flex items-center space-x-2 text-purple-200/60">
        {code && (
          <span className="font-arcade text-pink-300 text-[9px]">
            {code}
          </span>
        )}
        {title && (
          <span className="font-arcade text-arcade-cyan text-[9px] bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 uppercase">
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
