# Configuraciones Avanzadas

## 🔷 **typescript** - Seguridad de Tipos Inteligente

Para proyectos TypeScript con análisis avanzado y type safety.

```js
// eslint.config.js
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```text

**Requisitos Adicionales**:

```bash
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```text

**Bloques Incluidos**:

- ✅ Todo **recommended** +
- ✅ **typescript** - Type safety opcional
- ✅ **security** - Seguridad avanzada opcional

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
```text

---

## 🚀 **all** - Máxima Calidad

Para aplicaciones críticas que requieren el más alto estándar de calidad y seguridad.

```js
// eslint.config.js
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [...all]
```text

**Bloques Incluidos**:

- ✅ Todo **typescript** +
- ✅ **typescript-advanced** - Type safety estricto

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
```text

---

## ⚛️ **react** - Componentes Modernos

Para proyectos React con JSX, hooks y accesibilidad.

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...recommended, ...react]
```text

**Requisitos Adicionales**:

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```text

**Bloques Incluidos**:

- ✅ **recommended** +
- ✅ **react** - Desarrollo moderno de componentes

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
```text

---

## 🎯 Árbol de Decisión

```text
¿Usas TypeScript?
├── Sí → ¿Es aplicación crítica?
│   ├── Sí → all
│   └── No → typescript
└── No → ¿Usas React?
    ├── Sí → react
    └── No → ¿Es proyecto simple?
        ├── Sí → basic
        └── No → recommended ⭐
```text

---

## 📊 Comparación Rápida

| Configuración   | Bloques | Reglas ~ | Uso Ideal                   | Complejidad |
|-----------------|---------|----------|-----------------------------|-------------|
| **typescript**  | 10      | ~150     | Proyectos TS                | 🟡 Media    |
| **all**         | 11      | ~180     | Aplicaciones críticas       | 🔴 Alta     |
| **react**       | 9       | ~140     | Proyectos React             | 🟡 Media    |

---

## 🔄 Evolución

```js
// Fase 3: Se agrega TypeScript
export default [...typescript]

// Fase 4: Aplicación crítica
export default [...all]

// Alternativa React
export default [...react]
```text

¿Listo para [ejemplos prácticos](../../examples/complete-guide.md)?
