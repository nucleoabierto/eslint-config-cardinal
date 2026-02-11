import pluginComments from '@eslint-community/eslint-plugin-eslint-comments'

/**
 * @module cardinal/quality/comments
 * @summary Reglas para comentarios de ESLint.
 * @remarks Gestión de comentarios de control de ESLint (disable, enable, etc.)
 */

export default {
  name: 'cardinal/quality/comments',
  plugins: {
    comments: pluginComments,
  },
  rules: {
    /* Pares disable-enable deben estar balanceados */
    'comments/disable-enable-pair': 'error',

    /* No agrupar múltiples enables */
    'comments/no-aggregating-enable': 'error',

    /* No duplicar disables */
    'comments/no-duplicate-disable': 'error',

    /* Restringir ciertos disables */
    'comments/no-restricted-disable': 'off',

    /* No disable ilimitado */
    'comments/no-unlimited-disable': 'error',

    /* No disable no usado (eliminado - deprecated) */

    /* No enable no usado */
    'comments/no-unused-enable': 'error',

    /* No usar eslint-comments */
    'comments/no-use': 'off',

    /* Requerir descripción */
    'comments/require-description': 'off',
  },
}
