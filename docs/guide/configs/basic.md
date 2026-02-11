# Configuraciones Básicas

## 📦 **basic** - Fundamentos Limpios

Para proyectos JavaScript que necesitan reglas esenciales sin complejidad.

```js
// eslint.config.js
import basic from '@nucleoabierto/eslint-config-cardinal/basic'

export default [...basic]
```text

**Bloques Incluidos**:

- ✅ **style** - Estilo moderno consistente
- ✅ **code-quality** - Calidad exigente  
- ✅ **variables** - Nomenclatura inteligente
- ✅ **relaxed** - Flexibilidad transparente

**Ideal para**:

- Scripts y utilidades pequeñas
- Proyectos de aprendizaje
- Configuración mínima pero moderna
- Prototipos rápidos

**Reglas Clave**:

```js
// Estilo moderno
semi: 'never' // Sin semicolons
quotes: ['error', 'single'] // Comillas simples

// Calidad básica
'prefer-const': 'error' // Usar const cuando sea posible
'no-var': 'error' // Prohibir var

// Flexibilidad
'max-len': 'off' // Sin límite de longitud
'complexity': 'off' // Sin límite de complejidad
```text

---

## ⭐ **recommended** - Balance Inteligente *Por Defecto*

La configuración completa para la mayoría de proyectos. **Recomendada para la mayoría de casos de uso.**

```js
// eslint.config.js
import recommended from '@nucleoabierto/eslint-config-cardinal/recommended'

export default [...recommended]
```text

**Bloques Incluidos**:

- ✅ Todo **basic** +
- ✅ **best-practices** - Seguridad pragmática
- ✅ **imports** - Organización moderna
- ✅ **node.js** - Robustez server-side
- ✅ **promises** - Asincronía segura

**Ideal para**:

- **Aplicaciones Node.js**
- **Bibliotecas JavaScript**
- **Proyectos web frontend**
- **La mayoría de los proyectos profesionales**

**Reglas Adicionales**:

```js
// Best practices
'no-eval': 'error' // Prevenir code injection
'no-implied-eval': 'error' // Prevenir eval implícito
'eqeqeq': ['error', 'always', { null: 'ignore' }] // === excepto null

// Imports
'import-x/order': 'error' // Ordenamiento estricto
'import-x/no-duplicates': 'error' // Sin imports duplicados

// Node.js
'callback-return': 'error' // Forzar callback(err, result)
'no-process-exit': 'error' // Prevenir exits inesperados

// Promises
'always-return': 'error' // Siempre retornar en promesas
'no-return-in-finally': 'error' // Prevenir efectos inesperados
```text

---

## 🎯 ¿Cuál elegir?

### Usa **basic** si

- Proyectos pequeños y simples
- Scripts de utilidad
- Aprendiendo JavaScript
- Prototipos rápidos

### Usa **recommended** si

- **La mayoría de los proyectos** ⭐
- Aplicaciones Node.js
- Bibliotecas JavaScript
- Proyectos web frontend
- Equipos colaborativos

---

## 📊 Comparación Rápida

| Configuración   | Bloques | Reglas ~ | Uso Ideal                   | Complejidad |
|-----------------|---------|----------|-----------------------------|-------------|
| **basic**       | 4       | ~50      | Scripts simples             | 🟢 Baja     |
| **recommended** | 8       | ~120     | **La mayoría de proyectos** | 🟡 Media    |

---

## 🔄 Evolución

```js
// Fase 1: Inicio simple
export default [...basic]

// Fase 2: Proyecto crece
export default [...recommended]
```text

¿Listo para [configuraciones avanzadas](./advanced.md)?
