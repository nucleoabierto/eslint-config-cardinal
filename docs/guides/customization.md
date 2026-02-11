# Personalización de ESLint Cardinal

> **Adapta Cardinal a las necesidades específicas de tu proyecto**

ESLint Cardinal está diseñado para ser flexible. Puedes personalizar cualquier regla según las necesidades de tu equipo sin perder los beneficios principales.

## 🎯 Estrategias de Personalización

### 1. Sobrescribir Reglas Individuales

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Mantener semicolons si tu equipo los prefiere
      semi: ['error', 'always'],
      
      // Usar comillas dobles para proyectos específicos
      quotes: ['error', 'double'],
      
      // Permitir var en código legacy
      'no-var': 'off',
      
      // Relajar comparaciones para mayor flexibilidad
      eqeqeq: ['error', 'smart'],
    },
  },
]
```

### 2. Desactivar Reglas Específicas

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Permitir console en desarrollo
      'no-console': 'off',
      
      // Permitir debugger durante debugging
      'no-debugger': 'off',
      
      // Desactivar reglas específicas del proyecto
      'prefer-template': 'off',
      'object-shorthand': 'off',
    },
  },
]
```

### 3. Configuración por Tipo de Archivo

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  // Configuración general
  cardinal,
  
  // Reglas específicas para tests
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      // Permitir console en tests
      'no-console': 'off',
      
      // Permitir expect en tests
      'no-unused-expressions': 'off',
      
      // Flexibilidad en mocks
      'no-empty-function': 'off',
    },
  },
  
  // Reglas específicas para configuración
  {
    files: ['**/*.config.js', '**/config/**/*.js'],
    rules: {
      // Permitir any en configuración
      '@typescript-eslint/no-explicit-any': 'off',
      
      // Permitir require en config files
      'global-require': 'off',
    },
  },
]
```

## 🔧 Personalización por Preset

### Basic - Para Scripts Simples

```js
// eslint.config.js
import basic from 'eslint-config-cardinal/basic'

export default [
  basic,
  {
    rules: {
      // Añadir algunas reglas de calidad sin ser demasiado estricto
      'no-eval': 'error',
      'no-implied-eval': 'error',
      
      // Mantener flexibilidad en variables
      'prefer-const': 'warn', // Advertencia en lugar de error
      
      // Permitir console para debugging
      'no-console': 'off',
    },
  },
]
```

### Recommended - Para la Mayoría de Proyectos

```js
// eslint.config.js
import recommended from 'eslint-config-cardinal'

export default [
  recommended,
  {
    rules: {
      // Personalización común para equipos
      'max-len': ['error', { code: 120 }], // Límite de línea
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }], // Números mágicos
      
      // Permitir algunos patrones legacy
      'no-param-reassign': ['error', { props: false }],
      
      // Flexibilidad en ciertos casos
      'prefer-promise-reject-errors': 'warn',
    },
  },
]
```

### All - Para Proyectos Críticos

```js
// eslint.config.js
import all from 'eslint-config-cardinal/all'

export default [
  all,
  {
    rules: {
      // Relajar algunas reglas muy estrictas
      'no-console': 'warn', // Advertencia en lugar de error
      
      // Permitir ciertos patrones en casos específicos
      'no-sync': ['error', { allowAtRootLevel: true }],
      
      // Excepciones para código legacy
      'no-var': 'off', // Solo en archivos legacy
    },
  },
  
  // Configuración específica para archivos legacy
  {
    files: ['**/legacy/**/*.js'],
    rules: {
      'no-var': 'off',
      'prefer-const': 'off',
      'prefer-destructuring': 'off',
    },
  },
]
```

### React - Para Proyectos React

```js
// eslint.config.js
import react from 'eslint-config-cardinal/react'

export default [
  react,
  {
    rules: {
      // Personalización de reglas React
      'react/jsx-props-no-spreading': 'off', // Permitir spread props
      
      // Flexibilidad en componentes
      'react/self-closing-comp': 'off', // Permitir <Component></Component>
      
      // Permitir ciertos patrones
      'react/jsx-boolean-value': 'off', // Permitir {prop} sin valor
      
      // Hooks más flexibles
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
```

### TypeScript - Para Proyectos TS

```js
// eslint.config.js
import typescript from 'eslint-config-cardinal/typescript'

export default [
  typescript,
  {
    rules: {
      // Flexibilidad en TypeScript
      '@typescript-eslint/no-explicit-any': 'off', // Permitir any
      
      // Permitir ciertos patrones
      '@typescript-eslint/no-non-null-assertion': 'off',
      
      // Relajar reglas estrictas
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      
      // Permitir tipos explícitos redundantes
      '@typescript-eslint/no-inferrable-types': 'off',
    },
  },
]
```

## 🎨 Configuraciones por Tipo de Proyecto

### API Backend

```js
// eslint.config.js
import recommended from 'eslint-config-cardinal'

export default [
  recommended,
  {
    rules: {
      // Reglas específicas para backend
      'no-console': 'off', // Logs importantes en backend
      
      // Permitir sync en ciertos casos
      'no-sync': ['error', { allowAtRootLevel: true }],
      
      // Validación estricta de entrada
      'no-eval': 'error',
      'no-implied-eval': 'error',
      
      // Manejo de errores
      'prefer-promise-reject-errors': 'error',
    },
  },
]
```

### Frontend Web

```js
// eslint.config.js
import recommended from 'eslint-config-cardinal'

export default [
  recommended,
  {
    rules: {
      // Reglas específicas para frontend
      'no-console': 'warn', // Advertencia para console
      
      // Performance de rendering
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      
      // DOM manipulation segura
      'no-implied-eval': 'error',
      'no-script-url': 'error',
    },
  },
]
```

### Librería/Publicación

```js
// eslint.config.js
import all from 'eslint-config-cardinal/all'

export default [
  all,
  {
    rules: {
      // Máxima calidad para librerías
      'no-console': 'error',
      'no-debugger': 'error',
      
      // Documentación obligatoria
      'jsdoc/require-jsdoc': 'error',
      
      // Tests obligatorios
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
]
```

### Prototipo/MVP

```js
// eslint.config.js
import basic from 'eslint-config-cardinal/basic'

export default [
  basic,
  {
    rules: {
      // Máxima flexibilidad para prototipos
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'warn',
      
      // Permitir patrones rápidos
      'prefer-template': 'off',
      'object-shorthand': 'off',
    },
  },
]
```

## 🔄 Migración Gradual

### Fase 1: Empezar con Cardinal

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Desactivar reglas conflictivas temporalmente
      'semi': 'off',
      'quotes': 'off',
      'no-var': 'off',
    },
  },
]
```

### Fase 2: Habilitar Reglas Progresivamente

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Habilitar reglas de calidad primero
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      
      // Mantener desactivadas reglas de formato por ahora
      'semi': 'off',
      'quotes': 'off',
    },
  },
]
```

### Fase 3: Aplicar Formato

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Habilitar reglas de formato
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      
      // Mantener algunas excepciones
      'no-var': 'warn', // Advertencia para código legacy
    },
  },
]
```

## 🚀 Buenas Prácticas

### 1. Usar Configuraciones por Ambiente

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

const isDevelopment = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

export default [
  cardinal,
  {
    rules: {
      // Console permitido en desarrollo y tests
      'no-console': isDevelopment || isTest ? 'off' : 'warn',
      
      // Debugger permitido solo en desarrollo
      'no-debugger': isDevelopment ? 'off' : 'error',
      
      // Reglas más estrictas en producción
      'no-unused-vars': isDevelopment ? 'warn' : 'error',
    },
  },
]
```

### 2. Documentar Personalizaciones

```js
// eslint.config.js
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Permitimos console para logging en backend
      'no-console': 'off',
      
      // Usamos comillas dobles por consistencia con JSON
      'quotes': ['error', 'double'],
      
      // Mantenemos var para compatibilidad con código legacy
      'no-var': 'off',
      
      // Relajamos comparaciones para patrones existentes
      'eqeqeq': ['error', 'smart'],
    },
  },
]
```

### 3. Validar Configuración

```bash
# Verificar que la configuración es válida
npx eslint --print-config test.js

# Probar en archivos específicos
npx eslint --config eslint.config.js src/

# Verificar reglas activas
npx eslint --print-config src/ | grep "rules"
```

## ⚠️ Personalizaciones No Recomendadas

### Evitar estas configuraciones:

```js
// ❌ No recomendado: Desactivar reglas de seguridad
{
  rules: {
    'no-eval': 'off', // Peligroso
    'no-implied-eval': 'off', // Peligroso
    'no-script-url': 'off', // Peligroso
  }
}

// ❌ No recomendado: Demasiado permisivo
{
  rules: {
    'no-unused-vars': 'off', // Oculta bugs
    'no-undef': 'off', // Oculta typos
    'prefer-const': 'off', // Pierde beneficios
  }
}

// ❌ No recomendado: Configuración inconsistente
{
  rules: {
    'semi': ['error', 'always'], // Conflicto con Cardinal
    'quotes': ['error', 'double'], // Conflicto con Cardinal
  }
}
```

## 📊 Impacto de Personalizaciones

### Personalizaciones Seguras

| Cambio | Impacto | Riesgo |
|--------|---------|--------|
| `semi: 'always'` | Bajo | Mínimo |
| `quotes: 'double'` | Bajo | Mínimo |
| `no-console: 'warn'` | Medio | Bajo |
| `max-len: 120` | Bajo | Mínimo |

### Personalizaciones de Riesgo

| Cambio | Impacto | Riesgo |
|--------|---------|--------|
| `no-eval: 'off'` | Alto | Crítico |
| `no-unused-vars: 'off'` | Alto | Alto |
| `prefer-const: 'off'` | Medio | Medio |

---

*¿Necesitas [ver guía de migración](./migration) o [referencia de reglas](./rules-reference)?*
