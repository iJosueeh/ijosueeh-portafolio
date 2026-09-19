export interface ModeConfig {
  id: string;
  code: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: "user" | "rocket" | "tech" | "journey" | "trophy" | "comms";
  href: string;
}

export const MODES_DATA: ModeConfig[] = [
  {
    id: "profile",
    code: "CH-01",
    index: "01 //",
    title: "PERFIL",
    subtitle: "SOBRE MÍ & PILOTO",
    badge: "HISTORIA",
    description:
      "CONOCE MI HISTORIA, ENFOQUE TÉCNICO Y FILOSOFÍA DE DESARROLLO.",
    icon: "user",
    href: "/perfil",
  },
  {
    id: "projects",
    code: "CH-02",
    index: "02 //",
    title: "PROYECTOS",
    subtitle: "MISIONES & DEMOS",
    badge: "MISIONES",
    description:
      "EXPLORA LOS PROYECTOS, APLICACIONES Y SOLUCIONES QUE HE CONSTRUIDO.",
    icon: "rocket",
    href: "/proyectos",
  },
  {
    id: "skills",
    code: "CH-03",
    index: "03 //",
    title: "HABILIDADES",
    subtitle: "STACK & MÓDULOS",
    badge: "LOADOUT",
    description:
      "EXPLORA MI STACK: .NET, SPRING BOOT, ANGULAR, REACT, DATOS Y CLOUD.",
    icon: "tech",
    href: "/habilidades",
  },
  {
    id: "experience",
    code: "CH-04",
    index: "04 //",
    title: "TRAYECTORIA",
    subtitle: "EXPERIENCIA & FORMACIÓN",
    badge: "SECTORES",
    description:
      "RECORRE MI EVOLUCIÓN ACADÉMICA Y EXPERIENCIA PROFESIONAL EN DESARROLLO DE SOFTWARE.",
    icon: "journey",
    href: "/carrera",
  },
  {
    id: "achievements",
    code: "CH-05",
    index: "05 //",
    title: "LOGROS",
    subtitle: "HITOS DESBLOQUEADOS",
    badge: "BÓVEDA",
    description:
      "DESCUBRE RECONOCIMIENTOS, HACKATHONS Y LOGROS QUE HAN MARCADO MI TRAYECTORIA.",
    icon: "trophy",
    href: "/logros",
  },
  {
    id: "contact",
    code: "CH-06",
    index: "06 //",
    title: "CONTACTO",
    subtitle: "CANAL DE COMUNICACIÓN",
    badge: "ENLACE",
    description:
      "ESTABLECE ENLACE DIRECTO PARA OPORTUNIDADES, PROYECTOS Y COLABORACIONES.",
    icon: "comms",
    href: "/contacto",
  },
];
