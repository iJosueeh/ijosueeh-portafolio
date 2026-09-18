<div align="center">

# `iJOSUEEH` // Portafolio Interactivo

<p align="center">
  <b>Experiencia web interactiva y gamificada inspirada en consolas de telemetría retro-futuristas.</b><br />
  <sub>Diseñado y desarrollado por <b>Josué (iJosueeh)</b> — Ingeniero de Software & Desarrollador Full-Stack.</sub>
</p>

<br />

[![Astro 5](https://img.shields.io/badge/Astro_5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React 19](https://img.shields.io/badge/React_19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Sintetizador_8--Bit-F43F85?style=for-the-badge)](#-motor-de-audio-sintetizado)
[![Estado](https://img.shields.io/badge/Estado-ONLINE-10B981?style=for-the-badge)](https://ijosueeh.dev)

<br />

<p align="center">
  <a href="https://ijosueeh.dev"><b>🌐 Probar Demo en Vivo</b></a> &nbsp;•&nbsp;
  <a href="#-módulos-del-sistema"><b>🛰️ Módulos</b></a> &nbsp;•&nbsp;
  <a href="#-arquitectura-del-sistema"><b>🏛️ Arquitectura</b></a> &nbsp;•&nbsp;
  <a href="#-inicio-rápido"><b>🚀 Inicio Rápido</b></a> &nbsp;•&nbsp;
  <a href="#-frecuencias-de-contacto"><b>📡 Contacto</b></a>
</p>

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">◆ Características Principales ◆</div>

<div align="center">

| 📐 Disciplina 100dvh | ⚡ Astro View Transitions | 🔊 Audio en Tiempo Real |
| :---: | :---: | :---: |
| Experiencia inmersiva en pantalla única calibrada para **100dvh / 100vh** sin scrollbars verticales ni horizontales indeseadas. | Transiciones y morphing suave entre pantallas mediante `<ClientRouter />` sin parpadeos. | Sintetizador de audio de 8-bit procedural con **Web Audio API** nativo (cero archivos pesados `.mp3`). |

| ⌨️ Navegación por Teclado | 🏛️ Arquitectura SOLID | 🎨 Capa Atómica Neo-Pixel |
| :---: | :---: | :---: |
| Atajos globales arcade (`[◀ ▶]`, `[1-6]`, `[ENTER]`, `[ESC]`) con aislamiento de inputs. | Separación estricta de responsabilidades (SRP), datos inmutables y hooks desacoplados. | Componentes modulares (`NeoPixelCard`, `ScreenBreadcrumb`, `NeoPixelButton`). |

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">🛰️ Módulos del Sistema</div>

<div align="center">

```text
// TOPOLOGÍA DEL SISTEMA
/ (Perfil del Piloto)
  └── /modos (Selector de Módulos)
        ├── CH-01 // /perfil         ── Biografía, Estadísticas y Filosofía
        ├── CH-02 // /proyectos      ── Carrusel 3D y Briefing de Proyectos
        ├── CH-03 // /habilidades    ── Loadout Tecnológico y Experiencia
        ├── CH-04 // /carrera        ── Mapa Estelar y Trayectoria Profesional
        ├── CH-05 // /logros         ── Bóveda de Logros y Medallas
        └── CH-06 // /contacto       ── Terminal de Comunicación Directa
```

<br />

| Canal | Módulo | Ruta | Descripción de Telemetría |
| :---: | :--- | :---: | :--- |
| `CH-01` | **Perfil del Piloto** | [`/perfil`](https://ijosueeh.dev/perfil) | Biografía, atributos base, métricas clave y filosofía de desarrollo. |
| `CH-02` | **Proyectos** | [`/proyectos`](https://ijosueeh.dev/proyectos) | Carrusel 3D interactivo con swipe táctil, vistas previas e informes de misión. |
| `CH-03` | **Habilidades** | [`/habilidades`](https://ijosueeh.dev/habilidades) | Loadout por categorías (Frontend, Backend, Cloud, DB) con medidores de nivel. |
| `CH-04` | **Trayectoria** | [`/carrera`](https://ijosueeh.dev/carrera) | Radar planetario y línea de tiempo interactiva que conecta hitos y roles. |
| `CH-05` | **Bóveda de Logros** | [`/logros`](https://ijosueeh.dev/logros) | Vitrina holográfica con pedestales 3D para hitos de arquitectura y producción. |
| `CH-06` | **Contacto** | [`/contacto`](https://ijosueeh.dev/contacto) | Osciloscopio en tiempo real, copia rápida de correo y formulario cuántico. |

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">🕹️ Controles de Teclado</div>

<div align="center">

```text
 ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
 │    ◄  /  ▲  │   │    ►  /  ▼  │   │    ENTER    │
 │  Anterior   │   │  Siguiente  │   │  Confirmar  │
 └─────────────┘   └─────────────┘   └─────────────┘
 ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
 │     ESC     │   │   1  ..  6  │   │   MUTEAR    │
 │    Volver   │   │ Acceso Dir. │   │   Sonido    │
 └─────────────┘   └─────────────┘   └─────────────┘
```

| Tecla | Acción | Contexto |
| :--- | :--- | :--- |
| `[ ◀ ]` / `[ ▲ ]` | Elemento / Misión / Trofeo anterior | Navegación de listas y carruseles |
| `[ ▶ ]` / `[ ▼ ]` | Elemento / Misión / Trofeo siguiente | Navegación de listas y carruseles |
| `[ ENTER ]` | Confirmar selección / Abrir misión / Enviar | Acciones primarias |
| `[ ESC ]` | Volver al selector de módulos (`/modos`) | Retorno rápido |
| `[ 1 ]` .. `[ 6 ]` | Acceso directo por número de ranura | Selección rápida en `/modos` y sub-módulos |

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">🔊 Motor de Audio Sintetizado</div>

<p align="center">
  Todos los efectos de sonido son sintetizados en tiempo real en el cliente utilizando osciladores nativos de <b>Web Audio API</b>, sin consumir peticiones de red para archivos de audio.
</p>

<div align="center">

| Efecto | Tipo de Onda | Rango de Frecuencia | Propósito |
| :--- | :---: | :---: | :--- |
| **`hover`** | Senoidal | `440Hz ➔ 880Hz` | Barrido ultrarrápido al pasar el cursor sobre botones y tarjetas. |
| **`select`** | Cuadrada | `587Hz / 880Hz` | Pulso doble nítido para cambios de pestaña y selecciones. |
| **`coin`** | Senoidal | `987Hz ➔ 1318Hz` | Tono ascendente retro para trofeos e interacciones exitosas. |
| **`start`** | Mixta | Arpegio pentatónico | Sonido de despegue y confirmación de misiones. |
| **`warp`** | Triangular | Modulación descendente | Efecto espacial de transición entre pantallas. |

</div>

<p align="center">
  <sub>El estado de silencio (Mute) se sincroniza de forma reactiva entre todas las islas de Astro mediante <code>useSyncExternalStore</code> y persistencia en <code>localStorage</code>.</sub>
</p>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">🏛️ Arquitectura del Sistema</div>

<div align="center">

```text
src/
├── components/          # Capa de Presentación Modular (SRP)
│   ├── achievements/    # Pedestales 3D, estantería y artwork de trofeos
│   ├── career/          # Radar planetario, pods de telemetría y controles
│   ├── contact/         # Osciloscopio de radio y formulario de despacho
│   ├── mission-detail/  # Capítulos de briefing, monitor CRT y navegación
│   ├── projects/        # Anillo 3D de proyectos e ilustraciones pixel art
│   ├── skills/          # Tabs de loadout, chips de módulos y consola
│   └── ui/              # Capa Atómica: NeoPixelCard, ScreenBreadcrumb, NeoPixelButton
├── data/                # Fuente de Verdad Inmutable (Pure TypeScript Data Layer)
├── hooks/               # Custom Hooks React 19 (useRetroAudio, useKeyboardNav)
├── layouts/             # Layout Base Astro con ClientRouter (View Transitions)
├── pages/               # Rutas Estáticas Pre-renderizadas (11 páginas SSG)
├── types/               # Contratos Centralizados de TypeScript
└── utils/               # Motor de Audio (Patrón Strategy) y Navegación
```

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">⚡ Stack Tecnológico</div>

<div align="center">

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Generación Estática** | [Astro 5](https://astro.build/) | Motor SSG de alto rendimiento y enrutamiento con View Transitions. |
| **Capa de Interfaz** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Componentes interactivos, tipado estricto y hooks modernos. |
| **Sistema de Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades atómicas y tokens de color personalizados Neo-Pixel. |
| **Audio Engine** | Web Audio API | Sintetizador de ondas de 8-bit procedural en tiempo real. |
| **Tipografía** | Google Fonts | Chakra Petch, Press Start 2P, Space Mono, Inter. |

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">🚀 Inicio Rápido</div>

<div align="center">

### Prerrequisitos
`Node.js >= 18.17.0` &nbsp;•&nbsp; `pnpm` (recomendado), `npm` o `yarn`

</div>

```bash
# 1. Clonar el repositorio
git clone https://github.com/iJosueeh/portfolio.git

# 2. Acceder al directorio
cd portfolio

# 3. Instalar dependencias
pnpm install

# 4. Iniciar el servidor de desarrollo local
pnpm dev
```

<div align="center">

### Comandos de Compilación

| Comando | Descripción |
| :--- | :--- |
| `pnpm build` | Compila las 11 rutas estáticas optimizadas para producción en `./dist/` |
| `pnpm preview` | Previsualiza el build de producción localmente en `http://localhost:4321` |
| `pnpm astro check` | Ejecuta la verificación estricta de tipos de TypeScript y Astro |

</div>

<br />

<div align="center">
  <hr width="80%" />
</div>

<br />

## <div align="center">📡 Frecuencias de Contacto</div>

<div align="center">

<p align="center">
  <b>¿Tienes una propuesta o misión en mente? Conecta directamente:</b>
</p>

[![Email](https://img.shields.io/badge/Email-josue.huarcaya12%40gmail.com-F43F85?style=for-the-badge&logo=gmail&logoColor=white)](mailto:josue.huarcaya12@gmail.com)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Josué_Huarcaya-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-iJosueeh-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iJosueeh)

<br />

```text
[ FRECUENCIA: 142.800 MHz // CANAL DE CONTACTO PROFESIONAL ACTIVO ]
```

<br />

<sub>Desarrollado con dedicación por <b>Josué (iJosueeh)</b>. © 2026 Todos los derechos reservados.</sub>

</div>
