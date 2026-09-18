import React from 'react';

export interface NeoPixelCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: 'section' | 'div' | 'article' | 'main';
  className?: string;
  hasViewTransition?: boolean;
  viewTransitionName?: string;
  variant?: 'default' | 'primary' | 'ghost';
  glowOnHover?: boolean;
}

export const NeoPixelCard: React.FC<NeoPixelCardProps> = ({
  children,
  as: Component = 'section',
  className = '',
  hasViewTransition = true,
  viewTransitionName,
  variant = 'default',
  glowOnHover = false,
  style,
  ...rest
}) => {
  // Determine transition name: explicit undefined/string takes precedence, otherwise fallback to hasViewTransition boolean
  const resolvedTransitionName =
    viewTransitionName !== undefined
      ? viewTransitionName || undefined
      : hasViewTransition
      ? 'neo-scifi-main-card'
      : undefined;

  const combinedStyle: React.CSSProperties = {
    ...(resolvedTransitionName ? { viewTransitionName: resolvedTransitionName } : {}),
    ...style,
  };

  return (
    <Component
      className={`relative w-full neo-scifi-panel p-3.5 sm:p-5 md:p-6 ${
        glowOnHover ? 'hover:border-purple-500/80 transition-colors' : ''
      } ${className}`}
      style={combinedStyle}
      {...rest}
    >
      {/* 4-Corner Geometric Stepped Pixel Markers */}
      <div
        aria-hidden="true"
        className="absolute -top-[2px] -left-[2px] w-3.5 h-3.5 border-t-2 border-l-2 border-arcade-magenta select-none pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-[2px] -right-[2px] w-3.5 h-3.5 border-t-2 border-r-2 border-arcade-cyan select-none pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[2px] -left-[2px] w-3.5 h-3.5 border-b-2 border-l-2 border-purple-500 select-none pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[2px] -right-[2px] w-3.5 h-3.5 border-b-2 border-r-2 border-arcade-pink select-none pointer-events-none"
      />

      {children}
    </Component>
  );
};
