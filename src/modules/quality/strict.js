import sonarjsPlugin from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'

/**
 * @module cardinal/quality/strict
 * @summary Reglas estrictas de calidad para proyectos que requieren máxima limpieza.
 * @remarks Incluye detección de code smells, duplicación y optimizaciones avanzadas.
 */

export default {
  name: 'cardinal/quality/strict',
  plugins: {
    ...(sonarjsPlugin && { sonarjs: sonarjsPlugin }),
    ...(unicornPlugin && { unicorn: unicornPlugin }),
  },
  rules: {
    /*
     * === MÉTRICAS DE CALIDAD ESTRICTAS ===
     * Reglas que imponen límites más rigurosos para proyectos críticos.
     * Requieren mayor disciplina del equipo pero garantizan mejor mantenibilidad.
     */

    /*
     * Máximo de clases por archivo.
     * Un archivo debería tener una sola responsabilidad.
     * Razón: Principio de responsabilidad única (SRP)
     */
    'max-classes-per-file': ['error', 1],

    /*
     * Nota: id-length y no-magic-numbers se omiten aquí porque config/relaxed.js
     * los desactiva explícitamente y se aplica después de strict en el preset `all`.
     * Si se desean en modo strict, deben configurarse en el proyecto consumidor.
     */

    /*
     * === DETECCIÓN DE CODE SMELLS (SONARJS) ===
     * Las reglas de sonarjs están en el módulo sonarjs-extended.js
     * para evitar duplicación y permitir configuración granular.
     */

    /*
     * === REGLAS ESTRICTAS DE UNICORN ===
     * Reglas de calidad avanzada para código moderno y seguro.
     */
    ...(unicornPlugin && {
      /*
       * Preferir undefined sobre null en ciertos casos específicos.
       * null indica ausencia intencional, undefined es ausencia accidental.
       * Razón: Claridad en intención del desarrollador
       * NOTA: En unicorn-extended.js se endurecerá a 'error'
       */
      'unicorn/no-null': 'warn',

      /*
       * CONSOLIDADAS PERO NO DUPLICADAS EN STRICT:
       * - unicorn/no-abusive-eslint-disable
       *   Fuente única: quality/plugins/unicorn-essential.js línea 88
       *
       * - unicorn/no-unnecessary-await
       *   Fuente única: quality/plugins/unicorn-essential.js línea 147
       */
    }),
  },
}
