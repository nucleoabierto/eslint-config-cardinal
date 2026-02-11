# Módulo TypeScript Advanced

Reglas avanzadas y type-aware para análisis semántico profundo en TypeScript.

## Características

- Análisis type-aware con información de tipos
- Detección de problemas semánticos complejos
- Optimización de rendimiento de tipado
- Reglas avanzadas de arquitectura de tipos

## Reglas Principales

```javascript
// Análisis type-aware
'@typescript-eslint/no-floating-promises': 'error'
'@typescript-eslint/await-thenable': 'error'
'@typescript-eslint/no-misused-promises': 'error'

// Tipado avanzado
'@typescript-eslint/prefer-readonly': 'error'
'@typescript-eslint/prefer-as-const': 'error'
'@typescript-eslint/prefer-includes': 'error'

// Genéricos y utilidades
'@typescript-eslint/no-unnecessary-type-arguments': 'error'
'@typescript-eslint/prefer-nullish-coalescing': 'error'
'@typescript-eslint/prefer-optional-chain': 'error'

// Arquitectura de tipos
'@typescript-eslint/consistent-generic-constructors': 'error'
'@typescript-eslint/consistent-indexed-object-style': 'error'

// Performance
'@typescript-eslint/no-unnecessary-type-assertion': 'error'
'@typescript-eslint/no-unnecessary-condition': 'warn'
```

## Filosofía

Este módulo promueve código TypeScript que es:

- **Type-aware**: Aprovecha información de tipos completa
- **Semántico**: Detecta problemas lógicos de tipado
- **Optimizado**: Patrones eficientes de tipos
- **Arquitectónico**: Estructura de tipos mantenible

## Uso

Incluido en configuración `all` cuando TypeScript está disponible para análisis avanzado.

*Documentación en construcción - Reglas completas próximamente*
