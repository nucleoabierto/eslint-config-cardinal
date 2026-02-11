import secureCodingPlugin from 'eslint-plugin-security'
import sonarjsPlugin from 'eslint-plugin-sonarjs'

/**
 * @module cardinal/ecosystem/web/base
 * @summary Reglas esenciales específicas de desarrollo web frontend.
 * @remarks Incluye seguridad web (XSS, CSRF, cookies), headers HTTP seguros,
 * y prácticas de navegador. Dirigido a proyectos SPA, Next.js, frameworks web.
 */

export default {
  name: 'cardinal/ecosystem/web/base',
  plugins: {
    ...(secureCodingPlugin && { security: secureCodingPlugin }),
    ...(sonarjsPlugin && { sonarjs: sonarjsPlugin }),
  },
  rules: {
    /*
     * === SEGURIDAD ESPECÍFICA DE NAVEGADOR ===
     * Reglas que previenen vulnerabilidades en código frontend
     */

    /*
     * javascript: URLs ejecutan código en contexto del documento.
     * Es un vector de ataque XSS clásico.
     * Razón: Prevenir ejecución de código malicioso en HTML
     * Movida desde: security/critical.js
     */
    'no-script-url': 'error',

    /*
     * Cookies sin flags de seguridad (HttpOnly, Secure, SameSite).
     * Vulnerables a XSS y CSRF.
     * Razón: Proteger datos sensibles en cookies
     * Movida desde: security/plugins/sonarjs-security.js
     */
    ...(sonarjsPlugin && {
      'sonarjs/insecure-cookie': 'error',

      /*
       * CORS misconfiguration expone recursos a cualquier origen.
       * Access-Control-Allow-Origin: * es demasiado permisivo.
       * Razón: Prevenir acceso no autorizado a APIs
       */
      'sonarjs/cors': 'error',

      /*
       * target="_blank" sin rel="noopener noreferrer" es vulnerable.
       * Permite acceso a window.opener.
       * Razón: Prevenir ataques de redirección maliciosa
       */
      'sonarjs/link-with-target-blank': 'error',

      /*
       * Auto-escaping deshabilitado en frameworks (Angular, Vue).
       * Permite XSS si el contenido no se escapa manualmente.
       * Razón: Prevenir inyección de HTML/JavaScript
       */
      'sonarjs/disabled-auto-escaping': 'error',

      /*
       * Content-Security-Policy (CSP) header no configurado.
       * Mitiga ataques XSS, clickjacking, inyección de contenido.
       * Razón: Defensa en profundidad contra XSS
       */
      'sonarjs/content-security-policy': 'error',

      /*
       * Strict-Transport-Security (HSTS) no configurado.
       * Fuerza conexiones HTTPS y previene downgrade attacks.
       * Razón: Prevenir ataques man-in-the-middle
       */
      'sonarjs/strict-transport-security': 'error',
    }),
  },
}
