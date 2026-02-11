import sonarjsPlugin from 'eslint-plugin-sonarjs'

/**
 * @module cardinal/ecosystem/web/extended
 * @summary Reglas extendidas específicas de desarrollo web.
 * @remarks Incluye headers HTTP adicionales, protección contra clickjacking,
 * configuración de recursos, y seguridad específica de frameworks.
 */

export default {
  name: 'cardinal/ecosystem/web/extended',
  plugins: {
    ...(sonarjsPlugin && { sonarjs: sonarjsPlugin }),
  },
  rules: {
    /*
     * === HEADERS HTTP ADICIONALES ===
     * Configuración de seguridad en respuestas HTTP
     */

    ...(sonarjsPlugin && {
      /*
       * X-Powered-By header expone tecnología del servidor.
       * Información que los atacantes pueden usar.
       * Razón: Reducir surface de ataque (information disclosure)
       */
      'sonarjs/x-powered-by': 'warn',

      /*
       * Content-Length header ausente o inconsistente.
       * Puede causar desincronización en HTTP/2 o proxies.
       * Razón: Integridad en transferencia de contenido
       */
      'sonarjs/content-length': 'warn',

      /*
       * Resource Integrity (SRI) deshabilitado en importaciones.
       * Script/link sin atributo integrity son vulnerables a tampering.
       * Razón: Prevenir modificación de recursos en tránsito
       */
      'sonarjs/disabled-resource-integrity': 'error',

      /*
       * Contenido mixto (HTTPS + HTTP) puede exponer datos.
       * Los navegadores bloquean contenido HTTP en HTTPS.
       * Razón: Mantener confidencialidad de datos
       */
      'sonarjs/no-mixed-content': 'error',

      /*
       * X-Frame-Options / frame-ancestors no configurado.
       * Vulnerable a clickjacking y ataques de frame injection.
       * Razón: Prevenir clickjacking y hijacking de interfaz
       */
      'sonarjs/frame-ancestors': 'error',

      /*
       * X-Content-Type-Options: nosniff no configurado.
       * Los navegadores pueden hacer MIME-sniffing y ejecutar contenido.
       * Razón: Prevenir ejecución no intencional de scripts
       */
      'sonarjs/no-mime-sniff': 'warn',

      /*
       * Referrer-Policy no configurado o permisiva.
       * Filtra información de referer en navegación.
       * Razón: Privacidad del usuario en navegación
       */
      'sonarjs/no-referrer-policy': 'warn',

      /*
       * Angular bypassing sanitization es vulnerabilidad XSS.
       * [innerHTML], bypassSecurityTrustHtml() sin validación.
       * Razón: Prevenir XSS en contexto de Angular
       */
      'sonarjs/no-angular-bypass-sanitization': 'error',
    }),
  },
}
