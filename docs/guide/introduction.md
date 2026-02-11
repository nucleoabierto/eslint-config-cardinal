---
title: 'Introducción a ESLint Cardinal'
description: 'Descubre por qué ESLint Cardinal es la configuración definitiva para proyectos JavaScript modernos'
---

## ¿Qué es ESLint Cardinal?

> **TL;DR**: ESLint Cardinal es una configuración ESLint que implementa el principio de
**Balance Inteligente**: ser estricto donde importa para garantizar calidad,
pero flexible donde no para permitir desarrollo pragmático y productivo.

## ¿Por Qué Elegir ESLint Cardinal?

### El Problema que Resolvemos

**El dilema del desarrollador**: Configuraciones ESLint demasiado estrictas que rompen código funcional, o demasiado
laxas que permiten caos total.

```js
// ¿Cuál de estas configuraciones usar?
module.exports = {
  // Opción A: Demasiado estricta
  rules: {
    'no-magic-numbers': 'error',      // No puedo usar 0, 1, -1
    'max-lines-per-function': 20,     // Funciones útiles se rompen
    'complexity': [2, 10],           // Algoritmos complejos prohibidos
  }
}

// Opción B: Demasiado laxa
module.exports = {
  rules: {
    // Sin reglas = caos total
  }
}
```

**La solución Cardinal**: Balance Inteligente - estricto donde importa para calidad, flexible donde no para productividad.

### Nuestra Filosofía

| Enfoque Tradicional                                | ESLint Cardinal                                    |
|----------------------------------------------------|----------------------------------------------------|
| 📦 **Un bloque gigante** con 200+ reglas mezcladas | 🧩 **5 bloques temáticos** con propósito claro     |
| 🔍 **Difícil de entender** qué hace cada regla     | 🎯 **Transparencia radical** con justificaciones   |
| 🛠️ **Imposible de personalizar** sin romper algo   | ⚙️ **Modularidad controlada** para ajustes precisos|
| 📚 **Documentación dispersa** en múltiples fuentes | 📖 **Documentación integrada** con ejemplos reales |

---

## Principios Fundamentales

### 🎯 Balance Inteligente

- **Estricto donde importa**: Calidad, seguridad, mejores prácticas
- **Flexible donde no**: Límites artificiales, operaciones legítimas

### 🧩 Modularidad Temática

Cada bloque tiene un propósito claro y definido:

- **Style**: Formato y convenciones
- **Code Quality**: Calidad básica del código
- **Best Practices**: Patrones seguros y eficientes
- **Imports**: Gestión de dependencias
- **Node.js**: Optimización para backend

### 🔍 Transparencia Radical

Todas las decisiones están documentadas con justificaciones claras. No hay "magia" oculta.

---

## ¿Para Quién es ESLint Cardinal?

| Perfil                              | Configuración Recomendada    | Razón                                      |
|-------------------------------------|------------------------------|--------------------------------------------|
| **Principiantes**                   | `basic`                      | Fundamentos sin complejidad                |
| **Desarrolladores Individuales**    | `recommended`                | Balance perfecto para proyectos personales |
| **Equipos Pequeños (3-5 personas)** | `recommended` → `typescript` | Colaboración con type safety               |
| **Equipos Grandes (10+ personas)**  | `typescript` → `all`         | Máxima consistencia y calidad              |
| **Aplicaciones Críticas**           | `all`                        | Estándar más alto de seguridad y calidad   |

---

## ¿Listo para Empezar?

Ahora que entiendes el "porqué" detrás de ESLint Cardinal, es hora de ver el "cómo".

**Siguiente paso**: [Instalación Rápida](/guide/getting-started) - Configura ESLint Cardinal en tu proyecto en menos de
2 minutos.

---

- **[Filosofía Profunda](/guide/philosophy)**: Entiende el porqué detrás de cada decisión
- **[Ejemplos Reales](/examples/complete-guide)**: Proyectos completos con Cardinal

> 💡 **Consejo de Cardinal**: Empieza con `recommended` y ajusta según necesidad.
> El 80% de los proyectos no necesitan personalización adicional.

**[Comenzar Instalación](/guide/getting-started)**
