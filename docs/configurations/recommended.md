# Configuración Recommended

Configuración completa y balanceada para la mayoría de proyectos JavaScript/TypeScript. Opción recomendada por defecto.

## Características

- Balance inteligente entre rigor y flexibilidad
- Mejores prácticas de seguridad
- Manejo optimizado de imports
- Gestión de promesas
- Optimización Node.js

## Composición

```javascript
import { createBaseConfig } from '../base-config.js'
import bestPractices from '../configs/best-practices.js'
import codeQuality from '../configs/code-quality.js'
import imports from '../configs/imports.js'
import node from '../configs/node.js'
import promises from '../configs/promises.js'
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
]
```

## Módulos Incluidos

- **baseConfig**: Configuración base con globals y ECMAScript features
- **style**: Reglas de formato y estilo moderno
- **codeQuality**: Prácticas de calidad y modernización
- **bestPractices**: Mejores prácticas de desarrollo
- **variables**: Manejo optimizado de variables
- **imports**: Gestión inteligente de imports y exports
- **node**: Optimización específica para Node.js
- **promises**: Mejores prácticas con promesas
- **relaxed**: Reglas flexibles para desarrollo pragmático

## Uso

```javascript
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```

## Ideal para

- Proyectos JavaScript/TypeScript estándar
- Aplicaciones web y APIs
- Proyectos Node.js
- Equipos que buscan balance calidad-productividad

*Documentación en construcción - Más detalles próximamente*
