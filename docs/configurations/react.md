# Configuración React

Configuración especializada para proyectos React con JSX, hooks modernos y accesibilidad.

## Características

- Reglas específicas para React y JSX
- Hooks modernos y mejores prácticas
- Accesibilidad integrada
- Optimización para componentes funcionales

## Composición

```javascript
import { createBaseConfig } from '../base-config.js'
import bestPractices from '../configs/best-practices.js'
import codeQuality from '../configs/code-quality.js'
import imports from '../configs/imports.js'
import node from '../configs/node.js'
import promises from '../configs/promises.js'
import react from '../configs/react.js'
import relaxed from '../configs/relaxed.js'
import style from '../configs/style.js'
import variables from '../configs/variables.js'

export default [
  baseConfig,
  style,
  codeQuality,
  bestPractices,
  variables,
  imports,
  node,
  promises,
  relaxed,
  // React config (optional - only included if React plugins available)
  ...(react ? [react] : []),
]
```

## Módulos Incluidos

- **baseConfig**: Configuración base para archivos React/JSX
- **style**: Reglas de formato y estilo moderno
- **codeQuality**: Prácticas de calidad y modernización
- **bestPractices**: Mejores prácticas de desarrollo
- **variables**: Manejo optimizado de variables
- **imports**: Gestión de imports con soporte React
- **node**: Optimización específica para Node.js
- **promises**: Mejores prácticas con promesas
- **relaxed**: Reglas flexibles para desarrollo pragmático
- **react**: Reglas específicas para React, Hooks y JSX (opcional)

## Uso

```javascript
import react from '@nucleoabierto/eslint-config-cardinal/react'

export default [...react]
```

## Ideal para

- Proyectos React modernos
- Aplicaciones con hooks funcionales
- Proyectos Next.js
- Component libraries
- Aplicaciones que requieren accesibilidad

## Requisitos

- React instalado en el proyecto
- Plugins de React disponibles
- Configuración JSX apropiada

## Reglas Destacadas

- Uso correcto de hooks
- Accesibilidad en componentes
- Optimización de renderizado
- Mejores prácticas de JSX

*Documentación en construcción - Más detalles próximamente*
