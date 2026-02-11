# Configuración All

Configuración completa con máxima cobertura y todas las reglas disponibles para aplicaciones críticas.

## Características

- Cobertura máxima de reglas
- Todas las mejores prácticas disponibles
- Seguridad y calidad al más alto nivel
- Compatibilidad con todos los ecosistemas

## Composición

```javascript
import { createBaseConfig } from '../base-config.js'
import bestPractices from '../configs/best-practices.js'
import codeQuality from '../configs/code-quality.js'
import imports from '../configs/imports.js'
import node from '../configs/node.js'
import promises from '../configs/promises.js'
import relaxed from '../configs/relaxed.js'
import security from '../configs/security.js'
import style from '../configs/style.js'
import typescriptAdvanced from '../configs/typescript-advanced.js'
import typescript from '../configs/typescript.js'
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
  security,
  // React config (optional - only included if React is available)
  ...(react ? [react] : []),
  // TypeScript configs (optional - only included if TypeScript is available)
  ...(typescript ? [typescript] : []),
  ...(typescriptAdvanced ? [typescriptAdvanced] : []),
]
```

## Módulos Incluidos

- **baseConfig**: Configuración base para todos los tipos de archivos JS/TS
- **style**: Reglas de formato y estilo moderno
- **codeQuality**: Prácticas de calidad y modernización
- **bestPractices**: Mejores prácticas de desarrollo
- **variables**: Manejo optimizado de variables
- **imports**: Gestión inteligente de imports y exports
- **node**: Optimización específica para Node.js
- **promises**: Mejores prácticas con promesas
- **relaxed**: Reglas flexibles para desarrollo pragmático
- **security**: Reglas de seguridad completas
- **react**: Reglas específicas para React (opcional)
- **typescript**: Reglas básicas de TypeScript (opcional)
- **typescriptAdvanced**: Reglas avanzadas de TypeScript (opcional)

## Uso

```javascript
import all from '@nucleoabierto/eslint-config-cardinal/all'

export default [...all]
```

## Ideal para

- Aplicaciones críticas y de alta seguridad
- Proyectos enterprise
- Sistemas financieros o médicos
- Proyectos que requieren el más alto estándar de calidad

## Consideraciones

- Configuración más estricta
- Puede requerir más tiempo de adaptación
- Ideal para equipos con experiencia en ESLint

*Documentación en construcción - Más detalles próximamente*
