import pluginUnicorn from 'eslint-plugin-unicorn'

/**
 * @module cardinal/quality/unicorn-web
 * @summary Reglas de unicorn específicas del entorno DOM/browser.
 * @remarks Este módulo contiene reglas de unicorn que solo aplican en entornos con DOM.
 * No debe incluirse en presets Node.js puros (como config-node).
 * Se usa en proyectos web/frontend donde el DOM está disponible.
 *
 * Separado de unicorn-essential.js para evitar warnings innecesarios en proyectos Node.js.
 */

export default {
  name: 'cardinal/quality/unicorn-web',
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    /*
     * === REGLAS DOM/BROWSER ===
     * Reglas que solo son relevantes en entornos con acceso al DOM.
     * En proyectos Node.js puro, estas reglas nunca dispararían pero
     * es más semántico mantenerlas separadas.
     */

    /* document.cookie es inseguro para almacenamiento */
    'unicorn/no-document-cookie': 'error',

    /* Previene errores con removeEventListener (debe referenciar la misma función) */
    'unicorn/no-invalid-remove-event-listener': 'error',

    /* element.onclick = fn → element.addEventListener('click', fn) */
    'unicorn/prefer-add-event-listener': 'error',

    /* Usar métodos modernos de Blob (.text(), .arrayBuffer()) */
    'unicorn/prefer-blob-reading-methods': 'error',

    /* appendChild → append */
    'unicorn/prefer-dom-node-append': 'error',

    /* getAttribute('data-foo') → dataset.foo */
    'unicorn/prefer-dom-node-dataset': 'error',

    /* parent.removeChild(node) → node.remove() */
    'unicorn/prefer-dom-node-remove': 'error',

    /* innerText → textContent */
    'unicorn/prefer-dom-node-text-content': 'error',

    /* Usar EventTarget para eventos personalizados en lugar de EventEmitter */
    'unicorn/prefer-event-target': 'error',

    /* keyCode está deprecado, usar key en lugar de keyCode */
    'unicorn/prefer-keyboard-event-key': 'error',

    /* Usar APIs DOM modernas (ej: prepend, append, replaceWith) */
    'unicorn/prefer-modern-dom-apis': 'error',
  },
}
