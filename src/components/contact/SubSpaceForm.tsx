import React from 'react';
import { NeoPixelButton } from '../ui';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubSpaceFormProps {
  formData: FormData;
  sentStatus: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onHoverSound?: () => void;
}

export const SubSpaceForm: React.FC<SubSpaceFormProps> = ({
  formData,
  sentStatus,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="md:col-span-7 bg-[#0b071c]/95 border border-purple-900/70 p-2.5 sm:p-3.5 relative flex flex-col justify-between">
      <div className="space-y-1.5 sm:space-y-2">
        {/* Dispatcher Header */}
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="font-arcade text-[7px] sm:text-[8px] text-arcade-cyan bg-cyan-950/40 px-1.5 sm:px-2 py-0.5 border border-cyan-800/40 uppercase">
              EMISOR DE MENSAJES // DIRECT LINK
            </span>
          </div>
          <h1 className="font-arcade text-sm sm:text-base md:text-lg text-white tracking-wider uppercase drop-shadow-[0_2px_0_#000]">
            ENVIAR TRANSMISIÓN AL PILOTO
          </h1>
          <div className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-arcade-magenta to-arcade-cyan mt-0.5 sm:mt-1" />
        </div>

        {/* Transmission Form */}
        <form onSubmit={onSubmit} className="space-y-1.5 sm:space-y-2">
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
                value={formData.name}
                onChange={onInputChange}
                placeholder="Ej. Reclutador / Empresa"
                className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono px-2 py-1.5 focus:outline-none placeholder-purple-400/40"
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
                value={formData.email}
                onChange={onInputChange}
                placeholder="correo@ejemplo.com"
                className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono px-2 py-1.5 focus:outline-none placeholder-purple-400/40"
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
              rows={2}
              value={formData.message}
              onChange={onInputChange}
              placeholder="Detalles de la oportunidad o propuesta técnica..."
              className="w-full bg-[#120a28] border border-purple-800/70 focus:border-arcade-cyan text-white text-[9px] sm:text-[10px] font-mono p-1.5 sm:p-2 focus:outline-none placeholder-purple-400/40 resize-none sm:rows-3"
            />
          </div>

          {/* Submit Action */}
          <NeoPixelButton
            type="submit"
            variant="primary"
            soundEffect="start"
            className="w-full py-2 sm:py-2.5 text-[9px] sm:text-xs"
          >
            <span>📡</span>
            <span>{sentStatus ? '¡TRANSMISIÓN ENVIADA!' : 'DESPACHAR TRANSMISIÓN [ENTER]'}</span>
          </NeoPixelButton>
        </form>
      </div>

      {/* Verification Footer Note */}
      <div className="text-[6px] sm:text-[7px] font-mono text-purple-300/60 text-center pt-0.5 sm:pt-1">
        [ CANAL CIFRADO // DIRECTAMENTE A LA BANDEJA DE JOSUÉ ]
      </div>
    </div>
  );
};
