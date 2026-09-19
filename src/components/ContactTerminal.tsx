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
      className="w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center py-1"
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
      <NeoPixelCard>
        {/* 2-Column Sub-Space Terminal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch mb-1.5">
          {/* Left Column: Radio Oscilloscope & Direct Frequencies (5 cols) */}
          <div className="md:col-span-5 bg-[#080515]/95 border border-purple-900/70 p-2.5 sm:p-3 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-1.5">
                <span className="font-arcade text-[8px] sm:text-[9px] text-pink-300">
                  ESTACIÓN // RADIO CUÁNTICA
                </span>
                <div className="flex items-center gap-1 bg-[#05030d] px-2 py-0.5 border border-emerald-500/60">
                  <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
                  <span className="font-arcade text-[7px] text-emerald-400">ONLINE</span>
                </div>
              </div>

              {/* Oscilloscope Waveform Visualizer */}
              <RadioOscilloscope />

              {/* 4 Direct Frequency Channel Buttons */}
              <ContactFrequencyList
                copiedEmail={copiedEmail}
                onCopyEmail={handleCopyEmail}
                onHoverSound={() => play('hover')}
              />
            </div>

            {/* Quick CV Download Link */}
            <div className="pt-2 border-t border-purple-900/50 mt-1">
              <a
                href={CONTACT_CONFIG.cvUrl}
                download={CONTACT_CONFIG.cvFilename || "CV - JOSUE ROYER TANTA CIEZA.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => play('coin')}
                onMouseEnter={() => play('hover')}
                className="w-full py-1.5 bg-[#1a1236] hover:bg-[#25184f] border border-purple-800 text-purple-200 hover:text-white text-[8px] font-arcade tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>📄</span>
                <span>DESCARGAR FICHA TÉCNICA (CV)</span>
              </a>
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
          <div className="flex items-center space-x-2 text-[8px] font-mono text-purple-300/70">
            <span>TERMINAL FINAL</span>
            <span className="text-arcade-cyan">//</span>
            <span className="text-pink-300">TODOS LOS MÓDULOS ACTIVOS</span>
          </div>

          <div className="flex items-center gap-2">
            <NeoPixelButton
              as="a"
              href="/modos"
              variant="secondary"
              soundEffect="select"
              className="text-xs"
            >
              VOLVER A MÓDULOS [ESC]
            </NeoPixelButton>

            <NeoPixelButton
              as="a"
              href="/"
              variant="accent"
              soundEffect="start"
              className="text-[10px] sm:text-xs"
            >
              <span>🚀</span>
              <span>VOLVER AL TRIPULANTE</span>
            </NeoPixelButton>
          </div>
        </div>
      </NeoPixelCard>
    </main>
  );
};
