import stylistic from '@stylistic/eslint-plugin'

/**
 * @module cardinal/style/formatting-strict
 * @summary Reglas avanzadas de formato para proyectos que requieren máxima consistencia.
 * @remarks Incluye reglas de newlines, wrapping, padding y estructura visual avanzada.
 */

export default {
  name: 'cardinal/style/formatting-strict',
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    /* Líneas vacías: limita scroll tax */
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    /* Sin padding en bloques */
    '@stylistic/padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],

    /* Separación entre miembros de clase */
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    /* Ternarios multiline */
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    /* Linebreak de operadores */
    '@stylistic/operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '|>': 'before' } },
    ],

    /* Curly newline en objetos */
    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],

    /* Newline en corchetes de arrays */
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],

    /* Newline entre elementos de arrays */
    '@stylistic/array-element-newline': ['error', { multiline: true, minItems: 3 }],

    /* Newline después de llaves */
    '@stylistic/curly-newline': ['error', { minElements: 2, consistent: true }],

    /* Newline en argumentos de función */
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    /* Espaciado en llamadas a función */
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

    /* Espaciado en generator star */
    '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],

    /* Newline implícito en arrow */
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    /* Indentación en operaciones binarias */
    '@stylistic/indent-binary-ops': ['error', 2],

    /* Posición de comentarios de línea */
    '@stylistic/line-comment-position': ['error', { position: 'above' }],

    /* Líneas alrededor de comentarios */
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],

    /* Estilo de delimitadores de miembros */
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'comma', requireLast: false },
        multilineDetection: 'brackets',
      },
    ],

    /* Estilo de comentarios multiline */
    '@stylistic/multiline-comment-style': ['error', 'starred-block'],

    /* Newline por chained call */
    '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    /* Prevenir confusiones en arrow functions */
    '@stylistic/no-confusing-arrow': ['error', { allowParens: true }],

    /* Posición de cuerpo de nonblock statements */
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],

    /* Una declaración de variable por línea */
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    /* Padding entre statements */
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
    ],

    /* Estilo de semicolon */
    '@stylistic/semi-style': ['error', 'last'],

    /* Espaciado en switch colon */
    '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

    /* IIFE wrapping */
    '@stylistic/wrap-iife': ['error', 'inside'],

    /* Regex wrapping */
    '@stylistic/wrap-regex': ['error'],

    /* Yield star spacing */
    '@stylistic/yield-star-spacing': ['error', { before: false, after: true }],

    /* Nueva línea para propiedades de objeto */
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    /* Reglas experimentales */
    '@stylistic/exp-jsx-props-style': 'off',
    '@stylistic/exp-list-style': 'off',

    /* Evitar operadores mixtos */
    '@stylistic/no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],

    /* Usar comillas en propiedades solo cuando necesario */
    '@stylistic/quote-props': ['error', 'as-needed'],

    /* Evitar paréntesis innecesarios en funciones */
    '@stylistic/no-extra-parens': ['error', 'functions'],

    /* Evitar punto y coma innecesario */
    '@stylistic/no-extra-semi': 'error',
  },
}
