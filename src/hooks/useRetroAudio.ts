import { useSyncExternalStore, useCallback } from 'react';
import {
  isAudioMuted,
  setAudioMuted,
  subscribeToAudioMute,
  playRetroBeep,
  type SoundType,
} from '../utils/audio';

/**
 * Modern React 19 Hook for Retro Web Audio with reactive store synchronization
 */
export function useRetroAudio() {
  const isMuted = useSyncExternalStore(
    subscribeToAudioMute,
    isAudioMuted,
    () => false // Server snapshot for SSR compatibility
  );

  const toggleMute = useCallback(() => {
    const nextMuted = !isAudioMuted();
    setAudioMuted(nextMuted);
    if (!nextMuted) {
      playRetroBeep('select');
    }
  }, []);

  const play = useCallback((type: SoundType = 'select') => {
    playRetroBeep(type);
  }, []);

  return {
    isMuted,
    isEnabled: !isMuted,
    toggleMute,
    play,
  };
}
