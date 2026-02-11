# Configuración Basic

Configuración fundamental centrada en saneamiento y estilo base para proyectos JavaScript modernos.

## Características

- Estilo moderno y consistente
- Calidad de código básica
- Manejo de variables
- Flexibilidad para desarrollo real

## Composición

```javascript
import { createBaseConfig } from '../base-config.js'
import codeQuality from '../configs/code-quality.js'
import relaxed from '../configs/relaxed.js'
import style from '../configs/style.js'
import variables from '../configs/variables.js'

export default [
  baseConfig,
  style,
  codeQuality,
  variables,
  relaxed,
]
```

## Módulos Incluidos

- **baseConfig**: Configuración base con globals y ECMAScript features
- **style**: Reglas de formato y estilo moderno
- **codeQuality**: Prácticas de calidad y modernización
- **variables**: Manejo optimizado de variables
- **relaxed**: Reglas flexibles para desarrollo pragmático

## Uso

```javascript
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```

## Ideal para

- Proyectos JavaScript simples
- Prototipos y MVPs
- Equipos nuevos en ESLint
- Proyectos que necesitan reglas esenciales sin complejidad

*Documentación en construcción - Más detalles próximamente*
