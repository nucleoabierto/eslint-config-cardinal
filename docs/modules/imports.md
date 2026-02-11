# Módulo Imports

Reglas para gestión de importación y exportación de módulos JavaScript/TypeScript.

## Características

- Ordenamiento consistente de imports
- Prevención de imports no utilizados
- Optimización de dependencias
- Estructura clara de módulos

## Reglas Principales

```javascript
// Ordenamiento
'import/order': ['error', {
  groups: [
    'builtin',
    'external',
    'internal',
    'parent',
    'sibling',
    'index',
  ],
  'newlines-between': 'always',
}]

// Uso
'no-unused-imports': 'error'
'import/no-duplicates': 'error'
'import/no-unresolved': 'error'

// Nomenclatura
'import/named': 'error'
'import/default': 'error'
'import/namespace': 'error'

// Estructura
'import/newline-after-import': 'error'
'import/no-absolute-path': 'error'
```

## Filosofía

Este módulo promueve imports que son:

- **Ordenados**: Estructura consistente y predecible
- **Limpios**: Sin imports no utilizados o duplicados
- **Claros**: Nomenclatura explícita y sin ambigüedades
- **Optimizados**: Evitar dependencias innecesarias

## Uso

Incluido en configuraciones `recommended` y superiores para gestión de módulos profesional.

*Documentación en construcción - Reglas completas próximamente*
