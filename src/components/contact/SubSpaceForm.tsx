import React from 'react';
import { NeoPixelButton, PixelIcon } from '../ui';

export type TransmissionStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubSpaceFormProps {
  formData: FormData;
  status: TransmissionStatus;
  statusMessage?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onHoverSound?: () => void;
}

export const SubSpaceForm: React.FC<SubSpaceFormProps> = ({
  formData,
  status,
  statusMessage,
  onInputChange,
  onSubmit,
}) => {
  const isSending = status === 'sending';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  return (
    <div className="md:col-span-7 bg-[#0b071c]/95 border border-purple-900/70 p-3 sm:p-4 flex flex-col justify-between h-full relative">
      {/* Dispatcher Header */}
      <div className="border-b border-purple-900/50 pb-2 mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-arcade-magenta" />
            <h1 className="font-arcade text-xs sm:text-sm md:text-base text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
              TRANSMISIÓN AL PILOTO
            </h1>
          </div>
          <span className="font-arcade text-[7px] sm:text-[8px] text-arcade-cyan bg-cyan-950/40 px-2 py-0.5 border border-cyan-800/40 uppercase">
            {isSending ? 'TRANSMITIENDO...' : 'DIRECT LINK'}
          </span>
        </div>
      </div>

      {/* Transmission Form */}
      <form onSubmit={onSubmit} className="flex-1 flex flex-col justify-between gap-2.5 sm:gap-3">
        {/* Honeypot field for bot protection */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {/* Name Input */}
          <div className="space-y-1">
            <label className="text-[7px] sm:text-[8px] font-arcade text-purple-300 uppercase flex items-center gap-1">
              <span>▶</span> NOMBRE / EMPRESA:
            </label>
            <input
              type="text"
              name="name"
              required
              disabled={isSending}
              value={formData.name}
              onChange={onInputChange}
              placeholder="Ej. Reclutador / Empresa"
              className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[10px] sm:text-[11px] font-mono px-3 py-2 focus:outline-none placeholder-purple-400/40 disabled:opacity-50 transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-[7px] sm:text-[8px] font-arcade text-purple-300 uppercase flex items-center gap-1">
              <span>▶</span> CORREO DE RETORNO:
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={isSending}
              value={formData.email}
              onChange={onInputChange}
              placeholder="correo@ejemplo.com"
              className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[10px] sm:text-[11px] font-mono px-3 py-2 focus:outline-none placeholder-purple-400/40 disabled:opacity-50 transition-colors"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex-1 flex flex-col space-y-1 min-h-[90px] sm:min-h-[110px]">
          <label className="text-[7px] sm:text-[8px] font-arcade text-purple-300 uppercase flex items-center gap-1">
            <span>▶</span> MENSAJE / PROPUESTA:
          </label>
          <textarea
            name="message"
            required
            disabled={isSending}
            value={formData.message}
            onChange={onInputChange}
            placeholder="Detalles de la oportunidad o propuesta técnica..."
            className="w-full flex-1 min-h-[85px] sm:min-h-[105px] bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[10px] sm:text-[11px] font-mono p-2.5 sm:p-3 focus:outline-none placeholder-purple-400/40 resize-none disabled:opacity-50 transition-colors"
          />
        </div>

        {/* Submit Action */}
        <div className="pt-1">
          <NeoPixelButton
            type="submit"
            variant={isSuccess ? "accent" : isError ? "arcade" : "primary"}
            soundEffect={isSuccess ? "coin" : isError ? "laser" : "start"}
            disabled={isSending}
            className={`w-full min-h-[44px] sm:min-h-[46px] py-2.5 px-5 text-[10px] sm:text-xs transition-all tracking-wider flex items-center justify-center !gap-3 ${
              isSending ? 'opacity-80 cursor-wait' : ''
            }`}
          >
            {isSending ? (
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin inline-block shrink-0" />
                <span>TRANSMITIENDO POR SUB-ESPACIO...</span>
              </div>
            ) : isSuccess ? (
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-950 font-bold text-base">✓</span>
                <span>¡TRANSMISIÓN ENVIADA CON ÉXITO!</span>
              </div>
            ) : isError ? (
              <div className="flex items-center gap-2.5">
                <span className="text-yellow-950 font-bold text-base">⚠</span>
                <span>{statusMessage || 'FALLÓ ENVÍO — ABRIENDO MAILTO...'}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-black/20 border border-white/30 shrink-0">
                  <PixelIcon name="mail" size={18} className="text-white" />
                </div>
                <span>DESPACHAR TRANSMISIÓN</span>
                <span className="font-mono text-[9px] text-pink-200 hidden sm:inline ml-1">[ENTER]</span>
              </div>
            )}
          </NeoPixelButton>
        </div>
      </form>

      {/* Verification Footer Note */}
      <div className="text-[7px] sm:text-[8px] font-mono text-purple-300/60 text-center pt-2 border-t border-purple-900/40 mt-2">
        {statusMessage && status !== 'error' ? (
          <span className="text-emerald-400 font-semibold">{statusMessage}</span>
        ) : (
          <span>[ CANAL SEGURO // TRANSMISIÓN DIRECTA A JOSUÉ ]</span>
        )}
      </div>
    </div>
  );
};
