# Configuración TypeScript

Configuración especializada para proyectos TypeScript con análisis type-aware y seguridad adicional.

## Características

- Análisis type-aware completo
- Seguridad de tipos avanzada
- Detección automática de proyectos TypeScript
- Integración con reglas específicas de TypeScript

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
  // TypeScript config (optional - only included if TypeScript is available)
  ...(typescript ? [typescript] : []),
]
```

## Módulos Incluidos

- **baseConfig**: Configuración base para archivos JS/TS
- **style**: Reglas de formato y estilo moderno
- **codeQuality**: Prácticas de calidad y modernización
- **bestPractices**: Mejores prácticas de desarrollo
- **variables**: Manejo optimizado de variables
- **imports**: Gestión de imports con soporte TypeScript
- **node**: Optimización específica para Node.js
- **promises**: Mejores prácticas con promesas
- **relaxed**: Reglas flexibles para desarrollo pragmático
- **security**: Reglas de seguridad completas
- **typescript**: Reglas específicas del plugin @typescript-eslint (opcional)

## Uso

```javascript
import typescript from '@nucleoabierto/eslint-config-cardinal/typescript'

export default [...typescript]
```

## Ideal para

- Proyectos TypeScript puros
- Proyectos JavaScript+TypeScript mixtos
- Aplicaciones con tipado estricto
- Proyectos que necesitan análisis semántico avanzado

## Requisitos

- TypeScript instalado en el proyecto
- tsconfig.json configurado
- @typescript-eslint plugins disponibles

*Documentación en construcción - Más detalles próximamente*
