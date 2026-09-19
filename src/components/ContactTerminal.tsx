import React, { useState } from 'react';
import { useRetroAudio } from '../hooks/useRetroAudio';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { navigateTo } from '../utils/navigation';
import { CONTACT_CONFIG } from '../data/contact';
import { ScreenBreadcrumb, NeoPixelCard, NeoPixelButton } from './ui';
import { RadioOscilloscope } from './contact/RadioOscilloscope';
import { ContactFrequencyList } from './contact/ContactFrequencyList';
import { SubSpaceForm, type TransmissionStatus } from './contact/SubSpaceForm';

export const ContactTerminal: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<TransmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
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

  const handleSendTransmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('sending');
    setStatusMessage('');
    play('start');

    const accessKey = CONTACT_CONFIG.web3formsAccessKey;

    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: `Portafolio Espacial - ${formData.name}`,
            subject: `[MISIÓN ESPACIAL] Transmisión de ${formData.name}`,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setStatus('success');
          setStatusMessage('¡TRANSMISIÓN ENTREGADA AL BUZÓN DEL PILOTO!');
          play('coin');
          setTimeout(() => {
            setStatus('idle');
            setStatusMessage('');
            setFormData({ name: '', email: '', message: '' });
          }, 4000);
          return;
        } else {
          throw new Error(result.message || 'Error al conectar con Web3Forms');
        }
      } catch (err) {
        console.warn('Web3Forms dispatch error, falling back to mailto:', err);
        setStatus('error');
        setStatusMessage('FALLÓ CANAL DIRECTO — ABRIENDO CLIENTE DE CORREO...');
        play('laser');

        const subject = encodeURIComponent(`[MISIÓN] Contacto de ${formData.name}`);
        const body = encodeURIComponent(
          `Remitente: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
        );
        window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');

        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 4500);
      }
    } else {
      // Standard direct mailto channel when access key is not set in env
      const subject = encodeURIComponent(`[MISIÓN] Contacto de ${formData.name}`);
      const body = encodeURIComponent(
        `Remitente: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      );
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');

      setStatus('success');
      setStatusMessage('¡CLIENTE DE CORREO DESPLEGADO CON ÉXITO!');
      play('coin');

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
        setFormData({ name: '', email: '', message: '' });
      }, 3500);
    }
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
      {/* Top Breadcrumb & Dual Navigation Bar */}
      <div className="w-full flex flex-wrap items-center justify-between mb-1.5 sm:mb-2 px-1 gap-1.5 text-[10px] sm:text-xs font-mono select-none">
        {/* Navigation Back Links */}
        <div className="flex items-center gap-1.5">
          <a
            href="/modos"
            onClick={() => play('select')}
            onMouseEnter={() => play('hover')}
            className="text-purple-300 hover:text-arcade-pink flex items-center gap-1 transition-colors cursor-pointer bg-[#130e24]/90 px-2 sm:px-2.5 py-1 border border-purple-900/60 text-[9px] sm:text-xs"
          >
            <span className="font-arcade text-[8px] sm:text-[9px]">&lt;</span>
            <span>MÓDULOS</span>
          </a>

          <a
            href="/"
            onClick={() => play('start')}
            onMouseEnter={() => play('hover')}
            className="text-pink-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer bg-[#1e1338]/90 px-2 sm:px-2.5 py-1 border border-pink-500/40 text-[9px] sm:text-xs font-arcade text-[8px]"
          >
            <svg className="w-3 h-3 pixel-sharp shrink-0 text-arcade-cyan" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1c-2 2-3 5-3 8l-3 2v2l3-1 1 3h2l1-3 3 1v-2l-3-2c0-3-1-6-3-8zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
            <span>TRIPULANTE</span>
          </a>
        </div>

        {/* Screen Status Pill */}
        <div className="flex items-center space-x-1.5 text-purple-200/60">
          <span className="font-arcade text-pink-300 text-[8px] sm:text-[9px]">CH-06 //</span>
          <span className="font-arcade text-arcade-cyan text-[7.5px] sm:text-[9px] bg-cyan-950/40 px-1.5 sm:px-2 py-0.5 border border-cyan-800/40 uppercase">
            CANAL DE COMUNICACIÓN
          </span>
        </div>
      </div>

      {/* Main Neo-Pixel Sci-Fi Comm Console */}
      <NeoPixelCard className="p-2 sm:p-4 md:p-5">
        {/* 2-Column Sub-Space Terminal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 items-stretch">
          {/* Left Column: Radio Oscilloscope & Direct Frequencies (5 cols) */}
          <div className="md:col-span-5 bg-[#080515]/95 border border-purple-900/70 p-2 sm:p-2.5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-1.5 sm:space-y-2">
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-1">
                <span className="font-arcade text-[7px] sm:text-[8px] text-pink-300">
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
            status={status}
            statusMessage={statusMessage}
            onInputChange={handleInputChange}
            onSubmit={handleSendTransmission}
            onHoverSound={() => play('hover')}
          />
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="flex items-center justify-between border-t border-purple-900/60 pt-1.5 mt-2 text-[7px] sm:text-[8px] font-mono text-purple-300/70">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-arcade-magenta" />
            <span>ESTACIÓN FINAL</span>
            <span className="text-arcade-cyan">//</span>
            <span className="text-pink-300">ENLACE DIRECTO ACTIVO</span>
          </div>
          <span className="text-purple-400/60 hidden sm:inline">[ RESPUESTA HABITUAL &lt; 24H ]</span>
        </div>
      </NeoPixelCard>
    </main>
  );
};
