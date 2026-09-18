// Audio Architecture: Web Audio 8-bit Synthesizer adhering to SOLID (SRP & OCP)

export type SoundType = 'hover' | 'select' | 'coin' | 'start' | 'warp' | 'error';
export type SoundStrategy = (ctx: AudioContext, now: number) => void;

// --- State & Reactive Store for React 19 (useSyncExternalStore) ---
type MuteListener = () => void;
const listeners = new Set<MuteListener>();

let audioCtx: AudioContext | null = null;
let soundMuted = false;

if (typeof window !== 'undefined') {
  soundMuted = localStorage.getItem('sfx_muted') === 'true';
}

export function isAudioMuted(): boolean {
  return soundMuted;
}

export function setAudioMuted(muted: boolean): void {
  soundMuted = muted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('sfx_muted', String(muted));
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToAudioMute(listener: MuteListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// --- Audio Context Lifecycle Management ---
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// --- Helper: Node Graph Builder (SRP: Encapsulate Web Audio node wiring) ---
interface ToneOptions {
  type: OscillatorType;
  startFreq: number;
  endFreq?: number;
  gain: number;
  duration: number;
}

function playTone(ctx: AudioContext, now: number, opts: ToneOptions): void {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.type = opts.type;
  osc.frequency.setValueAtTime(opts.startFreq, now);

  if (opts.endFreq) {
    osc.frequency.exponentialRampToValueAtTime(opts.endFreq, now + opts.duration);
  }

  gainNode.gain.setValueAtTime(opts.gain, now);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + opts.duration);

  osc.start(now);
  osc.stop(now + opts.duration);
}

// --- Sound Strategies Registry (OCP: Open for Extension, Closed for Modification) ---
export const SOUND_PRESETS: Record<SoundType, SoundStrategy> = {
  hover: (ctx, now) => {
    playTone(ctx, now, {
      type: 'square',
      startFreq: 440,
      endFreq: 880,
      gain: 0.04,
      duration: 0.05,
    });
  },

  select: (ctx, now) => {
    playTone(ctx, now, {
      type: 'square',
      startFreq: 587.33,
      endFreq: 880,
      gain: 0.08,
      duration: 0.15,
    });
  },

  coin: (ctx, now) => {
    playTone(ctx, now, {
      type: 'square',
      startFreq: 987.77,
      endFreq: 1318.51,
      gain: 0.1,
      duration: 0.35,
    });
  },

  start: (ctx, now) => {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
    osc.frequency.setValueAtTime(1046.5, now + 0.24); // C6

    gainNode.gain.setValueAtTime(0.12, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.start(now);
    osc.stop(now + 0.5);
  },

  warp: (ctx, now) => {
    playTone(ctx, now, {
      type: 'sawtooth',
      startFreq: 220,
      endFreq: 1200,
      gain: 0.08,
      duration: 0.28,
    });
  },

  error: (ctx, now) => {
    playTone(ctx, now, {
      type: 'sawtooth',
      startFreq: 160,
      endFreq: 100,
      gain: 0.09,
      duration: 0.22,
    });
  },
};

// --- Dispatcher (SRP: Single purpose dispatching sound requests) ---
export function playRetroBeep(type: SoundType = 'select'): void {
  if (soundMuted) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const strategy = SOUND_PRESETS[type];
    if (strategy) {
      strategy(ctx, ctx.currentTime);
    }
  } catch {
    // Graceful handling of browser autoplay policies
  }
}
