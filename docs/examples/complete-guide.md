# Guía Completa de Ejemplos

Guía completa para configurar ESLint Cardinal en diferentes tipos de proyectos,
desde scripts simples hasta aplicaciones complejas con TypeScript y React.

---

## Basic Setup - Scripts y Proyectos Simples

### Instalación

```bash
# Instalación inmediata
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal
echo 'import recommended from "@nucleoabierto/eslint-config-cardinal/recommended"
export default [...recommended]' > eslint.config.js
```

> **Nota para GitHub Packages**: Si usas paquetes `@nucleoabierto`, configura primero:
>
> ```bash
> npm config set @nucleoabierto:registry https://npm.pkg.github.com
> ```

### Configuración

#### Crear `eslint.config.js`

```js
// eslint.config.js
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```

#### Agregar scripts a `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Casos de Uso Ideales

- Scripts y utilidades pequeñas
- Proyectos de aprendizaje
- Prototipos rápidos
- Configuración mínima pero moderna

### Qué Incluye

- **style** - Estilo moderno consistente
- **code-quality** - Calidad exigente
- **variables** - Nomenclatura inteligente
- **relaxed** - Flexibilidad transparente

---

## TypeScript Project - Proyectos TS

### Instalación

```bash
# Instalar ESLint Cardinal
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal

# Instalar dependencias TypeScript
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Configuración

#### Crear `eslint.config.js`

```js
// eslint.config.js
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```

#### Crear `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "allowJs": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Agregar scripts a `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.js",
    "lint:fix": "eslint . --ext .ts,.js --fix",
    "type-check": "tsc --noEmit"
  }
}
```

### Casos de Uso Ideales

- Aplicaciones TypeScript
- Proyectos con tipado estricto
- Código base mixto JS/TS
- Proyectos enterprise

### Qué Incluye

- Todo **recommended** +
- **typescript** - Type safety opcional
- **security** - Seguridad avanzada opcional

---

## React App - Aplicaciones React

### Instalación

```bash
# Instalar ESLint Cardinal
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal

# Instalar dependencias React
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

### Configuración

#### Crear `eslint.config.js`

```js
// eslint.config.js
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...react]
```

#### Para proyectos TypeScript + React

```js
// eslint.config.js
import react from '@nucleoabierto/eslint-config-cardinal/react'
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [
  ...react,
  ...typescript,
]
```

#### Configurar Vite (opcional)

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  eslint: {
    cache: false,
  },
})
```

#### Agregar scripts a `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "type-check": "tsc --noEmit"
  }
}
```

### Casos de Uso Ideales

- Aplicaciones React
- Proyectos con JSX
- Componentes modernos
- Proyectos frontend

### Qué Incluye

- **recommended** +
- **react** - Desarrollo moderno de componentes

---

## Advanced Config - Personalización Completa

### Combinación de Configuraciones

#### Mezclar Configuraciones

```js
// eslint.config.js
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [
  ...all,
  // Agregar solo lo que necesitas
  {
    files: ['**/*.js'],
    rules: {
      'import-x/order': 'error', // Solo regla de imports
    },
  },
]
```

#### Configuración por Tipo de Archivo

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [
  ...recommended,
  
  // Configuración específica para tests
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-unused-expressions': 'off',
      'max-statements': 'off',
      'no-magic-numbers': 'off',
    },
  },
  
  // Configuración específica para configuración
  {
    files: ['**/*.config.js', '**/*.setup.js'],
    rules: {
      'no-process-exit': 'off',
      'no-console': 'off',
    },
  },
]
```

### Sobreescribir Reglas Específicas

#### Reglas de Nivel Error

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [
  ...recommended,
  {
    rules: {
      // Hacer más estricto donde importa
      'no-console': 'error', // Prohibir console completamente
      'prefer-const': 'error', // Forzar const siempre
      
      // Permitir flexibilidad donde no
      'no-magic-numbers': 'warn', // Advertir vs error
      'max-lines-per-function': 'warn', // Límite suave
    },
  },
]
```

### Configuración Contextual

#### Desarrollo vs Producción

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default [
  ...recommended,
  {
    rules: {
      // Desarrollo: más permisivo
      ...(isDevelopment ? {
        'no-console': 'off',
        'no-debugger': 'off',
        'no-unused-expressions': 'off',
      } : {}),
      
      // Producción: más estricto
      ...(!isDevelopment ? {
        'no-console': 'error',
        'no-debugger': 'error',
        'no-unused-expressions': 'error',
      } : {}),
    },
  },
]
```

### Configuración para Monorepos

#### Configuración Base del Monorepo

```js
// packages/eslint-config/index.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [
  ...recommended,
  {
    // Reglas específicas del monorepo
    rules: {
      'import-x/no-internal-modules': 'off', // Permitir imports entre paquetes
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['**/dist/**', '**/build/**'],
          message: 'No importar desde carpetas de build',
        }],
      }],
    },
  },
]
```

#### Configuración por Paquete

```js
// packages/frontend/eslint.config.js
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [
  ...baseConfig,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      // Reglas específicas del frontend
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
]
```

---

## Comparación de Configuraciones

| Configuración  | Complejidad | Tiempo Setup | Caso Ideal      | Dependencias    |
|----------------|-------------|--------------|-----------------|-----------------|
| **basic**      | Baja        | 5 min        | Scripts simples | ESLint          |
| **typescript** | Media       | 10 min       | Proyectos TS    | + TS plugins    |
| **react**      | Media       | 10 min       | Apps React      | + React plugins |
| **advanced**   | Alta        | 20+ min      | Personalizado   | Variable        |

---

## Árbol de Decisión

```text
¿Qué tipo de proyecto tienes?

├── Script simple o prototipo
│   └── → **basic setup**
│
├── Proyecto TypeScript
│   ├── ¿Es aplicación React?
│   │   ├── Sí → **react + typescript**
│   │   └── No → **typescript**
│   └── ¿Necesitas personalización?
│       └── → **advanced config**
│
└── Aplicación React
    ├── ¿Usa TypeScript?
    │   ├── Sí → **react + typescript**
    │   └── No → **react**
    └── ¿Necesitas personalización?
        └── → **advanced config**
```

---

## Flujo de Trabajo Recomendado

### 1. Inicio Rápido

```bash
# Elegir configuración base
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal

# Crear configuración básica
echo "import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'
export default [...recommended]" > eslint.config.js

# Probar configuración
npx eslint . --fix
```

### 2. Personalización Gradual

```js
// Paso 1: Usar configuración recomendada
export default [...recommended]

// Paso 2: Agregar excepciones específicas
export default [
  ...recommended,
  {
    rules: {
      'no-console': 'off', // Permitir console en CLI
    },
  },
]

// Paso 3: Configuración por tipo de archivo
export default [
  ...recommended,
  {
    files: ['**/*.test.js'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
]
```

### 3. Evolución con el Proyecto

```js
// Fase 1: Proyecto simple
export default [...basic]

// Fase 2: Proyecto crece
export default [...recommended]

// Fase 3: Se agrega TypeScript
export default [...typescript]

// Fase 4: Se agrega React
export default [...react]

// Fase 5: Personalización avanzada
export default [
  ...react,
  ...typescript,
  // Personalizaciones específicas
]
```

---

## Troubleshooting Común

### Error: "Cannot resolve plugin"

```bash
# Reinstalar dependencias
npm install

# Limpiar cache de ESLint
npx eslint --clear-cache

# Verificar configuración
npx eslint --print-config eslint.config.js
```

### Error: "No files matching the pattern"

```bash
# Verificar archivos existentes
find . -name "*.js" -o -name "*.ts" -o -name "*.jsx"

# Actualizar configuración de archivos
{
  files: ['**/*.{js,ts,jsx,tsx}'],
}
```

### Configuración No Aplica

```bash
# Verificar configuración activa
npx eslint --print-config test.js

# Debug mode
DEBUG=eslint:* npx eslint test.js
```

---

## Recursos Adicionales

- **[Configuraciones Detalladas](../guide/configurations.md)** - Todas las opciones disponibles
- **[GitHub Repository](https://github.com/nucleoabierto/eslint-config-cardinal)** - Código fuente y issues

---

¿Listo para explorar más configuraciones?
