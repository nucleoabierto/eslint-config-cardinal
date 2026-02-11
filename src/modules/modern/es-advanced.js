/**
 * @module cardinal/modern/es-advanced
 * @summary Reglas avanzadas de modernización ES6+ y patrones modernos.
 * @remarks Complementa `modern/es-fundamentals.js` con reglas que requieren mayor
 * familiaridad con las características modernas de JavaScript.
 * Incluido en config-recommended y superiores.
 *
 * Para las reglas fundamentales (no-var, prefer-const, etc.) ver `modern/es-fundamentals.js`.
 */

export default {
  name: 'cardinal/modern/es-advanced',
  rules: {
    /*
     * === MODERNIZACIÓN ES6+ AVANZADA ===
     * Patrones más sofisticados que mejoran la calidad pero requieren
     * conocimiento de características ES6/ES2018/ES2020+.
     */

    /*
     * Usar shorthand para propiedades y métodos de objeto.
     * { name } es más claro que { name: name }.
     * avoidExplicitReturnArrows permite métodos con return explícito.
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
     * Preferir operador de exponenciación sobre Math.pow().
     * 2 ** 3 es más claro que Math.pow(2, 3).
     * Razón: Modernización y legibilidad matemática
     */
    'prefer-exponentiation-operator': 'error',

    /*
     * Preferir object spread sobre Object.assign().
     * {...obj1, ...obj2} es más claro que Object.assign({}, obj1, obj2).
     * Razón: Modernización y simplicidad
     */
    'prefer-object-spread': 'error',

    /*
     * Preferir named capture groups en expresiones regulares.
     * (?<name>...) es más claro que índices numéricos.
     * Razón: Legibilidad en expresiones complejas
     */
    'prefer-named-capture-group': 'error',

    /*
     * Preferir Object.hasOwn() sobre hasOwnProperty().
     * Object.hasOwn() es más seguro y moderno (ES2022).
     * Razón: Seguridad y modernización
     */
    'prefer-object-has-own': 'error',

    /*
     * Usar operadores de asignación lógica (ES2021).
     * x &&= y es más claro que x = x && y.
     * Razón: Simplificación y modernización
     */
    'logical-assignment-operators': 'error',
  },
}
