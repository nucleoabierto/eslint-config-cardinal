import pluginImportX from 'eslint-plugin-import-x'

/**
 * @module cardinal/ecosystem/imports-extended
 * @summary Reglas extendidas de import-x para cobertura completa.
 * @remarks Este módulo complementa y en algunos casos SOBREESCRIBE reglas de
 * `ecosystem/imports/base.js`. Debe usarse junto con base.js, nunca de forma aislada.
 *
 * Cambios respecto a base.js:
 * - import-x/no-unresolved: error → off (para monorepos con resolvers personalizados)
 * - import-x/no-extraneous-dependencies: error → off (para workspaces)
 * - import-x/no-nodejs-modules: warn → off (para código isomórfico)
 */

export default {
  name: 'cardinal/ecosystem/imports-extended',
  plugins: {
    'import-x': pluginImportX,
  },
  rules: {
    /*
     * === REGLAS REDEFINIDAS DESDE imports/base.js ===
     * Las siguientes reglas están relajadas en 'extended' para permitir
     * arquitecturas como monorepos, workspaces, y resolvers personalizados
     */

    /* Prohibir namespaces */
    'import-x/no-namespace': 'off',

    /* Prohibir exports mutables */
    'import-x/no-mutable-exports': 'error',

    /* Prohibir paths restringidos */
    'import-x/no-restricted-paths': 'off',

    /* Prohibir módulos internos */
    'import-x/no-internal-modules': 'off',

    /* Agrupar exports */
    'import-x/group-exports': 'off',

    /* Prohibir paquetes relativos */
    'import-x/no-relative-packages': 'off',

    /*
     * === REGLAS CONSOLIDADAS EN base.js ===
     * Las siguientes reglas tienen el MISMO NIVEL en base.js,
     * por lo que están consolidadas allí sin duplicación:
     * - import-x/no-relative-parent-imports: off (base.js)
     * - import-x/no-absolute-path: error (base.js con opciones)
     */

    /* Consistencia en extensiones */
    'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    /* Prohibir imports vacíos */
    'import-x/no-empty-named-blocks': 'error',

    /* Exports al final */
    'import-x/exports-last': 'off',

    /*
     * CAMBIO DE NIVEL: warn → off (desde base.js cuando TypeScript está disponible)
     * Razón: Código isomórfico (server y browser) requiere imports de Node.js
     * Ver: ecosystem/imports/base.js línea 265 para contexto
     */
    'import-x/no-nodejs-modules': 'off',

    /*
     * === REGLA CONSOLIDADA EN base.js ===
     * import-x/no-webpack-loader-syntax está definida en base.js como 'error'
     * Consolidada para evitar duplicación
     */

    /* Preferir default export */
    'import-x/prefer-default-export': 'off',

    /* Máximo de dependencias */
    'import-x/max-dependencies': 'off',

    /*
     * CAMBIO DE NIVEL: error → off (desde base.js)
     * Razón: Resolvers personalizados, monorepos y alias paths requieren flexibilidad
     * Ver: ecosystem/imports/base.js línea 145 para contexto
     */
    'import-x/no-unresolved': 'off',

    /* Sin named como default */
    'import-x/no-named-as-default': 'warn',

    /* Sin named como default member */
    'import-x/no-named-as-default-member': 'warn',

    /*
     * CAMBIO DE NIVEL: error → off (desde base.js)
     * Razón: Los workspaces y monorepos tienen configuraciones distintas
     * Ver: ecosystem/imports/base.js línea 131 para contexto
     */
    'import-x/no-extraneous-dependencies': 'off',

    /* Sin commonjs */
    'import-x/no-commonjs': 'off',

    /* Sin AMD */
    'import-x/no-amd': 'error',

    /*
     * === REGLAS CONSOLIDADAS EN base.js ===
     * Estas dos reglas también están definidas en base.js con el mismo nivel:
     * - import-x/no-duplicates: error (base.js)
     * - import-x/first: error (base.js)
     */

    /* Sin default export */
    'import-x/no-default-export': 'off',

    /* Sin named export */
    'import-x/no-named-export': 'off',

    /* Sin import anónimo default */
    'import-x/no-anonymous-default-export': 'off',
  },
}
