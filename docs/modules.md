# Módulos

Esta sección detalla cada módulo especializado disponible en ESLint Cardinal. Los módulos son bloques temáticos de reglas ESLint que se combinan para formar las configuraciones (presets).

## Módulos Disponibles

### [style](./modules/style.md) - Estilo Moderno
Reglas de formato y estilo consistentes con la filosofía Cardinal.

### [code-quality](./modules/code-quality.md) - Calidad de Código
Prácticas de modernización y calidad para JavaScript/TypeScript.

### [variables](./modules/variables.md) - Manejo de Variables
Reglas optimizadas para declaración y uso de variables.

### [best-practices](./modules/best-practices.md) - Mejores Prácticas
Convenciones y patrones recomendados para desarrollo moderno.

### [imports](./modules/imports.md) - Gestión de Imports
Reglas para importación y exportación de módulos.

### [promises](./modules/promises.md) - Manejo de Promesas
Mejores prácticas con promesas y código asíncrono.

### [node](./modules/node.md) - Optimización Node.js
Reglas específicas para entorno Node.js.

### [security](./modules/security.md) - Seguridad
Reglas de seguridad para prevenir vulnerabilidades.

### [react](./modules/react.md) - Componentes React
Reglas específicas para React, JSX y hooks.

### [typescript](./modules/typescript.md) - Tipado TypeScript
Reglas básicas para proyectos TypeScript.

### [typescript-advanced](./modules/typescript-advanced.md) - TypeScript Avanzado
Reglas avanzadas y type-aware para TypeScript.

### [relaxed](./modules/relaxed.md) - Flexibilidad Controlada
Reglas flexibles para desarrollo pragmático.

---

## Categorías de Módulos

### Módulos Base
Fundamentos esenciales presentes en casi todas las configuraciones:
- `style` - Formato y estilo
- `code-quality` - Calidad y modernización  
- `variables` - Manejo de variables

### Módulos de Prácticas
Mejores prácticas y convenciones modernas:
- `best-practices` - Patrones recomendados
- `imports` - Gestión de módulos
- `promises` - Código asíncrono

### Módulos Especializados
Funcionalidad específica por entorno o tecnología:
- `node` - Entorno Node.js
- `security` - Seguridad
- `react` - Componentes React
- `typescript` - Tipado básico
- `typescript-advanced` - Tipado avanzado

### Módulos de Flexibilidad
Reglas que permiten desarrollo pragmático:
- `relaxed` - Excepciones y flexibilidad

---

## Combinaciones Típicas

- **Basic**: `style` + `code-quality` + `variables` + `relaxed`
- **Recommended**: Basic + `best-practices` + `imports` + `promises` + `node`
- **TypeScript**: Recommended + `security` + `typescript`
- **All**: Recommended + `security` + `react` + `typescript` + `typescript-advanced`
