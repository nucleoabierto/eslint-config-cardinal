# Módulo Promises

Mejores prácticas para manejo de promesas y código asíncrono en JavaScript/TypeScript.

## Características

- Prevención de anti-patrones comunes con promesas
- Promoción de async/await moderno
- Manejo correcto de errores asíncronos
- Optimización de flujos asíncronos

## Reglas Principales

```javascript
// Preferencias modernas
'prefer-promise-reject-errors': 'error'
'prefer-async-callback': 'error'

// Manejo de errores
'no-return-await': 'error'
'no-async-promise-executor': 'error'
'no-promise-executor-return': 'error'

// Anti-patrones
'no-await-in-loop': 'warn'
'no-promise-in-callback': 'error'
'no-native-reassign': 'error'

// Constructores
'no-new': 'error'
'no-new-func': 'error'
'no-new-wrappers': 'error'

// Control de flujo
'no-unreachable': 'error'
'require-await': 'error'
```

## Filosofía

Este módulo promueve código asíncrono que es:

- **Moderno**: Uso de async/await cuando es apropiado
- **Seguro**: Manejo correcto de errores y rechazos
- **Eficiente**: Evitar anti-patrones de rendimiento
- **Mantenible**: Flujos asíncronos claros y predecibles

## Uso

Incluido en configuraciones `recommended` y superiores para manejo profesional de código asíncrono.

*Documentación en construcción - Reglas completas próximamente*
