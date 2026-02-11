# Módulo Relaxed

Reglas flexibles para desarrollo pragmático y excepciones controladas.

## Características

- Flexibilidad para casos especiales del mundo real
- Excepciones justificadas a reglas estrictas
- Balance entre calidad y productividad
- Permitir patrones legítimos cuando son necesarios

## Reglas Principales

```javascript
// Flexibilidad en comparaciones
'eqeqeq': ['warn', 'always', { null: 'ignore' }]  // Permitir null == undefined

// Permitir ciertos patrones
'no-magic-numbers': 'off'  // Permitir números como 0, 1, -1
'max-len': 'off'          // Sin límite estricto de longitud de línea
'no-console': 'off'       // Permitir console.log para debugging

// Flexibilidad en estructuras
'one-var': 'off'          // Permitir múltiples declaraciones
'no-plusplus': 'off'      // Permitir ++ y --
'no-bitwise': 'off'       // Permitir operadores bit a bit cuando sea necesario

// Excepciones pragmáticas
'no-continue': 'off'      // Permitir continue en loops complejos
'no-param-reassign': ['warn', { props: false }]  // Permitir modificación de params
```

## Filosofía

Este módulo promueve código que es:

- **Pragmático**: Permitir soluciones prácticas cuando son necesarias
- **Flexible**: Adaptarse a requisitos del mundo real
- **Productivo**: No bloquear desarrollo con reglas demasiado estrictas
- **Justificado**: Cada excepción tiene una razón válida

## Uso

Incluido en todas las configuraciones Cardinal para proporcionar flexibilidad controlada.

*Documentación en construcción - Reglas completas próximamente*
