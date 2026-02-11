import esAdvanced from './es-advanced.js'
import esFundamentals from './es-fundamentals.js'

/**
 * @module cardinal/modern/es-features
 * @summary Conjunto completo de modernización ES6+.
 * @remarks Combina `modern/es-fundamentals.js` y `modern/es-advanced.js`.
 * Mantenido para retrocompatibilidad. Los presets que quieran solo las reglas
 * fundamentales deben importar `es-fundamentals.js` directamente (ver config-basic.js).
 *
 * - Fundamentals (ES6 básico): prefer-const, no-var, prefer-rest-params, etc.
 * - Advanced (ES6+): object-shorthand, prefer-template, logical-assignment-operators, etc.
 */
export default {
  name: 'cardinal/modern/es-features',
  rules: {
    ...esFundamentals.rules,
    ...esAdvanced.rules,
  },
}
