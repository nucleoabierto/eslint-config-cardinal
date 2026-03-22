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
     * === DUPLICACIONES ===
     * Reglas que detectan duplicación de elementos que causan comportamientos indefinidos.
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
     * === ERRORES DE REGEX ===
     * Reglas que detectan problemas en expresiones regulares.
     */
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
     * Caracteres Unicode compuestos de múltiples code points en clases
     * de caracteres se disocian en cada code point individual.
     * Ej: /[❇️]/u no matchea ❇️ (se compone de dos code points).
     * Razón: Prevenir comportamiento inesperado con Unicode
     */
    'no-misleading-character-class': 'error',

    /*
     * Espacios múltiples en regex son difíciles de contar.
     * Mejor usar cuantificador explícito: /foo {3}bar/ vs /foo   bar/.
     * Razón: Claridad en expresiones regulares
     */
    'no-regex-spaces': 'error',

    /*
     * === ASIGNACIONES PROHIBIDAS ===
     * Reglas que previenen reasignación de entidades que deben ser inmutables.
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
     * === COMPARACIONES Y PRECISIÓN ===
     * Reglas que detectan errores en comparaciones y operaciones numéricas.
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
     * Bucles cuyo cuerpo siempre sale en la primera iteración (break/return/throw) nunca iteran más.
     * Si todos los caminos del cuerpo salen del bucle, la segunda iteración es inalcanzable.
     * Razón: Detectar bucles que solo pueden ejecutarse una vez
     */
    'no-unreachable-loop': 'error',

    /*
     * Permitimos while(true) por ser patrón común.
     * Pero evitamos otras condiciones constantes.
     * Razón: Permitir bucles infinitos intencionales
     */
    'no-constant-condition': ['error', { checkLoops: 'allExceptWhileTrue' }],

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
     * Fallthrough en switch ejecuta múltiples cases sin break.
     * Sin comentario indica error común de lógica.
     * Razón: Requerir intención explícita con comentario
     */
    'no-fallthrough': 'error',

    /*
     * !x in y se evalúa como (!x) in y por precedencia.
     * Causa conversión de tipos y comportamiento incorrecto.
     * También aplica a instanceof.
     * Razón: Prevenir errores de precedencia
     */
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

    /*
     * El optional chaining cortocircuita a undefined, y ese undefined en ciertas posiciones lanza TypeError.
     * Ej: (obj?.foo)() lanza si obj?.foo es undefined; (obj?.x) + 1 produce NaN.
     * Razón: Prevenir TypeErrors causados por el cortocircuito de ?.
     */
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    /*
     * Return/throw en finally sobrescribe excepciones.
     * Puede ocultar errores importantes.
     * Razón: Preservar información de error
     */
    'no-unsafe-finally': 'error',

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
     * Ej: Math() en lugar de Math.random().
     * Razón: Prevenir errores de invocación
     */
    'no-obj-calls': 'error',

    /*
     * === ERRORES DE PROTOTIPOS ===
     * Errores en el uso de prototipos y herencia.
     */
    /*
     * Los métodos de Object.prototype pueden ser sobrescritos o no existir en Object.create(null).
     * Usar Object.prototype.hasOwnProperty.call(obj, key) o el moderno Object.hasOwn(obj, key).
     * Razón: Prevenir fallos con objetos sin prototipo o con propiedades que hacen shadowing
     */
    'no-prototype-builtins': 'error',

    /*
     * === PREVENCIÓN DE RACE CONDITIONS ===
     * Errores de concurrencia en operaciones asíncronas.
     */
    /*
     * Asignaciones basadas en valores leídos antes de un await/yield pueden usar datos desactualizados.
     * Ej: x += await fn() puede sobrescribir cambios hechos a x durante la espera.
     * Razón: Prevenir race conditions en funciones async y generators
     */
    'require-atomic-updates': 'error',

    /*
     * === ERRORES DE LÓGICA Y CONSTRUCCIÓN ===
     * Reglas que detectan errores de lógica en constructores, setters y asignaciones.
     * Son 'error' porque causan comportamiento inesperado en runtime.
     */
    /*
     * Comparaciones y expresiones lógicas con resultado predecible.
     * Indican errores de lógica o precedencia de operadores.
     * Ej: x === [] siempre es false (comparación por referencia).
     * Razón: Detectar expresiones con resultado constante
     */
    'no-constant-binary-expression': 'error',

    /*
     * Retornar un valor en un constructor sobrescribe el objeto creado por new.
     * Solo se permite return vacío (control de flujo); return con valor indica error de lógica.
     * Razón: Prevenir constructores que no funcionan como se espera
     */
    'no-constructor-return': 'error',

    /*
     * else-if duplicado nunca se ejecutará.
     * Es un error de lógica que causa código muerto.
     * Razón: Detectar condiciones que nunca se evalúan
     */
    'no-dupe-else-if': 'error',

    /*
     * new Object() es más verboso que {} y depende del global Object, que puede ser redefinido.
     * El literal {} crea un objeto sin depender del scope global.
     * Razón: Concisión y protección ante redefinición del global Object
     */
    'no-object-constructor': 'error',

    /*
     * Algunos constructores nativos no son constructores.
     * Symbol() no puede ser usado con new, lanza TypeError.
     * Razón: Prevenir errores de tipo en runtime
     */
    'no-new-native-nonconstructor': 'error',

    /*
     * Los setters ignoran cualquier valor retornado; retornar un valor indica error de lógica.
     * Solo se permite return vacío (control de flujo); return con valor no tiene efecto.
     * Razón: Prevenir setters con return que nunca tiene efecto
     */
    'no-setter-return': 'error',

    /*
     * Asignaciones cuyo valor nunca se lee (dead stores).
     * Desperdician memoria y ocultan errores de lógica.
     * Razón: Detectar valores asignados pero no utilizados
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
