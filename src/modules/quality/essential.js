/**
 * @module cardinal/quality/essential
 * @summary Reglas esenciales de calidad de código que todo proyecto debe tener.
 * @remarks Prevención de anti-patrones, limpieza de código innecesario, y mejores prácticas.
 * NO incluye modernización ES6+ (ver modern/es-features).
 */

export default {
  name: 'cardinal/quality/essential',
  rules: {
    /*
     * Prevención de anti-patrones
     * Patrones que causan bugs o dificultan el mantenimiento.
     * Son 'error' porque son problemas claros de calidad.
     */
    /*
     * Constructor RegExp() es más verboso y menos seguro.
     * Literales /regex/ son más claros y eficientes.
     * Razón: Claridad y seguridad en expresiones regulares
     */
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    /*
     * Rechazar promesas con strings causa debugging difícil.
     * Error objects tienen stack traces y propiedades útiles.
     * Razón: Mejorar debugging y manejo de errores
     */
    'prefer-promise-reject-errors': 'error',

    /*
     * parseInt('123') es innecesario cuando 123 funciona.
     * Literales numéricos son más claros y eficientes.
     * Razón: Simplificar y modernizar código
     */
    'prefer-numeric-literals': 'error',

    /*
     * == y != causan coerción de tipos inesperada.
     * === y !== son más predecibles y seguros.
     * Permitimos == null para null/undefined checks por pragmatismo.
     * Razón: Prevenir bugs de coerción de tipos
     */
    eqeqeq: [
      'error',
      'always',
      { null: 'ignore' },
    ],

    /*
     * Lanzar strings/numbers pierde stack trace.
     * Error objects preservan información de depuración.
     * Razón: Mejorar capacidad de debugging
     */
    'no-throw-literal': 'error',

    /*
     * Yoda conditions (5 == x) son confusas.
     * x == 5 es más natural y fácil de leer.
     * Razón: Legibilidad y claridad
     */
    yoda: ['error', 'never'],

    /*
     * Operador coma (a, b) es confuso y propenso a errores.
     * Separar expresiones en líneas diferentes es más claro.
     * Razón: Claridad y evitar bugs sutiles
     */
    'no-sequences': 'error',

    /*
     * Limpieza de código innecesario
     * Código que no aporta valor y confunde al lector.
     * Son 'error' porque indican mala calidad de código.
     */
    /*
     * Catch que solo relanza el error es innecesario.
     * try/catch sin manejo específico no tiene propósito.
     * Razón: Eliminar código que no hace nada
     */
    'no-useless-catch': 'error',

    /*
     * call() y apply() innecesarios cuando no se cambia this.
     * fn() es más simple y claro que fn.call().
     * Razón: Simplificar código innecesario
     */
    'no-useless-call': 'error',

    /*
     * Constructor sin lógica es innecesario.
     * class A {} es suficiente, no necesita constructor vacío.
     * Razón: Eliminar código redundante
     */
    'no-useless-constructor': 'error',

    /*
     * Renombrar import/export sin usar el nuevo nombre.
     * import { a as a } es completamente innecesario.
     * Razón: Eliminar renombrados redundantes
     */
    'no-useless-rename': 'error',

    /*
     * Return al final de función sin valor es innecesario.
     * Las funciones retornan undefined automáticamente.
     * Razón: Simplificar código redundante
     */
    'no-useless-return': 'error',

    /*
     * ['key'] es innecesario cuando 'key' funciona.
     * Usar notación de punto cuando es posible.
     * Razón: Simplificar y mejorar legibilidad
     */
    'no-useless-computed-key': 'error',

    /*
     * Escapar caracteres seguros en strings es innecesario.
     * 'a\b' es lo mismo que 'ab' en la mayoría de casos.
     * Razón: Eliminar escapes redundantes
     */
    'no-useless-escape': 'error',

    /*
     * Backreferences innecesarias en regex.
     * /(a)\1/ es lo mismo que /aa/ cuando no hay capturas.
     * Razón: Simplificar expresiones regulares
     */
    'no-useless-backreference': 'error',

    /*
     * Boolean(!!value) es redundante.
     * !!value es suficiente y más claro.
     * Razón: Eliminar casting booleano redundante
     */
    'no-extra-boolean-cast': 'error',

    /*
     * Expresiones divididas en líneas pueden ser ambiguas.
     * a + b * c puede interpretarse incorrectamente.
     * Razón: Prevenir ambigüedad en expresiones
     */
    'no-unexpected-multiline': 'error',

    /*
     * Control de flujo
     * Estructuras que pueden simplificarse para mayor claridad.
     * Son 'error' porque indican código poco claro o redundante.
     */
    /*
     * else después de return nunca se ejecuta.
     * return ya termina la ejecución de la función.
     * Razón: Eliminar código muerto
     */
    'no-else-return': 'error',

    /*
     * if solitario en else puede combinarse.
     * if (a) {} else if (b) {} es mejor como if (a) {} else if (b) {}.
     * Razón: Simplificar estructura condicional
     */
    'no-lonely-if': 'error',

    /*
     * Ternario innecesario cuando es lo mismo que la condición.
     * x ? x : y es lo mismo que x || y.
     * Razón: Simplificar expresiones redundantes
     */
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    /*
     * Ternarios anidados son difíciles de leer.
     * Usar if/else anidados es más claro.
     * Razón: Mejorar legibilidad
     */
    'no-nested-ternary': 'error',

    /*
     * Objetos y propiedades
     * Patrones relacionados con manejo de objetos y propiedades.
     */
    /*
     * obj.prop es más claro que obj['prop'] cuando es posible.
     * Permitimos keywords (obj.class) por compatibilidad.
     * Razón: Mejorar legibilidad y consistencia
     */
    'dot-notation': ['error', { allowKeywords: true }],

    /*
     * Bloques solitarios {} sin propósito son innecesarios.
     * Generalmente indican código incompleto.
     * Razón: Eliminar código vacío
     */
    'no-lone-blocks': 'error',

    /*
     * Permitimos reasignar propiedades del parámetro objeto.
     * obj.prop = value es común y útil.
     * Razón: Permitir patrones comunes de mutación
     */
    'no-param-reassign': ['error', { props: false }],

    /*
     * Asignación en return puede ser confusa.
     * return x = y parece comparación pero es asignación.
     * Permitimos con paréntesis para claridad: return (x = y).
     * Razón: Prevenir ambigüedad
     */
    'no-return-assign': ['error', 'except-parens'],

    /*
     * Variables
     * Reglas sobre declaración y manejo de variables.
     */
    /*
     * Múltiples variables inicializadas en una línea son difíciles de leer.
     * let a = 1, b = 2 es menos claro que declaraciones separadas.
     * Razón: Mejorar legibilidad y debugging
     */
    'one-var': ['error', { initialized: 'never' }],

    /*
     * Reglas de calidad migradas desde correctness/syntax.js
     * Reglas que previenen bugs comunes y mejoran la calidad del código.
     */
    /*
     * Getters/setters deben existir en pares consistentes.
     * Evita comportamientos inesperados al acceder propiedades.
     * Razón: Consistencia en acceso a propiedades
     */
    'accessor-pairs': 'error',

    /*
     * Callbacks de array deben retornar valores consistentes.
     * map(), filter(), etc. sin return causan arrays incorrectos.
     * Razón: Prevenir bugs en operaciones de arrays
     */
    'array-callback-return': 'error',

    /*
     * Variables declaradas con var tienen function scope.
     * let/const tienen block scope, más predecibles.
     * Razón: Prevenir bugs de scope con var
     */
    'block-scoped-var': 'error',

    /*
     * Parámetros por defecto deben ir al final.
     * function(a, b = 1) es más claro que function(a = 1, b).
     * Razón: Claridad y consistencia en firmas
     */
    'default-param-last': 'error',

    /*
     * Getters y setters relacionados deben estar agrupados.
     * Mejora la legibilidad y mantenibilidad de clases.
     * Razón: Organización de código
     */
    'grouped-accessor-pairs': 'error',

    /*
     * for-in debe filtrar propiedades heredadas.
     * Evita iterar sobre propiedades del prototipo.
     * Razón: Prevenir bugs de iteración
     */
    'guard-for-in': 'error',

    /*
     * Constructores deben empezar con mayúscula.
     * Distingue constructores de funciones normales.
     * Razón: Convención y claridad
     */
    'new-cap': 'error',

    /*
     * await en loops puede causar problemas de rendimiento.
     * Ejecuta promeses secuencialmente en lugar de paralelo.
     * Razón: Prevenir problemas de rendimiento
     */
    'no-await-in-loop': 'error',

    /*
     * /0/ puede ser división o regex ambigua.
     * Usar paréntesis para clarificar intención.
     * Razón: Evitar ambigüedad en expresiones
     */
    'no-div-regex': 'error',

    /*
     * Coerción implícita (!value, +value) es confusa.
     * Boolean(), Number(), String() son más explícitos.
     * Razón: Claridad en conversiones de tipo
     */
    'no-implicit-coercion': 'error',

    /*
     * this en funciones no-método puede ser undefined.
     * Indica posible error de contexto.
     * Razón: Prevenir errores de this
     */
    'no-invalid-this': 'error',

    /*
     * Labels con nombres de variables confunden.
     * label: y let label = 1 causan ambigüedad.
     * Razón: Evitar confusión de nombres
     */
    'no-label-var': 'error',

    /*
     * Funciones en loops pueden capturar valor incorrecto.
     * Causa bugs clásicos con closures.
     * Razón: Prevenir bugs de closures
     */
    'no-loop-func': 'error',

    /*
     * Asignación múltiple (a = b = c) es confusa.
     * Separar asignaciones es más claro.
     * Razón: Claridad y evitar bugs sutiles
     */
    'no-multi-assign': 'error',

    /*
     * Strings multilínea con backslash son propensos a errores.
     * Template literals son más seguros y claros.
     * Razón: Modernización y seguridad
     */
    'no-multi-str': 'error',

    /*
     * new sin asignación crea objetos sin referencia.
     * Generalmente indica error o código incompleto.
     * Razón: Detectar objetos huérfanos
     */
    'no-new': 'error',

    /*
     * new Function() es como eval(), riesgo de seguridad.
     * Usar funciones normales o arrow functions.
     * Razón: Seguridad y rendimiento
     */
    'no-new-func': 'error',

    /*
     * new String/Number/Boolean son innecesarios.
     * Literales son más eficientes y claros.
     * Razón: Eficiencia y simplicidad
     */
    'no-new-wrappers': 'error',

    /*
     * Literales octales son obsoletos y confusos.
     * Usar 0o para octal explícito en ES6+.
     * Razón: Modernización y claridad
     */
    'no-octal': 'error',

    /*
     * __proto__ es obsoleto y propenso a errores.
     * Usar Object.getPrototypeOf() en su lugar.
     * Razón: Modernización y seguridad
     */
    'no-proto': 'error',

    /*
     * Labels no usados son código muerto.
     * Confunden y no aportan valor.
     * Razón: Eliminar código innecesario
     */
    'no-unused-labels': 'error',

    /*
     * Campos privados no usados indican código incompleto.
     * Generalmente son errores de implementación.
     * Razón: Detectar campos privados huérfanos
     */
    'no-unused-private-class-members': 'error',

    /*
     * Concatenación innecesaria ('a' + 'b').
     * 'ab' es más simple y eficiente.
     * Razón: Simplificar código
     */
    'no-useless-concat': 'error',

    /*
     * parseInt sin radix puede interpretar octal.
     * parseInt('010') es 8 en modo antiguo.
     * Razón: Prevenir bugs de parsing
     */
    radix: 'error',

    /*
     * Funciones async marcadas deben usar await.
     * async sin await es innecesario.
     * Razón: Detectar funciones async incompletas
     */
    'require-await': 'error',

    /*
     * Generators deben usar yield.
     * function* sin yield no genera valores.
     * Razón: Detectar generators incompletos
     */
    'require-yield': 'error',

    /*
     * Symbol debe tener descripción para debugging.
     * Symbol() sin descripción es difícil de depurar.
     * Razón: Mejorar capacidad de debugging
     */
    'symbol-description': 'error',

    /*
     * === CONVENCIONES Y ESTILO DE CALIDAD ===
     * Reglas de calidad que imponen consistencia de nombres y estructura.
     * Son esenciales para mantener un código legible y mantenible.
     */
    /*
     * Forzar camelCase con excepciones pragmáticas.
     * Permitimos UNSAFE_ prefix (React) y propiedades.
     * Razón: Consistencia con flexibilidad para casos especiales
     */
    camelcase: [
      'error',
      {
        // Permitir prefijo UNSAFE_ en React (convención oficial)
        allow: ['^UNSAFE_'],
        // No forzar camelCase en propiedades de objeto
        properties: 'never',
        // Ignorar variables globales (window, document, etc.)
        ignoreGlobals: true,
      },
    ],

    /*
     * bind() innecesario cuando no se usa 'this'.
     * Indica malentendido de cómo funciona bind().
     * Razón: Calidad de código y claridad
     */
    'no-extra-bind': 'error',

    /*
     * default al final sigue el patrón natural de lectura.
     * Evita confusión y mejora la mantenibilidad.
     * Razón: Estructura consistente y legibilidad
     */
    'default-case-last': 'error',

    /*
     * Requerir llaves en bloques de control.
     * Previene bugs clásicos de "dangling else".
     * 'multi-line' permite omitir llaves en bloques de una sola línea.
     * Razón: Calidad y prevención de bugs
     */
    curly: ['error', 'multi-line'],
  },
}
