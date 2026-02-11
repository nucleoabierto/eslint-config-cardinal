/**
 * @module cardinal/relaxed
 * @summary Preset de flexibilidad transparente que documenta reglas desactivadas con intención.
 * @remarks Ideal para equipos que necesitan pragmatismo sin perder trazabilidad de decisiones.
 */

import stylistic from '@stylistic/eslint-plugin'

/**
 * @summary Configuración que desactiva reglas altamente restrictivas manteniendo controles básicos.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para combinarse con otros presets.
 */
export default {
  name: 'cardinal/relaxed',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    // Operaciones bit a bit son válidas en ciertos contextos
    'no-bitwise': 'off',
    // Incrementos son eficientes y comunes
    'no-plusplus': 'off',
    // Continue es útil en bucles complejos
    'no-continue': 'off',
    // Límite de línea para mantener legibilidad sin ser excesivamente restrictivo
    '@stylistic/max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // Límite de líneas por archivo para mantener módulos manejables
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    // Límite de líneas por función para mantener funciones enfocadas
    'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }],
    // Profundidad de anidación controlada para mejorar legibilidad
    'max-depth': ['warn', 4],
    // Callbacks anidados limitados para evitar callback hell
    'max-nested-callbacks': ['warn', 3],
    // Parámetros limitados para mantener interfaces simples
    'max-params': ['warn', 5],
    // Sentencias limitadas para mantener funciones enfocadas
    'max-statements': ['warn', 20],

    /*
     * Máximo de statements por línea: manejado por @stylistic/max-statements-per-line
     * en style/formatting.js
     */

    // Complejidad ciclomática controlada para mantener código mantenible
    complexity: ['warn', 10],
    // Nombres cortos (i, x) comunes en matemáticas/algoritmos
    'id-length': 'off',
    'id-match': 'off',
    // Constantes numéricas a veces más claras
    'no-magic-numbers': 'off',
    // Convenciones _private comunes en JS
    'no-underscore-dangle': 'off',

    /*
     * === DESACTIVACIONES EXPLÍCITAS ===
     * Reglas del core ESLint desactivadas por ser opinionadas, de estilo,
     * o específicas por proyecto. Consolidadas desde correctness/syntax.js.
     */

    // Estilo de arrow functions - preferimos libertad del desarrollador
    'arrow-body-style': 'off',
    // Nombres de funciones - no forzamos convención
    'func-names': 'off',
    // Estilo de funciones - permitimos function y arrow
    'func-style': 'off',

    // Comentarios capitalizados - demasiado restrictivo
    'capitalized-comments': 'off',
    // Métodos de clase usando this - muchos casos válidos sin this
    'class-methods-use-this': 'off',
    // Return consistente - permitimos early returns
    'consistent-return': 'off',
    // Alias de this - no forzamos convención
    'consistent-this': 'off',
    // Default case en switch - no siempre necesario
    'default-case': 'off',
    // Matching de nombres de función - demasiado restrictivo
    'func-name-matching': 'off',
    // Lista de IDs prohibidos - configurar por proyecto
    'id-denylist': 'off',
    // Inicialización de variables - permitimos flexibilidad
    'init-declarations': 'off',
    // Máximo de clases por archivo - definido en quality/strict.js
    'max-classes-per-file': 'off',
    // Comentarios inline - permitimos cuando son útiles
    'no-inline-comments': 'off',
    // Condiciones negadas - a veces más claras
    'no-negated-condition': 'off',
    // Operador ternario - útil cuando se usa apropiadamente
    'no-ternary': 'off',
    // Uso de undefined - permitimos cuando es explícito
    'no-undefined': 'off',
    // Comentarios de advertencia - útiles en desarrollo
    'no-warning-comments': 'off',
    // Regex unicode - no siempre necesario
    'require-unicode-regexp': 'off',
    // Variables al inicio - patrón obsoleto
    'vars-on-top': 'off',

    // Orden de imports - manejado por import-x plugin
    'sort-imports': 'off',
    // Orden de keys - no forzamos alfabético
    'sort-keys': 'off',
    // Orden de variables - libertad del desarrollador
    'sort-vars': 'off',

    // Exports restringidos - configurar por proyecto
    'no-restricted-exports': 'off',
    // Globals restringidos - configurar por proyecto
    'no-restricted-globals': 'off',
    // Imports restringidos - configurar por proyecto
    'no-restricted-imports': 'off',
    // Propiedades restringidas - configurar por proyecto
    'no-restricted-properties': 'off',
    // Sintaxis restringida - configurar por proyecto
    'no-restricted-syntax': 'off',

    // Modo strict - manejado automáticamente por módulos ES
    strict: 'off',
  },
}
