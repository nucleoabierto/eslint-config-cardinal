# Módulo Code Quality

Reglas enfocadas en modernizar y mantener limpio el código JavaScript/TypeScript.

## Características

- Forzar uso de características modernas de JavaScript
- Mejorar mantenibilidad y legibilidad
- Eliminar patrones obsoletos
- Promover mejores prácticas de lenguaje

## Reglas Principales

```javascript
// Modernización
'prefer-const': ['error', { destructuring: 'all' }]
'no-var': 'error'
'prefer-arrow-callback': 'error'
'prefer-template': 'error'
'prefer-spread': 'error'
'prefer-rest-params': 'error'

// Estructura
'object-shorthand': ['error', 'properties']
'prefer-destructuring': ['error', {
  array: true,
  object: true,
}]

// Calidad
'no-unused-vars': 'error'
'no-unreachable': 'error'
'no-constant-condition': 'warn'
'no-debugger': 'error'

// Plugins (unicorn)
'unicorn/prefer-export-from': 'error'
'unicorn/prefer-includes': 'error'
'unicorn/no-console-spaces': 'error'
```

## Filosofía

Este módulo promueve código que:

- **Es moderno**: Usa características ES2022+ cuando sea apropiado
- **Es mantenible**: Patrones que facilitan futuros cambios
- **Es limpio**: Elimina código innecesario o redundante
- **Es expresivo**: Sintaxis que comunica intención clara

## Uso

Incluido en todas las configuraciones Cardinal como base de calidad.

*Documentación en construcción - Reglas completas próximamente*
