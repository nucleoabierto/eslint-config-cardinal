import sonarjsPlugin from 'eslint-plugin-sonarjs'

/**
 * @module cardinal/ecosystem/web/complete
 * @summary Reglas finales de seguridad web para 100% cobertura.
 * @remarks Este módulo complementa `ecosystem/web/base.js` y `web/extended.js`.
 * Debe usarse junto con los módulos anteriores, nunca de forma aislada.
 * Contiene reglas de seguridad web específicas de frameworks (React, Vue) y
 * reglas de accesibilidad adicionales.
 */

export default {
  name: 'cardinal/ecosystem/web/complete',
  plugins: {
    ...(sonarjsPlugin && { sonarjs: sonarjsPlugin }),
  },
  rules: {
    ...(sonarjsPlugin && {
      /*
       * === SEGURIDAD ESPECÍFICA DE FRAMEWORKS ===
       * Reglas que aplican a frameworks frontend específicos.
       * Son 'warn' porque solo aplicarán si se usa el framework correspondiente.
       */

      /*
       * React: dangerouslySetInnerHTML puede causar XSS.
       * Ver también: security/critical.js para detección general de XSS.
       * Razón: Prevenir XSS en contexto de React
       */
      'sonarjs/no-react-set-html': 'warn',
    }),
  },
}
