import typescriptConfig from './base.js'

/**
 * @module cardinal/typescript-helper
 * @summary Helper functions para personalización de configuración TypeScript.
 */

/**
 * @summary Crear configuración TypeScript con projectService
 * @returns {import('eslint').Linter.Config[]} Configuración TypeScript personalizada
 */
export const createTypeScriptConfig = () => {
  if (!typescriptConfig) {
    return []
  }

  return [
    {
      ...typescriptConfig,
      languageOptions: {
        ...typescriptConfig.languageOptions,
        parserOptions: {
          projectService: true,
          ...typescriptConfig.languageOptions.parserOptions,
        },
      },
    },
  ]
}

export { default } from './base.js'
