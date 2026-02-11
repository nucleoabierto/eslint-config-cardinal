import secureCodingPlugin from 'eslint-plugin-security'

/**
 * @module cardinal/safety/recommended
 * @summary Reglas recomendadas de seguridad con mayor tolerancia a falsos positivos.
 * @remarks Nivel intermedio entre critical (error estricto) y complete (cobertura total).
 * Las reglas aquí son 'warn' porque son importantes pero generan más falsos positivos
 * que las críticas, o aplican a patrones menos universales.
 * Posición en la progresión: critical → recommended → complete
 */

export default {
  name: 'cardinal/safety/recommended',
  plugins: {
    ...(secureCodingPlugin && { security: secureCodingPlugin }),
  },
  rules: {
    ...(secureCodingPlugin && {
      /*
       * === SEGURIDAD RECOMENDADA ===
       * Reglas de seguridad con mayor tasa de falsos positivos que las críticas,
       * pero que aún representan riesgos reales y merecen visibilidad.
       * Son 'warn' para guiar sin bloquear flujos de trabajo legítimos.
       */

      /*
       * Regex dinámicas pueden inyectar código inesperado.
       * new RegExp(userInput) es peligroso pero a veces necesario.
       * Razón: Alertar sin prohibir casos legítimos
       * Nota: 'security/critical.js' la tiene como 'error'; este nivel la relaja a 'warn'
       */
      'security/detect-non-literal-regexp': 'warn',

      /*
       * Comparaciones de tiempo pueden filtrar información (timing attacks).
       * Alertar cuando hay comparaciones potencialmente vulnerables.
       * Razón: Visibilidad de posibles ataques de canal lateral
       * Nota: 'security/critical.js' la tiene como 'error'; este nivel la relaja a 'warn'
       */
      'security/detect-possible-timing-attacks': 'warn',

      /*
       * Child process puede ser vector de ataque si el input no está sanitizado.
       * Alertar en usos que pueden ser legítimos (CI/CD, scripts).
       * Razón: Revisión manual necesaria caso por caso
       * Nota: 'security/critical.js' la tiene como 'error'; este nivel la relaja a 'warn'
       */
      'security/detect-child-process': 'warn',

      /*
       * Acceso dinámico a propiedades puede ser inyección de objeto.
       * obj[userInput] requiere revisión pero es patrón común legítimo.
       * Razón: Balance entre seguridad y pragmatismo
       * Nota: 'security/critical.js' la tiene como 'error'; este nivel la relaja a 'warn'
       */
      'security/detect-object-injection': 'warn',
    }),
  },
}
