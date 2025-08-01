/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MY_ENV_VAR: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.avif';