import stylistic from '@stylistic/eslint-plugin'

// Constants to avoid duplication
const MULTILINE_CONFIG = 'always-multiline'

/**
 * @module cardinal/style/formatting
 * @summary Reglas esenciales de formato y estilo visual.
 * @remarks Configuración base de formato que todo proyecto debería tener:
 * comillas, punto y coma, indentación, espaciado básico.
 */

export default {
  name: 'cardinal/style/formatting',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    /*
     * === REGLAS BÁSICAS DE FORMATO ===
     * Configuración fundamental para consistencia visual del código.
     * Estándares modernos que mejoran legibilidad y mantenibilidad.
     */
    /*
     * Sin punto y coma: menos ruido visual y convención moderna.
     * ASI (Automatic Semicolon Insertion) maneja inserción.
     * Razón: Reducir ruido visual, seguir convenciones modernas
     */
    '@stylistic/semi': ['error', 'never'],

    /*
     * Comillas simples: consistencia con ecosistema JavaScript.
     * Permite escape cuando es necesario y siempre permite templates.
     * Razón: Consistencia con ecosistema JS/Node.js
     */
    '@stylistic/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: 'always' },
    ],

    /*
     * 2 espacios: balance entre densidad y legibilidad.
     * SwitchCase con 1 espacio para diferenciar casos.
     * Razón: Legibilidad óptima sin ocupar demasiado espacio
     */
    '@stylistic/indent': [
      'error',
      2,
      { SwitchCase: 1 },
    ],

    /*
     * Espaciado de comas para lectura fluida.
     * Sin espacio antes, espacio después de cada coma.
     * Razón: Mejorar legibilidad de listas y objetos
     */
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    /*
     * Coma al final de líneas multilínea.
     * Facilita adición de nuevos elementos y diff limpios.
     * Razón: Mejorar mantenibilidad y control de versiones
     */
    '@stylistic/comma-style': ['error', 'last'],

    /*
     * Espaciado consistente en arrow functions.
     * Espacio antes y después de la flecha =>.
     * Razón: Claridad visual en funciones flecha
     */
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

    /*
     * Espaciado en bloques de código.
     * { espaciado } vs {sin espaciado}.
     * Razón: Delimitar claramente bloques de código
     */
    '@stylistic/block-spacing': ['error', 'always'],

    /*
     * Espaciado en pares clave:valor de objetos.
     * key: value vs key:value.
     * Razón: Mejorar legibilidad de objetos y configuraciones
     */
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

    /*
     * Espaciado consistente alrededor de keywords.
     * if (condition), while (condition), etc.
     * Razón: Consistencia en estructuras de control
     */
    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

    /*
     * Espacio antes de bloques de código.
     * if (condition) { vs if (condition){.
     * Razón: Separar claramente condiciones de bloques
     */
    '@stylistic/space-before-blocks': ['error', 'always'],

    /*
     * Espaciado en paréntesis de funciones.
     * function name() vs function name ().
     * Razón: Distinguir funciones anónimas de nombradas
     */
    '@stylistic/space-before-function-paren': [
      'error',
      {
        // function () {}
        anonymous: 'always',
        // function name() {}
        named: 'never',
        // async () => {}
        asyncArrow: 'always',
      },
    ],

    /*
     * Sin espacios internos en paréntesis.
     * (condition) vs ( condition ).
     * Razón: Compacidad y claridad en expresiones
     */
    '@stylistic/space-in-parens': ['error', 'never'],

    /*
     * Espaciado en operadores infix.
     * a + b vs a+b.
     * Razón: Claridad en operaciones matemáticas y lógicas
     */
    '@stylistic/space-infix-ops': 'error',

    /*
     * Espaciado en operadores unarios.
     * ++count vs ++ count, !value vs !value.
     * Razón: Distinguir operadores unarios de binarios
     */
    '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],

    /*
     * Sin espacios en llamadas a funciones.
     * fn() vs fn ().
     * Razón: Compacidad y consistencia
     */
    '@stylistic/function-call-spacing': ['error', 'never'],

    /*
     * Sin espacios al final de línea.
     * Prevenir inconsistencias visuales y problemas de diff.
     * Razón: Limpieza y consistencia visual
     */
    '@stylistic/no-trailing-spaces': 'error',

    /* Espaciado en llaves de objetos */
    '@stylistic/object-curly-spacing': ['error', 'always'],

    /* Espaciado en corchetes de arrays */
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    /* Propiedades computadas */
    '@stylistic/computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],

    /* Rest/spread */
    '@stylistic/rest-spread-spacing': ['error', 'never'],

    /* Template curly/tag */
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],

    /* Espaciado de semicolons */
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],

    /* Multi-spaces */
    '@stylistic/no-multi-spaces': 'error',

    /* Espacio antes de propiedades */
    '@stylistic/no-whitespace-before-property': 'error',

    /* Tabs */
    '@stylistic/no-tabs': 'error',

    /* Mezcla espacios/tabs */
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    /* Comentarios espaciados */
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '*package',
            '!',
            '/',
            ',',
            '=',
          ],
        },
        block: {
          balanced: true,
          markers: [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include',
          ],
          exceptions: ['*'],
        },
      },
    ],

    /* Brace style 1TBS */
    '@stylistic/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],

    /* Comas finales */
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: MULTILINE_CONFIG,
        objects: MULTILINE_CONFIG,
        imports: MULTILINE_CONFIG,
        exports: MULTILINE_CONFIG,
        functions: 'never',
      },
    ],

    /* EOF newline */
    '@stylistic/eol-last': ['error', 'always'],

    /* Linebreak style */
    '@stylistic/linebreak-style': ['error', 'unix'],

    /* Paréntesis en arrow functions */
    '@stylistic/arrow-parens': ['error', 'as-needed'],

    /* Newline en paréntesis new */
    '@stylistic/new-parens': ['error', 'always'],

    /* Ubicación del punto en chaining */
    '@stylistic/dot-location': ['error', 'property'],

    /* Máximo de statements por línea: previene código ilegible */
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],

    /* Prohibir decimales flotantes sin 0 inicial: .5 → 0.5 */
    '@stylistic/no-floating-decimal': 'error',

    /*
     * === FORMATO ESPECÍFICO DE TYPESCRIPT ===
     * Reglas de @stylistic que aplican a sintaxis TypeScript.
     * Solo disparan en archivos .ts/.tsx cuando @stylistic está disponible.
     */
    // Espaciado en anotaciones de tipo: mejora legibilidad en tipos complejos
    '@stylistic/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: 'ignore',
        },
      },
    ],
    // Espaciado en tipos genéricos: mantiene consistencia visual
    '@stylistic/type-generic-spacing': 'error',
    // Espaciado en named tuples: mejora legibilidad en tipos de tupla
    '@stylistic/type-named-tuple-spacing': 'error',
  },
}
