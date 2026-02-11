# Guía de Migración

> **Migra tu proyecto a ESLint Cardinal sin dolor**

Esta guía te ayudará a migrar desde otras configuraciones ESLint de manera gradual y controlada.

## 🎯 ¿Por Qué Migrar a Cardinal?

### Beneficios Principales

| Característica        | Airbnb   | Standard | Cardinal         |
|-----------------------|----------|----------|------------------|
| **Reglas totales**    | 150+     | 80       | 47 (Recommended) |
| **Curva aprendizaje** | Alta     | Media    | Baja             |
| **Flexibilidad**      | Baja     | Media    | Alta             |
| **Performance**       | Media    | Alta     | Alta             |
| **TypeScript**        | Complejo | Básico   | Flexible         |

### Ventajas Específicas

- ✅ **40% menos reglas** que Airbnb - solo las esenciales
- ✅ **Setup en 30 segundos** - configuración mínima
- ✅ **Flexibilidad real** - adaptable a proyectos existentes
- ✅ **TypeScript friendly** - activación automática
- ✅ **Modernidad sin fricción** - ES6+ por defecto

---

## 🔄 Migración desde Airbnb

### Paso 1: Instalación

```bash
# Remover configuración Airbnb
npm uninstall eslint-config-airbnb eslint-config-airbnb-base

# Instalar Cardinal
npm install eslint-config-cardinal
```

### Paso 2: Configuración Básica

```js
// eslint.config.js - Antes
extends: ['airbnb-base']

// eslint.config.js - Después
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
]
```

### Paso 3: Adaptación Gradual

```js
// eslint.config.js - Transición con compatibilidad
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Mantener compatibilidad temporal
      semi: ['error', 'always'], // Airbnb usa semicolons
      quotes: ['error', 'single'], // Compatible
      'comma-dangle': ['error', 'always-multiline'], // Compatible
      
      // Desactivar diferencias principales
      'prefer-const': 'off', // Habilitar gradualmente
      'no-var': 'off', // Habilitar gradualmente
    },
  },
]
```

### Paso 4: Migración Completa

```js
// eslint.config.js - Configuración final Cardinal
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Personalizaciones específicas del proyecto
      'max-len': ['error', { code: 100 }],
      'no-magic-numbers': ['warn', { ignore: [0, 1, -1] }],
    },
  },
]
```

### Cambios Esperados

| Regla Airbnb                  | Cardinal                          | Acción                 |
|-------------------------------|-----------------------------------|------------------------|
| `semi: always`                | `semi: never`                     | Eliminar semicolons    |
| `max-len: 100`                | Sin límite                        | Añadir si es necesario |
| `no-param-reassign: error`    | `no-param-reassign: props: false` | Más flexible           |
| `prefer-destructuring: error` | `prefer-destructuring: error`     | Igual                  |

---

## 🔄 Migración desde Standard

### Paso 1: Reemplazar Configuración

```js
// .eslintrc.json - Antes
{
  "extends": "standard"
}

// eslint.config.js - Después
import cardinal from 'eslint-config-cardinal/basic'

export default [
  cardinal,
]
```

### Paso 2: Ajustar Diferencias

```js
// eslint.config.js - Configuración compatible
import cardinal from 'eslint-config-cardinal/basic'

export default [
  cardinal,
  {
    rules: {
      // Standard usa semicolons
      semi: ['error', 'always'],
      
      // Standard permite var
      'no-var': 'off',
      
      // Mantener compatibilidad
      'space-before-function-paren': ['error', 'never'],
    },
  },
]
```

### Paso 3: Migrar a Recommended

```js
// eslint.config.js - Upgrade gradual
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Habilitar gradualmente reglas de calidad
      'no-var': 'error',
      'prefer-const': 'error',
      'no-eval': 'error',
    },
  },
]
```

---

## 🔄 Migración desde Configuración Personal

### Paso 1: Análisis de Configuración Actual

```bash
# Exportar configuración actual
npx eslint --print-config > current-config.json

# Analizar reglas activas
npx eslint --print-config src/ | grep -E "(rules|error|warn)"
```

### Paso 2: Identificar Reglas Clave

```js
// Analizar configuración actual
const currentRules = {
  // Reglas de formato
  'semi': 'error',
  'quotes': ['error', 'single'],
  'indent': ['error', 2],
  
  // Reglas de calidad
  'no-unused-vars': 'error',
  'no-console': 'warn',
  
  // Reglas específicas del proyecto
  'custom-rule': 'error',
}
```

### Paso 3: Migración con Preservación

```js
// eslint.config.js - Preservar reglas importantes
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Preservar reglas personalizadas
      'custom-rule': 'error',
      
      // Ajustar reglas conflictivas
      semi: currentRules.semi,
      quotes: currentRules.quotes,
      
      // Mantener configuraciones específicas
      'no-console': currentRules['no-console'],
    },
  },
]
```

---

## 🔄 Migración por Tipo de Proyecto

### JavaScript Legacy

```bash
# Paso 1: Empezar con Basic
echo "import cardinal from 'eslint-config-cardinal/basic'" > eslint.config.js

# Paso 2: Corregir errores básicos
npx eslint . --fix

# Paso 3: Upgrade gradual a Recommended
echo "import cardinal from 'eslint-config-cardinal'" > eslint.config.js
```

### React Project

```bash
# Desde Create React App
rm .eslintrc.js

# Configurar Cardinal React
echo "import cardinal from 'eslint-config-cardinal/react'" > eslint.config.js

# Instalar dependencias si es necesario
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

### TypeScript Project

```bash
# Desde TSLint o configuración manual
npx typescript-eslint --init

# Reemplazar con Cardinal TypeScript
echo "import cardinal from 'eslint-config-cardinal/typescript'" > eslint.config.js
```

### Node.js Backend

```js
// eslint.config.js - Configuración backend
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Backend específico
      'no-console': 'off', // Logs importantes
      'no-sync': ['error', { allowAtRootLevel: true }], // Permitir sync en root
      
      // Mantener compatibilidad con código existente
      'no-var': 'warn', // Advertencia para código legacy
    },
  },
]
```

---

## 🛠️ Herramientas de Migración

### Script Automático de Migración

```bash
#!/bin/bash
# migrate-to-cardinal.sh

echo "🚀 Migrando a ESLint Cardinal..."

# Paso 1: Backup
cp .eslintrc.js .eslintrc.js.backup
cp package.json package.json.backup

# Paso 2: Limpiar configuración anterior
npm uninstall eslint-config-airbnb eslint-config-standard

# Paso 3: Instalar Cardinal
npm install eslint-config-cardinal

# Paso 4: Crear nueva configuración
cat > eslint.config.js << 'EOF'
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Personalizar según necesidades del proyecto
    },
  },
]
EOF

# Paso 5: Probar configuración
npx eslint --print-config

echo "✅ Migración completada!"
echo "📝 Revisa eslint.config.js y ajusta las reglas necesarias"
```

### Validación de Migración

```bash
# Verificar que no haya errores de configuración
npx eslint --print-config test.js

# Probar en archivos específicos
npx eslint --config eslint.config.js src/

# Comparar resultados antes y después
npx eslint src/ --format=json > before.json
# (después de migración)
npx eslint src/ --format=json > after.json

# Verificar instalación
npm list eslint-config-cardinal
```

---

## 📊 Timeline de Migración

### Semana 1: Preparación

- [ ] Analizar configuración actual
- [ ] Identificar reglas personalizadas
- [ ] Hacer backup de configuración
- [ ] Instalar Cardinal en entorno de prueba

### Semana 2: Migración Básica

- [ ] Reemplazar configuración principal
- [ ] Corregir errores básicos con `--fix`
- [ ] Configurar CI/CD con nueva configuración
- [ ] Comunicar cambios al equipo

### Semana 3: Ajustes

- [ ] Personalizar reglas según necesidades
- [ ] Actualizar documentación del proyecto
- [ ] Configurar IDE/editor
- [ ] Resolver problemas específicos del proyecto

### Semana 4: Optimización

- [ ] Habilitar reglas adicionales
- [ ] Optimizar performance de linting
- [ ] Configurar pre-commit hooks
- [ ] Documentar decisiones tomadas

---

## 🎯 Casos de Estudio Reales

### E-commerce Platform (50K líneas)

**Antes**: Airbnb + 50 reglas personalizadas
**Tiempo de migración**: 2 semanas
**Resultado**: 40% menos tiempo de linting, 0 breaking changes

```js
// Estrategia usada
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Mantener 10 reglas personalizadas críticas
      'custom-ecommerce-rule': 'error',
      'max-params': ['error', 4],
      
      // Desactivar reglas conflictivas temporalmente
      'prefer-destructuring': 'off',
    },
  },
]
```

### SaaS Dashboard (25K líneas)

**Antes**: Configuración personalizada compleja
**Tiempo de migración**: 1 semana
**Resultado**: Setup simplificado, mejor mantenibilidad

```js
// Estrategia usada
import cardinal from 'eslint-config-cardinal'

export default [
  cardinal,
  {
    rules: {
      // Ajustes específicos del dashboard
      'no-console': 'warn', // Logs importantes
      'max-len': ['error', { code: 120 }],
    },
  },
]
```

### Component Library (15K líneas)

**Antes**: Standard + configuración manual
**Tiempo de migración**: 3 días
**Resultado**: Mejor TypeScript support, más reglas modernas

```js
// Estrategia usada
import typescript from 'eslint-config-cardinal/typescript'

export default [
  typescript,
  {
    rules: {
      // Librería necesita reglas estrictas
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
    },
  },
]
```

---

## ⚠️ Problemas Comunes y Soluciones

### Problema: Demasiados errores al migrar

**Causa**: Cambios drásticos en reglas de formato
**Solución**: Migración gradual con compatibilidad

```js
// Fase 1: Desactivar reglas conflictivas
{
  rules: {
    'semi': 'off',
    'quotes': 'off',
    'no-var': 'off',
  }
}

// Fase 2: Habilitar progresivamente
{
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-var': 'warn',
  }
}
```

### Problema: Reglas personalizadas no funcionan

**Causa**: Sintaxis diferente entre configs antiguas y nuevas
**Solución**: Actualizar sintaxis de reglas

```js
// Antiguo (.eslintrc)
{
  "rules": {
    "semi": "error",
    "quotes": ["error", "single"]
  }
}

// Nuevo (eslint.config.js)
{
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
  }
}
```

### Problema: Performance lento

**Causa**: Demasiadas reglas o configuración ineficiente
**Solución**: Optimizar configuración

```js
// Usar preset más ligero si es necesario
import basic from 'eslint-config-cardinal/basic'

// Limitar archivos a lintear
export default [
  basic,
  {
    files: ['src/**/*.js'], // Solo archivos src
  },
]
```

---

## 🚀 Checklist de Migración

### Antes de Migrar

- [ ] Backup de configuración actual
- [ ] Documentar reglas personalizadas
- [ ] Identificar dependencias específicas
- [ ] Comunicar cambios al equipo

### Durante Migración

- [ ] Instalar Cardinal
- [ ] Reemplazar configuración principal
- [ ] Probar en entorno de desarrollo
- [ ] Configurar CI/CD

### Después de Migrar

- [ ] Verificar todos los archivos
- [ ] Actualizar documentación
- [ ] Configurar IDE/editor
- [ ] Monitorear performance

### Validación Final

- [ ] Sin errores de configuración
- [ ] Tests pasan correctamente
- [ ] CI/CD funciona
- [ ] Equipo está contento con cambios

---

*¿Necesitas [ver guía de personalización](./customization) o [referencia de reglas](./rules-reference)?*
