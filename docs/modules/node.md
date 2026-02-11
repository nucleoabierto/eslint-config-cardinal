# Módulo Node

Reglas específicas para entorno de ejecución Node.js y APIs del sistema.

## Características

- Optimización para APIs nativas de Node.js
- Prevención de patrones problemáticos en servidor
- Uso correcto de módulos CommonJS/ESM
- Manejo eficiente de streams y buffers

## Reglas Principales

```javascript
// Módulos y exports
'node/no-unsupported-features/es-syntax': 'error'
'node/no-missing-import': 'error'
'node/no-extraneous-import': 'error'

// APIs de Node.js
'node/no-deprecated-api': 'error'
'node/prefer-global/buffer': 'error'
'node/prefer-global/process': 'error'

// Callbacks y errores
'node/no-callback-literal': 'error'
'node/exports-style': ['error', 'module.exports']

// FileSystem
'node/no-path-concat': 'error'
'node/prefer-promises/fs': 'error'

// Consola y debugging
'no-console': 'off'  // Permitido en Node.js
'no-debugger': 'error'
```

## Filosofía

Este módulo promueve código Node.js que es:

- **Nativo**: Uso apropiado de APIs específicas de Node.js
- **Moderno**: Preferencia por promesas sobre callbacks
- **Seguro**: Evitar APIs obsoletas o problemáticas
- **Eficiente**: Patrones optimizados para entorno servidor

## Uso

Incluido en configuraciones `recommended` y superiores para proyectos Node.js.

*Documentación en construcción - Reglas completas próximamente*
