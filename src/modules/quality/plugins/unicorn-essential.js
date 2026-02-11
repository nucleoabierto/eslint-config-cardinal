import pluginUnicorn from 'eslint-plugin-unicorn'

/**
 * @module cardinal/quality/unicorn-essential
 * @summary Reglas esenciales de unicorn para código moderno y limpio.
 * @remarks Incluye mejores prácticas modernas de JavaScript/TypeScript sin ser restrictivo.
 */

export default {
  name: 'cardinal/quality/unicorn-essential',
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    /*
     * === REGLAS ESENCIALES DE UNICORN ===
     * Mejoras de calidad y modernización para JavaScript/TypeScript.
     * Balance entre mejores prácticas y pragmatismo.
     */
    /*
     * Mejorar legibilidad y seguridad en expresiones regulares.
     * Optimiza patrones y previene ataques ReDoS.
     * Razón: Seguridad y claridad en expresiones complejas
     */
    'unicorn/better-regex': 'error',

    /*
     * Forzar consistencia en nombres de parámetros de error.
     * catch (e) vs catch (error) - estandarizar a 'error'.
     * Razón: Consistencia y claridad en manejo de errores
     */
    'unicorn/catch-error-name': ['error', { name: 'error' }],

    /*
     * Promover destructuring consistente y predecible.
     * const {name} = obj vs const name = obj.name.
     * Razón: Modernización y claridad en extracción de propiedades
     */
    'unicorn/consistent-destructuring': 'error',

    /*
     * Funciones deben estar en el scope apropiado.
     * Evitar funciones innecesariamente anidadas.
     * Razón: Mejorar rendimiento y claridad del scope
     */
    'unicorn/consistent-function-scoping': 'error',

    /*
     * Errores personalizados deben estar bien definidos.
     * Clases de error con propiedades consistentes.
     * Razón: Mejorar depuración y manejo de errores
     */
    'unicorn/custom-error-definition': 'error',

    /*
     * Consistencia en espaciado de objetos vacíos.
     * {} vs { } - estandarizar sin espacios.
     * Razón: Consistencia visual en código
     */
    'unicorn/empty-brace-spaces': 'error',

    /*
     * Errores deben tener mensajes descriptivos.
     * throw new Error() vs throw new Error('message').
     * Razón: Mejorar depuración y experiencia del desarrollador
     */
    'unicorn/error-message': 'error',

    /*
     * Consistencia en secuencias de escape Unicode.
     * \u0041 vs \x41 - preferir formato Unicode.
     * Razón: Claridad y consistencia en caracteres especiales
     */
    'unicorn/escape-case': 'error',

    /*
     * Usar constructores con new para builtins.
     * Array() vs new Array() - consistencia.
     * Razón: Consistencia en creación de objetos builtins
     */
    'unicorn/new-for-builtins': 'error',

    /*
     * Prevenir uso abusivo de eslint-disable.
     * Desactivar reglas debe ser específico y justificado.
     * Razón: Mantener calidad y transparencia
     */
    'unicorn/no-abusive-eslint-disable': 'error',

    /* arr.push(1); arr.push(2) → arr.push(1, 2) - eliminado por problemas con streams */

    /* (await promise).property → const result = await promise; result.property */
    'unicorn/no-await-expression-member': 'error',

    /* console.log ('foo') → console.log('foo') */
    'unicorn/no-console-spaces': 'error',

    /* no-document-cookie: movida a unicorn-web.js (específica del DOM) */

    /* Archivos vacíos son probablemente errores */
    'unicorn/no-empty-file': 'error',

    /* \x41 → \u0041 - unicode es más claro */
    'unicorn/no-hex-escape': 'error',

    /* Array.isArray() es mejor que instanceof Array (reemplazado por no-instanceof-builtins) */
    'unicorn/no-instanceof-builtins': 'error',

    /* no-invalid-remove-event-listener: movida a unicorn-web.js (específica del DOM) */

    /* if (a) { if (b) {} } → if (a && b) {} */
    'unicorn/no-lonely-if': 'error',

    /* arr.flat(Infinity) vs número específico */
    'unicorn/no-magic-array-flat-depth': 'error',

    /* !(a === b) → a !== b */
    'unicorn/no-negation-in-equality-check': 'error',

    /* Ternarios anidados son difíciles de leer */
    'unicorn/no-nested-ternary': 'error',

    /* new Array() → [] */
    'unicorn/no-new-array': 'error',

    /* new Buffer() está deprecado */
    'unicorn/no-new-buffer': 'error',

    /* Objetos como defaults pueden causar bugs */
    'unicorn/no-object-as-default-parameter': 'error',

    /* Clases con solo métodos estáticos deberían ser objetos */
    'unicorn/no-static-only-class': 'error',

    /* Objetos con método then pueden confundirse con Promises */
    'unicorn/no-thenable': 'error',

    /* const self = this es anti-patrón con arrow functions */
    'unicorn/no-this-assignment': 'error',

    /* typeof x === 'undefined' → x === undefined */
    'unicorn/no-typeof-undefined': 'error',

    /* return await promise innecesario en algunos contextos */
    'unicorn/no-unnecessary-await': 'error',

    /* const [,, foo] = array es difícil de leer */
    'unicorn/no-unreadable-array-destructuring': 'error',

    /* IIFEs deben ser legibles */
    'unicorn/no-unreadable-iife': 'error',

    /* {...foo || {}} innecesario si foo siempre es objeto */
    'unicorn/no-useless-fallback-in-spread': 'error',

    /* array.length === 0 || array.every(...) - el check es redundante */
    'unicorn/no-useless-length-check': 'error',

    /* return Promise.resolve(value) → return value en async */
    'unicorn/no-useless-promise-resolve-reject': 'error',

    /* {...{foo: 1}} → {foo: 1} */
    'unicorn/no-useless-spread': 'error',

    /* Cases vacíos o redundantes en switch */
    'unicorn/no-useless-switch-case': 'error',

    /* return undefined → return */
    'unicorn/no-useless-undefined': 'error',

    /* 1.0 → 1 */
    'unicorn/no-zero-fractions': 'error',

    /* 0XFF → 0xff */
    'unicorn/number-literal-case': 'error',

    /* 1000000 → 1_000_000 */
    'unicorn/numeric-separators-style': 'error',

    /* prefer-add-event-listener: movida a unicorn-web.js (específica del DOM) */

    /* array.filter(fn)[0] → array.find(fn) */
    'unicorn/prefer-array-find': 'error',

    /* Usar .flat() en lugar de alternativas complejas */
    'unicorn/prefer-array-flat': 'error',

    /* .map().flat() → .flatMap() */
    'unicorn/prefer-array-flat-map': 'error',

    /* array.findIndex(x => x === value) → array.indexOf(value) */
    'unicorn/prefer-array-index-of': 'error',

    /* array.find(fn) !== undefined → array.some(fn) */
    'unicorn/prefer-array-some': 'error',

    /* array[array.length - 1] → array.at(-1) */
    'unicorn/prefer-at': 'error',

    /* prefer-blob-reading-methods: movida a unicorn-web.js (Web API DOM) */

    /* charCodeAt → codePointAt */
    'unicorn/prefer-code-point': 'error',

    /* new Date().getTime() → Date.now() */
    'unicorn/prefer-date-now': 'error',

    /* x = x || 10 → x = 10 en parámetros */
    'unicorn/prefer-default-parameters': 'error',

    /* prefer-dom-node-*: movidas a unicorn-web.js (específicas del DOM) */
    /* prefer-event-target: movida a unicorn-web.js (específica del DOM) */

    /* import {foo} from 'bar'; export {foo} → export {foo} from 'bar' */
    'unicorn/prefer-export-from': 'error',

    /* indexOf() !== -1 → includes() */
    'unicorn/prefer-includes': 'error',

    /* JSON.parse(buffer.toString()) → JSON.parse(buffer) */
    'unicorn/prefer-json-parse-buffer': 'error',

    /* prefer-keyboard-event-key: movida a unicorn-web.js (específica del DOM) */

    /* foo ? foo : bar → foo || bar */
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    /* ~~x → Math.trunc(x) */
    'unicorn/prefer-math-trunc': 'error',

    /* prefer-modern-dom-apis: movida a unicorn-web.js (específica del DOM) */

    /* Usar APIs Math modernas */
    'unicorn/prefer-modern-math-apis': 'error',

    /* x => Boolean(x) → Boolean */
    'unicorn/prefer-native-coercion-functions': 'error',

    /* array[array.length - 1] → array[-1] cuando sea posible */
    'unicorn/prefer-negative-index': 'error',

    /* Preferir Number.isNaN sobre isNaN global */
    'unicorn/prefer-number-properties': 'error',

    /* Usar Object.fromEntries cuando sea apropiado */
    'unicorn/prefer-object-from-entries': 'error',

    /* Preferir String#replaceAll sobre regex con g flag */
    'unicorn/prefer-string-replace-all': 'error',

    /* Preferir String#slice sobre String#substr/substring */
    'unicorn/prefer-string-slice': 'error',

    /* Preferir String#startsWith/endsWith sobre regex */
    'unicorn/prefer-string-starts-ends-with': 'error',

    /* Preferir String#trimStart/trimEnd sobre trimLeft/trimRight */
    'unicorn/prefer-string-trim-start-end': 'error',

    /* Preferir switch sobre múltiples if-else con igualdad */
    'unicorn/prefer-switch': 'error',

    /* Preferir ternario sobre if-else para asignaciones simples */
    'unicorn/prefer-ternary': 'error',

    /* Preferir top-level await cuando sea posible */
    'unicorn/prefer-top-level-await': 'error',

    /* Preferir TypeError para errores de tipo */
    'unicorn/prefer-type-error': 'error',

    /* Prevenir uso de for...in en arrays */
    'unicorn/no-for-loop': 'warn',

    /* Sugerir usar for...of sobre .forEach() */
    'unicorn/no-array-for-each': 'warn',
  },
}
