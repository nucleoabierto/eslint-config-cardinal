import { defineConfig } from 'vitepress'

// Constants to avoid duplication
const CONFIG_TEXTS = {
  all: 'Todas las Configuraciones',
  basic: '⚡ Basic',
  recommended: '🎯 Recommended',
  typescript: '📘 TypeScript',
  allPreset: '🚀 All',
  react: '⚛️ React',
}

export default defineConfig({
  title: 'ESLint Cardinal',
  description: 'Configuración ESLint con Balance Inteligente - Modernidad sin Fricción',
  lang: 'es-ES',

  head: [
    ['meta', { name: 'keywords', content: 'eslint, javascript, typescript, code-quality, linting' }],
    ['meta', { name: 'author', content: 'Núcleo Abierto' }],
    ['meta', { property: 'og:title', content: 'ESLint Cardinal - Balance Inteligente' }],
    ['meta', { property: 'og:description', content: 'Configuración ESLint moderna con balance entre calidad y pragmatismo' }],
  ],
  cleanUrls: true,
  ignoreDeadLinks: false,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
    container: {
      tipLabel: 'CONSEJO',
      warningLabel: 'ADVERTENCIA',
      dangerLabel: 'PELIGRO',
      infoLabel: 'INFO',
      detailsLabel: 'Detalles',
    },
  },
  themeConfig: {
    nav: [
      { text: '🏠 Inicio', link: '/' },
      { text: '🚀 Presets', link: '/presets/' },
      { text: '⚙️ Configuraciones', link: '/configurations' },
      { text: '🔧 Guías', link: '/guides/rules-reference' },
      { text: '📚 Aprender', link: '/guide/introduction' },
      { text: '💡 Ejemplos', link: '/examples/complete-guide' },
    ],
    sidebar: [
      {
        text: '⚙️ Configuraciones',
        items: [
          { text: CONFIG_TEXTS.all, link: '/configurations' },
          { text: CONFIG_TEXTS.basic, link: '/configurations/basic' },
          { text: CONFIG_TEXTS.recommended, link: '/configurations/recommended' },
          { text: CONFIG_TEXTS.typescript, link: '/configurations/typescript' },
          { text: CONFIG_TEXTS.allPreset, link: '/configurations/all' },
          { text: CONFIG_TEXTS.react, link: '/configurations/react' },
        ],
        collapsed: false,
      },
      {
        text: '🧩 Módulos',
        items: [
          { text: 'Todos los Módulos', link: '/modules' },
          { text: '🎨 Style', link: '/modules/style' },
          { text: '🔍 Code Quality', link: '/modules/code-quality' },
          { text: '📦 Variables', link: '/modules/variables' },
          { text: '⭐ Best Practices', link: '/modules/best-practices' },
          { text: '📥 Imports', link: '/modules/imports' },
          { text: '🔄 Promises', link: '/modules/promises' },
          { text: '🟢 Node', link: '/modules/node' },
          { text: '🔒 Security', link: '/modules/security' },
          { text: '⚛️ React', link: '/modules/react' },
          { text: '📘 TypeScript', link: '/modules/typescript' },
          { text: '🚀 TypeScript Advanced', link: '/modules/typescript-advanced' },
          { text: '🌊 Relaxed', link: '/modules/relaxed' },
        ],
        collapsed: true,
      },
      {
        text: '🚀 Presets',
        items: [
          { text: 'Comparación de Presets', link: '/presets/' },
          { text: CONFIG_TEXTS.basic, link: '/presets/basic' },
          { text: CONFIG_TEXTS.recommended, link: '/presets/recommended' },
          { text: CONFIG_TEXTS.allPreset, link: '/presets/all' },
          { text: CONFIG_TEXTS.react, link: '/presets/react' },
          { text: CONFIG_TEXTS.typescript, link: '/presets/typescript' },
        ],
        collapsed: true,
      },
      {
        text: '🔧 Guías',
        items: [
          { text: 'Índice de Reglas', link: '/guides/rules-reference' },
          { text: 'Personalización', link: '/guides/customization' },
          { text: 'Migración', link: '/guides/migration' },
          { text: 'Integración CI/CD', link: '/guides/ci-cd' },
        ],
        collapsed: true,
      },
      {
        text: '� Aprender',
        items: [
          { text: 'Introducción', link: '/guide/introduction' },
          { text: 'Filosofía Cardinal', link: '/guide/philosophy' },
          { text: 'Instalación Rápida', link: '/guide/getting-started' },
        ],
        collapsed: true,
      },
      {
        text: '💡 Ejemplos',
        items: [{ text: 'Guía Completa', link: '/examples/complete-guide' }],
      },
    ],
    editLink: {
      pattern: 'https://github.com/nucleoabierto/eslint-config-cardinal/edit/main/docs/:path',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/nucleoabierto/eslint-config-cardinal' }],
    footer: {
      message: 'Hecho con ❤️ desde Latinoamérica',
      copyright: `Copyright ${new Date().getFullYear()} ESLint Cardinal`,
    },
    search: {
      provider: 'local',
    },
  },
})
