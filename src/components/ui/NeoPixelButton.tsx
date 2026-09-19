import React from 'react';
import { playRetroBeep, type SoundType } from '../../utils/audio';
import { navigateTo } from '../../utils/navigation';

export interface NeoPixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'arcade';
  soundType?: SoundType;
  soundEffect?: SoundType;
  as?: 'button' | 'a';
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const NeoPixelButton: React.FC<NeoPixelButtonProps> = ({
  variant = 'primary',
  soundType,
  soundEffect = 'start',
  as,
  href,
  icon,
  children,
  className = '',
  onClick,
  onMouseEnter,
  target,
  rel,
  ...rest
}) => {
  const effectiveSound = soundType || soundEffect;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
    playRetroBeep('hover');
    onMouseEnter?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
    playRetroBeep(effectiveSound);
    if (href && !href.startsWith('http') && !target) {
      e.preventDefault();
      navigateTo(href);
    }
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-arcade-magenta to-[#e11d48] hover:from-[#f43f85] hover:to-[#fb7185] text-white font-arcade text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-pink-300/80 shadow-[3px_3px_0px_#500724]',
    secondary:
      'bg-[#1b1335] hover:bg-[#251a4a] text-purple-200 hover:text-white font-mono text-xs border border-purple-900/80 hover:border-arcade-cyan',
    accent:
      'bg-gradient-to-r from-arcade-cyan to-[#0284c7] hover:from-[#38bdf8] hover:to-[#38bdf8] text-slate-950 font-arcade text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-cyan-200 shadow-[3px_3px_0px_#082f49]',
    ghost:
      'bg-transparent hover:bg-purple-950/40 text-purple-200 hover:text-white font-mono text-xs border border-transparent hover:border-purple-800',
    arcade:
      'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-arcade text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-amber-200 shadow-[3px_3px_0px_#78350f]',
  };

  const baseStyles =
    'neo-pixel-btn py-2 px-4 inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none';

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href || as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClass}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
