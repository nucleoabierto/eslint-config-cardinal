import pluginN from 'eslint-plugin-n'

/**
 * @module cardinal/node
 * @summary Reglas específicas para servicios y librerías Node.js.
 * @remarks Aprovecha `eslint-plugin-n` para reforzar APIs estables y evitar patrones peligrosos.
 */

/**
 * @summary Configuración enfocada en entornos Node.js y CommonJS.
 * @type {import('eslint').Linter.Config}
 * @returns {import('eslint').Linter.Config} Configuración lista para integrarse a presets Cardinal.
 */
export default {
  name: 'cardinal/node',
  plugins: {
    n: pluginN,
  },
  rules: {
    // Forzar manejo de errores en callbacks
    'n/handle-callback-err': ['error', '^(err|error)$'],
    // Evitar pasar literales como callbacks
    'n/no-callback-literal': 'error',
    // Prevenir uso de APIs deprecadas
    'n/no-deprecated-api': 'error',
    // Evitar reasignación de exports
    'n/no-exports-assign': 'error',
    // Prohibir require con expresión
    'n/no-new-require': 'error',
    // Evitar concatenación de paths (usar path.join)
    'n/no-path-concat': 'error',
    // Tratar process.exit como excepción
    'n/process-exit-as-throw': 'error',

    /*
     * Usar el prefijo 'node:' para módulos builtin de Node.js.
     * node:fs es más explícito y moderno que solo fs.
     * Razón: Claridad y modernización para Node.js moderno (v18+)
     */
    'n/prefer-node-protocol': 'error',
  },
}
