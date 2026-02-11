import pluginUnicorn from 'eslint-plugin-unicorn'

/**
 * @module cardinal/quality/unicorn-complete
 * @summary Reglas finales de unicorn para 100% cobertura.
 * @remarks Este módulo complementa `unicorn-essential.js` y `unicorn-extended.js`.
 * Debe usarse junto con los módulos anteriores, nunca de forma aislada.
 * Contiene las reglas restantes de eslint-plugin-unicorn en su mayoría desactivadas.
 */

export default {
  name: 'cardinal/quality/unicorn-complete',
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    'unicorn/consistent-assert': 'off',
    'unicorn/consistent-date-clone': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/consistent-existence-index-check': 'error',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/isolated-functions': 'off',
    'unicorn/no-accessor-recursion': 'error',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reverse': 'off',
    'unicorn/no-array-sort': 'off',
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-immediate-mutation': 'error',

    /* Consolidado en unicorn-essential.js */
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-named-default': 'error',
    'unicorn/no-unnecessary-array-flat-depth': 'error',
    'unicorn/no-unnecessary-array-splice-count': 'error',
    'unicorn/no-unnecessary-polyfills': 'error',
    'unicorn/no-unnecessary-slice-end': 'error',
    'unicorn/no-useless-collection-argument': 'error',
    'unicorn/no-useless-error-capture-stack-trace': 'error',
    'unicorn/prefer-bigint-literals': 'off',
    'unicorn/prefer-class-fields': 'off',
    'unicorn/prefer-classlist-toggle': 'error',
    'unicorn/prefer-global-this': 'error',
    'unicorn/prefer-import-meta-properties': 'error',
    'unicorn/prefer-math-min-max': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'off',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-response-static-json': 'error',
    'unicorn/prefer-single-call': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/require-module-attributes': 'off',
    'unicorn/require-module-specifiers': 'off',
    'unicorn/string-content': 'off',
    'unicorn/template-indent': 'off',
  },
}
