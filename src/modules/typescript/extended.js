import tseslint from '@typescript-eslint/eslint-plugin'

/**
 * @module cardinal/typescript/extended
 * @summary Reglas extendidas de TypeScript para máxima cobertura.
 * @remarks Este módulo complementa `typescript/base.js`. Debe usarse junto con base.js.
 * Incluye todas las reglas TypeScript restantes de @typescript-eslint para 100% de cobertura.
 * Las reglas desactivadas aquí son demasiado opinionadas o específicas por proyecto.
 */

export default {
  name: 'cardinal/typescript/extended',
  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.mts',
    '**/*.cts',
  ],
  plugins: {
    '@typescript-eslint': tseslint,
  },
  rules: {
    /* Métodos de clase deben usar this */
    '@typescript-eslint/class-methods-use-this': 'off',

    /* Consistencia en returns */
    '@typescript-eslint/consistent-return': 'off',

    /* Parámetros con default al final */
    '@typescript-eslint/default-param-last': 'error',

    /* Notación de punto sobre brackets */
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    /* Accesibilidad explícita de miembros */
    '@typescript-eslint/explicit-member-accessibility': 'off',

    /* Inicialización de declaraciones */
    '@typescript-eslint/init-declarations': 'off',

    /* Máximo de parámetros - manejado por max-params en config/relaxed.js */

    /* Ordenamiento de miembros */
    '@typescript-eslint/member-ordering': 'off',

    /* Estilo de firma de métodos */
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    /* Convención de nombres */
    '@typescript-eslint/naming-convention': 'off',

    /* Prohibir delete en arrays */
    '@typescript-eslint/no-array-delete': 'error',

    /* Prohibir toString en objetos sin implementación */
    '@typescript-eslint/no-base-to-string': 'error',

    /* Prohibir expresiones void confusas */
    '@typescript-eslint/no-confusing-void-expression': 'off',

    /* Detectar uso de APIs deprecadas */
    '@typescript-eslint/no-deprecated': 'warn',

    /* Prohibir miembros de clase duplicados */
    '@typescript-eslint/no-dupe-class-members': 'error',

    /* Prohibir constituyentes de tipo duplicados */
    '@typescript-eslint/no-duplicate-type-constituents': 'error',

    /* Prohibir delete dinámico */
    '@typescript-eslint/no-dynamic-delete': 'error',

    /* Prohibir clases extrañas */
    '@typescript-eslint/no-extraneous-class': 'off',

    /* Prohibir for-in en arrays */
    '@typescript-eslint/no-for-in-array': 'error',

    /* Prohibir eval implícito */
    '@typescript-eslint/no-implied-eval': 'error',

    /* Prohibir importaciones de tipo con side effects */
    '@typescript-eslint/no-import-type-side-effects': 'error',

    /* Prohibir this inválido */
    '@typescript-eslint/no-invalid-this': 'off',

    /* Prohibir tipo void inválido */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /* Prohibir funciones en loops */
    '@typescript-eslint/no-loop-func': 'error',

    /* Prohibir pérdida de precisión - reemplazado por ESLint core no-loss-of-precision */
    // '@typescript-eslint/no-loss-of-precision': 'error', // deprecated

    /* Prohibir números mágicos - manejado por no-magic-numbers en config/relaxed.js */

    /* Prohibir operador void sin sentido */
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    /* Prohibir mal uso de spread */
    '@typescript-eslint/no-misused-spread': 'error',

    /* Prohibir enums mixtos */
    '@typescript-eslint/no-mixed-enums': 'error',

    /* Prohibir non-null assertion con nullish coalescing */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    /* Prohibir redeclaración */
    '@typescript-eslint/no-redeclare': 'error',

    /* Prohibir imports restringidos */
    '@typescript-eslint/no-restricted-imports': 'off',

    /* Prohibir tipos restringidos */
    '@typescript-eslint/no-restricted-types': 'off',

    /* Prohibir shadowing */
    '@typescript-eslint/no-shadow': 'off',

    /* Prohibir alias de tipo - deprecated, flexibilidad permitida */
    // '@typescript-eslint/no-type-alias': 'off', // deprecated

    /* Prohibir comparación booleana literal innecesaria */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    /* Prohibir condiciones innecesarias */
    '@typescript-eslint/no-unnecessary-condition': 'off',

    /* Prohibir asignación de parameter property innecesaria */
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

    /* Prohibir qualifier innecesario */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /* Prohibir expresión template innecesaria */
    '@typescript-eslint/no-unnecessary-template-expression': 'error',

    /* Prohibir argumentos de tipo innecesarios */
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    /* Prohibir conversión de tipo innecesaria */
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',

    /* Prohibir parámetros de tipo innecesarios */
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',

    /* Prohibir argumentos inseguros */
    '@typescript-eslint/no-unsafe-argument': 'off',

    /* Prohibir asignaciones inseguras */
    '@typescript-eslint/no-unsafe-assignment': 'off',

    /* Prohibir llamadas inseguras */
    '@typescript-eslint/no-unsafe-call': 'off',

    /* Prohibir comparación de enum insegura */
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',

    /* Prohibir acceso a miembros inseguros */
    '@typescript-eslint/no-unsafe-member-access': 'off',

    /* Prohibir returns inseguros */
    '@typescript-eslint/no-unsafe-return': 'off',

    /* Prohibir aserciones de tipo inseguras */
    '@typescript-eslint/no-unsafe-type-assertion': 'off',

    /* Prohibir miembros privados no usados */
    '@typescript-eslint/no-unused-private-class-members': 'error',

    /* Prohibir uso antes de definir */
    '@typescript-eslint/no-use-before-define': 'off',

    /* Prohibir constructor inútil */
    '@typescript-eslint/no-useless-constructor': 'error',

    /* Prohibir asignación default inútil */
    '@typescript-eslint/no-useless-default-assignment': 'error',

    /* Prohibir export vacío inútil */
    '@typescript-eslint/no-useless-empty-export': 'error',

    /* Estilo de aserción de tipo non-nullable */
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    /* Solo lanzar Error */
    '@typescript-eslint/only-throw-error': 'error',

    /* Parameter properties */
    '@typescript-eslint/parameter-properties': 'off',

    /* Preferir destructuring - manejado por prefer-destructuring en quality/recommended.js */

    /* Preferir inicializadores de enum */
    '@typescript-eslint/prefer-enum-initializers': 'off',

    /* Preferir find */
    '@typescript-eslint/prefer-find': 'error',

    /* Preferir includes */
    '@typescript-eslint/prefer-includes': 'error',

    /* Preferir miembros literales de enum */
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    /* Preferir rechazar promises con errores */
    '@typescript-eslint/prefer-promise-reject-errors': 'error',

    /* Preferir parámetro de tipo reduce */
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    /* Preferir regexp exec */
    '@typescript-eslint/prefer-regexp-exec': 'error',

    /* Preferir return this type */
    '@typescript-eslint/prefer-return-this-type': 'error',

    /* Preferir ts-expect-error - reemplazado por ban-ts-comment */
    // '@typescript-eslint/prefer-ts-expect-error': 'error', // deprecated

    /* Funciones promise async */
    '@typescript-eslint/promise-function-async': 'off',

    /* Pares getter-setter relacionados */
    '@typescript-eslint/related-getter-setter-pairs': 'error',

    /* Requerir comparación en array sort */
    '@typescript-eslint/require-array-sort-compare': 'error',

    /* Requerir await */
    '@typescript-eslint/require-await': 'off',

    /* Restringir operandos plus */
    '@typescript-eslint/restrict-plus-operands': 'error',

    /* Restringir expresiones template */
    '@typescript-eslint/restrict-template-expressions': 'off',

    /* Return await */
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    /* Ordenar constituyentes de tipo - deprecated */
    // '@typescript-eslint/sort-type-constituents': 'off', // deprecated

    /* Return void estricto */
    '@typescript-eslint/strict-void-return': 'off',

    /* Switch exhaustiveness check */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    /* Typedef - deprecated en favor de anotaciones explícitas */
    // '@typescript-eslint/typedef': 'off', // deprecated

    /* Método no vinculado */
    '@typescript-eslint/unbound-method': 'off',

    /* Firmas unificadas */
    '@typescript-eslint/unified-signatures': 'error',

    /* Usar unknown en catch callback variable */
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
  },
}
