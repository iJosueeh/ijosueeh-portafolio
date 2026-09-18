import type { Trophy } from "../types";

export const TROPHIES_DATA: Trophy[] = [
  {
    id: "trophy-architecture",
    order: 0,
    title: "NÚCLEO DE ÉLITE",
    category: "ARQUITECTURA & CLEAN CODE",
    tier: "PLATINO",
    tierColor: "#f43f85",
    rarity: "98.5% // RAREZA ÉPICA",
    icon: "🏆",
    date: "REGISTRO: 2024",
    description:
      "Dominio integral en el diseño de arquitecturas desacopladas, microservicios resilientes, contratos de tipado estricto en TypeScript y código mantenible sin deuda técnica.",
    stats: [
      { label: "CALIDAD DE CÓDIGO", value: "CLEAN ARCHITECTURE" },
      { label: "COBERTURA & TESTS", value: "LÓGICA BLINDADA" },
      { label: "DEUDA TÉCNICA", value: "CONTROLADA 0%" },
    ],
    type: "architecture",
  },
  {
    id: "trophy-performance",
    order: 1,
    title: "VELOCIDAD LUZ",
    category: "RENDIMIENTO & OPTIMIZACIÓN",
    tier: "DIAMANTE",
    tierColor: "#38bdf8",
    rarity: "99.2% // RAREZA LEGENDARIA",
    icon: "⚡",
    date: "REGISTRO: 2024",
    description:
      "Optimización extrema de aplicaciones frontend y backend: puntuaciones 99+ en Google Lighthouse, carga inicial sub-segundo y microinteracciones a 60 FPS estables.",
    stats: [
      { label: "LIGHTHOUSE SCORE", value: "99+ EN TODAS LAS MÉTRICAS" },
      { label: "TIEMPO DE CARGA", value: "< 100ms INSTANTÁNEO" },
      { label: "CORE WEB VITALS", value: "100% CUMPLIMIENTO" },
    ],
    type: "performance",
  },
  {
    id: "trophy-production",
    order: 2,
    title: "MISIÓN EN PRODUCCIÓN",
    category: "DESPLIEGUE & ALTA DISPONIBILIDAD",
    tier: "ORO",
    tierColor: "#fbbf24",
    rarity: "95.0% // RAREZA SUPERIOR",
    icon: "🚀",
    date: "REGISTRO: 2023 - 2024",
    description:
      "Múltiples plataformas y aplicaciones web desplegadas en producción real, gestionando flujos continuos de usuarios, pagos y logística sin cuellos de botella.",
    stats: [
      { label: "DISPONIBILIDAD", value: "99.9% UPTIME" },
      { label: "APLICACIONES EN VIVO", value: "MISIONES ACTIVAS" },
      { label: "CONCURRENCIA", value: "TOLERANCIA A FALLOS" },
    ],
    type: "production",
  },
  {
    id: "trophy-fullstack",
    order: 3,
    title: "ESPECIALISTA FULL-STACK",
    category: "INGENIERÍA INTEGRAL END-TO-END",
    tier: "ORO",
    tierColor: "#d8b4fe",
    rarity: "94.5% // RAREZA SUPERIOR",
    icon: "🎓",
    date: "REGISTRO: 2023",
    description:
      "Capacidad comprobada para liderar el ciclo de vida completo: desde interfaces intuitivas UI/UX y frontend reactivo hasta APIs seguras, bases de datos y DevOps.",
    stats: [
      { label: "COBERTURA STACK", value: "FRONTEND + BACKEND + DB" },
      { label: "SEGURIDAD & AUTH", value: "JWT + PROTOCOLOS ROBUSTOS" },
      { label: "EXPERIENCIA DEV", value: "INTEGRACIÓN CONTINUA" },
    ],
    type: "fullstack",
  },
];
