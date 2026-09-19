import type { Trophy } from "../types";

export const TROPHIES_DATA: Trophy[] = [
  {
    id: "trophy-first-place",
    order: 0,
    title: "1.er PUESTO DE LA PROMOCIÓN",
    category: "EXCELENCIA ACADÉMICA",
    tier: "PLATINO",
    tierColor: "#f43f85",
    rarity: "1 DE 301 ESTUDIANTES",
    icon: "🏆",
    date: "REGISTRO: 2026",
    description:
      "Alcancé el 1.er puesto de la promoción de Ingeniería de Software durante el ciclo marzo 2026, destacando por rendimiento académico entre 301 estudiantes.",
    stats: [
      { label: "POSICIÓN", value: "1 / 301" },
      { label: "PROMEDIO", value: "19.42 / 20" },
      { label: "DISTINCIÓN", value: "DÉCIMO SUPERIOR" },
    ],

    type: "academic",
  },
  {
    id: "trophy-scholarship",
    order: 1,
    title: "BECA POR EXCELENCIA",
    category: "RECONOCIMIENTO UTP",
    tier: "DIAMANTE",
    tierColor: "#38bdf8",
    rarity: "MÉRITO ACADÉMICO",
    icon: "🎓",
    date: "REGISTRO: AGO 2026",
    description:
      "Beneficiario de la Beca por Excelencia Académica otorgada por la Universidad Tecnológica del Perú en reconocimiento al rendimiento alcanzado durante el periodo académico.",
    stats: [
      { label: "INSTITUCIÓN", value: "UTP" },
      { label: "RECONOCIMIENTO", value: "EXCELENCIA ACADÉMICA" },
      { label: "PROMEDIO", value: "19.42 / 20" },
    ],
    type: "scholarship",
  },
  {
    id: "trophy-hackathon",
    order: 2,
    title: "FINALISTA HACKATHON UTP+",
    category: "INNOVACIÓN & DESARROLLO",
    tier: "ORO",
    tierColor: "#fbbf24",
    rarity: "PROYECTO FINALISTA",
    icon: "🚀",
    date: "REGISTRO: 2026",
    description:
      "Participé en el desarrollo de Jakky, un MVP de orientación vocacional construido durante la Hackathon UTP+ by Xpedition para facilitar decisiones mediante información académica y datos del mercado laboral.",
    stats: [
      { label: "PROYECTO", value: "JAKKY" },
      { label: "RESULTADO", value: "FINALISTA" },
      { label: "FORMATO", value: "MVP EN 1 SEMANA" },
    ],
    type: "hackathon",
  },
  {
    id: "trophy-fintech",
    order: 3,
    title: "PRIMERA MISIÓN FINTECH",
    category: "EXPERIENCIA PROFESIONAL",
    tier: "ORO",
    tierColor: "#d8b4fe",
    rarity: "12+ MICROSERVICIOS",
    icon: "⚙️",
    date: "REGISTRO: 2025",
    description:
      "Primera experiencia profesional en desarrollo Backend, participando en una solución para el sector financiero mediante .NET 8 y arquitectura serverless en Microsoft Azure.",
    stats: [
      { label: "MICROSERVICIOS", value: "12+" },
      { label: "BACKEND", value: ".NET 8" },
      { label: "CLOUD", value: "AZURE FUNCTIONS" },
    ],
    type: "professional",
  },
];
