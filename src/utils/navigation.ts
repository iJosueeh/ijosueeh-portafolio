import { navigate } from 'astro:transitions/client';

export const navigateTo = (url: string) => {
  if (typeof window !== 'undefined') {
    try {
      navigate(url);
    } catch {
      window.location.href = url;
    }
  }
};
