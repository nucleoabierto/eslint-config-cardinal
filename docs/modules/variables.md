# Módulo Variables

Reglas optimizadas para declaración y uso de variables en JavaScript/TypeScript.

## Características

- Promover uso de `const` sobre `let`
- Evitar reasignaciones innecesarias
- Mejorar claridad en el alcance de variables
- Prevenir errores comunes de scope

## Reglas Principales

```javascript
// Declaración preferente
'prefer-const': 'error'
'no-var': 'error'

// Inicialización
'init-declarations': 'error'
'no-shadow': 'error'
'no-shadow-restricted-names': 'error'

// Uso
'no-use-before-define': ['error', { functions: false }]
'no-delete-var': 'error'
'no-global-assign': 'error'

// Reasignación
'no-param-reassign': ['error', { props: false }]
'prefer-destructuring': ['error', {
  array: false,
  object: true,
}]
```

## Filosofía

Este módulo promueve variables que son:

- **Inmutables por defecto**: `const` como primera opción
- **Con alcance claro**: Evitar shadowing y confusiones
- **Bien declaradas**: Inicialización y uso predecible
- **Seguras**: Prevenir modificaciones accidentales

## Uso

Incluido en todas las configuraciones Cardinal como base de manejo de variables.
