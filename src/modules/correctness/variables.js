/**
 * @module cardinal/variables
 * @summary Reglas enfocadas en declaraciones, variables y control de uso.
 * @remarks Refuerza buenas prácticas para nombres consistentes y detección temprana de
 * errores comunes.
 */

/**
 * @summary Configuración dedicada al manejo seguro de variables.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para integrarse con otros presets.
 */
export default {
  name: 'cardinal/variables',
  rules: {
    /*
     * === EXPRESIONES Y VARIABLES ===
     * Reglas para manejo seguro de expresiones y detección de variables no utilizadas.
     * Son 'error' porque previenen bugs y mejoran la calidad del código.
     */
    /*
     * Permitir expresiones útiles pero detectar las innecesarias.
     * Cortocircuitos (a && b) y ternarios son patrones válidos.
     * Razón: Permitir patrones útiles, prevenir código muerto
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    /*
     * Detectar variables no utilizadas con flexibilidad pragmática.
     * Permitimos parámetros y errores no usados por convención común.
     * Razón: Prevenir código muerto con excepciones pragmáticas
     */
    'no-unused-vars': [
      'error',
      {
        // Permitir parámetros no usados (callbacks comunes)
        args: 'none',
        // Permitir errores no usados (catch parameters)
        caughtErrors: 'none',
        // Ignorar en destructuring con rest (común en APIs)
        ignoreRestSiblings: true,
        // Detectar todas las variables declaradas
        vars: 'all',
      },
    ],

    /*
     * Prevenir uso de variables no declaradas.
     * Causa ReferenceError y rompe la ejecución.
     * Razón: Prevenir errores de runtime críticos
     */
    'no-undef': 'error',

    /*
     * Inicializar con undefined es redundante.
     * let x = undefined es lo mismo que let x.
     * Razón: Eliminar código redundante
     */
    'no-undef-init': 'error',

    /*
     * Condiciones de bucle que no cambian causan loops infinitos.
     * while (true) es válido, pero while (false) no.
     * Razón: Prevenir bucles infinitos no intencionales
     */
    'no-unmodified-loop-condition': 'error',

    /*
     * Permitir uso antes de definición por flexibilidad en hoisting.
     * Functions y classes se pueden usar antes de su declaración.
     * Razón: Flexibilidad con patrones de hoisting
     */
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],

  },
}
