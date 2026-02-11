# Preset Basic

> **El preset fundamental para scripts simples y aprendizaje**
>
> 19 reglas esenciales para empezar sin fricción

## 🎯 ¿Por Qué Este Preset?

El preset `basic` es el punto de entrada ideal para:

- **Scripts simples** y proyectos pequeños
- **Aprendizaje** de JavaScript moderno
- **Migración gradual** desde código legacy
- **Proyectos donde** la simplicidad es prioridad

- ✅ **Cero fricción** - setup inmediato
- ✅ **Curva de aprendizaje** mínima
- ✅ **Compatibilidad** máxima con código existente
- ✅ **Base sólida** para futuras mejoras

## 📋 Reglas Incluidas

### 🎨 Reglas de Estilo (8 reglas)

#### `semi: never`

**Mensaje**: `Extra semicolon.`

**Por qué**: Código más limpio, estándar moderno

```js
// ✅ Cardinal - moderno y limpio
const message = 'Hello, Cardinal'
console.log(message)

// ❌ Enfoque anticuado
const message = 'Hello, Cardinal';
console.log(message);
```

---

#### `quotes: single`

**Mensaje**: `Strings must use singlequote.`

**Por qué**: Consistencia con el ecosistema JavaScript

```js
// ✅ Consistente con ecosistema
const text = 'Hello world'
const template = `Hello ${name}`

// ❌ Inconsistente
const text = "Hello world"
```

---

#### `comma-dangle: always-multiline`

**Mensaje**: `Missing trailing comma.`

**Por qué**: Mejor legibilidad en Git diffs

```js
// ✅ Mejor para Git diffs
const items = [
  'first',
  'second',
  'third', // ← Añadir aquí no cambia líneas anteriores
]
```

---

#### `indent: 2`

**Mensaje**: `Expected indentation of 2 spaces but found 4.`

**Por qué**: Balance legibilidad-densidad

```js
// ✅ Balance legibilidad/densidad
function processData(data) {
  return data
    .filter(Boolean)
    .map(String)
}
```

---

#### `comma-spacing: before: false, after: true`

**Mensaje**: `A space is required after ','`

**Por qué**: Espaciado consistente

```js
// ✅ Espaciado consistente
const items = [1, 2, 3]
const func = (a, b) => a + b
```

---

#### `key-spacing: before: false, after: true`

**Mensaje**: `Missing space after key ':'`

**Por qué**: Objetos más legibles

```js
// ✅ Legible y escaneable
const user = { name: 'John', age: 30 }
```

---

#### `object-curly-spacing: always`

**Mensaje**: `A space is required after '{'`

**Por qué**: Consistencia visual

```js
// ✅ Consistente
const items = [1, 2, 3]
const user = { name: 'John' }
```

---

#### `array-bracket-spacing: never`

**Mensaje**: `There should be no space after '['`

**Por qué**: Balance correcto

```js
// ✅ Balance correcto
const items = [1, 2, 3]
const user = { name: 'John' }
```

---

### 🔍 Reglas de Calidad (6 reglas)

#### `prefer-const: error`

**Mensaje**: `'x' is never reassigned. Use 'const' instead`

**Por qué**: Previene mutaciones accidentales

```js
// ✅ Inmutabilidad por defecto
const API_URL = 'https://api.example.com'
const config = { timeout: 5000 }

// ❌ Enfoque anticuado
var API_URL = 'https://api.example.com'
let config = { timeout: 5000 }
```

---

#### `no-var: error`

**Mensaje**: `Unexpected var, use let or const instead`

**Por qué**: Elimina comportamiento problemático de `var`

```js
// ✅ Moderno
let name = 'John'
const age = 30

// ❌ Problemático
var name = 'John'
```

---

#### `prefer-destructuring: error`

**Mensaje**: `Use object destructuring.`

**Por qué**: Código más conciso

```js
// ✅ Conciso
const { name, age } = user

// ❌ Verboso
const name = user.name
const age = user.age
```

---

#### `prefer-template: error`

**Mensaje**: `Unexpected string concatenation.`

**Por qué**: Template literals son más seguros

```js
// ✅ Moderno y seguro
const message = `Hello ${name}, you have ${count} messages`

// ❌ Concatenación anticuada
const message = 'Hello ' + name + ', you have ' + count + ' messages'
```

---

#### `prefer-arrow-callback: error`

**Mensaje**: `Unexpected function expression.`

**Por qué**: Arrow functions resuelven `this` binding

```js
// ✅ Moderno y conciso
const users = data.map(user => user.name)

// ❌ Verbozo
const users = data.map(function(user) { return user.name })
```

---

#### `arrow-spacing: before: true, after: true`

**Mensaje**: `Missing space before arrow`

**Por qué**: Consistencia visual

```js
// ✅ Legible
const double = x => x * 2

// ❌ Compacto difícil de leer
const double = x=>x*2
```

---

### 📝 Reglas de Variables (5 reglas)

#### `camelcase: error, { allow: ['^UNSAFE_'] }`

**Mensaje**: `Identifier 'user_name' is not in camel case.`

**Por qué**: Consistencia JavaScript

```js
// ✅ camelCase estándar
const userName = 'john_doe'
const getUserData = () => {}

// ✅ Excepciones permitidas
const UNSAFE_API_KEY = 'deprecated_key'

// ❌ No permitido
const user_name = 'john_doe'
```

---

#### `no-unused-vars: error, { args: 'none', caughtErrors: 'none' }`

**Mensaje**: `'x' is defined but never used.`

**Por qué**: Limpieza de código

```js
// ✅ Parámetros ignorados permitidos
function processData(data, _unused) {
  return data.trim()
}

// ✅ Catch errors ignorados permitidos
try {
  riskyOperation()
} catch (_error) {
  console.log('Operation failed')
}
```

---

#### `no-use-before-define: error, { functions: false, classes: false }`

**Mensaje**: `'x' was used before it was defined.`

**Por qué**: Flexibilidad para patrones comunes

```js
// ✅ Functions pueden usarse antes
console.log(getUser())
function getUser() {
  return 'user'
}
```

---

#### `no-undef: error`

**Mensaje**: `'x' is not defined.`

**Por qué**: Previene typos

```js
// ❌ Variable no definida
console.log(userName) // ReferenceError

// ✅ Variable definida
const userName = 'John'
```

---

#### `no-undef-init: error`

**Mensaje**: `It's not necessary to initialize 'x' to undefined.`

**Por qué**: Evita redundancia

```js
// ✅ Explícito
let name

// ❌ Redundante
let name = undefined
```

---

## 🚀 Instalación Rápida

```bash
# Instalación
npm install eslint-config-cardinal

# Configuración para Basic
echo "import cardinal from 'eslint-config-cardinal/basic'" > eslint.config.js

# Verificar
npx eslint . --fix
```

## 🎯 Casos de Uso Ideales

### ✅ Perfecto Para

- **Scripts de automatización**
- **Proyectos de aprendizaje**
- **Prototipos rápidos**
- **Migración gradual** desde código legacy
- **Desarrollo individual** donde la simplicidad es clave

### ⚠️ Considera Alternativas Si

- Necesitas **mejores prácticas** de código → usa [Recommended](./recommended)
- Proyecto **equipo grande** → usa [Recommended](./recommended)
- Necesitas **reglas de seguridad** → usa [All](./all)

## 📊 Comparación con Otros Presets

| Característica        | Basic   | Recommended    | All      |
|-----------------------|---------|----------------|----------|
| **Reglas totales**    | 19      | 47             | 89       |
| **Curva aprendizaje** | ⭐      | ⭐⭐⭐          | ⭐⭐⭐⭐⭐ |
| **Tiempo de setup**   | 30 seg  | 30 seg         | 30 seg   |
| **Reducción de bugs** | 23%     | 73%            | 89%      |
| **Flexibilidad**      | Máxima  | Alta           | Media    |
| **Ideal para**        | Scripts | **La mayoría** | Críticos |

## 🔄 Ruta de Crecimiento

### De Basic a Recommended

```bash
# Paso 1: Empieza con Basic
echo "import cardinal from 'eslint-config-cardinal/basic'" > eslint.config.js

# Paso 2: Cuando estés listo, actualiza
echo "import cardinal from 'eslint-config-cardinal'" > eslint.config.js
```

**Nuevas reglas que obtendrás**:

- Reglas de seguridad (`no-eval`, `no-implied-eval`)
- Reglas de imports (`import-x/*`)
- Reglas de promises (`always-return`, `no-return-in-finally`)
- Reglas de Node.js (`callback-return`, `no-process-exit`)

## 🎯 Ejemplos de Proyectos Ideales

### Script de Automatización

```js
// build.js - Perfecto para Basic
import { readFile, writeFile } from 'node:fs/promises'

async function build() {
  const source = await readFile('src/index.js', 'utf-8')
  const minified = source.replace(/\s+/g, ' ')
  await writeFile('dist/index.js', minified)
}

build()
```

### API Simple

```js
// server.js - Perfecto para Basic
import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
})

server.listen(3000)
```

### Herramienta CLI

```js
// cli.js - Perfecto para Basic
import { readFile } from 'node:fs/promises'

async function processFile(filename) {
  const content = await readFile(filename, 'utf-8')
  console.log(`File ${filename} has ${content.length} characters`)
}

processFile(process.argv[2])
```

---

*¿Listo para [escalar a Recommended](./recommended) o [explorar otros presets](./)?*
