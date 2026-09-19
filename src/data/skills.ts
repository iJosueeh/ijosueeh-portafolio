import type { LoadoutSlot } from "../types";

export const LOADOUT_SLOTS: LoadoutSlot[] = [
  {
    id: "frontend",
    slotNumber: "SLOT 01",
    title: "CAÑÓN FRONTEND",
    subtitle: "INTERFACES & EXPERIENCIA DE USUARIO",
    icon: "🔮",
    color: "#f43f85",
    modules: [
      {
        id: "angular",
        name: "ANGULAR",
        level: 85,
        category: "CORE FRONTEND",
        description:
          "Desarrollo de aplicaciones web modulares con Angular, TypeScript, Signals, componentes reutilizables e integración con servicios backend.",
        missions: ["LUMINA CORE", "NEXORA"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "STACK", value: "ANGULAR 20/21 + TYPESCRIPT" },
          { label: "ENFOQUE", value: "SIGNALS & COMPONENTES" },
        ],
        tag: "FRONTEND PRINCIPAL",
      },
      {
        id: "react",
        name: "REACT",
        level: 78,
        category: "WEB UI",
        description:
          "Desarrollo de interfaces web con React y TypeScript, gestión de estado, consumo de APIs y construcción de componentes reutilizables.",
        missions: ["JAKKY", "AMAUTA"],
        specs: [
          { label: "EXPERIENCIA", value: "PROYECTOS" },
          { label: "STACK", value: "REACT + TYPESCRIPT" },
          { label: "ENFOQUE", value: "ESTADO & COMPONENTES" },
        ],
        tag: "UI & PRODUCTO",
      },
      {
        id: "typescript",
        name: "TYPESCRIPT",
        level: 82,
        category: "TYPE SAFETY",
        description:
          "Uso de tipado estático, interfaces y contratos para desarrollar aplicaciones frontend más predecibles y mantenibles.",
        missions: ["LUMINA CORE", "JAKKY", "NEXORA"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL & PROYECTOS" },
          { label: "USO", value: "ANGULAR & REACT" },
          { label: "ENFOQUE", value: "TIPADO & CONTRATOS" },
        ],
        tag: "LENGUAJE CORE",
      },
      {
        id: "tailwind",
        name: "TAILWIND CSS",
        level: 72,
        category: "STYLING",
        description:
          "Construcción de interfaces responsivas y sistemas visuales mediante utilidades CSS y componentes reutilizables.",
        missions: ["JAKKY", "PORTFOLIO"],
        specs: [
          { label: "EXPERIENCIA", value: "PROYECTOS" },
          { label: "ENFOQUE", value: "RESPONSIVE UI" },
          { label: "USO", value: "DISEÑO & COMPONENTES" },
        ],
        tag: "ESTILOS",
      },
    ],
  },
  {
    id: "backend",
    slotNumber: "SLOT 02",
    title: "REACTOR BACKEND",
    subtitle: "SERVICIOS, APIs & LÓGICA DE NEGOCIO",
    icon: "⚙️",
    color: "#38bdf8",
    modules: [
      {
        id: "dotnet",
        name: ".NET / C#",
        level: 88,
        category: "CORE BACKEND",
        description:
          "Desarrollo de servicios backend y microservicios con C#, .NET 8/9, APIs y separación de responsabilidades mediante patrones como CQRS.",
        missions: ["LUMINA CORE", "PROYECTO FINTECH"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "MICROSERVICIOS", value: "12+ EN FINTECH" },
          { label: "PATRONES", value: "CQRS + MEDIATR" },
        ],
        tag: "BACKEND PRINCIPAL",
      },
      {
        id: "azure-functions",
        name: "AZURE FUNCTIONS",
        level: 82,
        category: "SERVERLESS",
        description:
          "Desarrollo de microservicios serverless con .NET 8 para procesos financieros e integración mediante contratos de API.",
        missions: ["PROYECTO FINTECH"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "SERVICIOS", value: "12+ MICROSERVICIOS" },
          { label: "PLATAFORMA", value: "MICROSOFT AZURE" },
        ],
        tag: "SERVERLESS",
      },
      {
        id: "springboot",
        name: "SPRING BOOT",
        level: 78,
        category: "JAVA BACKEND",
        description:
          "Desarrollo de aplicaciones backend con Java y Spring Boot, persistencia relacional, seguridad y construcción de APIs.",
        missions: ["UTP MARKET", "JALDISHOP"],
        specs: [
          { label: "EXPERIENCIA", value: "PROYECTOS" },
          { label: "LENGUAJE", value: "JAVA" },
          { label: "ENFOQUE", value: "APIs & PERSISTENCIA" },
        ],
        tag: "JAVA BACKEND",
      },
      {
        id: "rest",
        name: "REST APIs",
        level: 84,
        category: "INTEGRATION",
        description:
          "Diseño, consumo e integración de APIs mediante contratos claros, DTOs y separación entre servicios y clientes.",
        missions: ["LUMINA CORE", "PROYECTO FINTECH", "UTP MARKET"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "CONTRATOS", value: "DTOs & ENDPOINTS" },
          { label: "INTEGRACIONES", value: "SERVICIOS EXTERNOS" },
        ],
        tag: "INTEGRACIÓN",
      },
    ],
  },
  {
    id: "database",
    slotNumber: "SLOT 03",
    title: "NÚCLEO DE DATOS",
    subtitle: "PERSISTENCIA & MODELADO",
    icon: "💾",
    color: "#d8b4fe",
    modules: [
      {
        id: "postgresql",
        name: "POSTGRESQL",
        level: 82,
        category: "RELATIONAL SQL",
        description:
          "Diseño y uso de bases de datos relacionales con PostgreSQL, modelado de entidades, consultas SQL y persistencia desde aplicaciones backend.",
        missions: ["UTP MARKET", "JALDISHOP"],
        specs: [
          { label: "EXPERIENCIA", value: "PROYECTOS" },
          { label: "MODELO", value: "RELACIONAL" },
          { label: "INTEGRACIÓN", value: "SPRING BOOT" },
        ],
        tag: "SQL PRINCIPAL",
      },
      {
        id: "sqlserver",
        name: "SQL SERVER",
        level: 78,
        category: "RELATIONAL SQL",
        description:
          "Modelado, consultas y persistencia de datos con SQL Server en aplicaciones académicas y entornos de desarrollo.",
        missions: ["LUMINA CORE", "MEDITRACK"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL & PROYECTOS" },
          { label: "MODELO", value: "RELACIONAL" },
          { label: "CLOUD", value: "AZURE SQL" },
        ],
        tag: "SQL & AZURE",
      },
      {
        id: "mongodb",
        name: "MONGODB",
        level: 72,
        category: "NOSQL DOCUMENTS",
        description:
          "Persistencia documental con MongoDB para escenarios que requieren estructuras de datos flexibles.",
        missions: ["LUMINA CORE"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "MODELO", value: "DOCUMENTAL" },
          { label: "USO", value: "PERSISTENCIA NOSQL" },
        ],
        tag: "DOCUMENT STORE",
      },
    ],
  },
  {
    id: "devops",
    slotNumber: "SLOT 04",
    title: "ESCUDO DEVOPS",
    subtitle: "ENTORNOS, CLOUD & CONTROL DE VERSIONES",
    icon: "🛡️",
    color: "#fbbf24",
    modules: [
      {
        id: "docker",
        name: "DOCKER",
        level: 78,
        category: "CONTAINERIZATION",
        description:
          "Contenerización de aplicaciones y servicios para mantener entornos de desarrollo reproducibles y facilitar su integración.",
        missions: ["LUMINA CORE"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "USO", value: "CONTENEDORES" },
          { label: "ENTORNOS", value: "DESARROLLO LOCAL" },
        ],
        tag: "CONTENEDORES",
      },
      {
        id: "azure",
        name: "MICROSOFT AZURE",
        level: 76,
        category: "CLOUD",
        description:
          "Experiencia trabajando con servicios de Azure en soluciones backend, especialmente Azure Functions y entornos corporativos.",
        missions: ["PROYECTO FINTECH"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "SERVERLESS", value: "AZURE FUNCTIONS" },
          { label: "BACKEND", value: ".NET 8" },
        ],
        tag: "CLOUD",
      },
      {
        id: "git",
        name: "GIT & GITHUB",
        level: 86,
        category: "VERSION CONTROL",
        description:
          "Control de versiones y colaboración mediante Git y GitHub en proyectos profesionales, académicos y personales.",
        missions: ["EXPERIENCIA", "PROYECTOS", "PORTFOLIO"],
        specs: [
          { label: "EXPERIENCIA", value: "USO CONTINUO" },
          { label: "WORKFLOW", value: "BRANCHES & PULL REQUESTS" },
          { label: "COLABORACIÓN", value: "REPOSITORIOS EN EQUIPO" },
        ],
        tag: "CONTROL DE VERSIONES",
      },
      {
        id: "postman",
        name: "POSTMAN",
        level: 80,
        category: "API TOOLING",
        description:
          "Pruebas, validación y documentación de APIs durante el desarrollo e integración de servicios backend.",
        missions: ["LUMINA CORE", "PROYECTO FINTECH"],
        specs: [
          { label: "EXPERIENCIA", value: "PROFESIONAL" },
          { label: "ENFOQUE", value: "API TESTING" },
          { label: "CREDENCIAL", value: "STUDENT EXPERT" },
        ],
        tag: "API TESTING",
      },
    ],
  },
];
