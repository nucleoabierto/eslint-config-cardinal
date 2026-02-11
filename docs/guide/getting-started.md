# Comenzar

## Instalación Rápida

### Instalación Inmediata

```bash
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal
echo 'import recommended from "@nucleoabierto/eslint-config-cardinal/recommended"
export default [...recommended]' > eslint.config.js
npx eslint . --fix
```

> **Nota para GitHub Packages**: Si usas paquetes `@nucleoabierto`, configura primero:
>
> ```bash
> npm config set @nucleoabierto:registry https://npm.pkg.github.com
> ```

### Requisitos

- Node.js 18+
- ESLint 9+
- Acceso a GitHub Packages (opcional)

---

## Elegir la Configuración Adecuada

### Para Proyectos JavaScript Simples

```js
// eslint.config.js
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```

**Ideal para**:

- Scripts y utilidades pequeñas
- Proyectos de aprendizaje
- Configuración mínima pero moderna

### Para Proyectos JavaScript Estándar

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```

> **Recomendación**: Usar `recommended` para la mayoría de casos.

**Ideal para**:

- Aplicaciones Node.js
- Bibliotecas JavaScript
- Proyectos web frontend
- **La mayoría de los proyectos**

### Para Proyectos TypeScript

```js
// eslint.config.js
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```

**Requisitos adicionales**:

```bash
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**Ideal para**:

- Aplicaciones TypeScript
- Proyectos con tipado estricto
- Código base mixto JS/TS

> Cardinal detecta automáticamente `@typescript-eslint/*`. Si no existen, omitirá el bloque TypeScript.

### Para Aplicaciones React

```js
// eslint.config.js
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...react]
```

**Requisitos adicionales**:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

**Ideal para**:

- Aplicaciones React
- Proyectos con JSX
- Componentes modernos

> Cardinal activa las reglas de React solo si encuentra los plugins necesarios.

### Para Máxima Calidad

```js
// eslint.config.js
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [...all]
```

**Ideal para**:

- Aplicaciones críticas
- Proyectos enterprise
- Código base sensible a errores

---## Configuración del Editor

### VSCode

Añade a tu `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### WebStorm

1. File → Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
2. Enable ESLint
3. Select "Automatic ESLint configuration"

### Vim/Neovim

```lua
-- Para Neovim con nvim-lintconfig
require('lint').linters_by_ft = {
  javascript = {'eslint'},
  typescript = {'eslint'},
  javascriptreact = {'eslint'},
  typescriptreact = {'eslint'},
}
```

## Primeros Pasos

### 1. Crear un Archivo de Prueba

```js
// test.js
const message = 'Hello, Cardinal!'
console.log(message)
```

### 2. Ejecutar ESLint

```bash
npx eslint test.js
```

Si no hay errores, ¡tu configuración está funcionando!

### 3. Probar una Regla

```js
// test.js
const message = "Hello, Cardinal!" // Comillas dobles - debería generar error
console.log(message)
```

```bash
npx eslint test.js --fix
```

Verás que ESLint corrige las comillas dobles a simples automáticamente.

## Personalización Básica

### Sobreescribir Reglas Específicas

```js
// eslint.config.js
import cardinal from '@nucleoabierto/eslint-config-cardinal'

export default [
  ...cardinal.recommended,
  {
    rules: {
      // Permitir console en desarrollo
      'no-console': 'off',
      // Menos estricto con magic numbers
      'no-magic-numbers': 'warn',
    },
  },
]
```

### Configuración por Tipo de Archivo

```js
// eslint.config.js
import cardinal from '@nucleoabierto/eslint-config-cardinal'

export default [
  ...cardinal.recommended,
  // Configuración específica para tests
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-unused-expressions': 'off',
      'max-statements': 'off',
    },
  },
  // Configuración específica para configuración
  {
    files: ['**/*.config.js'],
    rules: {
      'no-process-exit': 'off',
    },
  },
]
```

## Solución de Problemas Comunes

### TypeScript no se detecta

**Error**: `Unable to resolve path to module 'typescript'`

**Solución**:

```bash
npm install --save-dev typescript
```

### React rules no se activan

**Error**: Las reglas de React no se aplican

**Solución**:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

### Conflictos con otras configuraciones

**Error**: Reglas contradictorias

**Solución**: No mezcles múltiples configuraciones base:

```js
// ❌ Incorrecto
export default [
  someOtherConfig,
  cardinal.recommended,
]

// ✅ Correcto  
export default [
  cardinal.recommended,
  // Luego agrega tus personalizaciones
]
```

---

## Siguientes Pasos

1. **Personaliza según las necesidades de tu proyecto**
2. **Configura integración con CI/CD**
3. **Revisa [ejemplos avanzados](/examples/complete-guide)**

---

## Mejores Prácticas

1. **Comenzar con `recommended`** y ajustar según necesidad
2. **Usar `typescript`** para proyectos TS, no intentes configurar manualmente  
3. **Mantener simple** - no sobre-configurar
4. **Documentar excepciones** cuando sobreescribas reglas
5. **Usar configuración por tipo de archivo** para casos especiales

---

¿Listo para [explorar la filosofía detrás de Cardinal](/guide/philosophy)?
