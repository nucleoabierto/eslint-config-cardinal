/**
 * @module cardinal/modern/es-features
 * @summary Conjunto completo de modernización ES6+.
 * @remarks Reglas de modernización para proyectos JavaScript. Cubre desde las bases
 * de ES6 (const/let, arrow functions, spread/rest) hasta características más recientes
 * (object spread ES2018, logical assignment ES2021, Object.hasOwn ES2022).
 *
 * Para el subconjunto básico (solo ES6 fundamental) ver `modern/es-fundamentals.js`,
 * incluido en config-basic.
 */

export default {
  name: 'cardinal/modern/es-features',
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
     * Más concisas que function() {} y con binding léxico de this.
     * Razón: Modernización y legibilidad
     */
    'prefer-arrow-callback': 'error',

    /*
     * === MODERNIZACIÓN ES6+ AVANZADA ===
     * Patrones más sofisticados que mejoran la calidad pero requieren
     * conocimiento de características ES6/ES2018/ES2020+.
     */

    /*
     * Usar shorthand para propiedades y métodos de objeto.
     * { name } es más claro que { name: name }.
     * avoidExplicitReturnArrows: fuerza method shorthand en lugar de arrow functions con return explícito.
     * Razón: Simplificación y legibilidad
     */
    'object-shorthand': [
      'error',
      'always',
      { avoidExplicitReturnArrows: true },
    ],

    /*
     * Usar template literals sobre concatenación de strings.
     * `Hola ${nombre}` es más claro que 'Hola ' + nombre.
     * Razón: Modernización y legibilidad
     */
    'prefer-template': 'error',

    /*
     * Preferir operador de exponenciación sobre Math.pow() (ES2016).
     * 2 ** 3 es más claro que Math.pow(2, 3).
     * Razón: Modernización y legibilidad matemática
     */
    'prefer-exponentiation-operator': 'error',

    /*
     * Preferir object spread sobre Object.assign() (ES2018).
     * {...obj1, ...obj2} es más claro que Object.assign({}, obj1, obj2).
     * Razón: Modernización y simplicidad
     */
    'prefer-object-spread': 'error',

    /*
     * Preferir named capture groups en expresiones regulares (ES2018).
     * (?<name>...) es más claro que índices numéricos.
     * Razón: Legibilidad en expresiones complejas
     */
    'prefer-named-capture-group': 'error',

    /*
     * Preferir Object.hasOwn() sobre hasOwnProperty() (ES2022).
     * Object.hasOwn() es más seguro y moderno.
     * Razón: Seguridad y modernización
     */
    'prefer-object-has-own': 'error',

    /*
     * Usar operadores de asignación lógica (ES2021).
     * x &&= y, x ||= y, x ??= y en lugar de x = x && y, x = x || y, x = x ?? y.
     * Razón: Simplificación y modernización
     */
    'logical-assignment-operators': 'error',
  },
}
