import pluginUnicorn from 'eslint-plugin-unicorn'

/**
 * @module cardinal/quality/unicorn-extended
 * @summary Reglas extendidas de unicorn para cobertura completa.
 * @remarks Este módulo complementa y en algunos casos SOBREESCRIBE reglas de
 * `quality/plugins/unicorn-essential.js`. Debe usarse junto con essential.js.
 *
 * Cambios respecto a essential.js:
 * - unicorn/no-null: warn → error (máxima disciplina en modo extended)
 */

export default {
  name: 'cardinal/quality/unicorn-extended',
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    /* Preferir negated condition */
    'unicorn/no-negated-condition': 'off',

    /* Prohibir process.exit() */
    'unicorn/no-process-exit': 'off',

    /* Prohibir array reduce */
    'unicorn/no-array-reduce': 'off',

    /* Prohibir keyword prefix */
    'unicorn/no-keyword-prefix': 'off',

    /* Prohibir unused properties */
    'unicorn/no-unused-properties': 'off',

    /* Filename case */
    'unicorn/filename-case': 'off',

    /* Import style */
    'unicorn/import-style': 'off',

    /* Explicit length check - .length > 0 explícito vs truthy */
    'unicorn/explicit-length-check': 'error',

    /* Prohibir null - Preferir undefined sobre null (opinionado) */
    'unicorn/no-null': 'error',

    /* Preferir query selector */
    'unicorn/prefer-query-selector': 'off',

    /* Preferir reflect apply */
    'unicorn/prefer-reflect-apply': 'off',

    /* Preferir set has */
    'unicorn/prefer-set-has': 'error',

    /* Preferir set size */
    'unicorn/prefer-set-size': 'error',

    /* Preferir structured clone */
    'unicorn/prefer-structured-clone': 'error',

    /* Prohibir console spaces ya está en essential */

    /* Prohibir useless undefined ya está en essential */

    /* Throw new error */
    'unicorn/throw-new-error': 'error',

    /* Prohibir array method this argument */
    'unicorn/no-array-method-this-argument': 'error',

    /* Prohibir useless promise resolve reject ya está en essential */

    /* Prohibir single promise in promise methods */
    'unicorn/no-single-promise-in-promise-methods': 'error',

    /* Require post message target origin */
    'unicorn/require-post-message-target-origin': 'error',

    /* Require array join separator */
    'unicorn/require-array-join-separator': 'error',

    /* Require number to fixed digits argument */
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    /* Preferir date now ya está en essential */

    /* Preferir array some ya está en essential */

    /* Text encoding identifier case */
    'unicorn/text-encoding-identifier-case': 'error',

    /* Switch case braces */
    'unicorn/switch-case-braces': ['error', 'avoid'],

    /* Relative url style */
    'unicorn/relative-url-style': ['error', 'never'],
  },
}
