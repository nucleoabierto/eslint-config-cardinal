# eslint-config-cardinal

[![npm version](https://img.shields.io/github/v/release/nucleoabierto/eslint-config-cardinal)](https://github.com/nucleoabierto/eslint-config-cardinal/releases)
[![license](https://img.shields.io/github/license/nucleoabierto/eslint-config-cardinal)](LICENSE)
[![ESLint](https://img.shields.io/badge/ESLint-v9+-blue.svg)](https://eslint.org/)

> **Modernidad sin Fricción, Calidad sin Compromiso**  
> Configuración ESLint que balancea rigor con pragmatismo para código JavaScript y TypeScript.

## Filosofía

**El dilema**: Configuraciones ESLint demasiado estrictas que rompen código funcional,
o demasiado laxas que permiten caos total.

**La solución Cardinal**: Balance inteligente - estricto donde importa para garantizar
calidad, flexible donde no para permitir desarrollo pragmático.

## Inicio Rápido

### 1. Instalar

```bash
npm install eslint @nucleoabierto/eslint-config-cardinal --save-dev
```

### 2. Configurar

```javascript
// eslint.config.js
import recommended from "@nucleoabierto/eslint-config-cardinal/recommended"

export default [
  {
    ignores: [
      'node_modules/**',
    ],
  },
  ...recommended,
]
```

### 3. Usar

```bash
npx eslint .
```

## Configuraciones Disponibles

| Configuración   | Ideal para                     | Rigor     | Importar                              |
|-----------------|--------------------------------|-----------|---------------------------------------|
| **basic**       | Prototipos, proyectos pequeños | ⭐⭐      | `import { basic }`                    |
| **recommended** | La mayoría de proyectos        | ⭐⭐⭐    | `import { recommended }`              |
| **react**       | Proyectos React                | ⭐⭐⭐    | `import { react }`                    |
| **typescript**  | Proyectos TypeScript           | ⭐⭐⭐⭐  | `import { typescript }`               |
| **all**         | Producción, máxima calidad     | ⭐⭐⭐⭐⭐| `import { all }`                      |

**Recomendación**: Usa `recommended` para la mayoría de casos. Es el equilibrio perfecto.

## Características Principales

### Estilo Moderno

- ✅ Sin punto y coma
- ✅ Comillas simples
- ✅ Comas finales en multilinea
- ✅ Indentación de 2 espacios

### Calidad Exigente

- ✅ `prefer-const` estricto
- ✅ Destructuring completo
- ✅ Template literals
- ✅ Arrow functions

### Seguridad Pragmática

- ✅ Prohibición de `eval/Function`
- ✅ Comparación estricta con flexibilidad para `null == null`
- ✅ Prevención de patrones peligrosos

### Flexibilidad Inteligente

- ✅ Límites razonables de línea y complejidad
- ✅ Control de tamaño de funciones y archivos
- ✅ Operaciones legítimas permitidas
- ✅ Configuración por tipo de archivo

## TypeScript Helper

Para personalización avanzada de TypeScript:

```javascript
import { createCustomTypeScriptConfig } from "@nucleoabierto/eslint-config-cardinal/typescript-helper"

export default createCustomTypeScriptConfig({
  projectPaths: ['./tsconfig.json'], // Tu tsconfig personalizado (requerido)
})
```

## Licencia

MIT License - Ver archivo [LICENSE](LICENSE) para detalles.
