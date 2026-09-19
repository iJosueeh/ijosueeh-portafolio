export interface ProfileChapter {
  id: string;
  code: string;
  title: string;
  badge: string;
  description: string;
  bullets?: { label: string; text: string }[];
  stats?: { label: string; value: string | number; color: string }[];
  tags: string[];
  actionLabel?: string;
  actionHref?: string;
  actionIcon?: string;
}

export interface MissionChapter {
  title: string;
  subtitle: string;
  content: string;
  highlightLabel?: string;
  highlightValue?: string;
  tags?: string[];
  actionLabel?: string;
  actionUrl?: string;
  actionIcon?: string;
}

export interface Mission {
  id: string;
  code: string;
  category: string;
  title: string;
  tagline: string;
  status: "FINALIZADO" | "EN DESARROLLO" | "PROTOTIPO" | "OPERATIVO" | "COMPLETADO" | string;
  objective?: string;
  stack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  repoUrl?: string;
  type: "web" | "ecommerce" | "mobile" | "data" | "delivery" | "ai";
  chapters: MissionChapter[];
}

export interface TechModule {
  id: string;
  name: string;
  level: number;
  category: string;
  description: string;
  missions: string[];
  specs: { label: string; value: string }[];
  tag: string;
}

export interface LoadoutSlot {
  id: string;
  slotNumber: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  modules: TechModule[];
}

export interface PlanetaryStation {
  id: string;
  order: number;
  sectorNumber: string;
  name: string;
  planetType: string;
  period: string;
  role: string;
  environment: string;
  status: "ÓRBITA ACTUAL" | "MISIÓN CONCLUIDA" | "FORMACIÓN ACTIVA";
  coordinates: string;
  posX: number;
  posY: number;
  color: string;
  description: string;
  achievements: string[];
  stack: string[];
  illustration: "genesis-planet" | "orbital-station" | "gas-giant";
}

export interface Trophy {
  id: string;
  order: number;
  title: string;
  category: string;
  tier: "PLATINO" | "DIAMANTE" | "ORO";
  tierColor: string;
  rarity: string;
  icon: string;
  date: string;
  description: string;
  stats: { label: string; value: string }[];
  type: "architecture" | "performance" | "production" | "fullstack" | "professional" | "hackathon" | "scholarship" | "academic";
}

export interface ModeItem {
  id: string;
  code: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "user" | "rocket" | "tech" | "journey" | "trophy" | "comms" | string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PilotProfile {
  id: string;
  code: string;
  name: string;
  callsign: string;
  classType: string;
  role: string;
  subRole: string;
  specialization: string;
  status: string;
  avatar: string;
  socials: SocialLink[];
}

