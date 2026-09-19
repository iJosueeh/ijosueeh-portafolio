<div align="center">

# `IJosueeh` - Portafolio

<p align="center">
  <b>Experiencia web interactiva y gamificada inspirada en consolas de telemetría retro-futuristas.</b><br />
  <sub>Diseñado y desarrollado por <b>Josué (iJosueeh)</b> — Ingeniero de Software & Desarrollador Full-Stack.</sub>
</p>

<br />

[![Astro](https://img.shields.io/badge/Astro_5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React_19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Sintetizador_8--Bit-F43F85?style=for-the-badge)](#-motor-de-audio-sintetizado)
[![Estado](https://img.shields.io/badge/Dominio-https%3A%2F%2Fijosueeh.dev-10B981?style=for-the-badge)](https://ijosueeh.dev)

<br />

<p align="center">
  <a href="https://ijosueeh.dev"><b>🌐 Visitar Sitio Web (ijosueeh.dev)</b></a> &nbsp;•&nbsp;
  <a href="#-módulos-del-sistema"><b>🛰️ Módulos</b></a> &nbsp;•&nbsp;
  <a href="#-arquitectura-del-sistema"><b>🏛️ Arquitectura</b></a> &nbsp;•&nbsp;
  <a href="#-inicio-rápido"><b>🚀 Inicio Rápido</b></a> &nbsp;•&nbsp;
  <a href="#-frecuencias-de-contacto"><b>📡 Contacto</b></a>
</p>

</div>

<br />

---

## ◆ Características Principales

| Característica | Descripción |
| :--- | :--- |
| 📐 **Disciplina 100dvh** | Experiencia inmersiva en pantalla única calibrada para `100dvh / 100vh` sin scrollbars verticales ni horizontales indeseadas. |
| ⚡ **Astro View Transitions** | Transiciones y morphing suave entre pantallas mediante `<ClientRouter />` sin parpadeos de carga. |
| 🔊 **Audio en Tiempo Real** | Sintetizador de audio de 8-bit procedural con **Web Audio API** nativo (cero peticiones de archivos `.mp3`). |
| ⌨️ **Navegación por Teclado** | Atajos globales arcade (`[◀ ▶]`, `[1-6]`, `[ENTER]`, `[ESC]`) con aislamiento automático al escribir en inputs. |
| 📬 **Despacho Directo de Correos** | Integración nativa con **Web3Forms** para envío de mensajes en sitios estáticos con protección honeypot y fallback automático a `mailto:`. |
| 🎨 **Capa Atómica Neo-Pixel** | Componentes modulares reutilizables (`NeoPixelCard`, `ScreenBreadcrumb`, `NeoPixelButton`, `PixelIcon`). |
| ☁️ **Despliegue Global Edge** | Alojado en **Cloudflare Pages** con certificado SSL automático y CDN de ultra-baja latencia sobre dominio propio. |

<br />

---

## 🛰️ Módulos del Sistema

```text
// TOPOLOGÍA DEL SISTEMA
/ (Perfil del Piloto - Character Select)
  └── /modos (Selector de Módulos)
        ├── CH-01 // /perfil         ── Biografía, Estadísticas y Filosofía
        ├── CH-02 // /proyectos      ── Carrusel 3D y Briefing de Proyectos (5 Misiones)
        ├── CH-03 // /habilidades    ── Loadout Tecnológico y Consola de Telemetría
        ├── CH-04 // /carrera        ── Mapa Estelar y Trayectoria Profesional
        ├── CH-05 // /logros         ── Bóveda de Logros y Medallas Holográficas
        └── CH-06 // /contacto       ── Radio Cuántica, Web3Forms & Descarga de CV
```

### Detalle de Módulos

| Canal | Módulo | Ruta | Descripción de Telemetría |
| :---: | :--- | :---: | :--- |
| `CH-01` | **Perfil del Piloto** | [`/perfil`](https://ijosueeh.dev/perfil) | Biografía, atributos base, métricas clave y filosofía de desarrollo. |
| `CH-02` | **Proyectos** | [`/proyectos`](https://ijosueeh.dev/proyectos) | Carrusel 3D interactivo con swipe táctil, vistas previas e informes detallados de misión. |
| `CH-03` | **Habilidades** | [`/habilidades`](https://ijosueeh.dev/habilidades) | Loadout por categorías (Frontend, Backend, Cloud, DB) con medidores y chips equipados. |
| `CH-04` | **Trayectoria** | [`/carrera`](https://ijosueeh.dev/carrera) | Radar planetario y línea de tiempo interactiva que conecta hitos y roles profesionales. |
| `CH-05` | **Bóveda de Logros** | [`/logros`](https://ijosueeh.dev/logros) | Vitrina holográfica con pedestales 3D para hitos de arquitectura, producción e impacto. |
| `CH-06` | **Contacto** | [`/contacto`](https://ijosueeh.dev/contacto) | Osciloscopio en tiempo real, copia rápida de correo, despacho Web3Forms y descarga de CV. |

<br />

---

## 🕹️ Controles de Teclado

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
| `[ ◀ ]` / `[ ▲ ]` | Elemento / Misión / Módulo anterior | Navegación de listas y carruseles |
| `[ ▶ ]` / `[ ▼ ]` | Elemento / Misión / Módulo siguiente | Navegación de listas y carruseles |
| `[ ENTER ]` | Confirmar selección / Abrir misión / Despachar | Acciones primarias |
| `[ ESC ]` | Volver al selector de módulos (`/modos`) o inicio | Retorno rápido |
| `[ 1 ]` .. `[ 6 ]` | Acceso directo por número de módulo | Selección rápida en `/modos` |

<br />

---

## 🔊 Motor de Audio Sintetizado

Todos los efectos de sonido son generados procedimentalmente en tiempo real en el cliente utilizando osciladores nativos de **Web Audio API**:

| Efecto | Tipo de Onda | Rango de Frecuencia | Propósito |
| :--- | :---: | :---: | :--- |
| **`hover`** | Cuadrada | `440Hz ➔ 880Hz` | Barrido ultrarrápido al interactuar con botones y tarjetas. |
| **`select`** | Cuadrada | `587Hz / 880Hz` | Pulso doble nítido para cambios de pestaña y selecciones. |
| **`coin`** | Cuadrada | `987Hz ➔ 1318Hz` | Tono ascendente retro para trofeos y transmisiones exitosas. |
| **`start`** | Triangular | Arpegio C5-E5-G5-C6 | Sonido de despegue y confirmación de misiones. |
| **`warp`** | Diente de sierra | `220Hz ➔ 1200Hz` | Efecto espacial de aceleración y navegación. |
| **`laser`** | Diente de sierra | `880Hz ➔ 110Hz` | Rampa descendente arcade para alertas y fallbacks. |
| **`error`** | Diente de sierra | `160Hz ➔ 100Hz` | Alerta grave de fallo en telemetría o formulario. |

> **Sincronización:** El estado de sonido (*Mute*) se sincroniza entre todas las islas de Astro con `useSyncExternalStore` y persistencia en `localStorage`.

<br />

---

## 🏛️ Arquitectura del Proyecto

```text
src/
├── components/          # Capa de Presentación Modular
│   ├── achievements/    # Pedestales 3D y vitrina de trofeos
│   ├── career/          # Radar planetario, pods de telemetría y controles
│   ├── contact/         # Osciloscopio de radio, frecuencias y SubSpaceForm (Web3Forms)
│   ├── mission-detail/  # Briefing de misiones, monitor CRT y navegación
│   ├── projects/        # Carrusel 3D de proyectos e ilustraciones
│   ├── skills/          # Tabs de loadout, chips de módulos y consola
│   └── ui/              # Capa Atómica: NeoPixelCard, NeoPixelButton, PixelIcon, Breadcrumbs
├── data/                # Fuente de Verdad Inmutable (Datos tipados puros)
├── hooks/               # Custom Hooks React 19 (useRetroAudio, useKeyboardNav)
├── layouts/             # Layout Base Astro con ClientRouter y CRT Overlay
├── pages/               # 13 Rutas Estáticas Pre-renderizadas (SSG)
├── types/               # Contratos e Interfaces de TypeScript
└── utils/               # Motor de Audio (Patrón Strategy) y Enrutamiento
```

<br />

---

## ⚡ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Generador SSG** | [Astro 5](https://astro.build/) | Motor de generación estática de alto rendimiento y View Transitions. |
| **Componentes de UI** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Componentes interactivos, contratos de tipos y hooks modernos. |
| **Diseño y Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades CSS modernas y tokens temáticos Neo-Pixel. |
| **Iconografía** | [Pixelarticons](https://pixelarticons.com/) | Biblioteca de íconos temáticos pixel art en formato SVG puro. |
| **Despacho de Correos**| [Web3Forms](https://web3forms.com/) | API serverless para envío seguro de formularios de contacto estáticos. |
| **Audio Engine** | Web Audio API | Sintetizador de ondas 8-bit procedural sin archivos estáticos pesados. |
| **Hosting & CDN** | [Cloudflare Pages](https://pages.cloudflare.com/) | Despliegue estático global edge en `https://ijosueeh.dev`. |

<br />

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** `>= 22.12.0`
- **pnpm** `>= 10.0.0` (recomendado)

### Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/iJosueeh/ijosueeh-portafolio.git

# 2. Acceder al directorio
cd ijosueeh-portafolio

# 3. Configurar variables de entorno (Opcional para Web3Forms)
cp .env.example .env
# Añade tu clave en .env: PUBLIC_WEB3FORMS_KEY=tu_clave_aqui

# 4. Instalar dependencias con pnpm
pnpm install

# 5. Iniciar el servidor de desarrollo local
pnpm dev
```

### Comandos de Compilación

| Comando | Descripción |
| :--- | :--- |
| `pnpm build` | Compila las 13 rutas estáticas optimizadas para producción en `./dist/` |
| `pnpm preview` | Previsualiza el build de producción localmente en `http://localhost:4321` |
| `pnpm astro check` | Ejecuta la verificación estricta de tipos de TypeScript y Astro |

<br />

---

## ☁️ Despliegue en Cloudflare Pages

1. Conecta tu repositorio de GitHub en [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Compute (Workers & Pages)** > **Pages** > **Connect to Git**.
2. Parámetros de compilación:
   - **Framework preset:** `Astro`
   - **Build command:** `pnpm run build`
   - **Build output directory:** `dist`
   - **Variables de entorno:** `PUBLIC_WEB3FORMS_KEY` = `tu_access_key`
3. En la pestaña **Custom domains**, añade tu dominio personalizado `ijosueeh.dev`.

<br />

---

## 📡 Frecuencias de Contacto

<div align="center">

<p align="center">
  <b>¿Tienes una propuesta o misión en mente? Conecta directamente:</b>
</p>

[![Email](https://img.shields.io/badge/Email-royer.tanta27%40gmail.com-F43F85?style=for-the-badge&logo=gmail&logoColor=white)](mailto:royer.tanta27@gmail.com)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Josué_Tanta-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ijosueeh)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-iJosueeh-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iJosueeh)

<br />

```text
[ FRECUENCIA: 1420.405 MHz // CANAL DE COMUNICACIÓN ACTIVO ]
```

<br />

<sub>Desarrollado por <b>Josué Royer Tanta Cieza (iJosueeh)</b>. © 2026 Todos los derechos reservados.</sub>

</div>
