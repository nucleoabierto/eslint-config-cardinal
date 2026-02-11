import globals from 'globals'

/**
 * @module cardinal/base-config
 * @summary Fábricas de configuraciones base utilizadas por los presets Cardinal.
 */

/**
 * @summary Crea una configuración base compatible con cualquier preset Cardinal.
 * @param {string} name Nombre del preset (por ejemplo, `basic`, `recommended`).
 * @param {string[]} [files] Patrones de archivos a los que se aplica la configuración.
 * @returns {import('eslint').Linter.Config} Configuración lista para ser incluida en ESLint
 *   Flat Config.
 */
export const createBaseConfig = (name, files = [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
]) => ({
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.es2022,
      ...globals.node,
      console: 'readonly',
      process: 'readonly',
      Buffer: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
    },
  },
  name: `cardinal/${name}`,
  files,
})

/**
 * @summary Crea una configuración base enfocada en archivos TypeScript.
 * @param {string} name Nombre del preset especializado o variante.
 * @returns {import('eslint').Linter.Config} Configuración limitada a archivos `.ts`/`.tsx`
 *   preparada para combinarse con reglas aware.
 */
export const createTypeScriptConfig = name => ({
  name: `cardinal/${name}`,
  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.mts',
    '**/*.cts',
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.es2022,
      ...globals.node,
    },
  },
})

/**
 * @summary Genera la configuración base para proyectos React y JSX.
 * @param {string} name Nombre del preset especializado o variante.
 * @returns {import('eslint').Linter.Config} Configuración con globals y ECMA features
 *   necesarios para JSX.
 */
export const createReactConfig = name => ({
  name: `cardinal/${name}`,
  files: ['**/*.jsx', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.es2022,
      ...globals.browser,
    },
  },
})
