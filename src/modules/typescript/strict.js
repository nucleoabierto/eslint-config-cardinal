/**
 * @module cardinal/typescript-advanced
 * @summary Preset TypeScript estricto con análisis type-aware completo.
 * @remarks Este módulo complementa y SOBREESCRIBE reglas de `typescript/base.js`.
 * Debe usarse junto con base.js, nunca de forma aislada.
 * Activa reglas que requieren análisis type-aware completo (projectService: true).
 *
 * Cambios respecto a base.js:
 * - no-explicit-any: off → error (máxima seguridad de tipos)
 * - no-non-null-assertion: warn → error
 * - Activa reglas unsafe: no-unsafe-assignment, no-unsafe-call, etc.
 * - strict-boolean-expressions: off → error
 */

import { createRequire } from 'node:module'

let typescriptPlugin
let typescriptParser

try {
  const require = createRequire(import.meta.url)

  typescriptPlugin = require('@typescript-eslint/eslint-plugin')
  typescriptParser = require('@typescript-eslint/parser')
} catch {
  // TypeScript support is optional
}

/**
 * @summary Configuración avanzada de TypeScript si las dependencias están disponibles.
 * @returns {import('eslint').Linter.Config | undefined} Config listo para archivos `.ts/tsx`.
 */
export default typescriptPlugin && typescriptParser
  ? {
    name: 'cardinal/typescript-advanced',
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // Auto-detección del tsconfig más cercano a cada archivo
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      /*
       * Para proyectos que requieren máxima seguridad de tipos
       * Más estricto que el base
       */
      '@typescript-eslint/no-explicit-any': 'error',
      // Más estricto
      '@typescript-eslint/no-non-null-assertion': 'error',
      // Promovido a error
      '@typescript-eslint/no-unsafe-assignment': 'error',
      // Operaciones inseguras
      '@typescript-eslint/no-unsafe-call': 'error',
      // Acceso a miembros inseguro
      '@typescript-eslint/no-unsafe-member-access': 'error',
      // Retorno inseguro
      '@typescript-eslint/no-unsafe-return': 'error',
      // Argumentos inseguros
      '@typescript-eslint/no-unsafe-argument': 'error',
      // Operador unario inseguro
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      // Preferir nullish coalescing
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      // Preferir optional chaining
      '@typescript-eslint/prefer-optional-chain': 'error',
      // Prevenir promesas flotantes
      '@typescript-eslint/no-floating-promises': 'error',
      // Prevenir await en no-thenables
      '@typescript-eslint/await-thenable': 'error',
      // Prevenir promesas mal usadas
      '@typescript-eslint/no-misused-promises': 'error',
      // Activado en modo estricto
      '@typescript-eslint/strict-boolean-expressions': 'error',
      // Evitar aserciones innecesarias
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      // Evitar constraints innecesarias
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      // Evitar calificadores innecesarios
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      // Evitar argumentos de tipo innecesarios
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      // Evitar constituyentes redundantes
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      // Evitar side effects en type imports
      '@typescript-eslint/no-import-type-side-effects': 'error',
      // Preferir as const
      '@typescript-eslint/prefer-as-const': 'error',
      // Preferir for...of
      '@typescript-eslint/prefer-for-of': 'error',
      // Preferir tipo función
      '@typescript-eslint/prefer-function-type': 'error',
      // Preferir includes sobre indexOf
      '@typescript-eslint/prefer-includes': 'error',
      // Preferir startsWith/endsWith
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      // Preferir readonly
      '@typescript-eslint/prefer-readonly': 'error',
      // No forzar readonly parameters
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      // Forzar type imports consistentes
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
      // Forzar type exports consistentes
      '@typescript-eslint/consistent-type-exports': 'error',
      // Más estricto
      '@typescript-eslint/no-empty-interface': 'error',
      // Más estricto
      '@typescript-eslint/no-empty-object-type': 'error',
      // Más estricto
      '@typescript-eslint/ban-ts-comment': 'error',
      // Más estricto
      '@typescript-eslint/no-namespace': 'error',
      // Evitar alias this
      '@typescript-eslint/no-this-alias': 'error',
      // Evitar new mal usado
      '@typescript-eslint/no-misused-new': 'error',

      /*
       * no-var-requires: deprecada, su funcionalidad está cubierta por no-require-imports.
       * Evitar imports require
       */
      '@typescript-eslint/no-require-imports': 'error',

      /*
       * Evitar imports duplicados - manejado por no-duplicate-imports en ecosystem/imports/base.js
       */
      // Variables no utilizadas
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      // Más estricto
      '@typescript-eslint/explicit-function-return-type': 'warn',
      // Más estricto
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  }
  : undefined
