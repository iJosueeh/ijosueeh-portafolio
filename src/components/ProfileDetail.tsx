import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { PROFILE_CHAPTERS } from '../data/pilot';
import { NeoPixelCard, ScreenBreadcrumb, NeoPixelButton } from './ui';
import type { ProfileChapter } from '../types';

export const ProfileDetail: React.FC = () => {
  const chapters: ProfileChapter[] = PROFILE_CHAPTERS;
  const [activeTab, setActiveTab] = useState<number>(0);
  const { play } = useRetroAudio();

  const currentChapter = chapters[activeTab] || chapters[0];

  const handleNext = () => {
    play('select');
    setActiveTab((prev) => (prev + 1) % chapters.length);
  };

  const handlePrev = () => {
    play('select');
    setActiveTab((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  // Keyboard navigation
  useKeyboardNav({
    onNumberKey: (index) => {
      if (index >= 0 && index < chapters.length) {
        play('select');
        setActiveTab(index);
      }
    },
    onNext: handleNext,
    onPrev: handlePrev,
    onEnter: handleNext,
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
  });

  return (
    <main
      className="w-full max-w-4xl lg:max-w-5xl mx-auto my-auto z-10 flex flex-col items-center justify-center py-2 sm:py-3 select-none"
      data-purpose="profile-screen"
    >
      {/* 1. Top Breadcrumb & Status */}
      <ScreenBreadcrumb
        backHref="/modos"
        channelCode="CH-01 //"
        screenTitle="PERFIL DEL PILOTO"
      />

      {/* 2. Primary Neo-Pixel Sci-Fi Panel */}
      <NeoPixelCard
        className="p-4 sm:p-5 md:p-6 flex flex-col justify-between"
        data-purpose="pilot-log-panel"
      >
        {/* Header Strip & Chapter Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-purple-900/60 pb-2 mb-3.5 gap-2">
          {/* Chapter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {chapters.map((ch, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    play('select');
                    setActiveTab(idx);
                  }}
                  onMouseEnter={() => play('hover')}
                  className={`px-2.5 py-1 font-arcade text-[8px] sm:text-[9px] tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-arcade-magenta text-white shadow-[2px_2px_0px_#500724] font-bold border border-pink-300/60'
                      : 'bg-[#150f28] text-purple-300/70 hover:text-white border border-purple-900/60 hover:bg-[#1f153d]'
                  }`}
                  type="button"
                >
                  0{idx + 1} // {ch.title.split(' ')[0]}
                </button>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 bg-[#090615] border border-emerald-500/80 px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse"></span>
            <span className="font-arcade text-[8px] sm:text-[9px] text-emerald-400 tracking-wider uppercase">
              STATUS // DISPONIBLE
            </span>
          </div>
        </div>

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center mb-3">
          {/* Left Column: Pilot ID Mini Portrait & Quick Stats */}
          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-[170px] sm:max-w-[190px] md:max-w-[210px] relative bg-arcade-panel/90 border-2 border-purple-900/70 p-2 shadow-[4px_4px_0px_#000000]">
              {/* Badge: TRIPULANTE */}
              <div className="absolute -top-2.5 left-2 z-20 bg-gradient-to-r from-arcade-magenta to-pink-500 text-white font-arcade text-[8px] px-2 py-0.5 tracking-wider uppercase font-bold border border-purple-950 shadow-[2px_2px_0px_#000000]">
                PILOTO 01
              </div>

              {/* Portrait Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0618] border border-purple-800/40">
                <img
                  alt="Josué - Ingeniero de Software"
                  className="w-full h-full object-cover pixel-sharp transition-transform duration-300 hover:scale-105"
                  src="/hero-imagen.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0618] via-transparent to-transparent opacity-40 pointer-events-none"></div>
              </div>

              {/* Pilot Meta */}
              <div className="mt-1.5 flex flex-col space-y-0.5 px-0.5">
                <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-arcade">
                  <span className="text-white">IJOSUEEH</span>
                  <span className="text-arcade-cyan font-mono font-bold">LVL.MAX</span>
                </div>
                <div className="text-[8px] font-mono text-purple-300/70 tracking-wider">
                  INGENIERO FULL-STACK
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Chapter Details */}
          <div className="md:col-span-8 flex flex-col justify-between space-y-3">
            {/* Title & Badge */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-arcade text-[9px] sm:text-[10px] text-arcade-cyan tracking-wider bg-cyan-950/30 px-2 py-0.5 border border-cyan-500/40 uppercase">
                  {currentChapter.code} // {currentChapter.badge}
                </span>
              </div>
              <h1 className="font-arcade text-lg sm:text-xl md:text-2xl text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
                {currentChapter.title}
              </h1>
              <div className="h-0.5 w-16 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-1"></div>
            </div>

            {/* Chapter Main Paragraph */}
            <p className="text-[11px] sm:text-xs font-mono text-purple-100/90 leading-relaxed pl-2.5 border-l-2 border-arcade-magenta/60">
              {currentChapter.description}
            </p>

            {/* Bullets (Chapters 1 & 2) */}
            {currentChapter.bullets && (
              <div className="space-y-1.5 bg-[#0e0920]/80 p-2.5 border border-purple-900/50">
                {currentChapter.bullets.map((b, idx) => (
                  <div key={idx} className="text-[10px] sm:text-[11px] font-mono flex items-start gap-1.5">
                    <span className="text-arcade-pink font-bold font-arcade text-[8px] shrink-0 mt-0.5">▶</span>
                    <span className="text-purple-200/90">
                      <strong className="text-pink-300 font-semibold">{b.label}:</strong> {b.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Telemetry Stats Bars (Chapter 3) */}
            {currentChapter.stats && (
              <div className="space-y-2 bg-[#0e0920]/80 p-2.5 border border-purple-900/50">
                {currentChapter.stats.map((s, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between text-[9px] font-mono tracking-wider">
                      <span className="text-purple-200 font-semibold">{s.label}</span>
                      <span className="text-pink-300 font-bold font-arcade text-[8px]">{s.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#070410] border border-purple-900/80 p-0.5">
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: `${s.value}%`,
                          backgroundColor: s.color,
                          boxShadow: `0 0 6px ${s.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-[8px] font-arcade text-purple-300/70 mr-1 uppercase">TAGS:</span>
              {currentChapter.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#170f2e] border border-purple-800/60 text-purple-200 text-[8px] sm:text-[9px] font-mono font-bold px-2 py-0.5 tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Step Indicator & Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-2.5 mt-1 gap-2.5">
          {/* Chapter Step Indicators */}
          <div className="flex items-center gap-2.5">
            <div className="font-arcade text-[9px] text-purple-300/70 tracking-wider">
              REGISTRO <span className="text-pink-300 font-bold">0{activeTab + 1}</span> / 0{chapters.length}
            </div>
            <div className="flex items-center gap-1.5">
              {chapters.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    play('select');
                    setActiveTab(idx);
                  }}
                  className={`w-2.5 h-2.5 transition-all cursor-pointer ${
                    idx === activeTab
                      ? 'bg-arcade-magenta shadow-[0_0_6px_#f43f85] scale-110'
                      : 'bg-[#1b1335] border border-purple-900 hover:bg-purple-800'
                  }`}
                  type="button"
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5">
            {currentChapter.actionHref && (
              <NeoPixelButton
                href={currentChapter.actionHref}
                variant="secondary"
                soundType="start"
                icon={<span>{currentChapter.actionIcon || '>'}</span>}
              >
                {currentChapter.actionLabel}
              </NeoPixelButton>
            )}

            <NeoPixelButton
              onClick={handleNext}
              variant="primary"
              soundType="select"
            >
              <span>{activeTab === chapters.length - 1 ? 'REINICIAR' : 'SIGUIENTE'} [ENTER]</span>
              <span className="font-bold">→</span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};

