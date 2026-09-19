import type { ProfileChapter, PilotProfile } from "../types";

export const PILOT_DATA: PilotProfile = {
  id: "CH-01",
  code: "PILOTO 01",
  name: "IJOSUEEH",
  callsign: "CH-01",
  classType: "FULL-STACK",
  role: "FULL STACK DEVELOPER",
  subRole: "BACKEND · .NET · SPRING BOOT · ANGULAR",
  specialization: "MICROSERVICIOS · APIs · ARQUITECTURA DE SOFTWARE",
  status: "P1 LISTO",
  avatar: "/hero-imagen.png",
  socials: [
    {
      name: "GITHUB",
      url: "https://github.com/iJosueeh",
      icon: "github",
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/ijosueeh",
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
      "Estudiante de Ingeniería de Software y Full Stack Developer con experiencia profesional en desarrollo backend y frontend. Trabajo principalmente con .NET, Spring Boot y Angular, con especial interés en microservicios, APIs y arquitectura de software.",

    bullets: [
      {
        label: "MISIÓN",
        text: "Construir software mantenible que transforme problemas reales en soluciones útiles para usuarios y negocios.",
      },
      {
        label: "TRAYECTORIA",
        text: "Experiencia en desarrollo Full Stack y Backend, incluyendo soluciones con Angular, .NET y microservicios serverless para el sector financiero.",
      },
      {
        label: "ENFOQUE",
        text: "Especial interés en backend, diseño de APIs, arquitectura de software y modelado de soluciones escalables.",
      },
    ],

    tags: [
      ".NET",
      "SPRING BOOT",
      "ANGULAR",
      "MICROSERVICIOS",
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
      "Entiendo el desarrollo de software como algo más que hacer funcionar una aplicación. Busco construir soluciones claras, mantenibles y fáciles de evolucionar, aplicando principios de arquitectura según las necesidades reales de cada proyecto.",

    bullets: [
      {
        label: "01 // DISEÑO & ARQUITECTURA",
        text: "Separación de responsabilidades, componentes reutilizables y estructuras que faciliten la evolución del software.",
      },
      {
        label: "02 // BACKEND & APIs",
        text: "APIs y servicios diseñados con contratos claros, persistencia consistente y lógica de negocio bien delimitada.",
      },
      {
        label: "03 // PRODUCTO & USUARIO",
        text: "Las decisiones técnicas deben responder a un problema real y aportar valor al usuario, no añadir complejidad innecesaria.",
      },
    ],

    tags: [
      "CLEAN ARCHITECTURE",
      "CQRS",
      "REST APIs",
      "SOLID",
    ],

    actionLabel: "EXPLORAR HABILIDADES",
    actionHref: "/habilidades",
    actionIcon: "⚡",
  },

  {
    id: "telemetry",
    code: "CAPÍTULO 03",
    title: "TELEMETRÍA & STATS",
    badge: "DATOS DE PERFIL",

    description:
      "Resumen de mi experiencia técnica y formación actual, combinando desarrollo backend, frontend, bases de datos y herramientas utilizadas en proyectos profesionales y académicos.",

    stats: [
      {
        label: "MICROSERVICIOS DESARROLLADOS",
        value: "12+",
        color: "#38bdf8",
      },
      {
        label: "PUESTO ACADÉMICO",
        value: "1 / 301",
        color: "#f43f85",
      },
      {
        label: "PROMEDIO PONDERADO",
        value: "19.42 / 20",
        color: "#d8b4fe",
      },
      {
        label: "CICLO ACTUAL",
        value: "8VO",
        color: "#fbbf24",
      },
    ],

    tags: [
      "ESPAÑOL · NATIVO",
      "INGLÉS · A2",
      "LIMA · PERÚ",
      "REMOTO / HÍBRIDO",
    ],

    actionLabel: "CONTACTAR PILOTO",
    actionHref: "/contacto",
    actionIcon: "📡",
  },
];
