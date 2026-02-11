import pluginN from 'eslint-plugin-n'

/**
 * @module cardinal/ecosystem/node-extended
 * @summary Reglas extendidas de Node.js para cobertura completa.
 * @remarks Este módulo complementa `ecosystem/node/base.js`. Debe usarse junto con base.js.
 * Contiene las reglas restantes de eslint-plugin-n desactivadas con justificación.
 * Las reglas off aquí son opinionadas o demasiado específicas para aplicar universalmente.
 */

export default {
  name: 'cardinal/ecosystem/node-extended',
  plugins: {
    n: pluginN,
  },
  rules: {
    /* Callback return: el patrón callback(null, data) es idiomático en Node.js legacy */
    'n/callback-return': 'off',

    /* Exports style: preferimos ESM sobre CJS, no forzamos un estilo de exports CJS */
    'n/exports-style': 'off',

    /* File extension in import: manejado por import-x/extensions en ecosystem/imports */
    'n/file-extension-in-import': 'off',

    /* Global require: el análisis de require dinámico tiene demasiados falsos positivos */
    'n/global-require': 'off',

    /* No mixed requires: CJS legacy, no aplica en proyectos ESM */
    'n/no-mixed-requires': 'off',

    /* No process env: acceder a process.env es el patrón estándar, no lo prohibimos */
    'n/no-process-env': 'off',

    /* No restricted import: configurar por proyecto según necesidades específicas */
    'n/no-restricted-import': 'off',

    /* No restricted require: configurar por proyecto según necesidades específicas */
    'n/no-restricted-require': 'off',

    /* Prefer global: depende del entorno (browser-compatible vs Node-only) */
    'n/prefer-global': 'off',
  },
}
