# Configuraciones

Esta sección detalla cada configuración disponible en ESLint Cardinal y cómo combina los módulos especializados.

## Nomenclatura: La Realidad del Proyecto

Basado en la investigación de estructuras comunes en configs ESLint (como antfu/eslint-config) y las mejores prácticas de Flat Config, aquí está la estructura real del proyecto:

### 🧩 **Módulos** (Bloques de construcción)
Los **módulos** son bloques temáticos de reglas ESLint reutilizables:

- **Ubicación**: `src/modules/*.js`
- **Propósito**: Bloques temáticos de reglas
- **Ejemplos**: `style.js`, `code-quality.js`, `variables.js`

```javascript
// src/modules/style.js - Módulo
export default {
  name: 'cardinal/style',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    // ... reglas de estilo
  }
}
```

### ⚙️ **Configuraciones** (Combinaciones predefinidas)
Las **configuraciones** son combinaciones específicas de módulos para tipos de proyectos:

- **Ubicación**: `src/configs/*.js`
- **Propósito**: Soluciones predefinidas para tipos de proyectos
- **Ejemplos**: `config-basic.js`, `config-recommended.js`

```javascript
// src/configs/config-basic.js - Configuración
import style from '../modules/style.js'        // 🧩 Módulo
import codeQuality from '../modules/code-quality.js' // 🧩 Módulo

export default [
  baseConfig,
  style,         // 🧩
  codeQuality,   // 🧩
  variables,     // 🧩
  relaxed,       // 🧩
]
```

### � **Presets** (Interfaz pública)
Los **presets** son los nombres públicos que exportan y usan los usuarios:

- **Ubicación**: `src/index.js` (exportaciones)
- **Propósito**: Interfaz pública para usuarios finales
- **Uso**: `import basic from '@nucleoabierto/eslint-config-cardinal/basic'`

```javascript
// src/index.js - Exportaciones públicas (presets)
export { default as basic } from './configs/config-basic.js'
export { default as recommended } from './configs/config-recommended.js'

// Uso del usuario:
// import basic from '@nucleoabierto/eslint-config-cardinal/basic'
```

---

## Estructura Actualizada

**Estructura final del proyecto Cardinal**:
```text
src/
├── modules/           ← Módulos (bloques de reglas)
│   ├── style.js
│   └── code-quality.js
├── configs/           ← Configuraciones (combinaciones)
│   ├── config-basic.js
│   └── config-recommended.js
└── index.js           ← Presets (exportaciones públicas)
```

---

## Flujo Real del Proyecto

```
🧩 Módulos (src/modules/*.js)
    ↓
⚙️ Configuraciones (src/configs/*.js)
    ↓  
📦 Presets (exportaciones en src/index.js)
    ↓
👤 Usuario (import desde npm)
```

**Nota**: Ahora la estructura coincide con las convenciones estándar y la documentación refleja la realidad del proyecto.

## Configuraciones Disponibles

### [basic](./configurations/basic.md) - Fundamentos Limpios

Configuración esencial que combina módulos fundamentales para proyectos JavaScript simples.

### [recommended](./configurations/recommended.md) - Balance Inteligente

Configuración completa que combina módulos básicos con mejores prácticas para la mayoría de proyectos.

### [typescript](./configurations/typescript.md) - Seguridad de Tipos

Configuración que extiende recommended con módulos específicos para TypeScript y seguridad.

### [all](./configurations/all.md) - Máxima Calidad

Configuración completa que incluye todos los módulos disponibles para máxima cobertura.

### [react](./configurations/react.md) - Componentes Modernos

Configuración especializada que combina módulos base con reglas específicas para React.

---

## ¿Cómo elegir una configuración?

- **Proyectos simples**: Usa `basic`
- **Proyectos estándar**: Usa `recommended` (opción por defecto)
- **Proyectos TypeScript**: Usa `typescript`
- **Proyectos React**: Usa `react`
- **Aplicaciones críticas**: Usa `all`

---

## Composición de Configuraciones

Cada configuración (preset) está compuesta por **módulos especializados** que puedes combinar según tus necesidades. Los módulos son bloques temáticos de reglas ESLint:

- **Módulos Base**: `style`, `code-quality`, `variables`
- **Módulos de Prácticas**: `best-practices`, `imports`, `promises`
- **Módulos Especializados**: `node`, `security`, `react`, `typescript`
- **Módulos de Flexibilidad**: `relaxed`

Ver la sección de [Módulos](./modules.md) para más detalles sobre cada módulo individual.
