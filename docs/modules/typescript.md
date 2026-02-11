# Módulo TypeScript

Reglas básicas para proyectos TypeScript y manejo de tipos fundamentales.

## Características

- Reglas específicas del plugin @typescript-eslint
- Manejo seguro de tipos básicos
- Prevención de anti-patrones TypeScript
- Integración con código JavaScript existente

## Reglas Principales

```javascript
// Tipado básico
'@typescript-eslint/no-unused-vars': 'error'
'@typescript-eslint/no-explicit-any': 'warn'
'@typescript-eslint/prefer-nullish-coalescing': 'error'

// Interfaces y tipos
'@typescript-eslint/consistent-type-definitions': ['error', 'interface']
'@typescript-eslint/consistent-type-imports': 'error'

// Funciones y métodos
'@typescript-eslint/no-inferrable-types': 'error'
'@typescript-eslint/prefer-function-type': 'error'

// Clases y constructores
'@typescript-eslint/no-empty-function': 'warn'
'@typescript-eslint/no-non-null-assertion': 'warn'

// Módulos y namespaces
'@typescript-eslint/no-namespace': 'error'
'@typescript-eslint/triple-slash-reference': 'error'
```

## Filosofía

Este módulo promueve código TypeScript que es:

- **Tipado**: Uso apropiado del sistema de tipos
- **Seguro**: Prevención de errores de tipado comunes
- **Consistente**: Convenciones uniformes en el proyecto
- **Interoperable**: Buena integración con JavaScript

## Uso

Incluido en configuraciones `typescript` y `all` cuando TypeScript está disponible.

*Documentación en construcción - Reglas completas próximamente*
