import type { Mission } from "../types";

export const MISSIONS_DATA: Record<string, Mission> = {
  jaldishop: {
    id: "jaldishop",
    code: "MISIÓN 01",
    category: "FULL-STACK",
    title: "JALDISHOP",
    tagline: "GESTIÓN DE PEDIDOS Y CAPACIDAD OPERATIVA",
    status: "OPERATIVO",
    objective:
      "PLATAFORMA PARA GESTIONAR PEDIDOS SIN SUPERAR LA CAPACIDAD OPERATIVA DEL COMERCIO.",
    stack: ["SPRING BOOT", "POSTGRESQL", "ANGULAR", "TAILWIND"],
    liveUrl: "https://jaldishop.com",
    githubUrl: "https://github.com",
    type: "ecommerce",
    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "PROBLEMA RESUELTO",
        content:
          "Evitar que pequeños comercios acepten más pedidos de los que realmente pueden producir o atender, controlando el flujo en tiempo real.",
        highlightLabel: "OBJETIVO DE MISIÓN",
        tags: ["SPRING BOOT", "POSTGRESQL", "ANGULAR", "TAILWIND"],
        actionLabel: "VER REPOSITORIO",
        actionUrl: "https://github.com",
        actionIcon: "<>",
      },
      {
        title: "ARQUITECTURA & SISTEMAS",
        subtitle: "ENFOQUE TÉCNICO",
        content:
          "Diseñado con arquitectura modular basada en microservicios ligeros, colas de despacho y persistencia relacional optimizada.",
        highlightLabel: "NÚCLEO DEL SISTEMA",
        tags: ["REST API", "DOCKER", "CLEAN ARCHITECTURE", "JWT AUTH"],
        actionLabel: "VER DIAGRAMA",
        actionUrl: "https://github.com",
        actionIcon: "⚡",
      },
      {
        title: "IMPACTO & TELEMETRÍA",
        subtitle: "MÉTRICAS & RESULTADOS",
        content:
          "Reducción del 45% en tiempos de espera y optimización del 99.8% en entregas exitosas sin cuellos de botella.",
        highlightLabel: "TELEMETRÍA DE RENDIMIENTO",
        tags: ["OPTIMIZACIÓN", "TIEMPO REAL", "ALTA DISPONIBILIDAD"],
        actionLabel: "EXPLORAR EN PRODUCCIÓN",
        actionUrl: "https://jaldishop.com",
        actionIcon: "🚀",
      },
    ],
  },
  chaski: {
    id: "chaski",
    code: "MISIÓN 02",
    category: "MOBILE / LOGISTICS",
    title: "CHASKI",
    tagline: "LOGÍSTICA URBANA ÁGIL Y GESTIÓN DE ÚLTIMA MILLA",
    status: "OPERATIVO",
    objective:
      "LOGÍSTICA URBANA ÁGIL Y GESTIÓN DE ENVÍOS DE ÚLTIMA MILLA EN TIEMPO REAL.",
    stack: ["REACT NATIVE", "NODE.JS", "EXPRESS", "MONGODB"],
    liveUrl: "https://chaski.app",
    githubUrl: "https://github.com",
    type: "delivery",
    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "LOGÍSTICA EN TIEMPO REAL",
        content:
          "Automatizar la asignación y enrutamiento inteligente de mensajeros urbanos para entregas en menos de 30 minutos.",
        highlightLabel: "OBJETIVO DE MISIÓN",
        tags: ["REACT NATIVE", "NODE.JS", "EXPRESS", "MONGODB"],
        actionLabel: "VER CÓDIGO",
        actionUrl: "https://github.com",
        actionIcon: "<>",
      },
      {
        title: "GEOLOCALIZACIÓN & RUTAS",
        subtitle: "TELEMETRÍA EN VIVO",
        content:
          "Integración de WebSockets bidireccionales y algoritmos de grafos para cálculo dinámico de rutas más rápidas.",
        highlightLabel: "SISTEMA DE NAVEGACIÓN",
        tags: ["WEBSOCKETS", "MAPBOX", "GEO-INDEXING", "REDIS"],
        actionLabel: "VER REPOSITORIO",
        actionUrl: "https://github.com",
        actionIcon: "🗺️",
      },
      {
        title: "DESPLIEGUE & ESCALABILIDAD",
        subtitle: "DISPONIBILIDAD MÓVIL",
        content:
          "Arquitectura escalable en la nube con notificaciones push instantáneas y sincronización offline.",
        highlightLabel: "DISPONIBILIDAD",
        tags: ["CLOUD RUN", "FCM", "OFFLINE FIRST", "CI/CD"],
        actionLabel: "PROBAR APLICACIÓN",
        actionUrl: "https://chaski.app",
        actionIcon: "📱",
      },
    ],
  },
  viasegura: {
    id: "viasegura",
    code: "MISIÓN 03",
    category: "IA / DATA",
    title: "VIASEGURA",
    tagline: "TELEMETRÍA PREDICTIVA Y DETECCIÓN DE INCIDENCIAS",
    status: "OPERATIVO",
    objective:
      "ANÁLISIS PREDICTIVO Y TELEMETRÍA DE RUTAS CON DETECCIÓN DE INCIDENCIAS EN TIEMPO REAL.",
    stack: ["PYTHON", "FASTAPI", "REACT", "POSTGIS"],
    liveUrl: "https://viasegura.io",
    githubUrl: "https://github.com",
    type: "ai",
    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "SEGURIDAD VIAL CON IA",
        content:
          "Procesar flujos masivos de datos de sensores para predecir puntos críticos de congestión y riesgos de accidentes viales.",
        highlightLabel: "OBJETIVO DE MISIÓN",
        tags: ["PYTHON", "FASTAPI", "REACT", "POSTGIS"],
        actionLabel: "VER MODELO IA",
        actionUrl: "https://github.com",
        actionIcon: "<>",
      },
      {
        title: "MODELADO PREDICTIVO",
        subtitle: "PROCESAMIENTO DE DATOS",
        content:
          "Modelos de machine learning entrenados para análisis geoespacial de series temporales en microsegundos.",
        highlightLabel: "MOTOR DE INFERENCIA",
        tags: ["SCIKIT-LEARN", "PANDAS", "GEOJSON", "ASYNCPG"],
        actionLabel: "VER REPOSITORIO",
        actionUrl: "https://github.com",
        actionIcon: "🧠",
      },
      {
        title: "DASHBOARD & MONITOR",
        subtitle: "VISUALIZACIÓN ESPACIAL",
        content:
          "Panel interactivo en tiempo real para autoridades y operadores de tráfico urbano.",
        highlightLabel: "INTERFAZ DE TELEMETRÍA",
        tags: ["DECK.GL", "WEBSOCKETS", "TAILWIND", "VITE"],
        actionLabel: "ACCEDER A LA PLATAFORMA",
        actionUrl: "https://viasegura.io",
        actionIcon: "🌐",
      },
    ],
  },
};

export const MISSIONS_LIST = Object.values(MISSIONS_DATA);
