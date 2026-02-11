/**
 * @module cardinal/core/errors
 * @summary Reglas críticas de prevención de errores que deben estar siempre activas.
 * @remarks Detecta errores de sintaxis, lógica y runtime que romperían la aplicación.
 * Estas reglas son no-negociables y forman la base de cualquier preset.
 */

/**
 * @summary Configuración de prevención de errores críticos.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para ESLint Flat Config.
 */
export default {
  name: 'cardinal/core/errors',
  rules: {
    /*
     * === ERRORES DE SINTAXIS ===
     * Errores que rompen el código y causan fallos de ejecución.
     * Son 'error' porque impiden que el código funcione correctamente.
     */
    /*
     * Argumentos duplicados causan comportamiento indefinido.
     * El último argumento sobrescribe a los anteriores.
     * Razón: Prevenir bugs de parámetros
     */
    'no-dupe-args': 'error',

    /*
     * Claves duplicadas en objetos causan comportamiento indefinido.
     * La última clave sobrescribe a las anteriores.
     * Razón: Prevenir bugs de objetos
     */
    'no-dupe-keys': 'error',

    /*
     * Cases duplicados en switch nunca se ejecutarán.
     * El primer case siempre gana.
     * Razón: Detectar código muerto
     */
    'no-duplicate-case': 'error',

    /*
     * Miembros de clase duplicados causan sobreescritura.
     * El último miembro sobrescribe a los anteriores.
     * Razón: Prevenir bugs de clases
     */
    'no-dupe-class-members': 'error',

    /*
     * Clases de caracteres vacías en regex nunca matchean.
     * Indican error en la expresión regular.
     * Razón: Detectar regex inválidas
     */
    'no-empty-character-class': 'error',

    /*
     * Expresiones regulares inválidas lanzan errores.
     * Sintaxis incorrecta causa fallos en runtime.
     * Razón: Prevenir errores de regex
     */
    'no-invalid-regexp': 'error',

    /*
     * Caracteres de control en regex son difíciles de leer.
     * Pueden causar problemas de encoding.
     * Razón: Legibilidad y compatibilidad
     */
    'no-control-regex': 'error',

    /*
     * Clases de caracteres engañosas parecen otras.
     * Ej: /[A-Z]/ parece mayúsculas pero incluye otros caracteres.
     * Razón: Prevenir comportamiento inesperado
     */
    'no-misleading-character-class': 'error',

    /*
     * Espacios múltiples en regex son ambiguos.
     * Puede significar espacio literal o cuantificador.
     * Razón: Claridad en expresiones regulares
     */
    'no-regex-spaces': 'error',

    /*
     * === ERRORES DE ASIGNACIÓN ===
     * Asignaciones que rompen constantes o causan bugs.
     * Son 'error' porque violan el propósito de las declaraciones.
     */
    /*
     * Reasignar una clase rompe su definición.
     * Las clases no deben ser sobrescritas.
     * Razón: Proteger definiciones de clases
     */
    'no-class-assign': 'error',

    /*
     * Reasignar const rompe su inmutabilidad.
     * const debe permanecer constante.
     * Razón: Proteger constantes
     */
    'no-const-assign': 'error',

    /*
     * Reasignar función sobrescribe su definición.
     * Las funciones no deben ser redefinidas.
     * Razón: Proteger definiciones de funciones
     */
    'no-func-assign': 'error',

    /*
     * Reasignar import rompe el módulo.
     * Los imports son de solo lectura.
     * Razón: Proteger imports del módulo
     */
    'no-import-assign': 'error',

    /*
     * Asignar a global puede romper el entorno.
     * Puede sobrescribir variables importantes.
     * Razón: Proteger entorno global
     */
    'no-global-assign': 'error',

    /*
     * Autoasignación (x = x) no tiene efecto.
     * Generalmente indica error de lógica.
     * Razón: Detectar operaciones innecesarias
     */
    'no-self-assign': ['error', { props: true }],

    /*
     * Reasignar excepción en catch la pierde.
     * No se puede acceder al error original.
     * Razón: Preservar información de error
     */
    'no-ex-assign': 'error',

    /*
     * === ERRORES DE LÓGICA ===
     * Errores de lógica que siempre evalúan igual o incorrecto.
     * Son 'error' porque indican bugs en el razonamiento.
     */
    /*
     * Comparar algo consigo mismo siempre es true/false.
     * Indica error en la lógica de comparación.
     * Razón: Detectar errores de lógica
     */
    'no-self-compare': 'error',

    /*
     * -0 === 0 es true, pero tienen comportamientos diferentes.
     * Object.is(-0, 0) es false, puede causar bugs.
     * Razón: Prevenir bugs con -0
     */
    'no-compare-neg-zero': 'error',

    /*
     * Números grandes pierden precisión en JavaScript.
     * Causa errores de cálculo silenciosos.
     * Razón: Prevenir errores de precisión
     */
    'no-loss-of-precision': 'error',

    /*
     * Template curly en string regular es error tipográfico.
     * `Hola ${nombre}` vs 'Hola ${nombre}'.
     * Razón: Detectar errores de templates
     */
    'no-template-curly-in-string': 'error',

    /*
     * === CÓDIGO INALCANZABLE ===
     * Código que nunca se ejecuta y confunde al desarrollador.
     * Son 'error' porque indican errores de flujo.
     */
    /*
     * Código después de return/throw/break nunca se ejecuta.
     * Indica error en el flujo del programa.
     * Razón: Detectar código muerto
     */
    'no-unreachable': 'error',

    /*
     * Bucles con condiciones siempre falsas nunca iteran.
     * Indican error en la lógica del bucle.
     * Razón: Detectar bucles muertos
     */
    'no-unreachable-loop': 'error',

    /*
     * Permitimos while(true) por ser patrón común.
     * Pero evitamos otras condiciones constantes.
     * Razón: Permitir bucles infinitos intencionales
     */
    'no-constant-condition': ['error', { checkLoops: false }],

    /*
     * === ERRORES DE CONSTRUCCIÓN ===
     * Errores en la construcción de clases y objetos.
     * Son 'error' porque rompen la creación de instancias.
     */
    /*
     * Clases derivadas deben llamar a super().
     * Sin super() no se puede acceder a this.
     * Razón: Forzar inicialización correcta
     */
    'constructor-super': 'error',

    /*
     * this antes de super() lanza ReferenceError.
     * No se puede acceder a this antes de inicializar la clase base.
     * Razón: Prevenir errores de herencia
     */
    'no-this-before-super': 'error',

    /*
     * Llamar objetos que no son funciones lanza TypeError.
     * Ej: Math() instead of Math.random().
     * Razón: Prevenir errores de invocación
     */
    'no-obj-calls': 'error',

    /*
     * === ERRORES DE PATRONES ===
     * Patrones que causan bugs o comportamiento inesperado.
     * Son 'error' porque son anti-patrones peligrosos.
     */
    /*
     * Patrones vacíos {} en destructuring son inútiles.
     * Generalmente indican error de lógica.
     * Razón: Detectar destructuring incorrecto
     */
    'no-empty-pattern': 'error',

    /*
     * Arrays dispersos [1,,3] tienen elementos undefined.
     * Causa comportamiento inesperado al iterar.
     * Razón: Prevenir arrays con huecos
     */
    'no-sparse-arrays': 'error',

    /*
     * Fallthrough sin comentario es error común.
     * Puede causar ejecución no intencionada.
     * Razón: Requerir intención explícita
     */
    'no-fallthrough': 'error',

    /*
     * !x in y es confuso y propenso a errores.
     * Debe ser !(x in y) para mayor claridad.
     * Razón: Prevenir errores de precedencia
     */
    'no-unsafe-negation': 'error',

    /*
     * Optional chaining en null/undefined es seguro,
     * pero en otros valores puede ocultar errores.
     * Razón: Prevenir uso incorrecto de ?.
     */
    'no-unsafe-optional-chaining': 'error',

    /*
     * Return/throw en finally sobrescribe excepciones.
     * Puede ocultar errores importantes.
     * Razón: Preservar información de error
     */
    'no-unsafe-finally': 'error',

    /*
     * === ERRORES DE PROTOTIPOS ===
     * Errores en el uso de prototipos y herencia.
     */
    /*
     * Llamar métodos de prototipo directamente es inseguro.
     * obj.hasOwnProperty() puede ser sobrescrito.
     * Razón: Prevenir shadowing de prototipos
     */
    'no-prototype-builtins': 'error',

    /*
     * === PREVENCIÓN DE RACE CONDITIONS ===
     * Errores de concurrencia en operaciones asíncronas.
     */
    /*
     * Actualizaciones no atómicas pueden causar race conditions.
     * x += y no es atómico en ambientes concurrentes.
     * Razón: Prevenir bugs de concurrencia
     */
    'require-atomic-updates': 'error',

    /*
     * === ERRORES DE CONSTRUCCIÓN Y ASIGNACIÓN ===
     * Reglas que detectan errores de lógica en constructores, setters y asignaciones.
     * Son 'error' porque causan comportamiento inesperado en runtime.
     */
    /*
     * Expresiones binarias constantes (x === x) son inútiles.
     * Generalmente indican error de lógica.
     * Razón: Detectar código que no hace nada
     */
    'no-constant-binary-expression': 'error',

    /*
     * Return en constructor sobreescribe el objeto creado.
     * Rompe el patrón de constructor de clases.
     * Razón: Prevenir constructores que no funcionan
     */
    'no-constructor-return': 'error',

    /*
     * else-if duplicado nunca se ejecutará.
     * Es un error de lógica que causa código muerto.
     * Razón: Detectar condiciones que nunca se evalúan
     */
    'no-dupe-else-if': 'error',

    /*
     * new Object() es menos eficiente que {}.
     * También puede ser sobrescrito por shadowing.
     * Razón: Eficiencia y seguridad
     */
    'no-object-constructor': 'error',

    /*
     * Algunos constructores nativos no son constructores.
     * Symbol() no puede ser usado con new, lanza TypeError.
     * Razón: Prevenir errores de tipo en runtime
     */
    'no-new-native-nonconstructor': 'error',

    /*
     * Setter con return causa comportamiento inesperado.
     * Los setters no deben retornar valores.
     * Razón: Prevenir setters que no funcionan
     */
    'no-setter-return': 'error',

    /*
     * Asignación a sí misma no tiene efecto.
     * Generalmente indica error de lógica.
     * Razón: Detectar operaciones innecesarias
     */
    'no-useless-assignment': 'error',

    /*
     * Whitespace irregular puede causar errores de parsing.
     * Algunos caracteres de espacio no son reconocidos en todos los contextos.
     * Razón: Prevenir errores difíciles de diagnosticar
     */
    'no-irregular-whitespace': 'error',
  },
}
