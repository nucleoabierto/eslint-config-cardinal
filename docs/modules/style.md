# Módulo Style

Reglas de estilo modernas y consistentes alineadas con la filosofía Cardinal.

## Características

- Sin semicolons - sintaxis moderna y limpia
- Comillas simples para consistencia
- Indentación de 2 espacios para legibilidad
- Comas finales en multilinea para diffs claros
- Espaciado consistente alrededor de operadores

## Reglas

### semi

**Valor en la configuración**

```js
semi: ['error', 'never']
```

**Explicación**

Cardinal adopta el estilo moderno sin punto y coma para reducir ruido visual y mantener una estética consistente. Esto hace que el código sea más limpio y, al ser una regla en `error`, evita debates recurrentes en el equipo.

### quotes

**Valor en la configuración**

```js
quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }]
```

**Explicación**

Comillas simples como convención principal por consistencia. `avoidEscape: true` permite cambiar de comilla si evita escapes innecesarios, y `allowTemplateLiterals: true` permite usar template literals cuando aportan valor (interpolación, strings multilínea), sin forzarlos.

### indent

**Valor en la configuración**

```js
indent: ['error', 2, { SwitchCase: 1 }]
```

**Explicación**

Dos espacios equilibran legibilidad y densidad visual. `SwitchCase: 1` mantiene los `case` alineados de forma clara dentro del `switch`, evitando bloques “planos” difíciles de escanear.

### comma-spacing

**Valor en la configuración**

```js
'comma-spacing': ['error', { before: false, after: true }]
```

**Explicación**

Prohíbe espacios antes de la coma y exige espacio después. Es un micro-formato que mejora la lectura y evita inconsistencias típicas en listas, argumentos y objetos.

### comma-style

**Valor en la configuración**

```js
'comma-style': ['error', 'last']
```

**Explicación**

Fuerza la coma al final de la línea (no al principio). Esto hace el código más estándar, fácil de leer y menos propenso a confusiones al revisar diffs.

### arrow-spacing

**Valor en la configuración**

```js
'arrow-spacing': ['error', { before: true, after: true }]
```

**Explicación**

Garantiza espacios alrededor de `=>`. Mejora la legibilidad de arrow functions y mantiene el estilo consistente en callbacks y funciones inline.

### block-spacing

**Valor en la configuración**

```js
'block-spacing': ['error', 'always']
```

**Explicación**

Exige espacios dentro de llaves en bloques de una sola línea (por ejemplo, `import { a } from 'x'`). Mantiene un look uniforme y evita “bloques apretados” difíciles de leer.

### key-spacing

**Valor en la configuración**

```js
'key-spacing': ['error', { beforeColon: false, afterColon: true }]
```

**Explicación**

Estándar claro para objetos: sin espacio antes de `:` y con espacio después. Hace más legibles las estructuras de datos y evita alineados manuales frágiles.

### keyword-spacing

**Valor en la configuración**

```js
'keyword-spacing': ['error', { before: true, after: true }]
```

**Explicación**

Espacios consistentes alrededor de keywords (`if`, `for`, `while`, `return`, etc.). Mejora la lectura y evita estilos mezclados (especialmente cuando el código viene de múltiples autores).

### space-before-blocks

**Valor en la configuración**

```js
'space-before-blocks': ['error', 'always']
```

**Explicación**

Obliga el espacio antes de `{` en bloques. Es un estándar de legibilidad muy extendido y reduce la “compactación” del código.

### space-before-function-paren

**Valor en la configuración**

```js
'space-before-function-paren': ['error', {
  anonymous: 'always',
  named: 'never',
  asyncArrow: 'always',
}]
```

**Explicación**

Convención opinada:

- Funciones con nombre sin espacio: `function foo()` (más compacto y común en APIs públicas).
- Funciones anónimas con espacio: `function () {}` (distingue visualmente la “declaración” del “call”).
- Async arrow con espacio: `async () => {}` mantiene la legibilidad alrededor de `async`.

### space-in-parens

**Valor en la configuración**

```js
'space-in-parens': ['error', 'never']
```

**Explicación**

Evita espacios dentro de paréntesis para mantener expresiones compactas y predecibles: `fn(a, b)` en lugar de `fn( a, b )`.

### space-infix-ops

**Valor en la configuración**

```js
'space-infix-ops': 'error'
```

**Explicación**

Exige espacios alrededor de operadores infijos (`=`, `+`, `===`, etc.). Aumenta la legibilidad de expresiones y reduce errores visuales (por ejemplo, `a===b`).

### space-unary-ops

**Valor en la configuración**

```js
'space-unary-ops': ['error', { words: true, nonwords: false }]
```

**Explicación**

Espacio para operadores “palabra” (`typeof x`, `void 0`) y sin espacio para operadores simbólicos (`!x`, `++i`). Mantiene el estilo idiomático de JavaScript.

### func-call-spacing

**Valor en la configuración**

```js
'func-call-spacing': ['error', 'never']
```

**Explicación**

Prohíbe el espacio entre la función y sus paréntesis: `fn()` y no `fn ()`. Ayuda a distinguir llamadas de otras construcciones y mantiene consistencia.

### no-trailing-spaces

**Valor en la configuración**

```js
'no-trailing-spaces': 'error'
```

**Explicación**

Elimina espacios al final de línea, que ensucian diffs y generan ruido en PRs sin aportar valor.

### object-curly-newline

**Valor en la configuración**

```js
'object-curly-newline': ['error', { multiline: true, consistent: true }]
```

**Explicación**

Cuando el objeto es multilínea, exige saltos de línea; `consistent: true` evita mezclas raras dentro del mismo literal. Mejora la consistencia visual y hace los diffs más claros.

### object-curly-spacing

**Valor en la configuración**

```js
'object-curly-spacing': ['error', 'always']
```

**Explicación**

Espacios dentro de llaves en objetos/destructuring: `{ a, b }`. Hace la estructura más legible y reduce “bloques compactos”.

### array-bracket-spacing

**Valor en la configuración**

```js
'array-bracket-spacing': ['error', 'never']
```

**Explicación**

Sin espacios dentro de corchetes: `[1, 2]` en lugar de `[ 1, 2 ]`. Mantiene arrays compactos y consistentes.

### computed-property-spacing

**Valor en la configuración**

```js
'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }]
```

**Explicación**

Sin espacios en propiedades computadas: `obj[a]`. Con `enforceForClassMembers: true` se mantiene el mismo criterio en clases, evitando estilos mixtos.

### rest-spread-spacing

**Valor en la configuración**

```js
'rest-spread-spacing': ['error', 'never']
```

**Explicación**

Evita espacios después de `...`: `(...args)` y `{ ...obj }`. Alinea el estilo con el uso idiomático de rest/spread.

### template-curly-spacing

**Valor en la configuración**

```js
'template-curly-spacing': ['error', 'never']
```

**Explicación**

Sin espacios dentro de `${ ... }` en template literals. Mantiene interpolaciones compactas y consistentes.

### template-tag-spacing

**Valor en la configuración**

```js
'template-tag-spacing': ['error', 'never']
```

**Explicación**

Prohíbe espacio entre un tag y su template literal: `tag\`x\`` y no `tag \`x\``. Evita variaciones y posibles confusiones en tagged templates.

### semi-spacing

**Valor en la configuración**

```js
'semi-spacing': ['error', { before: false, after: true }]
```

**Explicación**

Aunque Cardinal no usa `;`, esta regla cubre casos donde aparezcan (por ejemplo, en código legado o snippets). Mantiene un espaciado consistente si existe.

### multiline-ternary

**Valor en la configuración**

```js
'multiline-ternary': ['error', 'always-multiline']
```

**Explicación**

Fuerza ternarios multilínea. Prioriza legibilidad y evita ternarios densos y difíciles de revisar en PRs.

### no-multi-spaces

**Valor en la configuración**

```js
'no-multi-spaces': 'error'
```

**Explicación**

Evita alineaciones manuales con espacios repetidos. Estas alineaciones suelen romperse con cambios pequeños y generan diffs ruidosos.

### no-whitespace-before-property

**Valor en la configuración**

```js
'no-whitespace-before-property': 'error'
```

**Explicación**

Evita espacios antes del acceso a propiedades: `obj .prop`. Es un error visual típico y rompe la lectura.

### no-multiple-empty-lines

**Valor en la configuración**

```js
'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }]
```

**Explicación**

Limita líneas en blanco para mantener el código compacto y escaneable. `maxBOF: 0` y `maxEOF: 0` evitan “aire” al inicio/final del archivo que suele ensuciar diffs.

### padded-blocks

**Valor en la configuración**

```js
'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }]
```

**Explicación**

Prohíbe padding innecesario dentro de bloques. Mantiene el código directo y evita variaciones subjetivas sobre “respiración” en cada bloque.

### lines-between-class-members

**Valor en la configuración**

```js
'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
```

**Explicación**

Exige una línea en blanco entre miembros de clase para mejorar el escaneo. `exceptAfterSingleLine: true` evita forzar separación cuando el miembro es trivial y de una sola línea.

### operator-linebreak

**Valor en la configuración**

```js
'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }]
```

**Explicación**

Regla general: el operador al final de la línea (`after`) para que la siguiente línea “complete” la expresión de forma natural. Excepciones:

- `?` y `:` antes de la línea para ternarios más legibles en multilínea.
- `|>` antes de la línea (si se usa) para mantener un flujo visual claro.

### dot-location

**Valor en la configuración**

```js
'dot-location': ['error', 'property']
```

**Explicación**

En llamadas encadenadas multilínea, el punto queda con la propiedad (`property`), por ejemplo:

```js
foo
  .bar()
  .baz()
```

Esto facilita ver rápidamente qué métodos se están invocando.

### no-tabs

**Valor en la configuración**

```js
'no-tabs': 'error'
```

**Explicación**

Evita tabs para que la indentación sea consistente entre editores y entornos. Cardinal estandariza en 2 espacios.

### no-mixed-spaces-and-tabs

**Valor en la configuración**

```js
'no-mixed-spaces-and-tabs': 'error'
```

**Explicación**

Prohíbe mezclar tabs y espacios, que suele causar alineaciones “fantasma” dependiendo del editor y genera diffs confusos.

### no-irregular-whitespace

**Valor en la configuración**

```js
'no-irregular-whitespace': 'error'
```

**Explicación**

Evita caracteres de whitespace “raros” (por ejemplo, non‑breaking spaces) que son difíciles de detectar y pueden introducir bugs sutiles.

### spaced-comment

**Valor en la configuración**

```js
'spaced-comment': ['error', 'always', {
  line: { markers: ['*package', '!', '/', ',', '='] },
  block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] },
}]
```

**Explicación**

Exige un espacio después de `//` y `/*` para mantener comentarios legibles. La configuración de `markers` permite casos especiales (directivas o patrones comunes) sin romper el estándar, y `balanced: true` ayuda a mantener comentarios de bloque bien formados.

### brace-style

**Valor en la configuración**

```js
'brace-style': ['error', '1tbs', { allowSingleLine: true }]
```

**Explicación**

Usa el estilo One True Brace Style (1TBS), muy común en JS: la llave de apertura en la misma línea. `allowSingleLine: true` permite bloques pequeños en una línea cuando es claro, sin forzarlos.

### curly

**Valor en la configuración**

```js
curly: ['error', 'multi-line']
```

**Explicación**

Exige llaves en bloques multilínea para evitar errores por “dangling else” y mejorar claridad. Permite omitir llaves en casos de una sola línea si el equipo lo prefiere, manteniendo el enfoque de “modernidad sin fricción”.

### comma-dangle

**Valor en la configuración**

```js
'comma-dangle': ['error', {
  arrays: 'always-multiline',
  objects: 'always-multiline',
  imports: 'always-multiline',
  exports: 'always-multiline',
  functions: 'never',
}]
```

**Explicación**

Comas finales en estructuras multilínea (arrays/objetos/imports/exports) para diffs más limpios: añadir/quitar elementos afecta a una sola línea. En funciones se desactiva (`never`) para evitar ruido y mantener firmas más compactas.

## Filosofía

El módulo style promueve código que es:

- **Limpio**: Sin sintaxis innecesaria como semicolons
- **Consistente**: Reglas uniformes en todo el códigobase
- **Legible**: Espaciado y formato que facilitan la lectura
- **Diff-friendly**: Comas finales y estructura que minimizan conflictos

## Uso

Este módulo se incluye automáticamente en todas las configuraciones Cardinal y proporciona la base visual del código.
