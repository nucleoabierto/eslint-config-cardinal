import { createRequire } from 'node:module'

import stylistic from '@stylistic/eslint-plugin'

/**
 * @module cardinal/typescript
 * @summary Configuración híbrida de TypeScript para Cardinal.
 * @remarks Detecta automáticamente `@typescript-eslint/eslint-plugin` y su parser,
 * habilitando reglas recomendadas y ajustes pragmáticos cuando las dependencias están disponibles.
 */

let typescriptPlugin
let typescriptParser

// Try to load TypeScript ESLint dependencies
try {
  const require = createRequire(import.meta.url)

  typescriptPlugin = require('@typescript-eslint/eslint-plugin')

  typescriptParser = require('@typescript-eslint/parser')
} catch {
  // TypeScript support is optional - dependencies not installed
}

/**
 * @summary Configuración principal de TypeScript o `undefined` si los plugins no están instalados.
 * @returns {import('eslint').Linter.Config | undefined} Config listo para archivos `.ts/tsx`.
 */
export default typescriptPlugin && typescriptParser
  ? {
    name: 'cardinal/typescript',
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
        // Auto-detect nearest tsconfig.json for each file (community recommended approach)
        projectService: true,
      },
      globals: {
        // Import globals from main config
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.stylistic.rules,

      /*
       * === REGLAS PRINCIPALES DE TYPESCRIPT ===
       * Configuración híbrida que balancea seguridad de tipos con pragmatismo.
       * Flexibilidad donde TypeScript es estricto, seguridad donde es crítico.
       */
      /*
       * Detectar variables no utilizadas con flexibilidad pragmática.
       * Permitimos parámetros y errores no usados por convención común.
       * Razón: Prevenir código muerto con excepciones pragmáticas
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // Permitir parámetros no usados (callbacks comunes)
          args: 'none',
          // Permitir errores no usados (catch parameters)
          caughtErrors: 'none',
          // Ignorar en destructuring con rest (común en APIs)
          ignoreRestSiblings: true,
          // Detectar todas las variables declaradas
          vars: 'all',
        },
      ],

      /*
       * Advertir sobre uso de any pero no prohibirlo.
       * any es útil en migraciones y código legacy.
       * Razón: Flexibilidad pragmática vs seguridad de tipos
       */
      '@typescript-eslint/no-explicit-any': 'warn',

      /*
       * No forzar tipos de retorno explícitos.
       * TypeScript infiere tipos correctamente en la mayoría de casos.
       * Razón: Reducir verbosidad sin perder seguridad
       */
      '@typescript-eslint/explicit-function-return-type': 'off',

      /*
       * No forzar tipos en límites de módulo.
       * Los tipos de entrada/exportación se infieren correctamente.
       * Razón: Simplificar código sin perder seguridad
       */
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      /*
       * Advertir sobre non-null assertion (!).
       * Puede ocultar errores de null/undefined.
       * Razón: Prevenir uso inseguro de aserciones
       */
      '@typescript-eslint/no-non-null-assertion': 'warn',

      /*
       * Permitir tipos inferibles obvios.
       * let x: string = 'hello' es redundante.
       * Razón: Eliminar anotaciones innecesarias
       */
      '@typescript-eslint/no-inferrable-types': 'off',

      /*
       * Advertir sobre object types vacíos.
       * {} puede aceptar cualquier propiedad, es inseguro.
       * Razón: Prevenir tipos demasiado amplios
       */
      '@typescript-eslint/no-empty-object-type': 'warn',

      /*
       * Preferir nullish coalescing (??) sobre logical OR (||).
       * ?? solo maneja null/undefined, || maneja falsy values.
       * Razón: Comportamiento más predecible y seguro
       */
      '@typescript-eslint/prefer-nullish-coalescing': 'error',

      /*
       * Preferir optional chaining (?.) sobre verificaciones manuales.
       * obj?.prop es más claro que obj && obj.prop.
       * Razón: Simplificar acceso a propiedades anidadas
       */
      '@typescript-eslint/prefer-optional-chain': 'error',

      /*
       * Evitar imports require en módulos TypeScript.
       * import es más estándar y type-safe.
       * Razón: Modernización y seguridad de tipos
       */
      '@typescript-eslint/no-require-imports': 'error',

      /*
       * Forzar type imports consistentes.
       * import type vs import para valores.
       * Razón: Claridad entre tipos y valores
       */
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],

      /*
       * Forzar type exports consistentes.
       * export type vs export para valores.
       * Razón: Consistencia en exports
       */
      '@typescript-eslint/consistent-type-exports': 'error',

      /*
       * === REGLAS CONFLICTIVAS CON ESLINT CORE ===
       * TypeScript maneja estas reglas con mejor contexto, pero ESLint también
       * puede detectarlas. Estrategia:
       * - no-undef: OFF - TS parser y compiler lo validan completamente
       * - no-unused-vars: WARN - ESLint lo detecta rápido durante desarrollo,
       *                          TS compiler lo valida en compilación (complementarios)
       * Razón: Balance entre feedback rápido (ESLint) y validación exhaustiva (TS)
       */
      'no-unused-vars': 'warn',
      'no-undef': 'off',

      /*
       * Advertir sobre comentarios TypeScript.
       * @ts-ignore debe tener descripción, @ts-except es mejor.
       * Razón: Prevenir ocultamiento de errores sin justificación
       */
      '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description' }],

      /*
       * Permitir tipos básicos (flexibilidad).
       * string, number, boolean son útiles y seguros.
       * Razón: Permitir tipos básicos sin restricciones
       */
      '@typescript-eslint/ban-types': 'off',

      /*
       * Advertir sobre namespaces (legacy).
       * modules son más modernos que namespaces.
       * Razón: Modernización y mejores prácticas
       */
      '@typescript-eslint/no-namespace': 'warn',

      /*
       * Evitar alias this en clases.
       * const self = this es patrón antiguo.
       * Razón: Modernización y claridad
       */
      '@typescript-eslint/no-this-alias': 'error',

      /*
       * === PROMESAS Y ASINCRONÍA ===
       * Reglas para manejo seguro de promesas y código asíncrono en TypeScript.
       */
      /*
       * Prevenir promesas mal usadas en contextos incorrectos.
       * Pasar promesas donde se esperan valores sincrónicos.
       * Razón: Prevenir errores de manejo asíncrono
       */
      '@typescript-eslint/no-misused-promises': 'error',

      /*
       * Prevenir await en valores que no son thenables.
       * await sobre valores no-promise causa errores.
       * Razón: Prevenir errores de async/await
       */
      '@typescript-eslint/await-thenable': 'error',

      /*
       * Prevenir promesas flotantes sin manejo.
       * Promesas creadas pero no await ni catch.
       * Razón: Prevenir rechazos no capturados
       */
      '@typescript-eslint/no-floating-promises': 'error',

      /*
       * === CONSTRUCCIÓN Y ASERCIONES ===
       * Reglas para uso correcto de constructores y aserciones de tipo.
       */
      /*
       * Evitar uso incorrecto del operador new.
       * new sin constructor o en contexto incorrecto.
       * Razón: Prevenir errores de construcción
       */
      '@typescript-eslint/no-misused-new': 'error',

      /*
       * Evitar aserciones de tipo innecesarias.
       * x as Type cuando TypeScript ya infiere Type.
       * Razón: Eliminar código redundante
       */
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      /*
       * Evitar constraints de tipo innecesarias.
       * <T extends any> es redundante.
       * Razón: Simplificar genéricos
       */
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',

      /*
       * === MODERNIZACIÓN Y PREFERENCIAS ===
       * Reglas que promueven patrones modernos y seguros.
       */
      /*
       * Preferir as const para literales inmutables.
       * 'hello' as const vs 'hello'.
       * Razón: Inmutabilidad y precisión de tipos
       */
      '@typescript-eslint/prefer-as-const': 'error',

      /*
       * Preferir for...of sobre for...in para arrays.
       * for...in enumera propiedades, no valores.
       * Razón: Prevenir bugs de iteración
       */
      '@typescript-eslint/prefer-for-of': 'error',

      /*
       * Preferir tipo función sobre interface con firma.
       * type Fn = () => void vs interface Fn { (): void }
       * Razón: Simplificar y modernizar
       */
      '@typescript-eslint/prefer-function-type': 'error',

      /*
       * Preferir startsWith/endsWith sobre indexOf.
       * str.startsWith('prefix') vs str.indexOf('prefix') === 0.
       * Razón: Claridad y semántica
       */
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',

      /*
       * Preferir readonly donde es posible.
       * readonly array vs array mutable.
       * Razón: Inmutabilidad y prevención de bugs
       */
      '@typescript-eslint/prefer-readonly': 'error',

      /*
       * No forzar readonly parameters (demasiado estricto).
       * readonly en parámetros es verboso.
       * Razón: Flexibilidad pragmática
       */
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',

      /*
       * Expresiones booleanas estrictas (demasiado restrictivo).
       * if (x) where x is boolean es demasiado estricto.
       * Razón: Flexibilidad pragmática
       */
      '@typescript-eslint/strict-boolean-expressions': 'off',

      /*
       * === SEGURIDAD DE TIPOS ===
       * Reglas que previenen problemas sutiles de tipos.
       */
      /*
       * Evitar constituyentes de tipo redundantes.
       * string | number | string es redundante.
       * Razón: Simplificar tipos unión
       */
      '@typescript-eslint/no-redundant-type-constituents': 'error',

      /*
       * Operador unario menos inseguro en tipos bigint.
       * -bigint puede causar errores de precisión.
       * Razón: Prevenir errores numéricos
       */
      '@typescript-eslint/no-unsafe-unary-minus': 'warn',

      /*
       * Reglas de formato @stylistic específicas de TypeScript:
       * Movidas a style/formatting.js para separar responsabilidades.
       * Ver: style/formatting.js sección "FORMATO ESPECÍFICO DE TYPESCRIPT"
       */
    },
  }
  : undefined
