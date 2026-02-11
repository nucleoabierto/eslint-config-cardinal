# Módulo React

Reglas específicas para React, JSX, hooks modernos y mejores prácticas de componentes.

## Características

- Reglas para componentes funcionales y clases
- Mejores prácticas con hooks modernos
- Accesibilidad en componentes JSX
- Optimización de renderizado

## Reglas Principales

```javascript
// Componentes y JSX
'react/jsx-uses-react': 'error'
'react/jsx-uses-vars': 'error'
'react/jsx-key': 'error'
'react/jsx-no-duplicate-props': 'error'

// Hooks
'react-hooks/rules-of-hooks': 'error'
'react-hooks/exhaustive-deps': 'warn'

// Accesibilidad
'jsx-a11y/alt-text': 'error'
'jsx-a11y/anchor-has-content': 'error'
'jsx-a11y/click-events-have-key-events': 'error'

// Buenas prácticas
'react/prop-types': 'off'  // TypeScript maneja esto
'react/display-name': 'error'
'react/no-unescaped-entities': 'error'

// Rendimiento
'react/jsx-no-bind': 'warn'
'react/jsx-no-literals': 'warn'
```

## Filosofía

Este módulo promueve componentes React que son:

- **Modernos**: Uso de hooks y patrones actuales
- **Accesibles**: Cumplen con estándares a11y
- **Eficientes**: Optimizados para renderizado
- **Mantenibles**: Código claro y predecible

## Uso

Incluido opcionalmente en configuraciones `all` cuando React está disponible.

*Documentación en construcción - Reglas completas próximamente*
