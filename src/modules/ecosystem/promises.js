import pluginPromise from 'eslint-plugin-promise'

/**
 * @module cardinal/promises
 * @summary Reglas para asegurar el uso correcto de Promises y async/await.
 * @remarks Incluye reglas core de ESLint y eslint-plugin-promise para prevenir anti-patrones.
 */

/**
 * @summary Configuración especializada en flujos asíncronos.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para integrarse en presets
 * Cardinal.
 */
export default {
  name: 'cardinal/promises',
  plugins: {
    promise: pluginPromise,
  },
  rules: {
    /*
     * ESLint Core - Reglas de promesas
     * Reglas fundamentales de ESLint para manejo correcto de promesas.
     * Son 'error' porque previenen bugs comunes en código asíncrono.
     */
    /*
     * Return en Promise executor causa comportamiento inesperado.
     * El executor debe llamar resolve/reject, no retornar.
     * Razón: Prevenir bugs en construcción de promesas
     */
    'no-promise-executor-return': 'error',

    /*
     * Reasignar error en catch pierde información original.
     * catch (e) { e = new Error('wrapped'); } pierde stack.
     * Razón: Preservar información de depuración
     */
    'preserve-caught-error': 'error',

    /*
     * eslint-plugin-promise
     * Reglas especializadas para mejores prácticas con promesas.
     * Previenen anti-patrones comunes en código asíncrono.
     */
    /*
     * Nombres descriptivos mejoran legibilidad de callbacks.
     * new Promise((resolve, reject) vs new Promise((res, rej).
     * Razón: Claridad en código asíncrono
     */
    'promise/param-names': 'error',

    /*
     * Promise.resolve/reject son métodos estáticos, no constructores.
     * new Promise.resolve() es incorrecto.
     * Razón: Uso correcto de la API
     */
    'promise/no-new-statics': 'error',

    /*
     * Envolver valores en promesas innecesariamente.
     * Promise.resolve(value) cuando value ya es promesa.
     * Razón: Simplificar código redundante
     */
    'promise/no-return-wrap': 'error',

    /*
     * Todas las ramas de promesa deben retornar algo.
     * .then(() => {}) sin return puede causar comportamiento inesperado.
     * Razón: Consistencia en encadenamiento
     */
    'promise/always-return': 'error',

    /*
     * Return/throw en finally sobrescribe comportamiento de promesa.
     * Puede ocultar rechazos o cambiar resultados.
     * Razón: Preservar comportamiento de promesas
     */
    'promise/no-return-in-finally': 'error',

    /*
     * Validar parámetros previene errores en runtime.
     * new Promise(callback) debe recibir función.
     * Razón: Prevenir errores de construcción
     */
    'promise/valid-params': 'error',

    /*
     * async/await es más claro que .then().
     * Mejor manejo de errores y legibilidad.
     * Razón: Modernización y claridad
     */
    'promise/prefer-await-to-then': 'error',

    /*
     * Mezclar callbacks y promesas causa código confuso.
     * Anti-patrón que dificulta el manejo de errores.
     * Razón: Consistencia en paradigmas asíncronos
     */
    'promise/no-callback-in-promise': 'error',

    /*
     * Promesas dentro de callbacks anidan complejidad.
     * Anti-patrón que dificulta el flujo del código.
     * Razón: Mantener paradigmas separados
     */
    'promise/no-promise-in-callback': 'error',

    /*
     * Promesas anidadas son difíciles de leer.
     * promise.then(() => new Promise(...)) es mejor aplanado.
     * Razón: Mejorar legibilidad
     */
    'promise/no-nesting': 'error',

    /*
     * Resolver/rechazar múltiples veces es un bug.
     * Solo se puede resolver/rechazar una vez.
     * Razón: Prevenir errores lógicos
     */
    'promise/no-multiple-resolved': 'error',

    /*
     * Promesas deben ser manejadas (catch o return).
     * Promesas sin manejo pueden causar rechazos no capturados.
     * Razón: Prevenir rechazos silenciosos
     */
    'promise/catch-or-return': 'error',

    /*
     * Reglas desactivadas por ser demasiado restrictivas
     * o no alineadas con nuestra filosofía pragmática.
     */
    /*
     * prefer-await-to-callbacks es demasiado estricto.
     * A veces callbacks son necesarios por compatibilidad.
     * Razón: Flexibilidad pragmática
     */
    'promise/prefer-await-to-callbacks': 'off',

    /*
     * prefer-catch puede ser demasiado prescriptivo.
     * .then(null, catch) es válido en algunos casos.
     * Razón: Permitir flexibilidad
     */
    'promise/prefer-catch': 'off',

    /*
     * no-native prohibiría Promise nativo.
     * No tiene sentido en entorno moderno.
     * Razón: Permitir uso nativo
     */
    'promise/no-native': 'off',

    /*
     * avoid-new es demasiado restrictivo.
     * new Promise es necesario para wrapping de callbacks.
     * Razón: Permitir casos válidos
     */
    'promise/avoid-new': 'off',

    /*
     * spec-only es para desarrollo del plugin.
     * No relevante para código de aplicación.
     * Razón: No aplicable
     */
    'promise/spec-only': 'off',
  },
}
