import type { PlanetaryStation } from "../types";

export const CAREER_STATIONS: PlanetaryStation[] = [
  {
    id: "station-academy",
    order: 0,
    sectorNumber: "SECTOR 01",
    name: "ACADEMIA UTP",
    planetType: "PLANETA ROCOSO // ORIGEN",
    period: "2023 — PRESENTE",
    role: "INGENIERÍA DE SOFTWARE",
    environment: "FORMACIÓN & PROYECTOS DE SOFTWARE",
    status: "FORMACIÓN ACTIVA",
    coordinates: "COORD: [18.2 AU // 04.1° E]",
    posX: 18,
    posY: 55,
    color: "#d8b4fe",
    description:
      "Inicio de mi trayectoria en Ingeniería de Software en la UTP. Evolución desde fundamentos de programación y bases de datos hacia desarrollo Full Stack, arquitectura de software y construcción de proyectos completos.",

    achievements: [
      "1.er puesto de la promoción entre 301 estudiantes con promedio ponderado de 19.42/20.",
      "Beneficiario de la Beca por Excelencia Académica UTP e integrante del Décimo Superior.",
      "Desarrollo de proyectos con Java, Spring Boot, React, Angular y bases de datos relacionales.",
    ],
    stack: ["JAVA", "SPRING BOOT", "REACT", "ANGULAR", "POSTGRESQL", "GIT"],
    illustration: "genesis-planet",
  },
  {
    id: "station-fintech",
    order: 1,
    sectorNumber: "SECTOR 02",
    name: "NÚCLEO FINTECH",
    planetType: "ESTACIÓN SERVERLESS // AZURE",
    period: "JUN 2025 — DIC 2025",
    role: "BACKEND DEVELOPER",
    environment: "FINTECH & MICROSERVICIOS SERVERLESS",
    status: "MISIÓN CONCLUIDA",
    coordinates: "COORD: [88.4 AU // 18.9° S]",
    posX: 50,
    posY: 25,
    color: "#38bdf8",
    description:
      "Primera experiencia profesional enfocada en desarrollo Backend para una solución del sector financiero, trabajando con .NET 8, Azure Functions e integraciones mediante APIs bajo supervisión técnica senior.",

    achievements: [
      "Desarrollo de 12+ microservicios serverless con .NET 8 y Azure Functions para procesos de tarjetas y créditos.",
      "Estandarización de DTOs y contratos de API utilizados en integraciones con Evertec.",
      "Automatización y estandarización de configuraciones utilizadas por los microservicios durante la preparación de entornos.",
    ],
    stack: ["C#", ".NET 8", "AZURE FUNCTIONS", "REST APIs", "POSTMAN", "GIT"],
    illustration: "orbital-station",
  },
  {
    id: "station-lumina",
    order: 2,
    sectorNumber: "SECTOR 03",
    name: "LUMINA CORE",
    planetType: "GIGANTE ANILLADO // FULL-STACK",
    period: "ENE 2026 — PRESENTE",
    role: "JUNIOR FULL-STACK DEVELOPER",
    environment: "ANGULAR & .NET",
    status: "ÓRBITA ACTUAL",
    coordinates: "COORD: [142.8 AU // 45.2° N]",
    posX: 82,
    posY: 55,
    color: "#f43f85",
    description:
      "Etapa profesional actual orientada al desarrollo Full Stack, participando en la modernización de una plataforma con Angular y .NET bajo la mentoría de un Arquitecto Senior.",
    achievements: [
      "Migración de componentes frontend de Angular 20 a Angular 21 e incorporación de Signals.",
      "Desarrollo de servicios con .NET 8/9 aplicando CQRS con MediatR y separación de responsabilidades.",
      "Construcción de componentes UI reutilizables e integración con SQL Server, MongoDB, Docker y MinIO.",
    ],
    stack: ["ANGULAR", "TYPESCRIPT", ".NET", "CQRS", "SQL SERVER", "DOCKER"],
    illustration: "gas-giant",
  },
];
