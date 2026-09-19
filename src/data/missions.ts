import type { Mission } from "../types";

export const MISSIONS_DATA: Record<string, Mission> = {
  jakky: {
    id: "jakky",
    code: "MISIÓN 01",
    category: "FULL-STACK / HACKATHON",
    title: "JAKKY",
    tagline: "ORIENTACIÓN VOCACIONAL BASADA EN DATOS",
    status: "FINALIZADO",
    objective:
      "AYUDAR A ESTUDIANTES A COMPARAR CARRERAS UNIVERSITARIAS MEDIANTE INFORMACIÓN ACADÉMICA Y DATOS DEL MERCADO LABORAL.",
    stack: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND CSS"],
    liveUrl: "https://jakky-hackathon.vercel.app/",
    githubUrl: "https://github.com/iJosueeh/jakky",
    type: "web",

    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "DECISIONES VOCACIONALES CON DATOS",
        content:
          "MVP desarrollado durante la Hackathon UTP+ by Xpedition para facilitar la comparación de carreras universitarias mediante información académica y datos del mercado laboral.",
        highlightLabel: "PROYECTO DE HACKATHON",
        tags: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND CSS"],
        actionLabel: "VER DEMO",
        actionUrl: "https://jakky-hackathon.vercel.app/",
        actionIcon: "🚀",
      },
      {
        title: "DATOS & EXPERIENCIA",
        subtitle: "COMPARACIÓN DE CARRERAS",
        content:
          "Implementé funcionalidades frontend, visualización de información y mecanismos para recopilar y presentar datos relevantes para la exploración de carreras.",
        highlightLabel: "CONTRIBUCIÓN TÉCNICA",
        tags: ["WEB SCRAPING", "REACT", "DATA VISUALIZATION", "REST"],
        actionLabel: "VER CÓDIGO",
        actionUrl: "https://github.com/iJosueeh/jakky",
        actionIcon: "<>",
      },
      {
        title: "GEOLOCALIZACIÓN",
        subtitle: "EXPLORACIÓN DE SEDES",
        content:
          "Desarrollé funcionalidades de proximidad geográfica para facilitar la exploración y comparación de 15 campus universitarios.",
        highlightLabel: "15 CAMPUS",
        tags: ["GEOLOCALIZACIÓN", "MAPAS", "REACT", "TYPESCRIPT"],
        actionLabel: "EXPLORAR PROYECTO",
        actionUrl: "https://jakky-hackathon.vercel.app/",
        actionIcon: "🗺️",
      },
    ],
  },

  amauta: {
    id: "amauta",
    code: "MISIÓN 02",
    category: "WEB / OFFLINE-FIRST",
    title: "AMAUTA",
    tagline: "GESTIÓN EDUCATIVA SIN DEPENDENCIA DE CONEXIÓN",
    status: "EN DESARROLLO",
    objective:
      "PERMITIR A DOCENTES REGISTRAR INFORMACIÓN ACADÉMICA INCLUSO EN ESCENARIOS CON CONECTIVIDAD LIMITADA O INESTABLE.",
    stack: ["REACT", "TYPESCRIPT", "DEXIE.JS", "INDEXEDDB"],
    liveUrl: "https://amauta-six.vercel.app/",
    githubUrl: "https://github.com/iJosueeh/amauta",
    type: "web",

    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "CONECTIVIDAD LIMITADA",
        content:
          "Proyecto orientado a docentes que necesitan registrar asistencias y notas en contextos donde una conexión estable a Internet no siempre está disponible.",
        highlightLabel: "OFFLINE-FIRST",
        tags: ["REACT", "TYPESCRIPT", "DEXIE.JS", "INDEXEDDB"],
        actionLabel: "VER DEMO",
        actionUrl: "https://amauta-six.vercel.app/",
        actionIcon: "🚀",
      },
      {
        title: "PERSISTENCIA LOCAL",
        subtitle: "DATOS SIN CONEXIÓN",
        content:
          "Implementé persistencia local para permitir que las operaciones principales continúen funcionando sin conexión y que la información permanezca disponible en el dispositivo.",
        highlightLabel: "LOCAL-FIRST DATA",
        tags: ["DEXIE.JS", "INDEXEDDB", "OFFLINE FIRST"],
        actionLabel: "VER CÓDIGO",
        actionUrl: "https://github.com/iJosueeh/amauta",
        actionIcon: "<>",
      },
      {
        title: "SINCRONIZACIÓN",
        subtitle: "RECUPERACIÓN DE CONECTIVIDAD",
        content:
          "Diseñé el flujo de sincronización considerando escenarios de pérdida y recuperación de conexión, priorizando la integridad de la información registrada.",
        highlightLabel: "DISEÑO DE SINCRONIZACIÓN",
        tags: ["DATA SYNC", "OFFLINE", "REACT"],
        actionLabel: "EXPLORAR PROYECTO",
        actionUrl: "https://amauta-six.vercel.app/",
        actionIcon: "📡",
      },
    ],
  },

  jaldishop: {
    id: "jaldishop",
    code: "MISIÓN 03",
    category: "FULL-STACK / E-COMMERCE",
    title: "JALDISHOP",
    tagline: "PEDIDOS BASADOS EN CAPACIDAD OPERATIVA",
    status: "EN DESARROLLO",
    objective:
      "AYUDAR A PEQUEÑOS COMERCIOS A RECIBIR PEDIDOS SIN SUPERAR SU CAPACIDAD REAL DE PRODUCCIÓN.",
    stack: ["SPRING BOOT", "POSTGRESQL", "ANGULAR", "REST API"],
    liveUrl: "",
    githubUrl: "",
    type: "ecommerce",

    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "EVITAR LA SOBREVENTA",
        content:
          "JaldiShop nace para comercios que reciben pedidos mediante redes sociales y necesitan controlar cuántos pedidos pueden producir realmente por día o franja horaria.",
        highlightLabel: "PROBLEMA DE NEGOCIO",
        tags: ["CAPACIDAD", "PEDIDOS", "E-COMMERCE", "MYPES"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "MOTOR DE CAPACIDAD",
        subtitle: "CUPOS & RESERVAS",
        content:
          "El sistema modela capacidad base, franjas horarias y excepciones temporales. Durante el checkout se reserva temporalmente un cupo para evitar que múltiples clientes utilicen la misma capacidad disponible.",
        highlightLabel: "HOLD DE 10 MINUTOS",
        tags: ["CAPACITY ENGINE", "CHECKOUT", "RESERVAS", "CONCURRENCIA"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "ARQUITECTURA",
        subtitle: "FULL-STACK",
        content:
          "Proyecto estructurado alrededor de autenticación, catálogo, inventario, capacidad operativa, checkout, pagos y gestión de pedidos, utilizando Spring Boot y PostgreSQL como núcleo backend.",
        highlightLabel: "MVP EN DESARROLLO",
        tags: ["SPRING BOOT", "POSTGRESQL", "JWT", "REST API"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
    ],
  },

  chaski: {
    id: "chaski",
    code: "MISIÓN 04",
    category: "MOBILE / REACT NATIVE",
    title: "CHASKI",
    tagline: "PLANES SEGÚN TIEMPO, PRESUPUESTO Y UBICACIÓN",
    status: "EN DESARROLLO",
    objective:
      "GENERAR PLANES CERCANOS CONSIDERANDO PRESUPUESTO, TIEMPO DISPONIBLE, INTERESES Y DESPLAZAMIENTO.",
    stack: ["REACT NATIVE", "TYPESCRIPT", "MAPS", "ASYNC STORAGE"],
    liveUrl: "",
    githubUrl: "",
    type: "mobile",

    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "¿QUÉ PUEDO HACER AHORA?",
        content:
          "Chaski busca reducir la fricción al elegir un plan considerando cuánto dinero tiene el usuario, cuánto tiempo dispone, sus intereses y qué tan viable es desplazarse entre lugares.",
        highlightLabel: "PLANIFICACIÓN CONTEXTUAL",
        tags: ["REACT NATIVE", "TYPESCRIPT", "MOBILE", "UX"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "MOTOR DE RECOMENDACIÓN",
        subtitle: "SCORING MULTICRITERIO",
        content:
          "El motor evalúa rutas utilizando cobertura de intereses, aprovechamiento del tiempo, compatibilidad con el presupuesto y eficiencia de desplazamiento para comparar alternativas.",
        highlightLabel: "4 MÉTRICAS DE SCORING",
        tags: ["SCORING", "PRESUPUESTO", "TIEMPO", "INTERESES"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "EXPERIENCIA MÓVIL",
        subtitle: "PLANIFICACIÓN DE RUTA",
        content:
          "La aplicación organiza lugares seleccionados en una secuencia viable y presenta al usuario un plan adaptado a sus restricciones antes de iniciar el recorrido.",
        highlightLabel: "MOBILE EXPERIENCE",
        tags: ["REACT NATIVE", "NAVIGATION", "MAPS", "STATE"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
    ],
  },

  viasegura: {
    id: "viasegura",
    code: "MISIÓN 05",
    category: "DATA / INNOVACIÓN",
    title: "VÍASEGURA",
    tagline: "ALERTAS PREVENTIVAS PARA TRAMOS VIALES VULNERABLES",
    status: "PROTOTIPO",
    objective:
      "IDENTIFICAR TRAMOS VIALES CON HISTORIAL DE AFECTACIONES Y ADVERTIR AL CONDUCTOR ANTES DE APROXIMARSE.",
    stack: ["DATA", "GEOLOCALIZACIÓN", "ML", "CLOUD"],
    liveUrl: "",
    githubUrl: "",
    type: "data",

    chapters: [
      {
        title: "DESAFÍO & OBJETIVO",
        subtitle: "PREVENCIÓN VIAL",
        content:
          "El proyecto utiliza antecedentes de emergencias viales para identificar tramos vulnerables a eventos como deslizamientos, huaicos, inundaciones y erosión.",
        highlightLabel: "SEGURIDAD PREVENTIVA",
        tags: ["HISTÓRICOS", "RIESGO VIAL", "GEOLOCALIZACIÓN"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "ANÁLISIS DE RIESGO",
        subtitle: "HISTORIAL DEL TRAMO",
        content:
          "La propuesta contempla calcular un score de vulnerabilidad a partir de información histórica y asociarlo geográficamente a los tramos de una ruta.",
        highlightLabel: "SCORE HISTÓRICO",
        tags: ["DATA", "ML", "GEO", "RISK SCORE"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
      {
        title: "PROTOTIPO & ALERTAS",
        subtitle: "SIMULACIÓN DE RECORRIDO",
        content:
          "La primera fase simula el desplazamiento de un vehículo sobre una ruta y genera una alerta preventiva cuando se aproxima a un tramo identificado como vulnerable.",
        highlightLabel: "FASE 1 · SIMULACIÓN",
        tags: ["MAPAS", "PROXIMIDAD", "ALERTAS", "PROTOTIPO"],
        actionLabel: "",
        actionUrl: "",
        actionIcon: "",
      },
    ],
  },
};

export const MISSIONS_LIST = Object.values(MISSIONS_DATA);
