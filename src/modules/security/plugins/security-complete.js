import pluginSecurity from 'eslint-plugin-security'

/**
 * @module cardinal/safety/security-complete
 * @summary Reglas finales de security para 100% cobertura.
 */

export default {
  name: 'cardinal/safety/security-complete',
  plugins: {
    security: pluginSecurity,
  },
  rules: {
    /*
     * === REGLAS ADICIONALES (no en critical.js ni recommended.js) ===
     * Las reglas de cambio de nivel (detect-non-literal-regexp, detect-possible-timing-attacks,
     * detect-child-process, detect-object-injection) ahora están consolidadas en
     * security/recommended.js donde se definen como 'warn'.
     * Este módulo solo agrega las reglas restantes para 100% cobertura del plugin.
     */
    'security/detect-non-literal-require': 'warn',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-buffer-noassert': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-bidi-characters': 'error',
  },
}
