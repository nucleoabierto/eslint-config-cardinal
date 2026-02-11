import secureCodingPlugin from 'eslint-plugin-security'

/**
 * @module cardinal/safety/critical
 * @summary Reglas críticas de seguridad que previenen vulnerabilidades graves.
 * @remarks Incluye prevención de XSS, injection, ReDoS, y patrones peligrosos.
 * Enfocado en vulnerabilidades de seguridad reales, no en calidad de código.
 */

export default {
  name: 'cardinal/safety/critical',
  plugins: {
    ...(secureCodingPlugin && { security: secureCodingPlugin }),
  },
  rules: {
    /*
     * Prevención de injection y XSS
     * Vulnerabilidades críticas que pueden comprometer la aplicación.
     * Son 'error' porque representan riesgos de seguridad graves.
     */
    /*
     * Reglas de secure-coding plugin
     * Detección avanzada de vulnerabilidades de seguridad.
     * Son 'error' porque previenen ataques sofisticados.
     */
    ...(secureCodingPlugin && {
      /*
       * Regex complejas pueden causar ReDoS (Regular Expression Denial of Service).
       * Ataques que agotan el CPU con inputs maliciosos.
       * Razón: Prevenir ataques de denegación de servicio
       * Nota: 'security-complete.js' redefinirá esta a 'warn'
       */
      'security/detect-unsafe-regex': 'error',

      /*
       * Regex dinámicas pueden ejecutar código inesperado.
       * new RegExp(userInput) es peligroso.
       * Razón: Prevenir inyección de código en regex
       * CAMBIO DE NIVEL: En security-complete.js se relaja a 'warn'
       * Ver: security/plugins/security-complete.js línea 26
       */
      'security/detect-non-literal-regexp': 'error',

      /*
       * eval() con expresiones variables es extremadamente peligroso.
       * Permite ejecución arbitraria de código.
       * Razón: Prevenir ejecución remota de código
       */
      'security/detect-eval-with-expression': 'error',

      /*
       * Acceder propiedades con input de usuario es peligroso.
       * obj[userInput] puede acceder propiedades internas.
       * Razón: Prevenir inyección de propiedades
       * CAMBIO DE NIVEL: En security-complete.js se desactiva como 'off'
       * Ver: security/plugins/security-complete.js línea 55
       */
      'security/detect-object-injection': 'error',

      /*
       * Ejecutar procesos hijo es un vector de ataque.
       * Puede ser usado para ejecución arbitraria.
       * Razón: Prevenir ejecución de comandos
       * CAMBIO DE NIVEL: En security-complete.js se relaja a 'warn'
       * Ver: security/plugins/security-complete.js línea 46
       */
      'security/detect-child-process': 'error',

      /*
       * Comparaciones de tiempo pueden filtrar información.
       * Ataques timing para extraer datos sensibles.
       * Razón: Prevenir ataques de canal lateral
       * CAMBIO DE NIVEL: En security-complete.js se relaja a 'warn'
       * Ver: security/plugins/security-complete.js línea 37
       */
      'security/detect-possible-timing-attacks': 'error',
    }),

    /*
     * no-implicit-globals: movida a correctness/syntax.js
     * Es un problema de scope/correctness, no solo de seguridad.
     * Ver: correctness/syntax.js para la definición activa
     */
  },
}
