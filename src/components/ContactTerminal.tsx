import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { CONTACT_CONFIG } from '../data/contact';
import { ScreenBreadcrumb, NeoPixelCard, NeoPixelButton } from './ui';
import { RadioOscilloscope } from './contact/RadioOscilloscope';
import { ContactFrequencyList } from './contact/ContactFrequencyList';
import { SubSpaceForm } from './contact/SubSpaceForm';

export const ContactTerminal: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sentStatus, setSentStatus] = useState(false);
  const { play } = useRetroAudio();

  const emailAddress = CONTACT_CONFIG.email;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    play('coin');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendTransmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    play('start');
    setSentStatus(true);

    const subject = encodeURIComponent(`[MISIÓN] Contacto de ${formData.name}`);
    const body = encodeURIComponent(
      `Remitente: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setSentStatus(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  useKeyboardNav({
    onEscape: () => {
      play('select');
      navigateTo('/modos');
    },
  });

  return (
    <main
      className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center py-1 px-1 sm:px-2"
      data-purpose="contact-terminal-screen"
    >
      {/* Top Breadcrumb & Status */}
      <ScreenBreadcrumb
        backHref="/modos"
        backLabel="VOLVER A MÓDULOS"
        chapterLabel="CH-06 //"
        statusLabel="CANAL DE COMUNICACIÓN"
      />

      {/* Main Neo-Pixel Sci-Fi Comm Console */}
      <NeoPixelCard className="p-2.5 sm:p-4 md:p-5">
        {/* 2-Column Sub-Space Terminal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-stretch mb-1.5">
          {/* Left Column: Radio Oscilloscope & Direct Frequencies (5 cols) */}
          <div className="md:col-span-5 bg-[#080515]/95 border border-purple-900/70 p-2 sm:p-2.5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-1">
                <span className="font-arcade text-[7px] sm:text-[9px] text-pink-300">
                  ESTACIÓN // RADIO CUÁNTICA
                </span>
                <div className="flex items-center gap-1 bg-[#05030d] px-1.5 py-0.5 border border-emerald-500/60">
                  <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
                  <span className="font-arcade text-[6px] sm:text-[7px] text-emerald-400">ONLINE</span>
                </div>
              </div>

              {/* Oscilloscope Waveform Visualizer */}
              <RadioOscilloscope />

              {/* 4 Direct Frequency Channel Buttons (Includes CV download) */}
              <ContactFrequencyList
                copiedEmail={copiedEmail}
                onCopyEmail={handleCopyEmail}
                onHoverSound={() => play('hover')}
              />
            </div>
          </div>

          {/* Right Column: Quantum Transmission Dispatcher (7 cols) */}
          <SubSpaceForm
            formData={formData}
            sentStatus={sentStatus}
            onInputChange={handleInputChange}
            onSubmit={handleSendTransmission}
            onHoverSound={() => play('hover')}
          />
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-purple-900/60 pt-1.5 gap-2">
          {/* Quick Hub Navigation */}
          <div className="flex items-center space-x-2 text-[7px] sm:text-[8px] font-mono text-purple-300/70 w-full sm:w-auto justify-between sm:justify-start">
            <span>TERMINAL FINAL</span>
            <span className="text-arcade-cyan">//</span>
            <span className="text-pink-300">TODOS LOS MÓDULOS ACTIVOS</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <NeoPixelButton
              as="a"
              href="/modos"
              variant="secondary"
              soundEffect="select"
              className="flex-1 sm:flex-initial text-[8px] sm:text-xs py-1.5 sm:py-2"
            >
              VOLVER A MÓDULOS [ESC]
            </NeoPixelButton>

            <NeoPixelButton
              as="a"
              href="/"
              variant="accent"
              soundEffect="start"
              className="flex-1 sm:flex-initial text-[8px] sm:text-xs py-1.5 sm:py-2"
            >
              <span>🚀</span>
              <span>TRIPULANTE</span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};
