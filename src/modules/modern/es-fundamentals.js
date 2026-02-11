/**
 * @module cardinal/modern/es-fundamentals
 * @summary Reglas fundamentales de modernización ES6+.
 * @remarks Reglas elementales que todo proyecto JavaScript moderno debería tener.
 * Incluye las bases de ES6: const/let, arrow functions, spread, rest.
 * Estas reglas son suficientes para proyectos básicos (ver config-basic).
 *
 * Para modernización avanzada (named capture groups, logical assignment, etc.)
 * ver `modern/es-advanced.js`, incluido en config-recommended y superiores.
 */

export default {
  name: 'cardinal/modern/es-fundamentals',
  rules: {
    /*
     * === MODERNIZACIÓN ES6 FUNDAMENTAL ===
     * Las bases del JavaScript moderno. Son 'error' porque los equivalentes
     * obsoletos (var, function callbacks) tienen problemas de scope y bugs.
     */

    /*
     * Preferir const sobre let cuando no se reasigna la variable.
     * const previene reasignación accidental y mejora la inmutabilidad.
     * Razón: Inmutabilidad y prevención de bugs
     */
    'prefer-const': ['error', { destructuring: 'all' }],

    /*
     * Prohibir var (obsoleto desde ES6).
     * var tiene function scope y hoisting problemático.
     * Razón: Modernización y prevención de bugs de scope
     */
    'no-var': 'error',

    /*
     * Preferir rest parameters sobre arguments object.
     * (...args) es más claro que arguments y es array real.
     * Razón: Modernización y mejor manejo de parámetros
     */
    'prefer-rest-params': 'error',

    /*
     * Preferir spread operator sobre apply().
     * fn(...args) es más claro que fn.apply(null, args).
     * Razón: Modernización y claridad
     */
    'prefer-spread': 'error',

    /*
     * Preferir arrow functions en callbacks.
     * () => {} es más conciso que function() {}.
     * Razón: Modernización y legibilidad
     */
    'prefer-arrow-callback': 'error',
  },
}
