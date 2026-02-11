# Configuraciones Disponibles

ESLint Cardinal ofrece múltiples configuraciones predefinidas que siguen el principio
de **Balance Inteligente**. Cada configuración está diseñada para casos de uso específicos,
desde scripts simples hasta aplicaciones críticas.

## Niveles de Configuración

### **basic** - Fundamentos Limpios

Para proyectos JavaScript que necesitan reglas esenciales sin complejidad.

```js
// eslint.config.js
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```

**Ideal para**:

- Scripts y utilidades pequeñas
- Proyectos de aprendizaje
- Configuración mínima pero moderna
- Prototipos rápidos

**Reglas Clave**:

```js
// Estilo moderno
semi: 'never' // Sin semicolons
quotes: ['error', 'single'] // Comillas simples

// Calidad básica
'prefer-const': 'error' // Usar const cuando sea posible
'no-var': 'error' // Prohibir var

// Flexibilidad
'max-len': 'off' // Sin límite de longitud
'complexity': 'off' // Sin límite de complejidad
```

---

### **recommended** - Balance Inteligente **(Recomendado)**

La configuración completa para la mayoría de proyectos. Recomendada para la mayoría de casos de uso.

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```

**Ideal para**:

- **Aplicaciones Node.js**
- **Bibliotecas JavaScript**
- **Proyectos web frontend**
- **La mayoría de los proyectos profesionales**

**Reglas Adicionales**:

```js
// Best practices
'no-eval': 'error' // Prevenir code injection
'no-implied-eval': 'error' // Prevenir eval implícito
'eqeqeq': ['error', 'always', { null: 'ignore' }] // === excepto null

// Imports
'import-x/order': 'error' // Ordenamiento estricto
'import-x/no-duplicates': 'error' // Sin imports duplicados

// Node.js
'callback-return': 'error' // Forzar callback(err, result)
'no-process-exit': 'error' // Prevenir exits inesperados

// Promises
'always-return': 'error' // Siempre retornar en promesas
'no-return-in-finally': 'error' // Prevenir efectos inesperados
```

---

### **typescript** - Seguridad de Tipos Inteligente

Para proyectos TypeScript con análisis avanzado y type safety.

```js
// eslint.config.js
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```

**Requiere dependencias adicionales**:

```bash
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

> Cardinal detecta automáticamente `@typescript-eslint/*`.
> Si los plugins no están instalados, mostrará una advertencia y omitirá este bloque.

**Ideal para**:

- **Aplicaciones TypeScript**
- **Proyectos con tipado estricto**
- **Código base mixto JS/TS**
- **Proyectos enterprise**

**Características Especiales**:

```js
// Type-aware rules (solo si TypeScript disponible)
'@typescript-eslint/no-unused-vars': 'error' // Detectar no usados con tipos
'@typescript-eslint/prefer-nullish-coalescing': 'error' // Usar ?? en lugar de ||
'@typescript-eslint/prefer-optional-chain': 'error' // Usar ?. en lugar de &&

// Flexibilidad para desarrollo
'@typescript-eslint/no-explicit-any': 'warn' // any como advertencia
'@typescript-eslint/no-non-null-assertion': 'warn' // ! como advertencia

// Seguridad adicional
'no-unsafe-assignment': 'error' // Prevenir asignaciones inseguras
'no-unsafe-call': 'error' // Prevenir llamadas inseguras
'no-unsafe-member-access': 'error' // Prevenir acceso inseguro
```

---

### **all** - Máxima Calidad **(Máxima Exigencia)**

Para aplicaciones críticas que requieren el más alto estándar de calidad y seguridad.

```js
// eslint.config.js
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [...all]
```

**Ideal para**:

- **Aplicaciones críticas**
- **Proyectos enterprise**
- **Código base sensible a errores**
- **Sistemas de alta seguridad**

**Reglas Adicionales**:

```js
// TypeScript avanzado
'@typescript-eslint/no-explicit-any': 'error' // Prohibir any
'@typescript-eslint/no-non-null-assertion': 'error' // Prohibir !
'@typescript-eslint/prefer-nullish-coalescing': 'error' // Forzar ??
'@typescript-eslint/prefer-optional-chain': 'error' // Forzar ?.
'@typescript-eslint/strict-boolean-expressions': 'error' // Expresiones booleanas estrictas

// Seguridad máxima
'no-hardcoded-secrets': 'error' // Prevenir secrets en código
'no-legacy-json-parse': 'error' // Prevenir JSON.parse vulnerable
'no-unsafe-regex': 'error' // Prevenir regex vulnerables
'no-global-assign': 'error' // Prevenir asignación global
```

---

### **react** - Componentes Modernos

Para proyectos React con JSX, hooks y accesibilidad.

```js
// eslint.config.js
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...react]
```

**Requiere dependencias adicionales**:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

> Cardinal sólo activa las reglas de React/Hooks/A11y cuando detecta estos plugins, de lo contrario usa un preset mínimo.

**Ideal para**:

- **Aplicaciones React**
- **Proyectos con JSX**
- **Componentes modernos**
- **Proyectos frontend**

**Características Especiales**:

```js
// Modern React 17+
'react/react-in-jsx-scope': 'off' // No necesita React import
'react/jsx-uses-react': 'off' // JSX no usa React directamente

// Hooks estrictos
'react-hooks/rules-of-hooks': 'error' // Rules of hooks obligatorias
'react-hooks/exhaustive-deps': 'warn' // Dependencias flexibles

// JSX consistente
'react/jsx-fragments': ['error', 'syntax'] // Usar <>...</>
'react/jsx-curly-brace-presence': ['error', 'never'] // Sin {} para strings

// Accesibilidad (nivel warn)
'jsx-a11y/alt-text': 'warn' // Fomentar alt text
'jsx-a11y/anchor-has-content': 'warn' // Fomentar contenido en anchors
```

---

## Guía de Selección Rápida

### Por Tipo de Proyecto

| Tipo de Proyecto       | Configuración          | Razón                                  |
|------------------------|------------------------|----------------------------------------|
| **CLI Tool**           | `basic`                | Scripts simples, flexibilidad máxima   |
| **Node.js API**        | `recommended`          | Balance perfecto para backend          |
| **React App**          | `react`                | Soporte completo para ecosistema React |
| **TypeScript Library** | `typescript`           | Type safety sin ser demasiado estricto |
| **Enterprise App**     | `all`                  | Máxima calidad y seguridad             |

### Por Tamaño del Equipo

| Tamaño        | Configuración                | Consideraciones                        |
|---------------|------------------------------|----------------------------------------|
| **1-2 devs**  | `basic` → `recommended`      | Empezar simple, crecer según necesidad |
| **3-5 devs**  | `recommended`                | Consistencia sin sobrecarga            |
| **6-10 devs** | `recommended` → `typescript` | Type safety para colaboración          |
| **10+ devs**  | `typescript` → `all`         | Máxima consistencia y calidad          |

---

## Comparación General

| Característica | basic | recommended | typescript | react | all |
| | --- | --- | --- | --- | --- |
| **Cantidad de Reglas** | Básico | Completo | Avanzado | Completo | Máximo |
| **TypeScript** | No | No | Sí | Parcial | Sí |
| **React/JSX** | No | No | No | Sí | Parcial |
| **Seguridad** | Básico | Parcial | Completo | Parcial | Máximo |
| **Complejidad** | Flexible | Balance | Balance | Balance | Estricto |
| **Dependencias** | Mínimas | Mínimas | TypeScript | React | Mínimas |

**Recomendación**: Para la mayoría de proyectos, comienza con `recommended` y evoluciona según necesidades.

---

## Próximos Pasos

1. **Explora configuraciones básicas** para proyectos simples
2. **Revisa configuraciones avanzadas** para proyectos complejos  
3. **Personaliza según necesidades** específicas
4. **Evoluciona gradualmente** con el crecimiento del proyecto

¿Listo para [explorar ejemplos avanzados](/examples/complete-guide)?
