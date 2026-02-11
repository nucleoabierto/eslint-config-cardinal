# Módulo Security

Reglas de seguridad para prevenir vulnerabilidades y patrones inseguros en JavaScript/TypeScript.

## Características

- Prevención de vulnerabilidades comunes
- Detección de patrones inseguros
- Promoción de prácticas seguras
- Validación de entrada y salida

## Reglas Principales

```javascript
// Inyección de código
'no-eval': 'error'
'no-implied-eval': 'error'
'no-new-func': 'error'
'no-script-url': 'error'

// Seguridad de datos
'no-unsafe-negation': 'error'
'no-unsafe-optional-chaining': 'error'
'no-unsafe-finally': 'error'

// Objetos globales peligrosos
'no-global-assign': 'error'
'no-implicit-globals': 'error'
'no-implicit-coercion': 'warn'

// Prototipos y propiedades
'no-extend-native': 'error'
'no-proto': 'error'
'no-iterator': 'error'

// Validación
'guard-for-in': 'error'
'no-void': 'error'
```

## Filosofía

Este módulo promueve código que es:

- **Seguro**: Prevenir vulnerabilidades conocidas
- **Validado**: Verificación de entradas y salidas
- **Controlado**: Uso seguro de APIs peligrosas
- **Robusto**: Resistente a ataques comunes

## Uso

Incluido en configuraciones `typescript` y `all` para proyectos que requieren seguridad adicional.

*Documentación en construcción - Reglas completas próximamente*
