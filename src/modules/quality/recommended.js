/**
 * @module cardinal/quality/recommended
 * @summary Reglas recomendadas de calidad que mejoran mantenibilidad.
 * @remarks Incluye advertencias sobre console/alert, destructuring, y optimizaciones.
 * Usa severidad 'warn' para guiar sin bloquear desarrollo.
 */

export default {
  name: 'cardinal/quality/recommended',
  rules: {
    /*
     * Calidad de código en producción
     * Prácticas que deben evitarse en producción pero son útiles en desarrollo.
     * Son 'warn' para guiar sin bloquear el desarrollo.
     */
    /*
     * alert() bloquea la ejecución y es mala UX.
     * En producción debe usarse UI apropiada.
     * Razón: Mejorar experiencia de usuario
     */
    'no-alert': 'warn',

    /*
     * console.log puede filtrar información sensible.
     * En producción debe usarse logging apropiado.
     * Razón: Seguridad y limpieza de producción
     */
    'no-console': 'warn',

    /*
     * Destructuring y patrones modernos
     * Patrones ES6+ que mejoran la legibilidad y eficiencia.
     * Son 'error' porque son mejoras claras de calidad.
     */
    /*
     * Destructuring es más claro que acceso por índice.
     * const { name, age } = user vs const name = user.name, age = user.age.
     * Razón: Modernización y legibilidad
     */
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    /*
     * Reglas de unicorn plugin (modernización)
     * Las reglas específicas de unicorn están en los módulos de plugins:
     * - unicorn-essential.js: reglas fundamentales
     * - unicorn-extended.js: reglas adicionales
     * Esto evita duplicación y permite configuración granular.
     */
  },
}
