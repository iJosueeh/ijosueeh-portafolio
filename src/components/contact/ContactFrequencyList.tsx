import React from 'react';
import { CONTACT_CONFIG } from '../../data/contact';

interface ContactFrequencyListProps {
  copiedEmail: boolean;
  onCopyEmail: (e: React.MouseEvent) => void;
  onHoverSound?: () => void;
}

export const ContactFrequencyList: React.FC<ContactFrequencyListProps> = ({
  copiedEmail,
  onCopyEmail,
  onHoverSound,
}) => {
  const emailAddress = CONTACT_CONFIG.email;

  return (
    <div className="space-y-1 sm:space-y-1.5">
      <div className="text-[7px] sm:text-[8px] font-arcade text-purple-300/70 uppercase">
        CANALES DE CONTACTO:
      </div>

      {/* 4 Direct Frequency Channels: Stacked vertically for clear visibility on all viewports */}
      <div className="flex flex-col gap-1.5">
        {/* Email Direct & Copy */}
        <button
          onClick={onCopyEmail}
          onMouseEnter={onHoverSound}
          type="button"
          className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-pink-300 p-2 sm:p-1.5 flex items-center justify-between text-left transition-all cursor-pointer group min-h-[40px] sm:min-h-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center bg-pink-950/40 border border-pink-500/40 text-pink-300 shrink-0">
              <svg className="w-3.5 h-3.5 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1 3h14v10H1V3zm2 2v1.5l5 3.5 5-3.5V5H3zm10 6V7.5L8 11 3 7.5V11h10z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[7px] font-arcade text-pink-300">EMAIL DIRECTO</span>
              <span className="text-[9px] sm:text-[10px] font-mono text-white truncate">{emailAddress}</span>
            </div>
          </div>
          <span
            className={`text-[7px] font-arcade px-2 py-0.5 border shrink-0 ml-2 ${
              copiedEmail
                ? 'bg-emerald-500 text-white border-emerald-300 animate-bounce'
                : 'bg-[#090616] text-arcade-cyan border-cyan-800 group-hover:border-pink-300'
            }`}
          >
            {copiedEmail ? 'COPIADO' : 'COPIAR'}
          </span>
        </button>

        {/* LinkedIn */}
        <a
          href={CONTACT_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onHoverSound}
          className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-arcade-cyan p-2 sm:p-1.5 flex items-center justify-between transition-all cursor-pointer min-h-[38px] sm:min-h-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center bg-cyan-950/40 border border-cyan-500/40 text-arcade-cyan shrink-0">
              <svg className="w-3.5 h-3.5 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h3v12H2V2zm5 4h3v1.5c.5-.8 1.5-1.5 3-1.5 2 0 3 1.5 3 4v6h-3v-5.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5V14H7V6z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[7px] font-arcade text-arcade-cyan">LINKEDIN</span>
              <span className="text-[9px] sm:text-[10px] font-mono text-purple-200 truncate">Perfil Profesional</span>
            </div>
          </div>
          <span className="text-[8px] font-arcade text-arcade-cyan font-bold">&gt;&gt;</span>
        </a>

        {/* GitHub */}
        <a
          href={CONTACT_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onHoverSound}
          className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-arcade-magenta p-2 sm:p-1.5 flex items-center justify-between transition-all cursor-pointer min-h-[38px] sm:min-h-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center bg-pink-950/40 border border-pink-500/40 text-pink-300 shrink-0">
              <svg className="w-3.5 h-3.5 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5 4L1 8l4 4v-2L3 8l2-2V4zm6 0v2l2 2-2 2v2l4-4-4-4zm-3.5 9l2-10h-1l-2 10h1z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[7px] font-arcade text-pink-300">GITHUB</span>
              <span className="text-[9px] sm:text-[10px] font-mono text-purple-200 truncate">Repositorios & Código</span>
            </div>
          </div>
          <span className="text-[8px] font-arcade text-pink-300 font-bold">&gt;&gt;</span>
        </a>

        {/* CV Download */}
        <a
          href={CONTACT_CONFIG.cvUrl}
          download={CONTACT_CONFIG.cvFilename || "CV - JOSUE ROYER TANTA CIEZA.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onHoverSound}
          className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-emerald-400 p-2 sm:p-1.5 flex items-center justify-between transition-all cursor-pointer min-h-[38px] sm:min-h-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 shrink-0">
              <svg className="w-3.5 h-3.5 pixel-sharp" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 1h7l3 3v11H3V1zm6 1v3h3L9 2zM5 7h6v1H5V7zm0 2h6v1H5V9zm0 2h4v1H5v-1z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[7px] font-arcade text-emerald-400">DESCARGAR CV</span>
              <span className="text-[9px] sm:text-[10px] font-mono text-purple-200 truncate">Curriculum Vitae (PDF)</span>
            </div>
          </div>
          <span className="text-[8px] font-arcade text-emerald-400 font-bold">&gt;&gt;</span>
        </a>
      </div>
    </div>
  );
};
