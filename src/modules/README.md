# Estructura de Módulos Cardinal

## 🎯 Filosofía de Organización

La estructura de módulos sigue la filosofía del proyecto: **Modernidad con Disciplina, Calidad con Pragmatismo**. Cada
módulo tiene una responsabilidad clara y se organiza según la progresión `basic → recommended → all`.

## 📁 Estructura de Carpetas

```text
src/modules/
├── correctness/        Prevención de errores críticos
│   ├── errors.js       - Errores de sintaxis y runtime
│   ├── syntax.js       - Patrones peligrosos y obsoletos
│   └── variables.js    - Manejo seguro de variables
│
├── modern/             Modernización ES6+
│   └── es-features.js  - Características modernas de JavaScript
│
├── style/              Formato y estilo visual
│   ├── formatting.js   - Formato base (comillas, indentación, etc.)
│   └── formatting-strict.js - Formato estricto adicional
│
├── quality/            Calidad y mantenibilidad
│   ├── essential.js    - Calidad básica (para basic preset)
│   ├── recommended.js  - Calidad recomendada (para recommended preset)
│   ├── strict.js       - Calidad estricta (para all preset)
│   ├── comments.js     - Reglas de comentarios
│   ├── regex.js        - Reglas de expresiones regulares
│   └── plugins/        - Reglas específicas de plugins
│       ├── unicorn-essential.js
│       ├── unicorn-extended.js
│       ├── unicorn-complete.js
│       └── sonarjs-extended.js
│
├── security/           Seguridad y prevención de vulnerabilidades
│   ├── critical.js     - Seguridad crítica
│   ├── recommended.js  - Seguridad recomendada
│   └── plugins/        - Reglas específicas de plugins
│       ├── security-complete.js
│       └── sonarjs-security.js
│
├── ecosystem/          Integraciones con el ecosistema JS
│   ├── imports/        - Gestión de imports
│   │   ├── base.js
│   │   ├── extended.js
│   │   └── complete.js
│   ├── node/           - Reglas específicas de Node.js
│   │   ├── base.js
│   │   ├── extended.js
│   │   └── complete.js
│   ├── promises.js     - Manejo de promesas
│   └── react.js        - Reglas de React
│
├── typescript/         TypeScript específico
│   ├── base.js
│   ├── extended.js
│   ├── strict.js
│   └── helper.js
│
└── config/             Configuraciones especiales
    └── relaxed.js      - Ajustes de relajación de reglas
```

## 🔄 Niveles de Configuración

### **basic** (Minimalista)

Punto de partida para proyectos JavaScript modernos:

- `correctness/*` - Prevención de errores críticos
- `modern/es-features` - Modernización ES6+
- `style/formatting` - Formato básico
- `quality/essential` - Calidad esencial

### **recommended** (Equilibrado)

Preset por defecto que equilibra productividad y calidad:

- Todo de `basic` +
- `quality/recommended` - Calidad adicional
- `security/recommended` - Seguridad básica
- `ecosystem/imports/base` - Gestión de imports
- `ecosystem/node/base` - Reglas de Node.js
- `ecosystem/promises` - Manejo de promesas

### **all** (Completo)

Cobertura máxima para proyectos críticos:

- Todo de `recommended` +
- `quality/strict` - Calidad estricta
- `quality/plugins/*` - Todos los plugins de calidad
- `security/critical` - Seguridad crítica
- `security/plugins/*` - Todos los plugins de seguridad
- `ecosystem/*/extended` y `ecosystem/*/complete` - Cobertura completa
- `style/formatting-strict` - Formato estricto

## 📝 Nomenclatura

### Niveles de Severidad

- **essential**: Reglas básicas que todo proyecto debe tener
- **recommended**: Reglas adicionales recomendadas para la mayoría
- **strict**: Reglas estrictas para proyectos que requieren máxima calidad
- **critical**: Reglas críticas de seguridad

### Niveles de Cobertura (ecosystem)

- **base**: Reglas fundamentales
- **extended**: Reglas adicionales
- **complete**: Cobertura completa

### Organización por Plugin

Los módulos que usan plugins específicos se organizan en subcarpetas `plugins/`:

- `quality/plugins/` - Plugins de calidad (unicorn, sonarjs)
- `security/plugins/` - Plugins de seguridad

## 🎨 Principios de Diseño

### 1. Separación de Responsabilidades

- **correctness**: Solo errores que rompen código
- **modern**: Solo modernización ES6+
- **quality**: Solo métricas de calidad y mantenibilidad
- **security**: Solo vulnerabilidades y patrones inseguros
- **style**: Solo formato visual
- **ecosystem**: Solo integraciones externas

### 2. Progresión Clara

Cada nivel agrega disciplina sin romper lo anterior:

```text
basic → recommended → all
  ↓         ↓           ↓
esencial  equilibrado  completo
```

### 3. Modularidad

Cada módulo puede usarse independientemente o combinarse según necesidades.

### 4. Consistencia Terminológica

- `correctness` (no `core`) - Más descriptivo
- `security` (no `safety`) - Terminología estándar en seguridad
- `modern` (nuevo) - Separación clara de modernización

## 🔧 Uso

### Importar módulos individuales

```javascript
import correctnessErrors from './modules/correctness/errors.js'
import modernEsFeatures from './modules/modern/es-features.js'
import qualityEssential from './modules/quality/essential.js'
```

### Usar presets predefinidos

```javascript
import { basic, recommended, all } from '@nucleoabierto/eslint-config-cardinal'
```

## 📚 Documentación Adicional

Para más detalles sobre la filosofía del proyecto, consulta:

- `filosofia.md` - Filosofía completa del proyecto
- `docs/` - Documentación detallada de cada preset
