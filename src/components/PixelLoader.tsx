import React, { useEffect, useState } from 'react';
import { playRetroBeep } from '../utils/audio';

interface PixelLoaderProps {
  onComplete?: () => void;
}

export const PixelLoader: React.FC<PixelLoaderProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
    // Check if user already saw the intro loading in this session
    const hasLoaded = sessionStorage.getItem('arcade_has_loaded');
    if (hasLoaded) {
      setShowLoader(false);
      if (onComplete) onComplete();
      return;
    }

    const totalDuration = 2000;
    const intervalTime = 50;
    const totalSteps = totalDuration / intervalTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      const nextProgress = Math.min(Math.round((stepCount / totalSteps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        sessionStorage.setItem('arcade_has_loaded', 'true');
        setTimeout(() => {
          playRetroBeep('start');
          setFadeOut(true);
          setTimeout(() => {
            setShowLoader(false);
            if (onComplete) onComplete();
          }, 450);
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!mounted || !showLoader) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070410] text-slate-100 p-4 select-none transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle CRT Overlay */}
      <div aria-hidden="true" className="fixed inset-0 crt-overlay pointer-events-none"></div>

      {/* Floating Space Loading Card */}
      <div className="flex flex-col items-center justify-center space-y-6 max-w-xs w-full">
        {/* Animated Rocket & Thruster Scene */}
        <div aria-hidden="true" className="relative flex flex-col items-center">
          <div className="text-4xl sm:text-5xl animate-bounce duration-700 select-none filter drop-shadow-[0_0_15px_rgba(244,63,133,0.6)]">
            🚀
          </div>

          <div className="flex flex-col items-center -mt-1 space-y-1">
            <div className="w-3 h-2 bg-gradient-to-b from-arcade-magenta to-arcade-pink animate-pulse"></div>
            <div className="w-1.5 h-2 bg-arcade-cyan animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Accessible Progress Container */}
        <div
          className="w-full space-y-2 text-center"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Inicializando sistemas de tripulación"
        >
          <div className="w-full bg-[#130e24] border border-purple-900/60 p-1 flex gap-1 shadow-[2px_2px_0px_#000]">
            {Array.from({ length: 14 }).map((_, index) => {
              const blockProgress = (index + 1) * 7.14;
              const filled = progress >= blockProgress;
              return (
                <div
                  key={index}
                  className={`h-2.5 flex-1 transition-colors duration-100 ${
                    filled
                      ? 'bg-gradient-to-r from-arcade-magenta to-pink-400 shadow-[0_0_6px_#f43f85]'
                      : 'bg-[#1e1538]'
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between px-1 text-[10px] font-mono text-purple-200/60">
            <span>INICIALIZANDO MISIÓN</span>
            <span className="font-arcade text-pink-300 text-[9px]">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
