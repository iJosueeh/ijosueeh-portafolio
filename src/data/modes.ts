export interface ModeConfig {
  id: string;
  code: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
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
    subtitle: "TRABAJOS & DEMOS",
    description:
      "EXPLORA LAS MISIONES, APLICACIONES Y SISTEMAS WEB QUE HE CONSTRUIDO.",
    icon: "rocket",
    href: "/proyectos",
  },
  {
    id: "skills",
    code: "CH-03",
    index: "03 //",
    title: "HABILIDADES",
    subtitle: "STACK & MÓDULOS",
    description:
      "INVENTARIO DE HERRAMIENTAS: REACT, ASTRO, TYPESCRIPT, NODE Y ARQUITECTURA.",
    icon: "tech",
    href: "/habilidades",
  },
  {
    id: "experience",
    code: "CH-04",
    index: "04 //",
    title: "CARRERA",
    subtitle: "TRAYECTORIA & XP",
    description:
      "BITÁCORA DE VIAJE: EXPERIENCIA PROFESIONAL Y EMPRESAS EN LAS QUE HE COLABORADO.",
    icon: "journey",
    href: "/carrera",
  },
  {
    id: "achievements",
    code: "CH-05",
    index: "05 //",
    title: "LOGROS",
    subtitle: "HITOS DESBLOQUEADOS",
    description:
      "CERTIFICACIONES, MISIONES COMPLETADAS Y CASOS DE ÉXITO DESTACADOS.",
    icon: "trophy",
    href: "/logros",
  },
  {
    id: "contact",
    code: "CH-06",
    index: "06 //",
    title: "CONTACTO",
    subtitle: "CANAL DE COMUNICACIÓN",
    description:
      "ESTABLECE ENLACE DIRECTO PARA NUEVAS OPORTUNIDADES Y COLABORACIONES.",
    icon: "comms",
    href: "/contacto",
  },
];
