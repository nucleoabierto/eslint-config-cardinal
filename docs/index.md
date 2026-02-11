---
layout: home
hero:
  text: ESLint Cardinal
  tagline: Modernidad sin Fricción, Calidad sin Compromiso
  actions:
    - theme: brand
      text: Comenzar
      link: /guide/getting-started
    - theme: alt
      text: Ver en GitHub
      link: https://github.com/nucleoabierto/eslint-config-cardinal
    - theme: alt
      text: Instalar con npm
      link: /guide/getting-started#instalacion-rapida

features:
  - icon: ⚡
    title: Modernidad sin Fricción
    details: Configuración que "simplemente funciona" con las convenciones más modernas del ecosistema JavaScript.
  - icon: 🎯
    title: Balance Inteligente
    details: Estricto donde importa para garantizar calidad, pero flexible donde no para permitir desarrollo pragmático.
  - icon: 🧩
    title: Modularidad Temática
    details: Cada bloque con propósito claro y definido, facilitando comprensión y mantenimiento.
  - icon: 🔍
    title: Transparencia Radical
    details: Todas las decisiones de configuración son explícitas y documentadas con justificación clara.
  - icon: 🔄
    title: Flexibilidad Controlada
    details: Reglas desactivadas intencionalmente con justificación clara para casos especiales del mundo real.
  - icon: 🚀
    title: Compatibilidad Futura
    details: Plugins actualizados y estructura compatible con ESLint 9+ y las últimas características del lenguaje.

---

## ¿Qué Problema Resuelve?

**El dilema del desarrollador**: Configuraciones ESLint demasiado estrictas que rompen código funcional, o demasiado
laxas que permiten caos total.

```js
// ¿Cuál de estas configuraciones usar?
module.exports = {
  // Opción A: Demasiado estricta
  rules: {
    'no-magic-numbers': 'error',      // No puedo usar 0, 1, -1
    'max-lines-per-function': 20,     // Funciones útiles se rompen
    'complexity': [2, 10],           // Algoritmos complejos prohibidos
  }
}

// Opción B: Demasiado laxa
module.exports = {
  rules: {
    // Sin reglas = caos total
  }
}
```

**La solución Cardinal**: Balance Inteligente - estricto donde importa para calidad, flexible donde no para productividad.

## Configuraciones Disponibles

### **basic** - Fundamentos Limpios

Para proyectos JavaScript que necesitan reglas esenciales sin complejidad.

```js
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```

**Proporciona**: Estilo moderno, calidad de código básica, manejo de variables y flexibilidad para desarrollo real

---

### **recommended** - Balance Inteligente **(Recomendado)**

La configuración completa para la mayoría de proyectos. **Por defecto**.

```js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```

**Proporciona**: Todo lo básico + mejores prácticas de seguridad, manejo de imports, optimización Node.js y gestión de promesas

---

### **typescript** - Seguridad de Tipos

Para proyectos TypeScript con análisis avanzado.

```js
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```

**Proporciona**: Todo lo recomendado + análisis type-aware, seguridad adicional y detección automática de proyectos TypeScript

---

### **all** - Máxima Calidad

Para aplicaciones críticas que requieren el más alto estándar.

```js
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [...all]
```

**Proporciona**: Cobertura máxima con estilo, calidad, mejores prácticas, seguridad, TypeScript avanzado y React (cuando
disponible)

---

### **react** - Componentes Modernos

Para proyectos React con JSX y accesibilidad.

```js
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...react]
```

**Proporciona**: Configuración recomendada + reglas específicas para React, hooks modernos y accesibilidad

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

### Pasos Manuales

1. **Instalar dependencias**

```bash
npm install --save-dev eslint @nucleoabierto/eslint-config-cardinal
```

1. **Configurar ESLint**

Crea tu archivo `eslint.config.js`:

```js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```

## Beneficios de Cardinal

| Característica    | Cardinal                               | Beneficio                    |
|-------------------|----------------------------------------|------------------------------|
| **Modernidad**    | ✅ Sin semicolons, trailing commas     | Código limpio y moderno      |
| **Flexibilidad**  | ✅ Controlada con justificación        | Equilibrio perfecto          |
| **Modularidad**   | ✅ Bloques temáticos claros            | Fácil de entender y mantener |
| **TypeScript**    | ✅ Opcional, sin dependencias forzadas | Flexibilidad total           |
| **Documentación** | ✅ Completa y transparente             | Cada decisión explicada      |

## Características Principales

- **Estilo Moderno**: Sin semicolons, comillas simples, comas finales, indentación de 2 espacios
- **Calidad Exigente**: `prefer-const` estricto, destructuring completo, template literals, arrow functions
- **Seguridad Pragmática**: Prohibición de `eval/Function`, `eqeqeq` con flexibilidad para `null == null`
- **Flexibilidad Inteligente**: Sin límites artificiales, operaciones legítimas permitidas, configuración por tipo de archivo
