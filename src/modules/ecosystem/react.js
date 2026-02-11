/**
 * @module cardinal/react
 * @summary Configuración React con soporte opcional para Hooks y accesibilidad.
 * @remarks Detecta automáticamente la disponibilidad de `eslint-plugin-react`,
 * `eslint-plugin-react-hooks` y `eslint-plugin-jsx-a11y` activando reglas completas
 * cuando existen, y provee un fallback seguro cuando no.
 */

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Constants to avoid duplication
const STYLISTIC_CONFIG = {
  lineAligned: 'line-aligned',
  parensNewLine: 'parens-new-line',
}

let reactPlugin
let reactHooksPlugin
let jsxA11yPlugin
let stylistic

// Carga síncrona usando createRequire
try {
  reactPlugin = require('eslint-plugin-react')
  reactHooksPlugin = require('eslint-plugin-react-hooks')
  jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
  stylistic = require('@stylistic/eslint-plugin')

  // Plugins React cargados correctamente.
} catch {
  // eslint-disable-next-line no-console
  console.warn('eslint-plugin-react, eslint-plugin-react-hooks, o eslint-plugin-jsx-a11y no están instalados. Las reglas React estarán desactivadas.')
}

/**
 * @summary Configuración React completa cuando los plugins necesarios están presentes.
 * @returns {import('eslint').Linter.Config | { name: string, files: string[], rules: object }}
 * Config cuando los plugins existen o fallback mínimo en caso contrario.
 */
export default reactPlugin && reactHooksPlugin && jsxA11yPlugin
  ? {
    name: 'cardinal/react',
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      /*
       * React rules - siguiendo filosofía de balance inteligente
       * No necesario en React 17+ (transformación automática)
       */
      'react/jsx-uses-react': 'off',
      // No necesario en React 17+ (transformación automática)
      'react/react-in-jsx-scope': 'off',
      // Prevenir variables JSX no utilizadas
      'react/jsx-uses-vars': 'error',
      // Forzar key en listas JSX
      'react/jsx-key': 'error',
      // Evitar props duplicadas
      'react/jsx-no-duplicate-props': 'error',
      // Prevenir variables no declaradas en JSX
      'react/jsx-no-undef': 'error',
      // Forzar PascalCase en componentes
      'react/jsx-pascal-case': 'error',
      // Evitar children prop en componentes
      'react/no-children-prop': 'error',
      // Prevenir danger con children
      'react/no-danger-with-children': 'error',
      // Evitar APIs deprecadas
      'react/no-deprecated': 'error',
      // Prevenir mutación directa de estado
      'react/no-direct-mutation-state': 'error',
      // Evitar findDOMNode (obsoleto)
      'react/no-find-dom-node': 'error',
      // Evitar isMounted (anti-pattern)
      'react/no-is-mounted': 'error',
      // Evitar return de render
      'react/no-render-return-value': 'error',
      // Evitar string refs (obsoleto)
      'react/no-string-refs': 'error',
      // Prevenir entidades HTML sin escape
      'react/no-unescaped-entities': 'error',
      // Evitar propiedades desconocidas
      'react/no-unknown-property': 'error',
      // TypeScript se encarga de esto
      'react/prop-types': 'off',
      // Preferir <>...</> para fragments
      'react/jsx-fragments': ['error', 'syntax'],
      // Evitar fragments innecesarios
      'react/jsx-no-useless-fragment': 'error',
      // Evitar llaves innecesarias
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      // Componentes auto-cerrados cuando es posible
      'react/self-closing-comp': 'error',
      // No forzar boolean attributes
      'react/jsx-boolean-value': ['error', 'never'],
      // Alineación de bracket de cierre
      'react/jsx-closing-bracket-location': ['error', STYLISTIC_CONFIG.lineAligned],
      // Ubicación de tag de cierre
      'react/jsx-closing-tag-location': 'error',
      // Nueva línea para primera prop en multiline
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      // Indentación de props consistente
      'react/jsx-indent-props': ['error', 2],
      // Máximo de props por línea para legibilidad
      'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
      // Permitido por pragmatismo
      'react/jsx-no-bind': 'off',
      // Permitido por pragmatismo
      'react/jsx-no-literals': 'off',
      // Flexible en nombres de handlers
      'react/jsx-handler-names': 'off',
      // Forzar wrapping en multiline
      'react/jsx-wrap-multilines': 'error',

      // Reglas React adicionales para mejorar calidad y seguridad
      'react/boolean-prop-naming': 'off',
      'react/button-has-type': 'error',
      'react/checked-requires-onchange-or-readonly': 'error',
      'react/default-props-match-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
      'react/forbid-elements': 'off',
      'react/forbid-foreign-prop-types': 'off',
      'react/forbid-prop-types': 'off',
      'react/forward-ref-uses-ref': 'error',
      'react/function-component-definition': 'off',
      'react/hook-use-state': 'error',
      'react/iframe-missing-sandbox': 'error',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-max-depth': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-props-no-spread-multi': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/no-invalid-html-attribute': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-adjacent-inline-elements': 'error',
      'react/no-array-index-key': 'error',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-danger': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-multi-comp': 'off',
      'react/no-namespace': 'error',
      'react/no-set-state': 'off',
      'react/no-redundant-should-component-update': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unsafe': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-class-component-methods': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/no-object-type-as-default-prop': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': 'off',
      'react/prefer-exact-props': 'off',
      'react/prefer-read-only-props': 'error',
      'react/prefer-stateless-function': 'off',
      'react/require-default-props': 'off',
      'react/require-optimization': 'off',
      'react/require-render-return': 'error',
      'react/sort-comp': 'off',
      'react/sort-default-props': 'off',
      'react/sort-prop-types': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',

      /*
       * React Hooks rules
       * Forzar reglas de Hooks
       */
      'react-hooks/rules-of-hooks': 'error',
      // Advertir sobre dependencias (flexibilidad)
      'react-hooks/exhaustive-deps': 'warn',

      // Reglas adicionales de React Hooks
      'react-hooks/hooks': 'error',
      'react-hooks/capitalized-calls': 'error',
      'react-hooks/static-components': 'error',
      'react-hooks/use-memo': 'error',
      'react-hooks/void-use-memo': 'error',
      'react-hooks/component-hook-factories': 'error',
      'react-hooks/preserve-manual-memoization': 'error',
      'react-hooks/incompatible-library': 'error',
      'react-hooks/immutability': 'error',
      'react-hooks/globals': 'error',
      'react-hooks/refs': 'error',
      'react-hooks/memoized-effect-dependencies': 'error',
      'react-hooks/set-state-in-effect': 'error',
      'react-hooks/no-deriving-state-in-effects': 'error',
      'react-hooks/error-boundaries': 'error',
      'react-hooks/purity': 'error',
      'react-hooks/set-state-in-render': 'error',
      'react-hooks/invariant': 'error',
      'react-hooks/todo': 'error',
      'react-hooks/syntax': 'error',
      'react-hooks/unsupported-syntax': 'error',
      'react-hooks/config': 'error',
      'react-hooks/gating': 'error',
      'react-hooks/rule-suppression': 'error',
      'react-hooks/automatic-effect-dependencies': 'error',
      'react-hooks/fire': 'error',
      'react-hooks/fbt': 'error',

      // Accessibility rules (nivel warn para no ser restrictivo)
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/html-has-lang': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-access-key': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'warn',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'jsx-a11y/scope': 'warn',
      'jsx-a11y/tabindex-no-positive': 'warn',

      // Reglas adicionales de accesibilidad
      'jsx-a11y/anchor-ambiguous-text': 'warn',
      'jsx-a11y/autocomplete-valid': 'warn',
      'jsx-a11y/control-has-associated-label': 'warn',
      'jsx-a11y/iframe-has-title': 'warn',
      'jsx-a11y/lang': 'warn',
      'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/prefer-tag-over-role': 'warn',

      /*
       * === STYLISTIC JSX RULES ===
       * Espaciado entre elementos hijo: mejora legibilidad en componentes anidados.
       */
      '@stylistic/jsx-child-element-spacing': ['error', 'never'],
      // Ubicación de bracket de cierre: consistencia con configuración React existente.
      '@stylistic/jsx-closing-bracket-location': ['error', STYLISTIC_CONFIG.lineAligned],
      // Ubicación de tag de cierre: mejora alineación visual.
      '@stylistic/jsx-closing-tag-location': ['error', STYLISTIC_CONFIG.lineAligned],
      // Presencia de llaves curly: consistencia con configuración React existente.
      '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      // Newline en curly braces: mejora legibilidad en expresiones complejas.
      '@stylistic/jsx-curly-newline': ['error', { multiline: true, consistent: true }],
      // Espaciado en curly braces: reduce ruido visual en JSX.
      '@stylistic/jsx-curly-spacing': ['error', 'never'],
      // Espaciado en equals: mantiene consistencia visual.

      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      // Newline en primera prop: mejora legibilidad en componentes con múltiples props.
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      // Newline en llamadas a función: mejora legibilidad en JSX complejo.

      '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

      /*
       * Indentación JSX: manejada por @stylistic/indent en style/formatting.js
       * Indentación de props: consistencia con configuración React existente.
       */
      '@stylistic/jsx-indent-props': ['error', 2],
      // Máximo de props por línea: mejora legibilidad en componentes densos.
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
      // Newline en JSX: mejora separación visual en componentes complejos.
      '@stylistic/jsx-newline': ['error', { preventMultiline: false }],
      // Una expresión por línea: mejora legibilidad y debugging.
      '@stylistic/jsx-one-expression-per-line': ['error', 'allow'],
      // Pascal case en componentes: consistencia con configuración React existente.
      '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],

      /*
       * Sin espacios múltiples en props: manejado por @stylistic/no-multi-spaces
       * Comillas en JSX: consistencia con comillas simples del proyecto.
       */
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      // Componentes self-closing: consistencia con configuración React existente.
      '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],

      /**
       * Orden de props: manejado por sort-keys en correctness/syntax.js (flexibilidad)
       * Espaciado en tags: mejora legibilidad visual.
       */
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterSelfClosing: 'always',
        },
      ],
      // Wrapping de multilíneas: consistencia con configuración React existente.
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: STYLISTIC_CONFIG.parensNewLine,
          assignment: STYLISTIC_CONFIG.parensNewLine,
          return: STYLISTIC_CONFIG.parensNewLine,
          arrow: STYLISTIC_CONFIG.parensNewLine,
          condition: STYLISTIC_CONFIG.parensNewLine,
          logical: STYLISTIC_CONFIG.parensNewLine,
          prop: 'ignore',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
  : {
    // Fallback sin plugins React
    name: 'cardinal/react',
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {},
  }
