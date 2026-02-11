/**
 * @module cardinal/core/syntax
 * @summary Reglas de sintaxis básica y patrones peligrosos obsoletos.
 * @remarks Previene uso de características obsoletas y peligrosas (with, eval, caller/callee).
 * Incluye reglas básicas de correctness (for-direction, getter-return, etc.).
 * Las reglas de calidad están en quality/essential, modernización en modern/es-features.
 */

/**
 * @summary Configuración de sintaxis básica y prevención de anti-patrones.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para ESLint Flat Config.
 */
export default {
  name: 'cardinal/core/syntax',
  rules: {
    /*
     * === CARACTERÍSTICAS OBSOLETAS/PELIGROSAS ===
     * Estas reglas previenen patrones que causan bugs de seguridad o rendimiento.
     * Son 'error' porque rompen la aplicación o introducen vulnerabilidades graves.
     */
    /*
     * with() crea scope dinámico y desactiva optimizaciones del motor JS.
     * Es obsoleto desde ES5 y causa bugs impredecibles.
     * Razón: Seguridad y rendimiento críticos
     */
    'no-with': 'error',

    /*
     * __iterator__ es un patrón obsoleto de Firefox que no funciona en otros navegadores.
     * Usar Symbol.iterator en su lugar.
     * Razón: Compatibilidad y modernización
     */
    'no-iterator': 'error',

    /*
     * arguments.caller/callee están obsoletos y rompen strict mode.
     * No funcionan en arrow functions y son inseguros.
     * Razón: Seguridad y compatibilidad con ES6+
     */
    'no-caller': 'error',

    /*
     * eval() ejecuta código dinámico, rompe optimizaciones y es un riesgo de seguridad.
     * Alternativas: JSON.parse(), Function constructor (con precaución).
     * Razón: Seguridad crítica y rendimiento
     */
    'no-eval': 'error',

    /*
     * setTimeout/setInterval con strings es eval() disfrazado.
     * Mismo riesgo de seguridad que eval().
     * Razón: Seguridad crítica
     */
    'no-implied-eval': 'error',

    /*
     * Extender prototipos nativos (Array.prototype) puede romper código de terceros.
     * Causa colisiones y comportamiento impredecible.
     * Razón: Evitar efectos secundarios globales
     */
    'no-extend-native': 'error',

    /*
     * === LABELS Y CONTROL DE FLUJO ===
     * Los labels complejizan el flujo y son difíciles de seguir.
     * Rompen el principio de código lineal y fácil de leer.
     */
    /*
     * Labels en loops/switch crean código espagueti.
     * Las funciones y returns son más claros.
     * Razón: Legibilidad y mantenibilidad
     */
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    /*
     * === VARIABLES Y SCOPE ===
     * Estas reglas protegen el scope y previenen bugs comunes de variables.
     */
    /*
     * delete var no funciona en modo strict y no tiene sentido práctico.
     * Para eliminar propiedades usar delete obj.prop.
     * Razón: Prevenir código que no funciona
     */
    'no-delete-var': 'error',

    /*
     * Shadowing de nombres restringidos (undefined, NaN, etc.) causa bugs.
     * Rompe el comportamiento esperado del lenguaje.
     * Razón: Evitar bugs sutiles y difíciles de detectar
     */
    'no-shadow-restricted-names': 'error',

    /*
     * Redeclarar variables causa bugs y confusión.
     * Permitimos redeclaración de globals (ej: process en Node) por pragmatismo.
     * Razón: Prevenir bugs de scope
     */
    'no-redeclare': ['error', { builtinGlobals: false }],

    /*
     * === DECLARACIONES EN BLOQUES ===
     * Prevenir bugs de scope en estructuras de control.
     */
    /*
     * let/const en case sin bloque comparten scope entre cases.
     * Causa bugs de hoisting y scope inesperados.
     * Razón: Prevenir bugs de scope
     */
    'no-case-declarations': 'error',

    /*
     * === EMPTY BLOCKS ===
     * Bloques vacíos pueden indicar código incompleto,
     * pero empty catch es una excepción pragmática.
     */
    /*
     * Bloques vacíos generalmente indican código incompleto.
     * Permitimos empty catch para ignorar errores intencionalmente.
     * Razón: Detectar código incompleto con excepción pragmática
     */
    'no-empty': ['error', { allowEmptyCatch: true }],

    /*
     * === OPERADORES PELIGROSOS ===
     * Operadores que pueden causar bugs o comportamiento inesperado.
     */
    /*
     * void 0 es un patrón obsoleto para undefined.
     * Modernamente usamos undefined directamente.
     * Razón: Modernización y claridad
     */
    'no-void': 'error',

    /*
     * \ seguido de dígitos es sintaxis obsoleta y confusa.
     * Puede ser interpretado incorrectamente.
     * Razón: Evitar sintaxis ambigua
     */
    'no-octal-escape': 'error',

    /*
     * === DEBUGGER ===
     * debugger detiene la ejecución y no debe estar en producción.
     */
    /*
     * debugger pausa la ejecución en todos los navegadores.
     * Olvidarlo puede detener la aplicación en producción.
     * Razón: Evitar interrupciones en producción
     */
    'no-debugger': 'error',

    /*
     * === ASIGNACIÓN EN CONDICIONALES ===
     * Uno de los errores más comunes y difíciles de detectar.
     */
    /*
     * if (x = y) asigna en lugar de comparar.
     * Es un error clásico que causa bugs silenciosos.
     * Razón: Prevenir bugs de lógica comunes
     */
    'no-cond-assign': 'error',

    /*
     * === SHADOWING ===
     * TypeScript maneja el shadowing mejor que ESLint.
     */
    /*
     * TypeScript tiene reglas más sofisticadas para shadowing.
     * ESLint puede generar falsos positivos.
     * Razón: Delegar a TypeScript por mejor análisis
     */
    'no-shadow': 'off',

    /*
     * === REGLAS BÁSICAS DE CORRECTNESS ===
     * Reglas que detectan errores de lógica y construcción.
     * Son 'error' porque rompen la ejecución o causan bugs críticos.
     */
    /*
     * for-in/for-of con dirección incorrecta causa loops infinitos.
     * Es un error sutil que puede colgar la aplicación.
     * Razón: Prevenir loops infinitos
     */
    'for-direction': 'error',

    /*
     * Getter sin return siempre devuelve undefined.
     * Indica error de lógica en el getter.
     * Razón: Detectar getters que no funcionan
     */
    'getter-return': 'error',

    /*
     * Return en Promise executor causa comportamiento inesperado.
     * El executor no debe retornar valores.
     * Razón: Prevenir bugs en manejo de promesas
     */
    'no-async-promise-executor': 'error',

    /*
     * Static blocks vacíos no tienen propósito.
     * Indican código incompleto o innecesario.
     * Razón: Detectar código muerto
     */
    'no-empty-static-block': 'error',

    /*
     * Labels extra sin uso son código muerto.
     * Confunden y no aportan valor.
     * Razón: Eliminar código innecesario
     */
    'no-extra-label': 'error',

    /*
     * Funciones dentro de bloques pueden causar hoisting inesperado.
     * Es mejor usar funciones flecha o declarar fuera.
     * Razón: Prevenir bugs de scope
     */
    'no-inner-declarations': 'error',

    /*
     * Sintaxis octal obsoleta puede ser confundida.
     * Usar 0o para octal explícito en ES6+.
     * Razón: Modernización y claridad
     */
    'no-nonoctal-decimal-escape': 'error',

    /*
     * x = x + y es menos eficiente que x += y.
     * Operador de asignación es más claro y eficiente.
     * Razón: Eficiencia y claridad
     */
    'operator-assignment': 'error',

    /*
     * NaN !== NaN, usar isNaN() para comparación.
     * Es un error clásico de JavaScript.
     * Razón: Prevenir bugs de comparación
     */
    'use-isnan': 'error',

    /*
     * typeof null es 'object', error histórico de JS.
     * Usar === null para verificar null.
     * Razón: Prevenir bugs de tipo
     */
    'valid-typeof': 'error',

    /*
     * === ENCODING Y SCOPE GLOBAL ===
     * Reglas relacionadas con encoding de archivos y alcance global.
     */
    /*
     * BOM al inicio de archivos causa problemas de parsing.
     * Puede romper interpretación en algunos entornos.
     * Razón: Prevenir problemas de encoding
     */
    'unicode-bom': 'error',

    /*
     * Variables globales implícitas pueden causar colisiones de scope.
     * Son un problema de scope/correctness, no solo de seguridad.
     * Razón: Proteger encapsulamiento de módulos
     * Nota: Movida desde security/critical.js donde también se previene contaminación global
     */
    'no-implicit-globals': 'error',

  },
}
