import pluginN from 'eslint-plugin-n'

/**
 * @module cardinal/ecosystem/node-complete
 * @summary Reglas finales de Node.js para 100% cobertura.
 * @remarks Este módulo complementa `ecosystem/node/base.js` y `node/extended.js`.
 * Cubre las reglas más específicas y opinionadas. Debe usarse junto con base.js.
 */

export default {
  name: 'cardinal/ecosystem/node-complete',
  plugins: {
    n: pluginN,
  },
  rules: {
    'n/no-extraneous-import': 'off',
    'n/no-extraneous-require': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-process-exit': 'off',
    'n/no-sync': 'off',
    'n/no-top-level-await': 'off',
    'n/no-unpublished-bin': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-unsupported-features/node-builtins': 'off',
    'n/prefer-global/buffer': 'off',
    'n/prefer-global/console': 'off',
    'n/prefer-global/process': 'off',
    'n/prefer-global/text-decoder': 'off',
    'n/prefer-global/text-encoder': 'off',
    'n/prefer-global/url-search-params': 'off',
    'n/prefer-global/url': 'off',
    'n/prefer-global/crypto': 'off',
    'n/prefer-global/timers': 'off',
    // n/prefer-node-protocol: movida a node/base.js (es práctica estándar en Node.js moderno)
    'n/prefer-promises/dns': 'off',
    'n/prefer-promises/fs': 'off',
    'n/hashbang': 'off',
  },
}
