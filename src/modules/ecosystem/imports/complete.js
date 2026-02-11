import pluginImportX from 'eslint-plugin-import-x'

/**
 * @module cardinal/ecosystem/imports-complete
 * @summary Reglas finales de import-x para 100% cobertura.
 */

export default {
  name: 'cardinal/ecosystem/imports-complete',
  plugins: {
    'import-x': pluginImportX,
  },
  rules: {
    /* No renombrar default */
    'import-x/no-rename-default': 'off',

    /* Módulos no usados */
    'import-x/no-unused-modules': 'off',

    // import-x/newline-after-import: movida a imports/base.js (convención universal)

    /* Preferir namespace import */
    'import-x/prefer-namespace-import': 'off',

    /* Unambiguous */
    'import-x/unambiguous': 'off',

    /* Import sin asignación */
    'import-x/no-unassigned-import': 'off',

    /* Dynamic import chunkname */
    'import-x/dynamic-import-chunkname': 'off',

    /* No import module exports */
    'import-x/no-import-module-exports': 'error',

    /* Imports first (eliminado - deprecated) */
  },
}
