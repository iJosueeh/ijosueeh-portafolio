import type { LoadoutSlot } from "../types";

export const LOADOUT_SLOTS: LoadoutSlot[] = [
  {
    id: "frontend",
    slotNumber: "SLOT 01",
    title: "CAÑÓN FRONTEND",
    subtitle: "INTERFACES & CLIENTE REACTIVO",
    icon: "🔮",
    color: "#f43f85",
    modules: [
      {
        id: "react",
        name: "REACT 19",
        level: 95,
        category: "CORE UI",
        description:
          "Desarrollo de interfaces de usuario altamente interactivas con React Server Components, Hooks avanzados y arquitectura modular.",
        missions: ["JALDISHOP", "CHASKI", "VIASEGURA"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (95%)" },
          { label: "ENFOQUE", value: "ESTADO Y COMPONENTES" },
          { label: "TIEMPO RENDERING", value: "< 16ms (60 FPS)" },
        ],
        tag: "UI PRINCIPAL",
      },
      {
        id: "astro",
        name: "ASTRO 5",
        level: 94,
        category: "ISLANDS / SSR",
        description:
          "Arquitectura Islands para máximo rendimiento web, View Transitions fluidas, SSR híbrido y generación estática sin sobrecarga JS.",
        missions: ["ODYSSEY PORTFOLIO"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (94%)" },
          { label: "ISLANDS ARCH", value: "ZERO JS POR DEFECTO" },
          { label: "PERFORMANCE SCORE", value: "100 / 100" },
        ],
        tag: "ALTO RENDIMIENTO",
      },
      {
        id: "typescript",
        name: "TYPESCRIPT",
        level: 94,
        category: "TYPE SAFETY",
        description:
          "Tipado estricto de extremo a extremo, interfaces, genéricos y contratos sólidos entre frontend y backend para prevenir bugs.",
        missions: ["TODAS LAS MISIONES"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (94%)" },
          { label: "COBERTURA DE TIPOS", value: "ESTRICTA 100%" },
          { label: "DX & SEGURIDAD", value: "PREVENCIÓN EN COMPILACIÓN" },
        ],
        tag: "ESTÁNDAR CORE",
      },
      {
        id: "tailwind",
        name: "TAILWIND CSS",
        level: 96,
        category: "STYLING SYSTEM",
        description:
          "Sistemas de diseño modernos, CSS responsivo ultraoptimizado, utilidades semánticas y microanimaciones fluidas.",
        missions: ["JALDISHOP", "VIASEGURA", "PORTFOLIO"],
        specs: [
          { label: "MAESTRÍA", value: "EXPERTO (96%)" },
          { label: "SISTEMA DE DISEÑO", value: "NEO-PIXEL & RESPONSIVE" },
          { label: "BUNDLE IMPACT", value: "PURGED MINIMAL" },
        ],
        tag: "ESTILOS ULTRA RÁPIDOS",
      },
    ],
  },
  {
    id: "backend",
    slotNumber: "SLOT 02",
    title: "REACTOR BACKEND",
    subtitle: "NÚCLEO LÓGICO & SERVICIOS",
    icon: "⚙️",
    color: "#38bdf8",
    modules: [
      {
        id: "springboot",
        name: "SPRING BOOT",
        level: 90,
        category: "ENTERPRISE JAVA",
        description:
          "Microservicios empresariales con Java 17+, Spring Security con JWT, Spring Data JPA y manejo de alta concurrencia.",
        missions: ["JALDISHOP"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (90%)" },
          { label: "ARQUITECTURA", value: "CLEAN & LAYERED" },
          { label: "SEGURIDAD", value: "JWT + ROLE-BASED AUTH" },
        ],
        tag: "ROBUSTEZ ENTERPRISE",
      },
      {
        id: "nodejs",
        name: "NODE.JS & EXPRESS",
        level: 92,
        category: "ASYNC BACKEND",
        description:
          "Desarrollo de APIs RESTful asíncronas de alto rendimiento, microservicios orientados a eventos y middlewares personalizados.",
        missions: ["CHASKI"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (92%)" },
          { label: "EVENT-DRIVEN", value: "EVENT LOOP OPTIMIZADO" },
          { label: "TIEMPO DE RESPUESTA", value: "< 30ms" },
        ],
        tag: "ALTA CONCURRENCIA",
      },
      {
        id: "fastapi",
        name: "PYTHON / FASTAPI",
        level: 86,
        category: "AI & DATA APIS",
        description:
          "Endpoints modernos asíncronos para ingesta de datos, procesamiento geoespacial y consumo de modelos predictivos de IA.",
        missions: ["VIASEGURA"],
        specs: [
          { label: "MAESTRÍA", value: "PROEFICIENTE (86%)" },
          { label: "VALIDACIÓN", value: "PYDANTIC SCHEMAS" },
          { label: "INTEGRACIÓN IA", value: "MODELOS EN TIEMPO REAL" },
        ],
        tag: "IA & DATOS",
      },
    ],
  },
  {
    id: "database",
    slotNumber: "SLOT 03",
    title: "NÚCLEO DE DATOS",
    subtitle: "PERSISTENCIA, CACHÉ & ÍNDICES",
    icon: "💾",
    color: "#d8b4fe",
    modules: [
      {
        id: "postgresql",
        name: "POSTGRESQL",
        level: 92,
        category: "RELATIONAL SQL",
        description:
          "Modelado relacional avanzado, índices B-Tree y GIN, consultas optimizadas, transacciones ACID y soporte geoespacial con PostGIS.",
        missions: ["JALDISHOP", "VIASEGURA"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (92%)" },
          { label: "INTEGRIDAD", value: "ACID COMPLIANT" },
          { label: "EXTENSIÓN", value: "POSTGIS GEOESPACIAL" },
        ],
        tag: "SQL RELACIONAL",
      },
      {
        id: "mongodb",
        name: "MONGODB",
        level: 88,
        category: "NOSQL DOCUMENTS",
        description:
          "Modelado no relacional de alta velocidad para catálogos dinámicos, registros de eventos y pipelines de agregación.",
        missions: ["CHASKI"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (88%)" },
          { label: "ESQUEMA", value: "FLEXIBLE & AGGREGATION" },
          { label: "ESCALABILIDAD", value: "HORIZONTAL SHARDING" },
        ],
        tag: "DOCUMENT STORE",
      },
      {
        id: "redis",
        name: "REDIS",
        level: 85,
        category: "IN-MEMORY CACHE",
        description:
          "Almacenamiento en memoria ultrarrápido para caché de sesiones, colas de trabajo, rate limiting y patrones Pub/ Sub.",
        missions: ["CHASKI"],
        specs: [
          { label: "MAESTRÍA", value: "PROEFICIENTE (85%)" },
          { label: "TIEMPO ACCESO", value: "< 1ms" },
          { label: "USO PRINCIPAL", value: "CACHÉ DISTRIBUIDA" },
        ],
        tag: "ULTRA BAJA LATENCIA",
      },
    ],
  },
  {
    id: "devops",
    slotNumber: "SLOT 04",
    title: "ESCUDO DEVOPS",
    subtitle: "INFRAESTRUCTURA & AUTOMATIZACIÓN",
    icon: "🛡️",
    color: "#fbbf24",
    modules: [
      {
        id: "docker",
        name: "DOCKER",
        level: 90,
        category: "CONTAINERIZATION",
        description:
          "Empaquetado y aislamiento de aplicaciones en contenedores reproducibles, optimización de imágenes multicapa y Docker Compose.",
        missions: ["JALDISHOP", "VIASEGURA"],
        specs: [
          { label: "MAESTRÍA", value: "AVANZADA (90%)" },
          { label: "MULTI-STAGE BUILDS", value: "OPTIMIZADAS" },
          { label: "PORTABILIDAD", value: "100% AMBIENTES PARITARIOS" },
        ],
        tag: "CONTENEDORES",
      },
      {
        id: "cicd",
        name: "CI/CD & GITHUB ACTIONS",
        level: 86,
        category: "AUTOMATION",
        description:
          "Pipelines automatizados de integración y despliegue continuo para ejecución de pruebas unitarias, linting y delivery.",
        missions: ["TODAS LAS MISIONES"],
        specs: [
          { label: "MAESTRÍA", value: "PROEFICIENTE (86%)" },
          { label: "WORKFLOWS", value: "TESTS, LINT & DEPLOY" },
          { label: "TIEMPO PIPELINE", value: "< 3 MINUTOS" },
        ],
        tag: "ENTREGA CONTINUA",
      },
      {
        id: "git",
        name: "GIT & GITFLOW",
        level: 95,
        category: "VERSION CONTROL",
        description:
          "Control de versiones metódico, ramas estructuradas, rebase interactivo y resolución limpia de conflictos.",
        missions: ["TODOS LOS REPOSITORIOS"],
        specs: [
          { label: "MAESTRÍA", value: "EXPERTO (95%)" },
          { label: "ESTRATEGIA", value: "GITFLOW / TRUNK-BASED" },
        ],
        tag: "CONTROL DE CÓDIGO",
      },
    ],
  },
];
