import type { ProfileChapter, PilotProfile } from "../types";

export const PILOT_DATA: PilotProfile = {
  id: "CH-01",
  code: "PILOTO 01",
  name: "IJOSUEEH",
  callsign: "CH-01",
  classType: "FULL-STACK",
  role: "INGENIERO DE SOFTWARE",
  subRole: "DESARROLLADOR FULL-STACK & ARQUITECTURA WEB",
  specialization: "DESARROLLO WEB & SISTEMAS DISTRIBUIDOS",
  status: "P1 LISTO",
  avatar: "/hero-imagen.png",
  socials: [
    {
      name: "GITHUB",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LINKEDIN",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
  ],
};

export const PILOT_INFO = {
  callsign: PILOT_DATA.name,
  rank: PILOT_DATA.status,
  role: PILOT_DATA.role,
  subRole: PILOT_DATA.subRole,
  specialization: `■ ESPECIALIZACIÓN: ${PILOT_DATA.specialization}`,
  avatarUrl: PILOT_DATA.avatar,
  githubUrl: PILOT_DATA.socials[0]?.url || "https://github.com",
  linkedinUrl: PILOT_DATA.socials[1]?.url || "https://linkedin.com",
};

export const PROFILE_CHAPTERS: ProfileChapter[] = [
  {
    id: "origin",
    code: "CAPÍTULO 01",
    title: "ORIGEN & BITÁCORA",
    badge: "HISTORIA & VISIÓN",
    description:
      "Ingeniero de Software enfocado en el desarrollo de soluciones web de alto impacto. Especializado en diseñar arquitecturas escalables, interfaces altamente reactivas y experiencias digitales fluidas que combinan rigor técnico con diseño visual inmersivo.",
    bullets: [
      {
        label: "MISIÓN",
        text: "Construir plataformas resilientes que resuelvan problemas reales de usuarios y negocios.",
      },
      {
        label: "TRAYECTORIA",
        text: "Experiencia liderando desarrollo full-stack, arquitecturas frontend modernas y microservicios.",
      },
      {
        label: "ENFOQUE",
        text: "Mentalidad autodidacta, atención al detalle y obsesión por el rendimiento.",
      },
    ],
    tags: [
      "FULL-STACK",
      "REACT & ASTRO",
      "SPRING BOOT & NODE",
      "ARQUITECTURA WEB",
    ],
    actionLabel: "VER MISIONES REALIZADAS",
    actionHref: "/proyectos",
    actionIcon: "🚀",
  },
  {
    id: "philosophy",
    code: "CAPÍTULO 02",
    title: "FILOSOFÍA DE INGENIERÍA",
    badge: "PROTOCOLOS CORE",
    description:
      "Creo firmemente en el código limpio, estructurado y modular. Mi estándar de desarrollo prioriza la simplicidad arquitectónica, la facilidad de mantenimiento y la entrega continua de valor sin deuda técnica innecesaria.",
    bullets: [
      {
        label: "01 // CLEAN CODE & SOLID",
        text: "Componentes desacoplados, contratos de API claros y lógica testeable.",
      },
      {
        label: "02 // RENDIMIENTO INSTANTÁNEO",
        text: "Cero bloatware, tiempos de carga mínimos y microinteracciones a 60 FPS.",
      },
      {
        label: "03 // IMPACTO EN NEGOCIO",
        text: "El mejor software es el que genera valor medible y resuelve cuellos de botella.",
      },
    ],
    tags: ["CLEAN ARCHITECTURE", "SOLID", "TYPE SAFETY", "PERFORMANCE FIRST"],
    actionLabel: "EXPLORAR HABILIDADES",
    actionHref: "/habilidades",
    actionIcon: "⚡",
  },
  {
    id: "telemetry",
    code: "CAPÍTULO 03",
    title: "TELEMETRÍA & STATS",
    badge: "MÉTRICAS DE PILOTO",
    description:
      "Medición de capacidades operativas en combate dev. Dominio equilibrado entre la ingeniería de sistemas distribuidos y el desarrollo de experiencias de usuario de alta fidelidad.",
    stats: [
      { label: "FRONTEND & UI/UX REACTIVA", value: 95, color: "#f43f85" },
      { label: "BACKEND & ARQUITECTURA DE APIS", value: 90, color: "#38bdf8" },
      { label: "BASES DE DATOS & PERSISTENCIA", value: 88, color: "#d8b4fe" },
      { label: "DEVOPS, CI/CD & CLOUD", value: 82, color: "#fbbf24" },
    ],
    tags: [
      "ESPAÑOL (NATIVO)",
      "INGLÉS (TÉCNICO / B2)",
      "REMOTO / HÍBRIDO",
      "DISPONIBLE",
    ],
    actionLabel: "CONTACTAR PILOTO",
    actionHref: "/contacto",
    actionIcon: "📡",
  },
];
