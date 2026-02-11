import { createRequire } from 'node:module'

import pluginImportX from 'eslint-plugin-import-x'

/**
 * @module cardinal/imports
 * @summary Reglas dedicadas a mantener el ecosistema de imports ordenado y libre de errores.
 * @remarks Incluye reglas core de ESLint y eslint-plugin-import-x para validar imports.
 * @description Configuración híbrida que detecta automáticamente TypeScript y ajusta el resolver
 * accordingly.
 */

// Try to load TypeScript resolver
let typescriptResolver

try {
  const require = createRequire(import.meta.url)

  typescriptResolver = require('eslint-import-resolver-typescript')
} catch {
  // TypeScript resolver is optional - dependency not installed
}

/**
 * @summary Configuración especializada en imports y gestión de dependencias.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para combinarse con otros presets
 * Cardinal.
 */
export default {
  name: 'cardinal/imports',
  plugins: {
    'import-x': pluginImportX,
  },
  settings: {
    // Configure resolvers - TypeScript resolver only if available
    'import-x/resolver': typescriptResolver
      ? {
        typescript: true,
        node: true,
      }
      : {
        node: true,
      },
    'import-x/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
      '.cjs',
    ],
    'import-x/ignore': [
      'node_modules',
      'dist',
      'build',
      'coverage',
    ],
  },
  rules: {
    /*
     * no-duplicate-imports (ESLint core): eliminada en favor de import-x/no-duplicates.
     * La versión del plugin soporta 'import type', agrupa múltiples imports y es más configurable.
     */

    /*
     * eslint-plugin-import-x
     * Reglas especializadas para manejo robusto de imports.
     * Previenen errores comunes y mejoran la estructura del proyecto.
     */
    /*
     * Todos los módulos deben exportar algo.
     * Módulos vacíos o sin exports son errores.
     * Razón: Detectar módulos incompletos
     */
    'import-x/export': 'error',

    /*
     * Paths absolutos pueden romper en diferentes entornos.
     * /absolute/path no es portable.
     * Razón: Portabilidad y consistencia
     * NOTA: También definida en extended.js como 'error' (duplicación nivel igual)
     */
    'import-x/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],

    /*
     * Imports duplicados del mismo módulo (redundancia con core).
     * Doble verificación para consistencia.
     * Razón: Consistencia en detección
     * NOTA: También definida en extended.js como 'error' (duplicación nivel igual)
     */
    'import-x/no-duplicates': 'error',

    /*
     * Export default con nombre es confuso.
     * export { default as Component } from './comp'.
     * Razón: Claridad en exports
     */
    'import-x/no-named-default': 'error',

    /*
     * Sintaxis de webpack loader no es estándar.
     * import 'loader!module' rompe compatibilidad.
     * Razón: Portabilidad y estándares
     * NOTA: También definida en extended.js como 'error' (duplicación nivel igual)
     */
    'import-x/no-webpack-loader-syntax': 'error',

    /*
     * Imports deben estar al principio del archivo.
     * Código antes de imports puede causar problemas.
     * Razón: Estructura consistente
     * NOTA: También definida en extended.js como 'error' (duplicación nivel igual)
     */
    'import-x/first': 'error',

    /*
     * Imports deprecados deben evitarse.
     * Advertencia sobre APIs obsoletas.
     * Razón: Modernización y mantenimiento
     */
    'import-x/no-deprecated': 'warn',

    /*
     * Dependencias de desarrollo no deben estar en producción.
     * Prevenir bundling innecesario.
     * Razón: Optimización de bundle
     * CAMBIO DE NIVEL: En extended.js se relaja a 'off' para workspaces
     * Ver: ecosystem/imports/extended.js línea 72
     */
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.{js,ts}',
          '**/*.spec.{js,ts}',
          '**/*.test-d.{js,ts}',
          '**/*.config.{js,ts,mjs}',
          '**/vitest.config.*',
          '**/jest.config.*',
          '**/vite.config.*',
          '**/eslint.config.*',
          '**/rollup.config.*',
          '**/webpack.config.*',
          '**/.storybook/**',
          '**/scripts/**',
        ],
        peerDependencies: false,
        optionalDependencies: false,
      },
    ],

    /*
     * Imports no resueltos causan errores en runtime.
     * Módulos que no existen o no están instalados.
     * Razón: Prevenir errores de importación
     * CAMBIO DE NIVEL: En extended.js se relaja a 'off' para resolvers personalizados
     * Ver: ecosystem/imports/extended.js línea 79
     */
    'import-x/no-unresolved': 'error',

    /*
     * Named imports deben existir en el módulo.
     * import { nonExistent } from './module'.
     * Razón: Detectar imports incorrectos
     */
    'import-x/named': 'error',

    /*
     * Default imports deben existir y ser correctos.
     * import mod from './module' cuando no hay default.
     * Razón: Detectar imports incorrectos
     */
    'import-x/default': 'error',

    /*
     * Namespace imports deben ser consistentes.
     * import * as mod from './module'.
     * Razón: Detectar imports incorrectos
     */
    'import-x/namespace': 'error',

    /*
     * Dependencias cíclicas causan problemas de bundling.
     * A → B → A crea bucles infinitos.
     * Razón: Prevenir arquitectura circular
     */
    'import-x/no-cycle': 'error',

    /*
     * require dinámico puede ser problemático.
     * Más estricto con TypeScript por seguridad de tipos.
     * Razón: Seguridad y análisis estático
     */
    'import-x/no-dynamic-require': typescriptResolver ? 'warn' : 'error',

    /*
     * Auto-imports son errores lógicos.
     * import './module' desde el mismo módulo.
     * Razón: Detectar errores de importación
     */
    'import-x/no-self-import': 'error',

    /*
     * Segmentos de path innecesarios son redundantes.
     * ./foo/../bar vs ./bar.
     * Razón: Simplificar paths
     */
    'import-x/no-useless-path-segments': 'error',

    /*
     * Permitimos imports relativos parent por flexibilidad.
     * import '../module' es común y útil.
     * Razón: Flexibilidad pragmática
     * NOTA: También definida en extended.js como 'off' (duplicación nivel igual)
     */
    'import-x/no-relative-parent-imports': 'off',

    /*
     * Línea en blanco después del último import.
     * Separa visualmente imports del código principal.
     * Razón: Convención universal de legibilidad
     */
    'import-x/newline-after-import': 'error',

    /*
     * Orden específico de imports para consistencia.
     * Facilita lectura y mantenimiento de archivos.
     * Razón: Estructura consistente del proyecto
     */
    'import-x/order': [
      'error',
      {
        groups: [
          // Node.js built-ins primero (fs, path, etc.)
          'builtin',
          // npm packages después (lodash, react, etc.)
          'external',
          // Módulos internos del proyecto
          'internal',
          // Imports relativos locales
          ['parent', 'sibling'],
          // Imports de objetos (poco común)
          'object',
          // Type imports al final
          'type',
        ],
        // Nueva línea entre grupos para claridad
        'newlines-between': 'always',
        alphabetize: {
          // Orden alfabético dentro de cada grupo
          order: 'asc',
          // Insensible a mayúsculas para consistencia
          caseInsensitive: true,
        },
      },
    ],

    /*
     * Sin extensiones en imports de módulos.
     * import './module' vs import './module.js'.
     * Razón: Portabilidad y limpieza
     */
    'import-x/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
        cjs: 'never',
      },
    ],

    /*
     * Reglas específicas de TypeScript cuando está disponible.
     * Advertencias sobre prácticas específicas de TS.
     */
    ...(typescriptResolver
      ? {
        /*
         * Módulos Node.js en TypeScript pueden tener problemas de tipos.
         * import fs from 'fs' vs import * as fs from 'fs'.
         * Razón: Seguridad de tipos en TypeScript
         */
        'import-x/no-nodejs-modules': 'warn',
      }
      : {}),
  },
}
