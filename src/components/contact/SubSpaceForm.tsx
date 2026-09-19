import React from 'react';
import { NeoPixelButton } from '../ui';

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
    <div className="md:col-span-7 bg-[#0b071c]/95 border border-purple-900/70 p-2 sm:p-3 relative flex flex-col justify-between">
      <div className="space-y-1 sm:space-y-1.5">
        {/* Dispatcher Header */}
        <div className="border-b border-purple-900/50 pb-1 mb-1 sm:mb-1.5">
          <div className="flex items-center justify-between">
            <h1 className="font-arcade text-xs sm:text-sm md:text-base text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
              TRANSMISIÓN AL PILOTO
            </h1>
            <span className="font-arcade text-[6.5px] sm:text-[7.5px] text-arcade-cyan bg-cyan-950/40 px-1.5 py-0.5 border border-cyan-800/40 uppercase">
              {isSending ? 'TRANSMITIENDO...' : 'WEB3FORMS / DIRECT LINK'}
            </span>
          </div>
        </div>

        {/* Transmission Form */}
        <form onSubmit={onSubmit} className="space-y-1.5 sm:space-y-2">
          {/* Honeypot field for bot protection */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
            {/* Name Input */}
            <div className="space-y-0.5">
              <label className="text-[6px] sm:text-[7px] font-arcade text-purple-300 uppercase flex items-center gap-1">
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
                className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono px-2 py-1.5 focus:outline-none placeholder-purple-400/40 disabled:opacity-50"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-0.5">
              <label className="text-[6px] sm:text-[7px] font-arcade text-purple-300 uppercase flex items-center gap-1">
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
                className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono px-2 py-1.5 focus:outline-none placeholder-purple-400/40 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-0.5">
            <label className="text-[6px] sm:text-[7px] font-arcade text-purple-300 uppercase flex items-center gap-1">
              <span>▶</span> MENSAJE / PROPUESTA:
            </label>
            <textarea
              name="message"
              required
              disabled={isSending}
              rows={2}
              value={formData.message}
              onChange={onInputChange}
              placeholder="Detalles de la oportunidad o propuesta técnica..."
              className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono p-1.5 sm:p-2 focus:outline-none placeholder-purple-400/40 resize-none sm:rows-3 disabled:opacity-50"
            />
          </div>

          {/* Submit Action */}
          <NeoPixelButton
            type="submit"
            variant={isSuccess ? "accent" : isError ? "arcade" : "primary"}
            soundEffect={isSuccess ? "coin" : isError ? "laser" : "start"}
            disabled={isSending}
            className={`w-full py-2 sm:py-2.5 text-[9px] sm:text-xs transition-all ${
              isSending ? 'opacity-80 cursor-wait' : ''
            }`}
          >
            {isSending ? (
              <>
                <span className="w-2.5 h-2.5 border-2 border-white border-t-transparent animate-spin inline-block mr-1" />
                <span>TRANSMITIENDO POR SUB-ESPACIO...</span>
              </>
            ) : isSuccess ? (
              <>
                <span className="text-emerald-300 font-bold">✓</span>
                <span>¡TRANSMISIÓN ENVIADA CON ÉXITO!</span>
              </>
            ) : isError ? (
              <>
                <span className="text-yellow-300 font-bold">⚠</span>
                <span>{statusMessage || 'FALLÓ ENVÍO — ABRIENDO MAILTO...'}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 pixel-sharp shrink-0" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M7 1h2v4H7V1zm-4 5h2v4H3V6zm8 0h2v4h-2V6zM5 11h6v2H5v-2zm2 2h2v3H7v-3z" />
                </svg>
                <span>DESPACHAR TRANSMISIÓN</span>
                <span className="font-mono text-[9px] text-pink-200 hidden sm:inline">[ENTER]</span>
              </>
            )}
          </NeoPixelButton>
        </form>
      </div>

      {/* Verification Footer Note */}
      <div className="text-[6px] sm:text-[7px] font-mono text-purple-300/60 text-center pt-0.5 sm:pt-1">
        {statusMessage && status !== 'error' ? (
          <span className="text-emerald-400">{statusMessage}</span>
        ) : (
          <span>[ CANAL SEGURO // TRANSMISIÓN DIRECTA A JOSUÉ ]</span>
        )}
      </div>
    </div>
  );
};
