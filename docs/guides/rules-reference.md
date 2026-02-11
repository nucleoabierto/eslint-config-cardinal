# Índice de Reglas

> **Referencia completa de todas las reglas ESLint Cardinal**

Busca por nombre de regla, mensaje de error, o categoría.

## 🔍 Búsqueda Rápida

### Por Nombre de Regla

| Regla | Categoría | Presets que la incluyen | Severidad |
|-------|-----------|------------------------|-----------|
| [`semi`](#semi) | Estilo | Todos | Error |
| [`quotes`](#quotes) | Estilo | Todos | Error |
| [`comma-dangle`](#comma-dangle) | Estilo | Todos | Error |
| [`prefer-const`](#prefer-const) | Calidad | Recommended, All, React, TS | Error |
| [`no-var`](#no-var) | Calidad | Recommended, All, React, TS | Error |
| [`no-eval`](#no-eval) | Seguridad | Recommended, All, React, TS | Error |
| [`import-x/order`](#import-xorder) | Moderno | Recommended, All, React, TS | Error |
| [`@typescript-eslint/no-explicit-any`](#typescript-eslintno-explicit-any) | TypeScript | All, React, TS | Warn |
| [`react/jsx-key`](#reactjsx-key) | React | All, React | Error |

### Por Mensaje de Error

| Mensaje | Regla | Solución rápida |
|---------|-------|----------------|
| `Extra semicolon` | [`semi`](#semi) | Eliminar punto y coma |
| `Strings must use singlequote` | [`quotes`](#quotes) | Usar comillas simples |
| `'x' is never reassigned` | [`prefer-const`](#prefer-const) | Cambiar `let` por `const` |
| `Missing key prop` | [`react/jsx-key`](#reactjsx-key) | Añadir `key` único |
| `Any type is not recommended` | [`@typescript-eslint/no-explicit-any`](#typescript-eslintno-explicit-any) | Añadir tipo específico |

---

## 🎨 Reglas de Estilo

### semi

**Mensaje**: `Extra semicolon.`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#semi-never) | [Recommended](../presets/recommended#semi-never)

---

### quotes

**Mensaje**: `Strings must use singlequote.`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#quotes-single) | [Recommended](../presets/recommended#quotes-single)

---

### comma-dangle

**Mensaje**: `Missing trailing comma.`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#comma-dangle-always-multiline) | [Recommended](../presets/recommended#comma-dangle-always-multiline)

---

### indent

**Mensaje**: `Expected indentation of 2 spaces but found 4.`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#indent-2) | [Recommended](../presets/recommended#indent-2)

---

### comma-spacing

**Mensaje**: `A space is required after ','`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#comma-spacing-before-false-after-true) | [Recommended](../presets/recommended#comma-spacing-before-false-after-true)

---

### key-spacing

**Mensaje**: `Missing space after key ':'`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#key-spacing-before-false-after-true) | [Recommended](../presets/recommended#key-spacing-before-false-after-true)

---

### object-curly-spacing

**Mensaje**: `A space is required after '{'`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#object-curly-spacing-always) | [Recommended](../presets/recommended#object-curly-spacing-always)

---

### array-bracket-spacing

**Mensaje**: `There should be no space after '['`  
**Categoría**: Estilo  
**Presets**: Todos  
**Severidad**: Error

**Ver en contexto**: [Basic](../presets/basic#array-bracket-spacing-never) | [Recommended](../presets/recommended#array-bracket-spacing-never)

---

## 🔍 Reglas de Calidad

### prefer-const

**Mensaje**: `'x' is never reassigned. Use 'const' instead`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#prefer-const-error)

---

### no-var

**Mensaje**: `Unexpected var, use let or const instead`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-var-error)

---

### prefer-destructuring

**Mensaje**: `Use object destructuring.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#prefer-destructuring-error)

---

### prefer-template

**Mensaje**: `Unexpected string concatenation.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#prefer-template-error)

---

### prefer-arrow-callback

**Mensaje**: `Unexpected function expression.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#prefer-arrow-callback-error)

---

### arrow-spacing

**Mensaje**: `Missing space before arrow`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#arrow-spacing-before-true-after-true)

---

### object-shorthand

**Mensaje**: `Expected shorthand property assignment.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#object-shorthand-always)

---

### no-eval

**Mensaje**: `eval can be harmful.`  
**Categoría**: Seguridad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-eval-error)

---

### no-implied-eval

**Mensaje**: `Implied eval. Consider passing a function instead of a string.`  
**Categoría**: Seguridad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-implied-eval-error)

---

### no-new-func

**Mensaje**: `The Function constructor is eval.`  
**Categoría**: Seguridad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-new-func-error)

---

### no-script-url

**Mensaje**: `Script URLs are a form of eval.`  
**Categoría**: Seguridad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-script-url-error)

---

### eqeqeq

**Mensaje**: `Expected '!==' and instead saw '!='`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#eqeqeq-always-null-ignore)

---

### no-shadow-restricted-names

**Mensaje**: `Shadowing of global property 'name'.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-shadow-restricted-names-error)

---

### no-void

**Mensaje**: `Unexpected void operator.`  
**Categoría**: Calidad  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-void-error)

---

## 🚀 Reglas Modernas

### import-x/order

**Mensaje**: `import/order rule`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#import-xorder-error)

---

### import-x/no-duplicates

**Mensaje**: `Duplicate import of 'module'.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#import-xno-duplicates-error)

---

### import-x/no-unresolved

**Mensaje**: `Unable to resolve path to module 'module'.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#import-xno-unresolved-error)

---

### import-x/no-cycle

**Mensaje**: `Dependency cycle detected.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#import-xno-cycle-error)

---

### import-x/newline-after-import

**Mensaje**: `Expected newline after import statements.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#import-xnewline-after-import-error)

---

### always-return

**Mensaje**: `Promise returned from function must be handled.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#always-return-error)

---

### no-return-in-finally

**Mensaje**: `Cannot use return statement in finally block.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-return-in-finally-error)

---

### prefer-promise-reject-errors

**Mensaje**: `Expected to throw a promise rejection error.`  
**Categoría**: Moderno  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#prefer-promise-reject-errors-error)

---

## 📝 Reglas de Variables

### camelcase

**Mensaje**: `Identifier 'user_name' is not in camel case.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#camelcase-error-allow-unsafe)

---

### no-unused-vars

**Mensaje**: `'x' is defined but never used.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-unused-vars-error-args-none-caughterrors-none)

---

### no-use-before-define

**Mensaje**: `'x' was used before it was defined.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-use-before-define-error-functions-false-classes-false)

---

### no-undef

**Mensaje**: `'x' is not defined.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-undef-error)

---

### no-undef-init

**Mensaje**: `It's not necessary to initialize 'x' to undefined.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-undef-init-error)

---

### no-delete-var

**Mensaje**: `Variables should not be deleted.`  
**Categoría**: Variables  
**Presets**: Recommended, All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [Recommended](../presets/recommended#no-delete-var-error)

---

## 🛡️ Reglas de Seguridad y Flexibilidad

### no-console

**Mensaje**: `Unexpected console statement.`  
**Categoría**: Seguridad  
**Presets**: All (warn), otros (off)  
**Severidad**: Warn/Error

**Ver en contexto**: [All](../presets/all#no-console-warn)

---

### no-debugger

**Mensaje**: `Unexpected 'debugger' statement.`  
**Categoría**: Seguridad  
**Presets**: All (error), otros (off)  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-debugger-error)

---

### no-alert

**Mensaje**: `Unexpected alert.`  
**Categoría**: Seguridad  
**Presets**: All (error), otros (off)  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-alert-error)

---

## 📘 Reglas de TypeScript

### @typescript-eslint/no-explicit-any

**Mensaje**: `Any type is not recommended.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Warn

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintno-explicit-any-warn)

---

### @typescript-eslint/prefer-nullish-coalescing

**Mensaje**: `Prefer nullish coalescing over logical OR.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintprefer-nullish-coalescing-error)

---

### @typescript-eslint/prefer-optional-chain

**Mensaje**: `Prefer optional chain over logical expressions.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintprefer-optional-chain-error)

---

### @typescript-eslint/no-unused-vars

**Mensaje**: `'x' is declared but its value is never read.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintno-unused-vars-error)

---

### @typescript-eslint/no-non-null-assertion

**Mensaje**: `Non-null assertion is not recommended.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Warn

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintno-non-null-assertion-warn)

---

### @typescript-eslint/prefer-as-const

**Mensaje**: `Prefer 'as const' over literal type.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintprefer-as-const-error)

---

### @typescript-eslint/no-inferrable-types

**Mensaje**: `Type does not need to be declared.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintno-inferrable-types-error)

---

### @typescript-eslint/ban-ts-comment

**Mensaje**: `TS-comment is not recommended.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintban-ts-comment-error)

---

### @typescript-eslint/no-empty-function

**Mensaje**: `Empty function is not recommended.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Warn

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintno-empty-function-warn)

---

### @typescript-eslint/prefer-readonly

**Mensaje**: `Prefer readonly for immutable properties.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintprefer-readonly-error)

---

### @typescript-eslint/prefer-function-type

**Mensaje**: `Prefer function type over interface with call signature.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintprefer-function-type-error)

---

### @typescript-eslint/consistent-type-definitions

**Mensaje**: `Use consistent type definitions.`  
**Categoría**: TypeScript  
**Presets**: All, React, TypeScript  
**Severidad**: Error

**Ver en contexto**: [TypeScript](../presets/typescript#typescript-eslintconsistent-type-definitions-error)

---

## ⚛️ Reglas de React

### react/jsx-uses-react

**Mensaje**: `React is used but not imported.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Off

**Ver en contexto**: [React](../presets/react#reactjsx-uses-react-off)

---

### react/react-in-jsx-scope

**Mensaje**: `'React' must be in scope when using JSX.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Off

**Ver en contexto**: [React](../presets/react#reactreact-in-jsx-scope-off)

---

### react/prop-types

**Mensaje**: `Component should have PropTypes.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Off

**Ver en contexto**: [React](../presets/react#reactprop-types-off)

---

### react/jsx-uses-vars

**Mensaje**: `Component is not used.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactjsx-uses-vars-error)

---

### react/jsx-key

**Mensaje**: `Missing key prop for element.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactjsx-key-error)

---

### react/jsx-no-duplicate-props

**Mensaje**: `Duplicate prop 'type'.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactjsx-no-duplicate-props-error)

---

### react/jsx-no-undef

**Mensaje**: `Component is not defined.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactjsx-no-undef-error)

---

### react/jsx-pascal-case

**Mensaje**: `Component name should be PascalCase.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactjsx-pascal-case-error)

---

### react/no-children-prop

**Mensaje**: `Invalid children prop.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactno-children-prop-error)

---

### react/no-danger-with-children

**Mensaje**: `Danger with children.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactno-danger-with-children-error)

---

### react/no-unescaped-entities

**Mensaje**: `Unescaped entity.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactno-unescaped-entities-error)

---

### react/self-closing-comp

**Mensaje**: `Component should be written as self-closing.`  
**Categoría**: React  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#reactself-closing-comp-error)

---

## 🔧 Reglas de Node.js (Solo All)

### callback-return

**Mensaje**: `Expected return statement to be inside a callback function.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#callback-return-error)

---

### no-process-exit

**Mensaje**: `Unexpected process.exit().`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-process-exit-error)

---

### no-buffer-constructor

**Mensaje**: `The Buffer() constructor is deprecated.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-buffer-constructor-error)

---

### no-mixed-requires

**Mensaje**: `Do not mix 'require' and other import statements.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-mixed-requires-error)

---

### no-sync

**Mensaje**: `Unexpected sync method.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#no-sync-error)

---

### global-require

**Mensaje**: `Require statement not inside a function.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Off

**Ver en contexto**: [All](../presets/all#global-require-off)

---

### handle-callback-err

**Mensaje**: `Expected error to be handled.`  
**Categoría**: Node.js  
**Presets**: All  
**Severidad**: Error

**Ver en contexto**: [All](../presets/all#handle-callback-err-error)

---

## 🎯 Hooks de React (React Presets)

### react-hooks/rules-of-hooks

**Mensaje**: `React Hook "useState" is called conditionally.`  
**Categoría**: React Hooks  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#react-hooksrules-of-hooks-error)

---

### react-hooks/exhaustive-deps

**Mensaje**: `React Hook useEffect has missing dependencies.`  
**Categoría**: React Hooks  
**Presets**: All, React  
**Severidad**: Error

**Ver en contexto**: [React](../presets/react#react-hooksexhaustive-deps-error)

---

## 📊 Resumen por Preset

### Basic (19 reglas)
- 8 reglas de estilo
- 6 reglas de calidad  
- 5 reglas de variables

### Recommended (47 reglas)
- Todas las reglas de Basic
- 12 reglas de calidad adicionales
- 8 reglas modernas
- 13 reglas de seguridad y flexibilidad

### All (89 reglas)
- Todas las reglas de Recommended
- 15 reglas de seguridad crítica adicionales
- 7 reglas de Node.js
- 12 reglas de TypeScript avanzado
- 12 reglas de React

### React (59 reglas)
- Todas las reglas de Recommended
- 12 reglas específicas de React
- 2 reglas de React Hooks

### TypeScript (59 reglas)
- Todas las reglas de Recommended
- 12 reglas específicas de TypeScript

---

*¿Necesitas [ver presets completos](../presets/) o [guía de personalización](./customization)?*
