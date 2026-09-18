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
    <div className="space-y-1.5">
      <div className="text-[8px] font-arcade text-purple-300/70 uppercase">
        CANALES DE CONTACTO:
      </div>

      {/* Email Direct & Copy */}
      <button
        onClick={onCopyEmail}
        onMouseEnter={onHoverSound}
        type="button"
        className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-pink-300 p-1.5 flex items-center justify-between text-left transition-all cursor-pointer group"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-sm">✉️</span>
          <div className="flex flex-col min-w-0">
            <span className="text-[7px] font-arcade text-pink-300">EMAIL</span>
            <span className="text-[9px] font-mono text-white truncate">{emailAddress}</span>
          </div>
        </div>
        <span
          className={`text-[7px] font-arcade px-1.5 py-0.5 border ${
            copiedEmail
              ? 'bg-emerald-500 text-white border-emerald-300 animate-bounce'
              : 'bg-[#090616] text-arcade-cyan border-cyan-800 group-hover:border-pink-300'
          }`}
        >
          {copiedEmail ? '¡COPIADO!' : 'COPIAR'}
        </span>
      </button>

      {/* LinkedIn */}
      <a
        href={CONTACT_CONFIG.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onHoverSound}
        className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-arcade-cyan p-1.5 flex items-center justify-between transition-all cursor-pointer"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm">💼</span>
          <div className="flex flex-col">
            <span className="text-[7px] font-arcade text-arcade-cyan">LINKEDIN</span>
            <span className="text-[9px] font-mono text-purple-200">PERFIL PROFESIONAL</span>
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
        className="w-full bg-[#140d2d] hover:bg-[#1f1542] border border-purple-900/60 hover:border-arcade-magenta p-1.5 flex items-center justify-between transition-all cursor-pointer"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm">💻</span>
          <div className="flex flex-col">
            <span className="text-[7px] font-arcade text-pink-300">GITHUB</span>
            <span className="text-[9px] font-mono text-purple-200">REPOSITORIOS & CÓDIGO</span>
          </div>
        </div>
        <span className="text-[8px] font-arcade text-pink-300 font-bold">&gt;&gt;</span>
      </a>
    </div>
  );
};
